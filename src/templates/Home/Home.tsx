'use client';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu/Menu';
import React, { useState } from 'react';
import ingredientsApi from '../../api/ingredients.json';
import { IngredientProps } from '@/components/Ingredient';
import { sendIngredientsGPT } from '@/axios/config';
import { GridIngredients } from './templates/GridIngredients';
import { Button } from '@/components/Button';
import { ClipLoader } from 'react-spinners';

export const Home = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientProps[]
  >([]);

  const [recipes, setRecipes] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearchRecipesClick = async () => {
    setLoading(true);
    try {
      const textRecipes = await sendIngredientsGPT(selectedIngredients);
      setRecipes(textRecipes);
      setLoading(false);
    } catch {
      setLoading(false);
    }
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
      <div
        className={`w-full ${
          recipes === '' ? 'h-screen' : 'h-[90vh]'
        } max-h-screen `}
      >
        <Menu />
        <div className="flex flex-col grow md:px-16 md:py-8 px-8 py-4 h-full min-h-0">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 w-full md:gap-x-8 md:gap-y-4 gap-x-4 gap-y-2 ${
              recipes === '' ? 'h-[calc(100%-6rem)]' : 'h-full'
            } min-h-0`}
          >
            <GridIngredients
              title="Ingredientes disponíveis:"
              onIngredientClick={addIngredientClick}
              listIngredients={avaliableIngredients}
              className="col-span-1 md:col-span-2"
              arrowDirection="right"
            />
            <GridIngredients
              onIngredientClick={removeIngredientClick}
              listIngredients={selectedIngredients}
              className=" h-full col-span-1"
              arrowDirection="left"
              title="Ingredientes selecionados:"
            />
          </div>
          <div className="flex gap-x-2 items-center justify-end mt-4">
            {loading && <ClipLoader color="gray" />}
            <Button
              label="Buscar Receitas"
              className="self-end w-52"
              onClick={() => handleSearchRecipesClick()}
              disabled={selectedIngredients.length === 0}
            />
          </div>
        </div>
      </div>
      {recipes !== '' && (
        <>
          <div
            className="text-gray-950 md:px-16 px-8 md:mt-0 mt-8 mb-8"
            dangerouslySetInnerHTML={{
              __html: '<h1>Receita(s) gerada(s):</h1>' + recipes,
            }}
          />
        </>
      )}
      <Footer />
    </div>
  );
};
