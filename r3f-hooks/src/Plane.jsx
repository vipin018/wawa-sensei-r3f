import React from 'react'

const Plane = () => {
    return (
        
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color={"white"} />
        </mesh>
    )
}

export default Plane