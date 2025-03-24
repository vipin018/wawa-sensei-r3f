import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './Box'
const App = () => {
  return (
   <Canvas style={{height: '100vh', width: '100vw'}}>
    <OrbitControls />
    <Box />
   </Canvas>
  )
}

export default App