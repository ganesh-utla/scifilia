import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";
import Spaceship from "./Spaceship";

const SpaceshipCanvas2 = () => {

  return (
    <Canvas className="cursor-grab active:cursor-grabbing ml-auto text-right" camera={{
      fov: 450,
      near: 0.5,
      far: 250,
      position: [-11, 9, 15],
    }}>
      <ambientLight />
      <Environment preset="sunset" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <Spaceship />
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default SpaceshipCanvas2;
