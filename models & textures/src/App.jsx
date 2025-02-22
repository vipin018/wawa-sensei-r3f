import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Experience } from './components/Experience'
const App = () => {
  return (

    <Canvas>
      <OrbitControls />
      {/* <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <directionalLight position={[-3, 3, 3]} intensity={1} /> */}
      <Experience />
    </Canvas>

  )
}

export default App