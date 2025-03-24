import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Stats } from '@react-three/drei'
const App = () => {
  return (
    <Canvas
    camera={{position: [3, 3, 3], fov: 75, near: 0.1, far: 100}}
     style={{height: "100vh", width: "100vw"}}>
      <OrbitControls />
      <Stats />
      <axesHelper />
      <gridHelper
        args={[10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </Canvas>
  )
}

export default App