import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { useControls, button } from 'leva';

function Cube({ color, position }) {
  const cubeRef = useRef();

  // Animate the cube using useFrame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.05;
      cubeRef.current.rotation.y += 0.05;
    }
  });

  return (
    <mesh ref={cubeRef} position={position} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function App() {
  const [color, setColor] = useState('lightblue');
  const [position, setPosition] = useState([0, 0, 0]);

  // Leva Controls
  useControls(() => ({
    changeColortoRed: button(() => setColor('red')),
    changeColortoYellow: button(() => setColor('yellow')),
    changeColortoGreen: button(() => setColor('lime')),
    changePosition: button(() =>
      setPosition([
        Math.random() * 4 - 2,
        Math.random() * 4 - 2,
        Math.random() * 4 - 2,
      ])
    ),
  }));

  useEffect(() => {
    const colorPosition = {
      white: [0, 0, 0],
      red: [1, 1, 0],
      yellow: [1, 1, 0],
      lime: [0, 1, 0],
    };
    setPosition(colorPosition[color] || [0, 0, 0]);
  }, [color]);

  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [0, 2, 6] }}
      shadows
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1} castShadow />

      {/* Controls */}
      <OrbitControls />

      {/* Contact Shadows */}
      <ContactShadows
        position={[0, -2, 0]}
        rotation-x={-Math.PI / 2}
        blur={0.5}
        scale={10}
      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Cube Component */}
      <Cube color={color} position={position} />

      {/* Ground with Shadows */}
      <mesh position={[0, -2, 0]} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Canvas>
  );
}

export default App;
