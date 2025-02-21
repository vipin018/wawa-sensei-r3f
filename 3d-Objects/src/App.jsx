import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-900">
      <Canvas>
        <mesh>
          {/* <OrbitControls /> */}
        <boxGeometry args={[2, 2, 2]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;