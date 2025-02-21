import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";
import { Leva, } from "leva";
function App() {
  const { position, wireframe, opacity, color, transparent } = useControls({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    color: "hotpink",
    opacity: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    transparent: true,
    wireframe: false,
  });

  return (
    <>
      <Leva hidden />
      <Stats />
      <Canvas camera={{ position: [3, 3, 3] }}>
        <OrbitControls />
        <axesHelper args={[2]} />
        <gridHelper args={[20, 20, "blue", "gray"]} />
        <mesh position={[position.x, position.y, position.z]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial
            color={color}
            transparent={transparent}
            opacity={opacity}
            wireframe={wireframe}
          />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
