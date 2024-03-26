import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";
import Rocket from "./Rocket";

const RocketCanvas = () => {

  return (
    <Canvas className="cursor-grab active:cursor-grabbing ml-auto text-right">
      <ambientLight />
      <Environment preset="sunset" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <Rocket />
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default RocketCanvas;
