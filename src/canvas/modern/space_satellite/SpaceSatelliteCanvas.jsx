import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";
import SpaceSatellite from "./SpaceSatellite";

const SpaceSatelliteCanvas = () => {

  return (
    <Canvas className="cursor-grab active:cursor-grabbing ml-auto text-right">
      <ambientLight />
      <Environment preset="sunset" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <SpaceSatellite />
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default SpaceSatelliteCanvas;
