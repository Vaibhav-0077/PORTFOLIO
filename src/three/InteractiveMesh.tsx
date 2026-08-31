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
  const outerPointsRef = useRef<THREE.Points>(null);
  const innerPointsRef = useRef<THREE.Points>(null);

  const isDark = theme === 'dark';

  // 1. Outer Swirling Particle Constellation (Violet)
  const outerCount = 100;
  const [outerPositions] = useMemo(() => {
    const pos = new Float32Array(outerCount * 3);
    for (let i = 0; i < outerCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.8 + Math.random() * 0.8; // Radius 1.8 to 2.6

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, []);

  // 2. Inner Counter-Orbiting Particle Constellation (Cyan/Teal Accent)
  const innerCount = 60;
  const [innerPositions] = useMemo(() => {
    const pos = new Float32Array(innerCount * 3);
    for (let i = 0; i < innerCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.3 + Math.random() * 0.4; // Radius 1.3 to 1.7

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const rotationSpeedMultiplier = prefersReducedMotion ? 0.15 : 1;

    // Slow continuous orbit of main mesh group
    groupRef.current.rotation.y += delta * 0.09 * rotationSpeedMultiplier;
    groupRef.current.rotation.x += delta * 0.04 * rotationSpeedMultiplier;

    // Orbit particle ring 1 (clockwise)
    if (outerPointsRef.current) {
      outerPointsRef.current.rotation.y += delta * 0.06 * rotationSpeedMultiplier;
      outerPointsRef.current.rotation.z -= delta * 0.03 * rotationSpeedMultiplier;
    }

    // Orbit particle ring 2 (counter-clockwise)
    if (innerPointsRef.current) {
      innerPointsRef.current.rotation.y -= delta * 0.1 * rotationSpeedMultiplier;
      innerPointsRef.current.rotation.x += delta * 0.05 * rotationSpeedMultiplier;
    }

    // Parallax mouse tilt (normalized pointer ranges from -1 to 1)
    if (!prefersReducedMotion) {
      const targetRotationY = state.pointer.x * 0.4;
      const targetRotationX = -state.pointer.y * 0.4;

      // Smooth lerp tilt
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.06;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.06;

      // Soft vertical floating offset
      const elapsed = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(elapsed * 1.3) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Swirling Particle Ring (Violet) */}
      <points ref={outerPointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[outerPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={isDark ? '#C084FC' : '#6366F1'}
          size={prefersReducedMotion ? 0.04 : 0.06}
          sizeAttenuation
          transparent
          opacity={isDark ? 0.75 : 0.65}
          depthWrite={false}
        />
      </points>

      {/* Inner Counter-Orbiting Particle Ring (Cyan) */}
      <points ref={innerPointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[innerPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={isDark ? '#38BDF8' : '#3B82F6'}
          size={prefersReducedMotion ? 0.03 : 0.05}
          sizeAttenuation
          transparent
          opacity={isDark ? 0.85 : 0.6}
          depthWrite={false}
        />
      </points>

      {/* Outer Geometric Wireframe (Icosahedron) */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial
          color={isDark ? '#A855F7' : '#4F46E5'}
          wireframe
          transparent
          opacity={isDark ? 0.35 : 0.38}
        />
      </mesh>

      {/* Outer Joints Highlight Ring */}
      <mesh>
        <icosahedronGeometry args={[2.05, 1]} />
        <meshBasicMaterial
          color={isDark ? '#38BDF8' : '#818CF8'}
          wireframe
          transparent
          opacity={isDark ? 0.15 : 0.08}
        />
      </mesh>

      {/* Center Core: Refractive Morphing Liquid Glass Sphere */}
      <mesh ref={innerMeshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <MeshDistortMaterial
          color={isDark ? '#2E1065' : '#EEF2FF'} // deep violet crystal in dark mode, pale indigo-white in light mode
          roughness={0.03}
          metalness={isDark ? 0.35 : 0.1}
          transmission={isDark ? 0.65 : 0.85} // glass light transmission
          thickness={1.5}
          ior={1.55} // index of refraction
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          distort={prefersReducedMotion ? 0 : 0.36} // morphing liquid glass wobble
          speed={1.8} // morphing animation speed
        />
      </mesh>

      {/* Dense Relational Core (Octahedron) */}
      <mesh>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color={isDark ? '#38BDF8' : '#111214'}
          wireframe
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
};

export default InteractiveMesh;
