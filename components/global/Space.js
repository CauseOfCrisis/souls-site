import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

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
          <Star pos={ranPos()} key={i} />
        ))}
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <Stars num={300} dist={150} />
    </Canvas>
  );
};

export default Scene;
