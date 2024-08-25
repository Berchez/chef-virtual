import axios from 'axios';
import { IngredientProps } from '../components/Ingredient/Ingredient';

export const customAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_OPENAI_API_KEY,
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
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: `Devolva inteiramente sua resposta em formato html dentro de uma div para o
                seguinte prompt: Liste uma série de receitas deliciosas da culinária
                brasileira que utilizem os ingredientes: ${stringIngredients}`,
      },
    ],
    temperature: 0,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  const response = await customAxios.post(
    'https://api.openai.com/v1/chat/completions',
    params,
  );
  return response.data.choices[0].message.content;
};
