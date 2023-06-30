import Image, { StaticImageData } from "next/image";
import React from "react";
import { ArrowRight } from '@styled-icons/material'

type IngredientProps = {
  name: string;
  pathImg: StaticImageData | string;
};

export const Ingredient = ({ name, pathImg }: IngredientProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center group hover:brightness-75 hover:cursor-pointer">
      <Image src={pathImg} width={40} height={40} alt={`image of a ${name}`} />
      <div className="flex justify-center items-center gap-x-2">
        <p className="text-center">{name}</p>
        <span className="bg-green-400 rounded-full w-5 h-5 justify-center items-center hidden group-hover:flex transition">
          <ArrowRight className="w-8 h-8 text-white" />
        </span>
      </div>
    </div>
  );
};
