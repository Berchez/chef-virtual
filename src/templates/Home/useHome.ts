import { useEffect, useState } from 'react';
import ingredientsApi from '../../api/ingredients.json';
import { IngredientProps } from '@/components/Ingredient';
import { sendIngredientsGPT } from '@/axios/config';

const useHome = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientProps[]
  >([]);

  const [recipes, setRecipes] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const formatRecipe = (recipe: string) => {
    const withoutSlashN = recipe.replace('', ' ');
    const withoutMarkdown = withoutSlashN.replace('```', '');
    return withoutMarkdown.replace('html', '');
  };

  const handleSearchRecipesClick = async () => {
    setLoading(true);
    try {
      const textRecipes = await sendIngredientsGPT(selectedIngredients);
      const formattedRecipe = formatRecipe(textRecipes);
      setRecipes(formattedRecipe);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const element = document.getElementById('recipe-wrapper');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipes]);

  const addIngredientClick = (ingredient: IngredientProps) => {
    setSelectedIngredients((prevSelectedIngredients) => [
      ...prevSelectedIngredients,
      ingredient,
    ]);
  };

  const removeIngredientClick = (ingredient: IngredientProps) => {
    setSelectedIngredients((prevSelectedIngredients) =>
      prevSelectedIngredients.filter((item) => item !== ingredient),
    );
  };

  const allIngredientsArray = ingredientsApi.ingredients;
  const avaliableIngredients = allIngredientsArray.filter(
    (ingredient) => !selectedIngredients.includes(ingredient),
  );

  return {
    recipes,
    loading,
    handleSearchRecipesClick,
    addIngredientClick,
    removeIngredientClick,
    avaliableIngredients,
    selectedIngredients,
  };
};

export default useHome;
