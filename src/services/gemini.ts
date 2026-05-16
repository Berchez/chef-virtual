import { GoogleGenerativeAI } from '@google/generative-ai';
import { IngredientProps } from '../components/Ingredient/Ingredient';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export const sendIngredientsGemini = async (
  listIngredients: IngredientProps[],
) => {
  const stringIngredients = listIngredients
    .map((obj) => obj.name)
    .join(', ');

  const model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });

  const prompt = `Devolva inteiramente sua resposta em formato html dentro de uma div para o
                seguinte prompt: Liste uma série de receitas deliciosas da culinária
                brasileira que utilizem os ingredientes: ${stringIngredients}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};
