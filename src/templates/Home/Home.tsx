import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu/Menu";
import React from "react";

export const Home = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Menu />
      <div className="flex flex-col px-16 grow">
        <div className="grid grid-cols-2 h-full w-full">
          <span className="bg-red-600 h-full"></span>
          <span className="bg-red-600 h-full"></span>
        </div>
        <Button label="Teste" />
      </div>
      <Footer />
    </div>
  );
};
