import { Ingredient } from '@/components/Ingredient/Ingredient';
import Egg from '../../../public/assets/Ingredients/egg.png'

export default function TestePage() {
  return (
    <div className='w-full h-full bg-red-50 border-2 border-slate-400 border-dashed grid grid-cols-2 text-black p-8'>
      <Ingredient pathImg={Egg} name='Egg' />
      <p>oi2</p>
      <p>oi3</p>

    </div>
  );
}
