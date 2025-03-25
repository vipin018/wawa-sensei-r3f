import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { useControls, button } from 'leva';

function App() {
  const [color, setColor] = useState('lightblue');

  useControls(() => ({
    changeColortoRed: button(() => setColor('red')),
    changeColortoYellow: button(() => setColor('yellow')),
    changeColortoGreen: button(() => setColor('lime')),
  }));

  const [position, setPosition] = useState([0, 0, 0]);

  useControls(() => ({
    changePosition: button(() => setPosition([Math.random() * 10, Math.random() * 10, Math.random() * 10])),
  }));

  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [0, 2, 6] }}
      shadows
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[3, 3, 3]}
        intensity={1}
        castShadow
        
      />

      {/* Controls */}
      <OrbitControls />

      {/* Contact Shadows */}
      <ContactShadows
        position={[0, -2, 0]}
        rotation-x={-Math.PI / 2}
        // opacity={0.9}
        blur={0.5}
        scale={10}

      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Cube with Shadows */}
      <mesh castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Ground with Shadows */}
      <mesh
        position={[0, -2, 0]}
        rotation-x={-Math.PI / 2}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Canvas>
  );
}

export default App;
