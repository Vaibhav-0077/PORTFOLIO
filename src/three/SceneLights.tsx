import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const SceneLights: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* Base ambient lighting */}
      <ambientLight 
        intensity={isDark ? 0.45 : 0.75} 
        color={isDark ? '#1E1B4B' : '#FFFFFF'} 
      />

      {/* Primary key light (Violet) */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={isDark ? 2.2 : 1.2}
        color={isDark ? '#A855F7' : '#F7F7F5'} // rich violet tint in dark, warm white in light
      />

      {/* Secondary rim light (Cyan/Teal contrast) */}
      <directionalLight
        position={[-5, -5, -5]}
        intensity={isDark ? 1.4 : 0.4}
        color={isDark ? '#06B6D4' : '#E2E2DF'} // vibrant cyan in dark, neutral gray in light
      />

      {/* Point light 1 (Top Purple Glare) */}
      <pointLight
        position={[3, -2, 2]}
        intensity={isDark ? 3.5 : 1.5}
        distance={15}
        color={isDark ? '#C084FC' : '#F472B6'}
      />
      
      {/* Point light 2 (Bottom Cyan Accent) */}
      <pointLight
        position={[-3, 2, -2]}
        intensity={isDark ? 2.5 : 0.8}
        distance={12}
        color={isDark ? '#38BDF8' : '#FCA5A5'}
      />

      {/* Front fill light */}
      <pointLight
        position={[0, 0, 4]}
        intensity={isDark ? 1.0 : 0.6}
        distance={10}
        color={isDark ? '#818CF8' : '#FFFFFF'}
      />
    </>
  );
};
