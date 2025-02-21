import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
function App() {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <Canvas camera={{ position: [1, 3, 3] }}>
        <group position={[-1, 0, 0]}>
          <mesh position={[-1, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="hotpink" side={THREE.FrontSide} />
          </mesh>
          <mesh position={[2, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="hotpink" side={THREE.BackSide} />
          </mesh>
        </group>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 3]} intensity={1} />
        <directionalLight position={[0, 3, 3]} intensity={0.5} />
      </Canvas>
    </div>
  );
}

export default App;