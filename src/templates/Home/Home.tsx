import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu/Menu";
import React from "react";
import { GridIngredients } from "./templates/GridIngredients";

export const Home = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-200">
      <Menu />
      <div className="flex flex-col px-16 grow py-8">
        <div className="grid grid-cols-2 h-full w-full gap-x-8">
          <GridIngredients />
          <span className="bg-blue-400 h-full"></span>
        </div>
        <Button label="Teste" className="self-end mt-4" />
      </div>
      <Footer />
    </div>
  );
};
