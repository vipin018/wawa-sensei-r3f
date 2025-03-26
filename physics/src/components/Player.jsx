import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useRef } from "react";
import { Controls } from "../App";
import { Vector3 } from "three";

const MOVEMENT_SPEED = 2

export const Player = () => {
  const rb = useRef();
  const [, get] = useKeyboardControls();
  const vel = new Vector3();
  useFrame(() => {
    if (!rb.current) return;
    
    vel.set(0, 0, 0);
  
    if (get()[Controls.forward]) {
      vel.z -= MOVEMENT_SPEED;
    }
    if (get()[Controls.backward]) {
      vel.z += MOVEMENT_SPEED;
    }
    if (get()[Controls.left]) {
      vel.x -= MOVEMENT_SPEED;
    }
    if (get()[Controls.right]) {
      vel.x += MOVEMENT_SPEED;
    }
    if (get()[Controls.jump]) {
    
    }
  
    rb.current.setLinearVelocity(vel, true);
  });
  

  return (
    <RigidBody ref={rb} lockRotations>
      <mesh position-y={0.5} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  );
};
