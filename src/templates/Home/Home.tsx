'use client';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu/Menu';
import React from 'react';
import { GridIngredients } from './templates/GridIngredients';
import { Button } from '@/components/Button';
import { ClipLoader } from 'react-spinners';
import useHome from './useHome';
import Recipes from './templates/Recipes';

export const Home = () => {
  const {
    recipes,
    loading,
    handleSearchRecipesClick,
    addIngredientClick,
    removeIngredientClick,
    avaliableIngredients,
    selectedIngredients,
  } = useHome();

  return (
    <div className="flex flex-col bg-gray-200">
      <div
        className={`w-full ${
          recipes === '' ? 'h-[calc(100vh-2.5rem)]' : 'h-[90vh]'
        } max-h-screen `}
      >
        <Menu />
        <div
          className={`flex flex-col grow md:px-16 md:py-8 px-8 ${
            recipes === '' ? 'py-8' : 'py-4'
          } h-full min-h-0`}
        >
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
          <div className={`flex gap-x-2 items-center justify-end md:mt-0 mt-4`}>
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
      {recipes !== '' && <Recipes recipesHtml={recipes} />}
      <Footer />
    </div>
  );
};
