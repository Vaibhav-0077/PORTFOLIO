import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const InteractiveMesh: React.FC = () => {
  const { theme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const groupRef = useRef<THREE.Group>(null);
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const isDark = theme === 'dark';

  // Generate a swirling constellation of floating particle coordinates
  const particleCount = 120;
  const [particlePositions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Spherical random distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.6 + Math.random() * 0.9; // orbit just outside the outer wireframe (1.6 to 2.5)

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const rotationSpeedMultiplier = prefersReducedMotion ? 0.15 : 1;

    // Slow continuous orbit of the main group
    groupRef.current.rotation.y += delta * 0.08 * rotationSpeedMultiplier;
    groupRef.current.rotation.x += delta * 0.04 * rotationSpeedMultiplier;

    // Swirl particles in the opposite direction
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05 * rotationSpeedMultiplier;
      pointsRef.current.rotation.z += delta * 0.02 * rotationSpeedMultiplier;
    }

    // Parallax mouse tilt (normalized pointer ranges from -1 to 1)
    if (!prefersReducedMotion) {
      const targetRotationY = state.pointer.x * 0.35;
      const targetRotationX = -state.pointer.y * 0.35;

      // Smooth lerp tilt
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.06;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.06;

      // Soft vertical floating offset
      const elapsed = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(elapsed * 1.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Orbiting Point Cloud Constellation (Data Nodes) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={isDark ? '#A78BFA' : '#6366F1'}
          size={prefersReducedMotion ? 0.04 : 0.06}
          sizeAttenuation
          transparent
          opacity={isDark ? 0.65 : 0.75}
          depthWrite={false}
        />
      </points>

      {/* 2. Outer Geometric Wireframe (Icosahedron) */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial
          color={isDark ? '#8B5CF6' : '#4F46E5'}
          wireframe
          transparent
          opacity={isDark ? 0.28 : 0.38}
        />
      </mesh>

      {/* 3. Outer Joints Highlight Indicator */}
      <mesh>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial
          color={isDark ? '#C084FC' : '#818CF8'}
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* 4. Center Core: Liquid-Morphing Refractive Glass Sphere */}
      <mesh ref={innerMeshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <MeshDistortMaterial
          color={isDark ? '#31108F' : '#EEF2FF'} // rich indigo-violet in dark, pale blue-white in light
          roughness={0.04}
          metalness={isDark ? 0.45 : 0.1}
          transmission={isDark ? 0.55 : 0.85} // glass light transmission
          thickness={1.4}
          ior={1.48} // index of refraction
          clearcoat={1.0}
          clearcoatRoughness={0.04}
          distort={prefersReducedMotion ? 0 : 0.32} // morphing liquid glass wobble
          speed={1.6} // morphing animation speed
        />
      </mesh>

      {/* 5. Dense Inner Core Core (Relational SQL/NoSQL Center) */}
      <mesh>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color={isDark ? '#FFFFFF' : '#111214'}
          wireframe
          roughness={0.4}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
};

export default InteractiveMesh;
