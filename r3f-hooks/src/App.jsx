import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1}/>
      <directionalLight position={[-3, 3, 3]} intensity={1} color={"red"} />
      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"white"} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </Canvas>
  )
}

export default App;
