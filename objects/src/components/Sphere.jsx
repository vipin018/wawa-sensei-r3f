import React from 'react'

const Sphere = () => {
  return (
    <mesh position={[0, 2, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color='hotpink' />
    </mesh>
  )
}

export default Sphere