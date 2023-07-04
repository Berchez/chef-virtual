import React from "react";
import { Ingredient, IngredientProps } from "@/components/Ingredient";

interface GridIngredientsProps extends React.ComponentPropsWithoutRef<"div"> {
  onIngredientClick: (ingredient: IngredientProps) => void;
  listIngredients: IngredientProps[];
  arrowDirection: "right" | "left";
}

export const GridIngredients = ({
  className,
  onIngredientClick,
  listIngredients,
  arrowDirection,
  ...props
}: GridIngredientsProps) => {
  return (
    <div
      {...props}
      className={`w-full h-full bg-red-50 border-2 border-slate-400 border-dashed grid
        grid-cols-fluid justify-evenly text-black p-8

        ${
          arrowDirection === "right" ? "gap-x-14 gap-y-12 " : "gap-x-2 gap-y-2 "
        }

        ${className}`}
    >
      {listIngredients.map((ingredient, key) => (
        <Ingredient
          key={key}
          onClick={() => onIngredientClick(ingredient)}
          name={ingredient.name}
          pathImg={ingredient.pathImg}
          arrowDirection={arrowDirection}
        />
      ))}
    </div>
  );
};
