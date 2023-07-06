import axios from 'axios';
import { IngredientProps } from '../components/Ingredient/Ingredient';



export const customAxios = axios.create({
  headers:
  {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.OPENAI_API_KEY,
  },
});

export const sendIngredientsGPT = async (listIngredients: IngredientProps[]) => {
  const params = {
    prompt: "Liste uma série de receitas deliciosas da culinária brasileira que utilizem os ingredientes: ovo, batata, feijao, e arroz",
    model: "text-davinci-003",
    max_tokens: 10,
    temperature: 0,
  };
    const response = await customAxios.post('https://api.openai.com/v1/completions', params)
    return response.data.choices[0].text.trim();
};
