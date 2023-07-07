import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu/Menu";
import React from "react";
import { HomeContent } from "./templates/HomeContent";

export const Home = () => {
  return (
    <div className="flex flex-col w-screen h-screen max-h-screen bg-gray-200">
      <Menu />
      <HomeContent />
      <Footer />
    </div>
  );
};
