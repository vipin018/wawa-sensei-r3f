import React from 'react'

const Plane = () => {
  return (
    <mesh 
    rotation-x={-Math.PI / 2}
    position={[0, -1, 0]}
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial

      color="white"
      />
    </mesh>
  )
}

export default Plane