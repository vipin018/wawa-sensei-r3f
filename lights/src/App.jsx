import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './Box'
import Plane from './Plane'
import Lights from './Lights'
import { useControls } from 'leva'
const App = () => {

  return (
   <Canvas 
   camera={{position: [3, 3, 5]}}
   style={{height: '100vh', width: '100vw'}}>
    <Lights />
    <OrbitControls />
    <Box />
    <Plane />
   </Canvas>
  )
}

export default App