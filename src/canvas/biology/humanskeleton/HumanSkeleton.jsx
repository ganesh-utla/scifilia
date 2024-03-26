/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/3dassets/human_skeleton/scene.gltf 
Author: Ruslan Gadzhiev (https://sketchfab.com/ruslangadzhiev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/male-human-skeleton-zbrush-anatomy-study-665890c542be433fb18ef235cf987cef
Title: Male Human Skeleton - ZBrush - Anatomy Study
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HumanSkeleton (props) {
  const { nodes, materials } = useGLTF('/3dassets/human_skeleton/scene.gltf')
  return (
    <group {...props} dispose={null} position={[0,0,0]} rotation={[0,0,0]} scale={[0.44,0.44,0.44]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/3dassets/human_skeleton/scene.gltf')