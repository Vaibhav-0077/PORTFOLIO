import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { checkWebGLSupport } from './WebGLDetector';
import { SceneLights } from './SceneLights';
import { InteractiveMesh } from './InteractiveMesh';

// Loading Spinner inside Canvas
const Loader: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent">
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing ring */}
        <div className="w-16 h-16 rounded-full border-2 border-accent-brand/20 border-t-accent-brand animate-spin" />
        {/* Inner static point */}
        <div className="absolute w-2 h-2 rounded-full bg-accent-brand" />
      </div>
    </div>
  );
};

// Premium SVG 2D Fallback Visual
const FallbackVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute w-60 h-60 rounded-full bg-accent-brand/10 dark:bg-accent-brand/5 blur-3xl" />
      
      {/* Rotating abstract vector polygon */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-56 h-56 text-accent-brand dark:text-accent-brand/80 stroke-[0.75] stroke-current fill-none"
        animate={{
          rotate: 360,
          y: [0, -8, 0],
        }}
        transition={{
          rotate: { duration: 25, ease: 'linear', repeat: Infinity },
          y: { duration: 5, ease: 'easeInOut', repeat: Infinity },
        }}
      >
        {/* Wireframe Hexagonal / Icosahedron outline */}
        <polygon points="50,5 93,30 93,70 50,95 7,70 7,30" />
        <line x1="50" y1="5" x2="50" y2="95" />
        <line x1="7" y1="30" x2="93" y2="70" />
        <line x1="7" y1="70" x2="93" y2="30" />
        <line x1="50" y1="5" x2="93" y2="70" />
        <line x1="50" y1="5" x2="7" y2="70" />
        <line x1="50" y1="95" x2="93" y2="30" />
        <line x1="50" y1="95" x2="7" y2="30" />
        
        {/* Inner glowing orbit */}
        <motion.circle 
          cx="50" 
          cy="50" 
          r="16" 
          className="stroke-[1.5] text-accent-secondary"
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
};

export const CanvasContainer: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    // Check support on mount
    setHasWebGL(checkWebGLSupport());
  }, []);

  // Show loading indicator until WebGL checks complete
  if (hasWebGL === null) {
    return (
      <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  // Fallback to SVG animation if WebGL is unavailable (e.g. mobile/disabled)
  if (!hasWebGL) {
    return <FallbackVisual />;
  }

  return (
    <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <Suspense fallback={<Loader />}>
        <Canvas
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]} // Optimize DPR for performance: clamp at 1.5
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="w-full h-full bg-transparent"
        >
          <SceneLights />
          <InteractiveMesh />
        </Canvas>
      </Suspense>
    </div>
  );
};
export default CanvasContainer;
