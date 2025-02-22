import { Gltf, useFBX, useGLTF } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Fish } from "./Fish"

export const Experience = () => {
    // const fish = useLoader(GLTFLoader, "models/Fish.gltf")
    // const fish = useGLTF("models/Fish.gltf")
    // const dino = useFBX("models/Dino.fbx")
    return (
        <>
        <ambientLight intensity={2} />
        {/* <primitive object={fish.scene} /> */}
        {/* <Gltf src="models/Fish.gltf" position={[0, -1, 0]} /> */}
        <Fish position={[0, -1, 0]} />
        {/* <primitive object={dino} scale={0.01} position={[-4, 0, 0]} /> */}
        </>
    )
}

