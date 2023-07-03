"use client"
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu/Menu";
import React, { useState } from "react";
import { GridIngredients } from "./templates/GridIngredients";
import { IngredientProps } from "@/components/Ingredient";

export const Home = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<IngredientProps[]>([]);

  // Função para adicionar um ingrediente à lista quando clicado
  const handleIngredientClick = (ingredient: IngredientProps) => {
    setSelectedIngredients((prevSelectedIngredients) => [...prevSelectedIngredients, ingredient]);
  };

  return (
    <div className="flex flex-col w-screen h-screen max-h-screen bg-gray-200">
      <Menu />
      <div className="flex flex-col grow px-16 py-8 h-full min-h-0">
        <div className="grid grid-cols-3 w-full gap-x-8 h-full min-h-0">
          <GridIngredients onIngredientClick={handleIngredientClick} className="col-span-2 overflow-auto" />
          <span className="bg-blue-400 h-full col-span-1">{/* Renderizar a lista de ingredientes selecionados */}
            <ul>
              {selectedIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
            </ul>
          </span>
        </div>
        <Button label="Buscar Receitas" className="self-end mt-4 w-52" />
      </div>
      <Footer />
    </div>
  );
};
