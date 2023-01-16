import { useBox } from "@react-three/cannon";
import { useState } from "react";
import { useStore } from "../hooks/useStore";
import * as textures from "../images/textures";

export const Cube = ({ id, position, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const [isHovered, setIsHovered] = useState(false);

  const activeTexture = textures[texture + "Texture"];

  const [removeCube] = useStore((state) => [state.removeCube]);

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        if (e.altKey) {
          removeCube(id);
        }
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "gray" : "white"}
        map={activeTexture}
        attach="material"
      />
    </mesh>
  );
};
