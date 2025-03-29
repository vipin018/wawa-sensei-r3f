
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

const MyShaderMaterial = shaderMaterial(
  {},
  vertexShader,
  fragmentShader
);

extend({ MyShaderMaterial });

export const ShaderPlane = ({ ...props }) => {
  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
        <myShaderMaterial/>
    </mesh>
  );
};
