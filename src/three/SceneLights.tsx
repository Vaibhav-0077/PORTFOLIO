import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const SceneLights: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* Base ambient lighting */}
      <ambientLight 
        intensity={isDark ? 0.35 : 0.75} 
        color={isDark ? '#1D1929' : '#FFFFFF'} 
      />

      {/* Primary key light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={isDark ? 1.5 : 1.2}
        color={isDark ? '#8B5CF6' : '#F7F7F5'} // violet tint in dark, warm white in light
      />

      {/* Soft secondary rim light */}
      <directionalLight
        position={[-5, -5, -5]}
        intensity={isDark ? 0.6 : 0.4}
        color={isDark ? '#6366F1' : '#E2E2DF'} // indigo in dark, neutral gray in light
      />

      {/* Point light to project colorful glare */}
      <pointLight
        position={[3, -2, 2]}
        intensity={isDark ? 2.5 : 1.5}
        distance={15}
        color={isDark ? '#A78BFA' : '#F472B6'} // purple tint in dark, pink tint in light
      />
      
      {/* Front fill light */}
      <pointLight
        position={[0, 0, 4]}
        intensity={isDark ? 0.8 : 0.6}
        distance={10}
        color={isDark ? '#818CF8' : '#FCA5A5'}
      />
    </>
  );
};
