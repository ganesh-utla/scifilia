/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/3dassets/moon.glb 
Author: OverGeared (https://sketchfab.com/OverGeared)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-moon-3335f1ff099a4f6d874824ebd0df85a6
Title: The Moon
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Moon (props) {
  const { nodes, materials } = useGLTF('/3dassets/moon.glb')
  return (
    <group {...props} dispose={null} scale={0.28} >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.429}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={2376.182} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3dassets/moon.glb')
