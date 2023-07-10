'use client';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu/Menu';
import React, { useState } from 'react';
import ingredientsApi from '../../api/ingredients.json';
import { IngredientProps } from '@/components/Ingredient';
import { sendIngredientsGPT } from '@/axios/config';
import { GridIngredients } from './templates/GridIngredients';
import { Button } from '@/components/Button';

export const Home = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientProps[]
  >([]);

  const [recipes, setRecipes] = useState<string>('');

  const handleSearchRecipesClick = async () => {
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
      prevSelectedIngredients.filter((item) => item !== ingredient),
    );
  };

  const allIngredientsArray = ingredientsApi.ingredients;
  const avaliableIngredients = allIngredientsArray.filter(
    (ingredient) => !selectedIngredients.includes(ingredient),
  );

  return (
    <div className="flex flex-col bg-gray-200">
      <div className="w-full h-screen max-h-screen ">
        <Menu />
        <div className="flex flex-col grow px-16 py-8 h-full min-h-0">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-x-8 gap-y-4 h-[calc(100%-7rem)] min-h-0">
            <GridIngredients
              onIngredientClick={addIngredientClick}
              listIngredients={avaliableIngredients}
              className="col-span-1 md:col-span-2 overflow-auto"
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
            onClick={() => handleSearchRecipesClick()}
            disabled={selectedIngredients.length === 0}
          />
        </div>
      </div>
      <div className="text-gray-950 px-16 py-8">
        <p>{recipes}</p>
      </div>
      <Footer />
    </div>
  );
};
