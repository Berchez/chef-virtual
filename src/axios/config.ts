import axios from 'axios';
import { IngredientProps } from '../components/Ingredient/Ingredient';

export const customAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.OPENAI_API_KEY,
  },
});

export const sendIngredientsGPT = async (
  listIngredients: IngredientProps[],
) => {
  const stringIngredients = listIngredients
    .map(function (obj) {
      return obj.name;
    })
    .join(', ');

  const params = {
    prompt: `Liste uma série de receitas deliciosas da culinária
    brasileira que utilizem os ingredientes: ${stringIngredients}`,
    model: 'gpt-3.5-turbo-0613',
    max_tokens: 100,
    temperature: 0,
  };

  const response = await customAxios.post(
    "	https://api.openai.com/v1/chat/completions",
    params
  );
  return response.data.choices[0].text.trim();
};
