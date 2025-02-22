import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Experience } from './components/Experience'
import { Environment } from '@react-three/drei'
const App = () => {
  return (
    
    <Canvas camera={{position: [0, 0, 10], fov: 45}}>
      <OrbitControls />
      <Experience />
      <Environment preset="sunset" /> 
    </Canvas>
    
  )
}

export default App