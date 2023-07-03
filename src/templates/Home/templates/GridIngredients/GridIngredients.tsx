"use client";
import React from "react";
import ingredientsApi from "../../../../api/ingredients.json";
import { Ingredient, IngredientProps } from "@/components/Ingredient";

interface GridIngredientsProps extends React.ComponentPropsWithoutRef<"div"> {
  onIngredientClick: (ingredient: IngredientProps) => void;
}

export const GridIngredients = ({
  className,
  onIngredientClick,
  ...props
}: GridIngredientsProps) => {
  const listIngredients = ingredientsApi.ingredients;
  return (
    <div
      {...props}
      className={
        "w-full h-full bg-red-50 border-2 border-slate-400 border-dashed grid " +
        "grid-cols-fluid justify-evenly text-black p-8 gap-x-14 gap-y-12  " +
        " " +
        className
      }
    >
      {listIngredients.map((ingredient, key) => (
        <Ingredient
          key={key}
          onClick={() => onIngredientClick(ingredient)}
          name={ingredient.name}
          pathImg={ingredient.pathImg}
        />
      ))}
    </div>
  );
};
