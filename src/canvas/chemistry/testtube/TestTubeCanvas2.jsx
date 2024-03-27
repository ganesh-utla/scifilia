import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";
import TestTube from "./TestTube";

const TestTubeCanvas2 = () => {

  return (
    <Canvas className="cursor-grab active:cursor-grabbing ml-auto text-right" camera={{
      fov: 425,
      near: 0.5,
      far: 250,
      position: [-15, 15, 15],
    }}>
      <ambientLight />
      <Environment preset="sunset" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <TestTube />
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default TestTubeCanvas2;
