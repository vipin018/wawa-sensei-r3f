import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { Leva, } from "leva";
import * as THREE from "three";

const Lights = () => {
  const ref = useRef();
  const helper = useHelper(ref, THREE.PointLightHelper, 0.5, "red");

  const { color, intensity, distance, decay } = useControls({
    color: "red",
    intensity: 1,
    distance: 3,
    decay: 3,
  });

  return (
    <>
      {/* <ambientLight intensity={0.2} />
      <directionalLight position={[3, 3, 3]} intensity={0.5} color={"red"} /> */}
      <pointLight
        color={color}
        position={[0, 1, 1]}
        intensity={intensity}
        distance={distance}
        decay={decay}
        ref={ref}
      />
      {/* <hemisphereLight color={"lightblue"} groundColor={"sandybrown"} intensity={0.5} /> */}
      {/* <spotLight position={[0, 1, 0]} intensity={1} angle={Math.PI / 2} penumbra={1} /> */}

    </>
  )
}

function App() {
  // const { position, wireframe, opacity, color, transparent } = useControls({
  //   position: {
  //     x: 0,
  //     y: 0,
  //     z: 0,
  //   },
  //   color: "hotpink",
  //   opacity: {
  //     value: 1,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   transparent: true,
  //   wireframe: false,
  // });

  return (
    <>
      <Leva hidden />
      <Stats />
      <Canvas camera={{ position: [0, 3, 3] }}>
        <OrbitControls />
        <Lights />
        {/* <axesHelper args={[2]} /> */}
        {/* <gridHelper args={[20, 20, "blue", "gray"]} /> */}
        <mesh rotateY={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial
            color={"white"}
          //   color={color}
          //   transparent={transparent}
          // opacity={opacity}
          // wireframe={wireframe}
          />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial
            color={"white"}
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
