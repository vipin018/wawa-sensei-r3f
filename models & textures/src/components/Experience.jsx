import { Fish } from "./Fish"
import { useTexture, useVideoTexture } from "@react-three/drei"

export const Experience = () => {
    // const woodenTexture = useTexture("/textures/wooden.jpg");
    // const roughTexture = useTexture("/textures/roughness.jpg");
    // const metalTexture = useTexture("/textures/metal.jpg");
    // const plasticTexture = useTexture("/textures/plastic.webp");
    const videoTexture = useVideoTexture("/textures/stars.mp4");
    // const paperTexture = useVideoTexture("/textures/newspaper.mp4");
    

    return (
        <>
            {/* <ambientLight intensity={3} /> */}
            {/* <Fish position={[0, -2, 0]} scale={1.5} /> */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial  map={videoTexture} />
            </mesh>
            {/* <mesh position={[0, 0, 0]} >
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial transparent opacity={1} map={paperTexture} />
            </mesh>
            <mesh position={[-3, 0, 0]}>
                <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                <meshStandardMaterial transparent opacity={0} map={metalTexture} />
            </mesh>
            <mesh position={[0, -3, 0]}>
                <cylinderGeometry args={[1, 1, 2, 32]} />
                <meshStandardMaterial transparent opacity={0} map={roughTexture} />
                </mesh> */}
      
        </>
    )
}

