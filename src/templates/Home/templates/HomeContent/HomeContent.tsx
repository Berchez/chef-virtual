"use client";
import { Button } from "@/components/Button";
import React, { useState } from "react";
import { sendIngredientsGPT } from "@/axios/config";
import { IngredientProps } from "@/components/Ingredient";
import { GridIngredients } from "../GridIngredients";
import ingredientsApi from "../../../../api/ingredients.json";

export const HomeContent = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientProps[]
  >([]);

  const [recipes, setRecipes] = useState<string>("");

  const handleBuscarReceitasClick = async () => {
    const textRecipes = await sendIngredientsGPT(selectedIngredients);
    setRecipes(textRecipes);
  };

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
      <div className="flex flex-col grow px-16 py-8 h-full min-h-0">
        <div className="grid grid-cols-3 w-full gap-x-8 h-full min-h-0">
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
        </div>
        <Button
          label="Buscar Receitas"
          className="self-end mt-4 w-52"
          onClick={() => handleBuscarReceitasClick()}
        />
      </div>
      <div className="text-gray-950 px-16 py-8">
        <p>{recipes}</p>
      </div>
    </>
  );
};
