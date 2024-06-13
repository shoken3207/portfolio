"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Model = () => {
  const { scene } = useGLTF("/models/shiba/shiba.gltf");
  return <primitive object={scene} />;
};

const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
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
