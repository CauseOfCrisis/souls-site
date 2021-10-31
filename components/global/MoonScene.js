import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {useGLTF} from '@react-three/drei';
import * as THREE from "three";

const Moon = () => {
  const texLoader = new THREE.TextureLoader();
  const moonTex = texLoader.load("moon.jpg");
  const normalTex = texLoader.load("normal.jpg");

  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.1 * delta;

  });

  return (
    <mesh ref={mesh} position={[0,1.2,0]}>
      <sphereGeometry />
      <meshStandardMaterial map={moonTex} normalMap={normalTex} />
    </mesh>
  );
};

const Star = ({ pos }) => {
  return (
    <mesh position={pos}>
      <sphereGeometry args={[0.2]} />
      <meshBasicMaterial />
    </mesh>
  );
};

const Stars = ({ num, dist }) => {
  const group = useRef();

  useFrame((state, delta) => {
    group.current.rotation.y += -0.02 * delta;
  });

  const ranPos = () =>
    Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(dist));

  return (
    <group ref={group}>
      {Array(num)
        .fill()
        .map((__, i) => (
          <Star pos={ranPos()} key={i}/>
        ))}
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={.06}/>
      <pointLight position={[-1, .7, 1.3]} intensity={1}/>
      <Moon />
      <Stars num={300} dist={150} />
    </Canvas>
  );
};

export default Scene;