import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";
import Diamond from "./Diamond";

const DiamondCanvas = () => {

  return (
    <Canvas className="cursor-grab active:cursor-grabbing ml-auto text-right">
      <ambientLight />
      <Environment preset="sunset" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <Diamond />
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default DiamondCanvas;
