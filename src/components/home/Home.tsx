"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three"; // 追加
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const Text = ({ text }: { text: string }) => {
  const font = useLoader(
    FontLoader,
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
  );
  const mesh = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    if (!font) return;
    const textOptions = {
      font,
      size: 1.2, // テキストサイズの調整
      height: 0.5, // テキストの厚みを大きく
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.05,
      bevelOffset: 0,
      bevelSegments: 5,
    };
    mesh.current.geometry = new TextGeometry(text, textOptions);
  }, [text, font]);

  return (
    <mesh ref={mesh} position={[-3.5, 0.6, 2]} rotation={[0, 0.2, 0]}>
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

const Model = () => {
  const { scene } = useGLTF("/models/shiba/shiba.gltf");
  const modelRef = useRef<THREE.Group>(null); // 型を追加

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[3.5, 3.5, 3.5]}
      position={[2, 1, 0]}
    />
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Text
        text={`Zakki
Portfolio`}
      />
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
