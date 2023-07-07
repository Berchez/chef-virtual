import axios from "axios";
import { IngredientProps } from "../components/Ingredient/Ingredient";

export const customAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.OPENAI_API_KEY,
  },
});

export const sendIngredientsGPT = async (
  listIngredients: IngredientProps[]
) => {
  const stringIngredients = listIngredients
    .map(function (obj) {
      return obj.name;
    })
    .join(", ");

  const params = {
    prompt: `Liste uma série de receitas deliciosas da culinária
    brasileira que utilizem os ingredientes: ${stringIngredients}`,
    model: "gpt-3.5-turbo-0613",
    max_tokens: 10,
    temperature: 0,
  };
  return `Aqui estão algumas receitas deliciosas da culinária brasileira que utilizam os ingredientes batata, ovo, arroz e carne suína:
          Feijoada
          Ingredientes:
          500g de carne suína (costela, lombo, pé, orelha, rabo)
          250g de carne seca
          200g de linguiça calabresa
          200g de linguiça portuguesa
          2 xícaras de feijão preto
          2 batatas grandes
          4 ovos cozidos
          3 dentes de alho
          1 cebola grande
          Cheiro-verde a gosto
          Sal e pimenta a gosto
          Modo de preparo:
          Cozinhe as carnes suína e seca separadamente até ficarem macias.
          Em outra panela, cozinhe o feijão preto até ficar macio.
          Em uma panela grande, refogue o alho e a cebola.
          Adicione as carnes cozidas e cortadas em pedaços.
          Acrescente as linguiças em rodelas e as batatas cortadas em cubos.
          Adicione o feijão cozido e cozinhe por mais alguns minutos.
          Tempere com sal, pimenta e cheiro-verde.
          Sirva com arroz branco e os ovos cozidos.`;
  // const response = await customAxios.post(
  //   "	https://api.openai.com/v1/chat/completions",
  //   params
  // );
  // return response.data.choices[0].text.trim();
};
