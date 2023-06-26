import Image, { StaticImageData } from "next/image";
import React from "react";
import Egg from '../../../public/assets/Ingredients/egg.png'

type IngredientProps = {
  name: string;
  pathImg: StaticImageData | string;
}

export const Ingredient = ({name, pathImg}: IngredientProps) => {
  return (
    <div className="w-10 h-10 flex flex-col items-center justify-center">
      <Image src={pathImg} width={32} height={32} alt={`image of a ${name}`} />
      <p>{name}</p>
    </div>
  );
};
