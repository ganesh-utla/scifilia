/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/3dassets/triceratops_dinosaur.glb 
Author: wojciechmiedziocha (https://sketchfab.com/wojciechmiedziocha)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/triceratops-dinosaur-87527079bad44917ab1b98a456b46c7e
Title: Triceratops dinosaur
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Dinosaur (props) {
  const { nodes, materials } = useGLTF('/3dassets/triceratops_dinosaur.glb')
  return (
    <group {...props} dispose={null} position={[0,-1,0]} scale={[1,1,1]} rotation={[0,-1.3,0]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['pink.002']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/3dassets/triceratops_dinosaur.glb')
