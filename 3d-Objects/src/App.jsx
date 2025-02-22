import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <Canvas camera={{ position: [3, 3, 2] }}>
        {/* <OrbitControls /> */}
        {/* <mesh position={[-2, 0, 0]}  rotation={[-0.5, 0, 0]}  >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="hotpink" side={THREE.FrontSide} />
          </mesh> */}
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="hotpink" side={THREE.BackSide} />
          <axesHelper  />
          <gridHelper args={[10, 20, "red", "gray"]} />

        </mesh>

        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 3]} intensity={1} />
        <directionalLight position={[0, 3, 3]} intensity={0.5} />
      </Canvas>
    </div>
  );
}

export default App;