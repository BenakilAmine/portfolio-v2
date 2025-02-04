"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import * as THREE from 'three';

const StarLayer = ({ count, radius, minSize, opacity, speedMultiplier }: {
  count: number;
  radius: number;
  minSize: number;
  maxSize: number;
  opacity: number;
  speedMultiplier: number;
}) => {
  const ref = useRef<THREE.Points>(null);
  const { scrollY } = useScrollPosition();
  const lastScrollY = useRef(scrollY);
  const scrollSpeed = useRef(0);
  const baseSpeed = useRef(0.02); // Vitesse de base réduite (était 0.2)

  const [sphere] = useMemo(() => {
    const points = random.inSphere(new Float32Array(count), { radius });
    return [points];
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    const scrollDelta = scrollY - lastScrollY.current;
    const direction = scrollDelta > 0 ? 1 : scrollDelta < 0 ? -1 : 0;
    // Vitesse de scroll réduite
    const scrollSpeedTarget = direction * Math.min(Math.abs(scrollDelta * 0.05), 0.1) * speedMultiplier;
    
    // Retour plus lent à la vitesse de base
    baseSpeed.current += (0.005 - baseSpeed.current) * 0.005;
    scrollSpeed.current += (scrollSpeedTarget - scrollSpeed.current) * 0.1;
    
    const totalSpeed = baseSpeed.current + scrollSpeed.current;

    const positions = ref.current!.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      // Vitesse de déplacement réduite
      positions[i + 2] += totalSpeed * speedMultiplier * delta * 10;
      
      const z = positions[i + 2];
      // Distorsion réduite
      const distortion = Math.abs(totalSpeed) * (1 - Math.abs(z) / radius) * 0.0005;
      positions[i] += positions[i] * distortion * 0.05;
      positions[i + 1] += positions[i + 1] * distortion * 0.05;
      
      if (Math.abs(z) > radius) {
        positions[i + 2] = z > 0 ? -radius : radius;
        positions[i] = (Math.random() - 0.5) * radius * 2;
        positions[i + 1] = (Math.random() - 0.5) * radius * 2;
      }
    }

    ref.current!.geometry.attributes.position.needsUpdate = true;
    lastScrollY.current = scrollY;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        sizeAttenuation={true}
        depthWrite={false}
        opacity={opacity}
        size={minSize}
      />
    </Points>
  );
};

const StarField = () => {
  return (
    <>
      {/* Étoiles très proches */}
      <StarLayer 
        count={1000}
        radius={1}
        minSize={0.002}
        maxSize={0.004}
        opacity={0.9}
        speedMultiplier={1.5} // Réduit de 3 à 1.5
      />
      
      {/* Étoiles moyennes */}
      <StarLayer 
        count={3000}
        radius={2}
        minSize={0.001}
        maxSize={0.002}
        opacity={0.8}
        speedMultiplier={1} // Réduit de 2 à 1
      />
      
      {/* Étoiles lointaines */}
      <StarLayer 
        count={5000}
        radius={3.5}
        minSize={0.0005}
        maxSize={0.001}
        opacity={0.6}
        speedMultiplier={0.5} // Réduit de 1 à 0.5
      />
    </>
  );
};

export const OptimizedStars = () => {
  return (
    <div className="w-full h-full absolute pointer-events-none">
      <Canvas 
        camera={{ 
          position: [0, 0, 1],
          fov: 90,
          near: 0.1,
          far: 1000
        }}
      >
        <StarField />
      </Canvas>
    </div>
  );
};
