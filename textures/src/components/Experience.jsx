import { useTexture, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
export const Experience = () => {

  const texture = useTexture({
    color: "./textures/PavingStones130_1K_Color.jpg",
    normal: "./textures/PavingStones130_1K_NormalGL.jpg",
    roughness: "./textures/PavingStones130_1K_Roughness.jpg",
    ao: "./textures/PavingStones130_1K_AmbientOcclusion.jpg",
  })
  texture.color.repeat.set(2, 2)
  texture.color.wrapS = THREE.RepeatWrapping
  texture.color.wrapT = THREE.RepeatWrapping
  texture.color.rotation = Math.PI / 2
  texture.color.center = new THREE.Vector2(0.5, 0.5)

  const texture2 = useTexture("./textures/matcapTexture.png")

  const video = useVideoTexture("./textures/vedTex.mp4")
  return (
    <>
      <group position-x={0}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial
            map={texture.color}
            normalMap={texture.normal}
            roughnessMap={texture.roughness}
            aoMap={texture.ao}
          // color={"white"}

          />
        </mesh>
        <mesh position-x={2}>
          <boxGeometry />
          <meshMatcapMaterial
            matcap={texture2}
            color={"white"}
          />
        </mesh>

        <mesh position-x={-2}>
          <boxGeometry />
          <meshStandardMaterial
            map={video}
           
          />
        </mesh>

      </group>
    </>
  );
};
