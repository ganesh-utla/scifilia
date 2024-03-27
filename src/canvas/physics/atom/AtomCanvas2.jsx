import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";
import Atom from "./Atom";

const AtomCanvas2 = () => {

  return (
    <Canvas className="cursor-grab active:cursor-grabbing ml-auto text-right" camera={{
      fov: 385,
      near: 0.5,
      far: 250,
      position: [-11, 9, 15],
    }}>
      <ambientLight />
      <Environment preset="sunset" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <Atom />
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default AtomCanvas2;
