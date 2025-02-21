import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} color="red" />
      <ContactShadows
        position={[0, -0.49, 0]}
        opacity={0.5}
        blur={2}
        resolution={512}
          />
      <group>
        <mesh position={[1, 1, 1]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh rotation-y={Math.PI / 4} position={[0, 1, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </Canvas>
  );
}

export default App;
