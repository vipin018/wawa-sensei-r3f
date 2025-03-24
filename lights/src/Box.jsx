import React from 'react'

const Box = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
      color="white"
      />
    </mesh>
  )
}

export default Box