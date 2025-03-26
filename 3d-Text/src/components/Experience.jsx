import { ContactShadows, useGLTF, Text, Billboard, Text3D } from "@react-three/drei";
import { Character } from "./Character";
import * as THREE from "three";

export const Experience = () => {
  const woodenSign = useGLTF("models/Wooden Sign.glb");

  // Material for the wooden sign
  const signMaterial = new THREE.MeshStandardMaterial({
    color: "#4F200F",
    roughness: 0.9,
    metalness: 0.1,
  });

  return (
    <>
      {/* 3D Text in the Scene */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json" // Ensure you have a font file
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[0, 2, -1]}
        castShadow
      >
        CODER
        <meshStandardMaterial color={"#a1bb6f"} metalness={0.5} roughness={0.3} />
      </Text3D>

      {/* Wooden Signboard */}
      <group position-x={-1.5} rotation-y={THREE.MathUtils.degToRad(15)}>
        <primitive object={woodenSign.scene} material={signMaterial} />
        <Text
          fontSize={0.3}
          anchorX="center"
          anchorY="middle"
          position={[0, 1.2, 0.01]}
          maxWidth={1}
          textAlign="center"
          depth={0.5}
          castShadow
        >
          Coder's Town
          <meshStandardMaterial roughness={0.2} metalness={0.9} color="#4F200F" />
        </Text>
      </group>

      {/* Billboard with Text */}
      <group position={[1.5, 0, 0]} rotation-y={Math.PI / 18}>
        <Billboard position={[0, 3, 0]}>
          <Text fontSize={0.2} position={[0, 0.2, 0]} anchorX="center" anchorY="bottom">
            Link
            <meshStandardMaterial color="black" />
          </Text>
          <Text fontSize={0.2} anchorX="center" anchorY="middle">
            Zelda Personal Hero
            <meshStandardMaterial color="gray" />
          </Text>
        </Billboard>
      </group>

      {/* Character Model */}
      <Character />

      {/* Contact Shadows */}
      <ContactShadows opacity={0.42} scale={42} far={42} />
    </>
  );
};
