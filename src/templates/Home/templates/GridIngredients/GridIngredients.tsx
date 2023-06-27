import React from "react";
import Egg from '../../../../../public/assets/Ingredients/egg.png'
import { Ingredient } from "@/components/Ingredient";

type GridIngredientsProps = React.ComponentPropsWithoutRef<"div">;

export const GridIngredients = ({className, ...props}: GridIngredientsProps) => {
  return (
    <div {...props} className={'w-full h-full bg-red-50 border-2 border-slate-400 border-dashed grid grid-cols-2 text-black p-8' + ' ' + className}>
      <Ingredient pathImg={Egg} name='Egg' />
      <p>oi2</p>
      <p>oi3</p>
    </div>
  );
};
