import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { ArrowLeft, ArrowRight } from '@styled-icons/material';

export type IngredientProps = {
  name: string;
  pathImg: StaticImageData | string;
  arrowDirection?: 'right' | 'left';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Ingredient = ({
  name,
  pathImg,
  arrowDirection,
  onClick,
}: IngredientProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-full flex flex-col items-center justify-center group hover:brightness-75 hover:cursor-pointer"
    >
      <Image src={pathImg} width={40} height={40} alt={`image of a ${name}`} />
      <div className="flex justify-center items-center gap-x-2">
        <p className="text-center">{name}</p>
        <span className="bg-green-400 rounded-full w-5 h-5 justify-center items-center hidden group-hover:flex transition">
          {arrowDirection === 'right' ? (
            <ArrowRight className="w-8 h-8 text-white" />
          ) : (
            <ArrowLeft className="w-8 h-8 text-white" />
          )}
        </span>
      </div>
    </button>
  );
};
