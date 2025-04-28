import React from 'react'
import { useGLTF } from '@react-three/drei'

export function TalkModel(props) {
  const { nodes, materials } = useGLTF('/TalkModel.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Details_AllTogetherBake_0.geometry} material={materials.AllTogetherBake} />
          <mesh geometry={nodes.Details_AllTogetherBake_0_1.geometry} material={materials.AllTogetherBake} />
          <mesh geometry={nodes.Details_AllTogetherBake_0_2.geometry} material={materials.AllTogetherBake} />
          <mesh geometry={nodes.Details_AllTogetherBake_0_3.geometry} material={materials.AllTogetherBake} />
          <mesh geometry={nodes.Details_AllTogetherBake_0_4.geometry} material={materials.AllTogetherBake} />
        </group>
        <mesh geometry={nodes.Skybox_AllTogetherBake_0.geometry} material={materials.AllTogetherBake} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.BaseGround_AllTogetherBake_0.geometry} material={materials.AllTogetherBake} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Hill_AllTogetherBake_0.geometry} material={materials.AllTogetherBake} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/TalkModel.glb')