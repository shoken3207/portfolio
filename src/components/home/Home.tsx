"use client";

import { OrbitControls, Text3D, Center, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import Loader from "./Loader";

const FloatingParticles = () => {
  const particlesCount = 100;
  const [positions] = useState(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="0xfff4b2"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const WelcomeText = () => {
  return (
    <Center position={[0, 2, 0]}>
      <group rotation={[0.2, 0, 0]}>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.55}
          height={0.3}
          curveSegments={12}
          bevelEnabled={true}
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {`Welcome to My Portfolio`}
          <meshPhongMaterial
            color="#35598c"
            // emissive="#4f46e5"
            emissiveIntensity={0.5}
            shininess={50}
            specular={new THREE.Color("#ffffff")}
          />
        </Text3D>
      </group>
    </Center>
  );
};

const BirdModel = () => {
  const { scene, animations } = useGLTF("/models/bird/scene.gltf");
  const modelRef = useRef<THREE.Group>(null);

  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (scene) {
      mixer.current = new THREE.AnimationMixer(scene);

      animations.forEach((clip) => {
        const action = mixer.current?.clipAction(clip);
        action?.play();
      });
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <>
      <ambientLight />
      <pointLight />
      <Suspense fallback={null}>
        <primitive
          object={scene}
          ref={modelRef}
          scale={1.5}
          position={[0, -1.1, 0]}
          rotation={[0, Math.PI / 0.54, 0]}
        />
      </Suspense>
    </>
  );
};

const Scene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1048);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      <OrbitControls enableZoom={false} enableRotate={!isMobile} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} castShadow />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        castShadow
      />
      <Suspense fallback={null}>
        <BirdModel />
        <FloatingParticles />
        <WelcomeText />
      </Suspense>
    </>
  );
};

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/rough-horn-2146181_640.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="relative h-screen"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50"></div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Scene />
      </Canvas>
      <div className="absolute bottom-10 left-10 text-white">
        <h2 className="text-3xl font-bold mb-2 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
          Shoken Ezaki
        </h2>
        <p className="text-xl opacity-80 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_40%)]">
          Web Developer
        </p>
      </div>
      {/* <div
        className="absolute bottom-0 left-0 right-0 h-32 z-30"
        style={{
          background: `linear-gradient(to bottom, transparent, #f5fbfd)`,
        }}
      /> */}
    </div>
  );
};

export default Home;
