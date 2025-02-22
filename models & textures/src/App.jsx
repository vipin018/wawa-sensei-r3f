import { Canvas } from '@react-three/fiber'
import React from 'react'
// import { OrbitControls } from '@react-three/drei'
import { Experience } from './components/Experience'
import { Environment } from '@react-three/drei'
const App = () => {
  return (
    < >
    <h1 style={{
      fontSize: '30rem', textAlign: 'center', position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'system-ui',}}>CUBE</h1>
    <Canvas camera={{position: [0, 0, 10], fov: 45}}>
      {/* <OrbitControls /> */}
      <Experience />
      <Environment preset="sunset" /> 
    </Canvas>
    </>
  )
}

export default App