"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const Model = () => {
  const { scene } = useGLTF("/models/shiba/shiba.gltf");
  const modelRef = useRef<THREE.Group>(null); // 型を追加
  const width = window.innerWidth;
  let scale;
  let position;
  if (width > 300) {
    scale = [1.5, 1.5, 1.5];
    position = [0.2, -0.8, 0];
  }
  if (width > 600) {
    scale = [2.5, 2.5, 2.5];
    position = [0.4, -0.2, 0];
  }
  if (width > 1000) {
    scale = [3, 3, 3];
    position = [1.6, 0.2, 0];
  }

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      position={position}
    />
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </>
  );
};

const Home = () => {
  return (
    <div>
      <Canvas style={{ width: "100%", height: "100vh" }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Home;
