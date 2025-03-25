import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, SoftShadows } from '@react-three/drei'
import Geometry from './Geometry'
import Lights from './Lights'
import { BakeShadows } from '@react-three/drei'
import { ContactShadows } from '@react-three/drei'
const App = () => {
  return (
    <Canvas
      // shadows
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [3, 3, 5] }}
    >
      {/* <SoftShadows/> */}
      {/* <BakeShadows/> */}
      <ContactShadows
        position-y={-0.9}
        opacity={0.5}
        scale={10}
        blur={2.5}
        frames={1}
      />
      <OrbitControls />
      <Geometry />
      <Lights />
    </Canvas >
  )
}
export default App