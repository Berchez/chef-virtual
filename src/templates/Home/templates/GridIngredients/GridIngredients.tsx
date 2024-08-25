import React from 'react';
import { Ingredient, IngredientProps } from '@/components/Ingredient';

interface GridIngredientsProps extends React.ComponentPropsWithoutRef<'div'> {
  onIngredientClick: (ingredient: IngredientProps) => void;
  listIngredients: IngredientProps[];
  arrowDirection: 'right' | 'left';
  title: string;
}

export const GridIngredients = ({
  className,
  onIngredientClick,
  listIngredients,
  arrowDirection,
  title,
  ...props
}: GridIngredientsProps) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <h1 className="mt-0">{title}</h1>
      <div
        {...props}
        className={`w-full bg-red-50 border-2 border-slate-400 border-dashed grid
        grid-cols-fluid justify-evenly text-black p-8 overflow-auto
        h-[calc(100%-3.2rem)]
        ${
          arrowDirection === 'right'
            ? 'md:gap-x-14 md:gap-y-12 gap-x-2 gap-y-2 '
            : 'gap-x-2 gap-y-2 '
        }

        `}
      >
        {listIngredients.map((ingredient) => (
          <Ingredient
            key={ingredient.name}
            onClick={() => onIngredientClick(ingredient)}
            name={ingredient.name}
            pathImg={ingredient.pathImg}
            arrowDirection={arrowDirection}
          />
        ))}
      </div>
    </div>
  );
};
