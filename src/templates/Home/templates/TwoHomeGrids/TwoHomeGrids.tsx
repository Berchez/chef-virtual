"use client";
import React, { useState } from "react";
import { GridIngredients } from "../GridIngredients";
import { IngredientProps } from "@/components/Ingredient";
import ingredientsApi from "../../../../api/ingredients.json";

export const TwoHomeGrids = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientProps[]
  >([]);

  // Função para adicionar um ingrediente à lista quando clicado
  const addIngredientClick = (ingredient: IngredientProps) => {
    setSelectedIngredients((prevSelectedIngredients) => [
      ...prevSelectedIngredients,
      ingredient,
    ]);
  };

  // Função para remover um ingrediente à lista quando clicado
  const removeIngredientClick = (ingredient: IngredientProps) => {
    setSelectedIngredients((prevSelectedIngredients) =>
      prevSelectedIngredients.filter((item) => item !== ingredient)
    );
  };

  const allIngredientsArray = ingredientsApi.ingredients;
  const avaliableIngredients = allIngredientsArray.filter(
    (ingredient) => !selectedIngredients.includes(ingredient)
  );

  return (
    <>
      <GridIngredients
        onIngredientClick={addIngredientClick}
        listIngredients={avaliableIngredients}
        className="col-span-2 overflow-auto"
        arrowDirection="right"
      />
      <GridIngredients
        onIngredientClick={removeIngredientClick}
        listIngredients={selectedIngredients}
        className=" h-full col-span-1 overflow-auto"
        arrowDirection="left"
      />
    </>
  );
};
