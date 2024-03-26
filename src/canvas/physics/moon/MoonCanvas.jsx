import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";
import Moon from "./Moon";

const MoonCanvas = () => {

  return (
    <Canvas className="cursor-grab active:cursor-grabbing ml-auto text-right">
      <ambientLight />
      <Environment preset="night" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <Moon />
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default MoonCanvas;
