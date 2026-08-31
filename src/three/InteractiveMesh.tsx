import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const InteractiveMesh: React.FC = () => {
  const { theme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const groupRef = useRef<THREE.Group>(null);
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);

  const isDark = theme === 'dark';

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Continuous rotation
    const rotationSpeedMultiplier = prefersReducedMotion ? 0.15 : 1;
    groupRef.current.rotation.y += delta * 0.12 * rotationSpeedMultiplier;
    groupRef.current.rotation.x += delta * 0.06 * rotationSpeedMultiplier;

    // Parallax mouse tilt (normalized pointer ranges from -1 to 1)
    if (!prefersReducedMotion) {
      const targetRotationY = state.pointer.x * 0.4;
      const targetRotationX = -state.pointer.y * 0.4;
      
      // Interpolate towards target rotation (lerping)
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.08;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.08;

      // Subtle float up and down
      const elapsed = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(elapsed * 1.5) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Wireframe Structure (Icosahedron) */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial
          color={isDark ? '#8B5CF6' : '#6366F1'}
          wireframe
          transparent
          opacity={isDark ? 0.35 : 0.45}
        />
      </mesh>

      {/* Outer Mesh Points Indicator Joints */}
      <mesh>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial
          color={isDark ? '#A78BFA' : '#4F46E5'}
          wireframe
          transparent
          opacity={isDark ? 0.12 : 0.18}
        />
      </mesh>

      {/* Inner Core Glass-Refraction Sphere */}
      <mesh ref={innerMeshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhysicalMaterial
          color={isDark ? '#1E1B4B' : '#E0E7FF'} // deep indigo in dark, pale blue in light
          roughness={isDark ? 0.15 : 0.1}
          metalness={isDark ? 0.6 : 0.2}
          transmission={isDark ? 0.4 : 0.75} // glass transparency
          thickness={1.8}
          ior={1.45} // index of refraction
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Secondary Inner Wireframe Core */}
      <mesh>
        <dodecahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color={isDark ? '#F5F5F5' : '#111214'}
          wireframe
          roughness={0.5}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
};
export default InteractiveMesh;
