import { useRef, useState } from "react";
import { useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Experience = () => {
    const videoTexture = useVideoTexture("/textures/stars.mp4");
    
    // Reference for the cube
    const cubeRef = useRef();

    // UseFrame for smooth forward & backward rotation
    useFrame((state, delta) => {
        if (cubeRef.current) {
            cubeRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 1.5; // Oscillates back and forth
            cubeRef.current.rotation.y += delta * 0.9; // Rotates in Y axis
        }
    });

    return (
        <>
            <mesh ref={cubeRef} position={[0, 0, 0]}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial map={videoTexture} />
            </mesh>
        </>
    );
};
