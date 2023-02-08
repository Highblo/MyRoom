import { Sky } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei/core";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";

export const ThreeCanvas: FC = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Suspense fallback={<div>Loding...</div>}>
        <Sky />
        <mesh>
          <planeGeometry args={[10, 10]} />
          <meshNormalMaterial />
        </mesh>
      </Suspense>
    </Canvas>
  );
};
