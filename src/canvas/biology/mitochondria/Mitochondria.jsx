/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/3dassets/mitochondria.glb 
Author: Vida Systems (https://sketchfab.com/objects1)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/mitochondria-cell-organelles-397631a85faa487ba1f1cc4fe5e1b7e3
Title: Mitochondria - Cell Organelles
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Mitochondria (props) {
  const { nodes, materials } = useGLTF('/3dassets/mitochondria.glb')
  return (
    <group {...props} dispose={null} position={[0,0,0]} scale={[0.06,0.06,0.06]} rotation={[0.3,0,0]}>
      <mesh geometry={nodes.matrix_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[-66.586, -17.748, -7.416]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.granule_0001_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[19.645, -4.331, -5.001]} rotation={[-Math.PI / 2, 0, 0]} scale={6.962} />
      <mesh geometry={nodes.granule_0002_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[23.952, -4.331, -22.543]} rotation={[-0.785, 0.081, -1.703]} scale={6.962} />
      <mesh geometry={nodes.granule_0003_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[-12.501, -4.331, -12.258]} rotation={[-2.661, -0.954, 1.819]} scale={6.962} />
      <mesh geometry={nodes.granule_0004_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[-8.041, -4.331, 16.361]} rotation={[-1.02, -0.46, -1.733]} scale={6.962} />
      <mesh geometry={nodes.granule_0005_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[-37.183, -4.331, 25.531]} rotation={[1.519, -0.46, -1.733]} scale={6.962} />
      <mesh geometry={nodes.granule_0006_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[-47.684, -4.331, -15.72]} rotation={[-1.464, -1.121, 1.529]} scale={6.962} />
      <mesh geometry={nodes.granule_0000_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[-63.313, -4.331, 8.831]} rotation={[-Math.PI / 2, 0, 0]} scale={6.962} />
      <mesh geometry={nodes.dna_03_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[4.561, -3.685, 2.418]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.dna_02_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[-31.432, -4.786, 4.315]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.dna_01_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} position={[-71.907, -4.239, 9.907]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.shell_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.cristae_TT_checker_512x512_UV_GRID_0.geometry} material={materials.TT_checker_512x512_UV_GRID} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/3dassets/mitochondria.glb')