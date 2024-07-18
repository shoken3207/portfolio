"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Group } from "three"; // 追加

const Model = () => {
  const { scene } = useGLTF("/models/shiba/shiba.gltf");
  const modelRef = useRef<Group>(null); // 型を追加

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // ここで回転速度を調整
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[2.5, 2.5, 2.5]}
      position={[0, 1, 0]}
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
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Home;
