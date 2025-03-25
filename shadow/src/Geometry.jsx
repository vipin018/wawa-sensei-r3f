import React from 'react'
import { Leva } from 'leva'
import { useControls } from 'leva'
const Geometry = () => {

    const { cubeInAir } = useControls({
        cubeInAir: false,
    })
    return (
        <>
            <group
                position={[-1, 0, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    position-y={cubeInAir ? 2 : 0}
                >
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial
                        color="lime"
                    />
                </mesh>

                <mesh
                    position={[2, 2, 2]}
                    castShadow
                >
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        color="hotpink"
                    />
                </mesh>
            </group>

            <mesh
                receiveShadow
                position={[0, -1, 0]}
                rotation-x={-Math.PI / 2}
            >
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial
                    color="white"
                />
            </mesh>
        </>
    )
}

export default Geometry