import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";
const sceneItems = [
  {
    model: "Japanese Door.glb",
    position: [-0.2, -1, -1.2],
    scale: [2, 1.9, 2],
    brand: "ZenWood",
    price: 1200,
    labelOffset: [-3, 7, -2],
  },
  {
    model: "Counter Sink.glb",
    position: [1.3, 0, -2.8],
    scale: 1.3,
    brand: "AquaFlow",
    price: 950,
    labelOffset: [-1, 2, 1],
  },
  {
    model: "Chopping board.glb",
    position: [3.2, 2.5, -2.8],
    scale: 0.6,
    brand: "ChefCraft",
    price: 300,
    labelOffset: [0, 1, 0],
  },
  {
    model: "Fridge.glb",
    position: [-3.9, 0, -2.5],
    scale: 4.2,
    rotation: [0, Math.PI / 1, 0],
    brand: "FrostTech",
    price: 4500,
    labelOffset: [0, 3, -0.2],
  },
  {
    model: "Table.glb",
    position: [1, 0, 2],
    scale: [2, 1, 1],
    brand: "OakHaven",
    price: 1800,
    labelOffset: [1, 1, 0],
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
    brand: "TimberCraft",
    price: 600,
    labelOffset: [0, 0.5, -0.9],
  },
  {
    model: "Rabbit.glb",
    position: [-1.7, 0, 0],
    scale: 0.8,
    rotation: [0, Math.PI / 4, 0],  
    labelOffset: [-1, 0.5, 0],
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

const Item = ({ model, position, rotation, price, brand, labelOffset, ...props }) => {
  const gltf = useGLTF(`models/${model}`);

  return (
    <group position={position} rotation={rotation}>
      <primitive object={gltf.scene} {...props} />
      <Html 
      occlude position={labelOffset}
      >
        <div className="label">
         <div className="brand">{brand}</div>
         <div className="price">${price}</div>
        </div>
      </Html>
    </group>
  );
};
