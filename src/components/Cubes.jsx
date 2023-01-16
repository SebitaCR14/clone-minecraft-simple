import { useStore } from "../hooks/useStore";
import { Cube } from "./Cube";

export const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);

  return cubes.map(({ id, pos, texture }) => {
    return <Cube id={id} key={id} position={pos} texture={texture} />;
  });
};
