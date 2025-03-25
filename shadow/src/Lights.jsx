import React from 'react'

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
            />
            <directionalLight
                position={[-5, 5, 5]}
                intensity={1}
                // castShadow
                color="yellow" 
                />
        </>
    )
}

export default Lights