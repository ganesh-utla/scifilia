/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/3dassets/diamond/scene.gltf 
Author: Harry_L (https://sketchfab.com/Harry_L)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/diamond-9349ff66847a4bf1b4151d6af288e42c
Title: Diamond
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Diamond (props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/3dassets/diamond/scene.gltf')
  const { actions } = useAnimations(animations, group)
  
  return (
    <group ref={group} {...props} dispose={null} scale={[0.02,0.02,0.02]} position={[0,0.9,0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="fcfdd9b083634844b2de599ff7a9d0f3fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="pCone1" position={[0,0,0]} rotation={[0, -0.106, Math.PI]}>
                  <mesh name="pCone1_blinn1_0" geometry={nodes.pCone1_blinn1_0.geometry} material={materials.blinn1} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3dassets/diamond/scene.gltf')
