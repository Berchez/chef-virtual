import Image, { StaticImageData } from "next/image";
import React from "react";

type IngredientProps = {
  name: string;
  pathImg: StaticImageData | string;
};

export const Ingredient = ({ name, pathImg }: IngredientProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image src={pathImg} width={40} height={40} alt={`image of a ${name}`} />
      <p className="text-center">{name}</p>
    </div>
  );
};
