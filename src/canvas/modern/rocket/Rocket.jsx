/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/3dassets/rocket/scene.gltf 
Author: Jainesh Pathak (https://sketchfab.com/spectraut2)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gslv-mk3-0426922358b4444f9887bcd551d3a5cb
Title: GSLV Mk3
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Rocket (props) {
  const { nodes, materials } = useGLTF('/3dassets/rocket/scene.gltf')
  return (
    <group {...props} dispose={null} scale={0.003}>
      <mesh geometry={nodes.NurbsPath_MainRocket_Mat_0.geometry} material={materials.MainRocket_Mat} position={[0, 859.567, 2.575]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cylinder001_Others_Mat_0.geometry} material={materials.Others_Mat} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cylinder003_Booster_Mat_0.geometry} material={materials.Booster_Mat} position={[-227.862, -1149.12, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={4.068} />
    </group>
  )
}

useGLTF.preload('/3dassets/rocket/scene.gltf')
