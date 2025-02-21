import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Plane from './Plane';
import { useControls, button } from 'leva';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [color, setColor] = useState("white");
  const ref = useRef();

  useControls({
    red: button(() => setColor("red")),
    green: button(() => setColor("green")),
    blue: button(() => setColor("blue")),
    hotpink: button(() => setColor("hotpink")),
    reset: button(() => setColor("white")),
    rotate: button(() => {
      if (ref.current) ref.current.rotation.y = Math.PI / 4;
    }),
  });

  useEffect(() => {
    const colorsPosition = {
      red: [1, 0, 0],
      green: [0, 1, 0],
      blue: [0, 0, 1],
      hotpink: [1, 0, 1],
      white: [0, 0, 0],
    };

    if (ref.current) {
      const position = colorsPosition[color];
      ref.current.position.set(...position);
    }
  }, [color]);

  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <directionalLight position={[-3, 3, 3]} intensity={1} color={"white"} />

      <mesh ref={ref} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <Plane />
    </Canvas>
  );
}

export default App;
