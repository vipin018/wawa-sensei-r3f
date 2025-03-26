import { useGLTF } from "@react-three/drei";

const sceneItems = [
  {
    model: "Japanese Door.glb",
    position: [-0.2, -1, -1.2],
    scale: [2, 2, 2],
  },
  {
    model: "Counter Sink.glb",
    position: [1.3, 0, -2.8],
    scale: 1.3,
  },
  {
    model: "Chopping board.glb",
    position: [3.2, 2.5, -2.8],
    scale: 0.6,
  },
  {
    model: "Fridge.glb",
    position: [-3.9, 0, -2.5],
    scale: 4.2,
    rotation: [0, Math.PI /1, 0],
  },
  {
    model: "Table.glb",
    position: [1, 0, 2],
    scale: [2, 1, 1],
  },
  {
    model: "Bottle.glb",
    position: [0.5, 1.64, 2],
    scale: 1,
    rotation: [0, Math.PI / 2, 0],
  },
  {
    model: "Udon.glb",
    position: [-0.5, 1.64, 1.5],
    scale: 0.72,
    rotation: [0, Math.PI / 2, 0],
  },
  {
    model: "momo.glb",
    position: [-0.5, 1.64, 2.5],
    scale: 0.72,
    rotation: [0, Math.PI / 2, 0],
  },
  {
    model: "Stool.glb",
    position: [-1.7, 0, 2],
    scale: 1.2,
    rotation: [0, Math.PI / 2, 0],
  },
  {
    model: "Rabbit.glb",
    position: [-1.7, 0, 0],
    scale: 0.8,
    rotation: [0, Math.PI / 4, 0],
    
  },
];

export const Experience = () => {
  return (
    <>
      {sceneItems.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
    </>
  );
};

const Item = ({ model, position, rotation, ...props }) => {
  const gltf = useGLTF(`models/${model}`);

  return (
    <group position={position} rotation={rotation}>
      <primitive object={gltf.scene} {...props} />
    </group>
  );
};
