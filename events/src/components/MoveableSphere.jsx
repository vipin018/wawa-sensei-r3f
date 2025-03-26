import { useCursor } from "@react-three/drei";
import { useState, useEffect } from "react";

export const MoveableSphere = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [position, setPosition] = useState(props.position || [0, 0, 0]);

  useCursor(isHovered || isSelected);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isSelected) return;
      const speed = 0.2;
      switch (e.key) {
        case "ArrowUp":
          setPosition((prev) => [prev[0], prev[1] + speed, prev[2]]);
          break;
        case "ArrowDown":
          setPosition((prev) => [prev[0], prev[1] - speed, prev[2]]);
          break;
        case "ArrowLeft":
          setPosition((prev) => [prev[0] - speed, prev[1], prev[2]]);
          break;
        case "ArrowRight":
          setPosition((prev) => [prev[0] + speed, prev[1], prev[2]]);
          break;
        case " ":
          setIsSelected(!isSelected);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSelected]);

  return (
    <>
      
      <mesh
        {...props}
        position={position}
        onPointerEnter={(e) => e.stopPropagation() || setIsHovered(true)}
        onPointerLeave={(e) => e.stopPropagation() || setIsHovered(false)}
        onClick={(e) => e.stopPropagation() || setIsSelected(!isSelected)}
      >
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color={isHovered ? "pink" : isSelected ? "lime" : "white"}
          transparent={!isSelected}
          opacity={isSelected ? 1 : 0.3}
        />
      </mesh>
    </>
  );
};
