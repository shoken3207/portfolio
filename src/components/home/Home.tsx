"use client";

import { OrbitControls, Text3D, Center, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  return (
    <Center position={[isMobile ? 2.7 : 0, isMobile ? 2.3 : 2, 0]}>
      <group rotation={[0.2, 0, 0]}>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={isMobile ? 0.4 : 0.55}
          height={isMobile ? 0.25 : 0.3}
          curveSegments={12}
          bevelEnabled={true}
          bevelThickness={isMobile ? 0.025 : 0.03}
          bevelSize={isMobile ? 0.015 : 0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {isMobile ? "Welcome to\nMy Portfolio" : "Welcome to My Portfolio"}
          <meshPhongMaterial
            color="#35598c"
            emissiveIntensity={0.5}
            shininess={50}
            specular={new THREE.Color("#ffffff")}
          />
        </Text3D>
      </group>
    </Center>
  );
};

const LoadingScreen = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-blue-600 font-medium">Loading 3D Model...</p>
      </div>
    </div>
  );
};

const BirdModel = ({ onLoad }: { onLoad: () => void }) => {
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
      onLoad();
    }
  }, [scene, animations, onLoad]);

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

const Scene = ({
  isMobile,
  onLoad,
}: {
  isMobile: boolean;
  onLoad: () => void;
}) => {
  return (
    <>
      {!isMobile && (
        <OrbitControls enableZoom={false} enableRotate={!isMobile} />
      )}
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
        <BirdModel onLoad={onLoad} />
        <FloatingParticles />
        <WelcomeText />
      </Suspense>
    </>
  );
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url("/images/rough-horn-2146181_1280.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
      }}
      className="relative h-[100svh]"
    >
      {isLoading && <LoadingScreen />}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50"></div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Scene isMobile={isMobile} onLoad={() => setIsLoading(false)} />
      </Canvas>
      <div className="absolute bottom-10 left-10 text-white">
        <h2 className="text-3xl font-bold mb-2 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
          Shoken Ezaki
        </h2>
        <p className="text-xl opacity-80 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_40%)]">
          Web Developer
        </p>
      </div>
    </div>
  );
};

export default Home;
