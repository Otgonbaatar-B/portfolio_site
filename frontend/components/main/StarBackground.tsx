"use client";

import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from "three";

const StarBackground = () => {
  const ref = useRef<THREE.Points>(null);

  const sphere = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    return new Float32Array(random.inSphere(points, { radius: 1.2 }));
  }, []);

  const rotationX = useRef(0);
  const rotationY = useRef(0);

  useFrame((state, delta) => {
    if (!ref.current) return;

    rotationX.current -= delta / 10;
    rotationY.current -= delta / 15;

    ref.current.rotation.x = rotationX.current;
    ref.current.rotation.y = rotationY.current;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          alphaTest={0.5}
          alphaToCoverage={true}
        />
      </Points>
    </group>
  );
};

interface StarsCanvasProps {
  style?: React.CSSProperties;
}

const StarsCanvas: React.FC<StarsCanvasProps> = ({ style }) => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[-1]">
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          ...style,
        }}
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
