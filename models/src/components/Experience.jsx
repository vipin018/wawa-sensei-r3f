import { useFBX, useGLTF } from "@react-three/drei";
import { Chicken } from "./Chicken";
export const Experience = () => {

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Chicken
        scale={2}
        position={[0,-2, 0]}
      />
        
    </>
  );
};

