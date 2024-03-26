import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";
import DNA from "./DNA";

const DNACanvas = () => {

  return (
    <Canvas className="cursor-grab active:cursor-grabbing ml-auto text-right">
      <ambientLight />
      <Environment preset="sunset" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <DNA />
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default DNACanvas;
