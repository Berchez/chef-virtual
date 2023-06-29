"use client";
import React from "react";
import ingredientsApi from "../../../../api/ingredients.json";
import Egg from "../../../../../public/assets/Ingredients/egg.png";
import { Ingredient } from "@/components/Ingredient";

type GridIngredientsProps = React.ComponentPropsWithoutRef<"div">;

export const GridIngredients = ({
  className,
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
          name={ingredient.name}
          pathImg={ingredient.icon}
        />
      ))}
    </div>
  );
};
