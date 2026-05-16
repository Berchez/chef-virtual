import { useEffect, useState } from 'react';
import ingredientsApi from '../../api/ingredients.json';
import { IngredientProps } from '@/components/Ingredient';
import { sendIngredientsGemini } from '@/services/gemini';
import { useDispatch, useSelector } from 'react-redux';
import {
  addIngredient,
  removeIngredient,
} from '@/redux/selected-ingredients/actions';
import { IRootState } from '@/redux/root-reducer';
import { useLocale, useTranslations } from 'next-intl';

const useHome = () => {
  const t = useTranslations();
  const locale = useLocale();
  const { ingredients: selectedIngredients } = useSelector(
    (rootReducer: IRootState) => rootReducer.selectedIngredientsReducer,
  );

  const [recipes, setRecipes] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const formatRecipe = (recipe: string) => {
    const withoutSlashN = recipe.replace('', ' ');
    const withoutMarkdown = withoutSlashN.replace('```', '');
    return withoutMarkdown.replace('html', '');
  };

  const handleSearchRecipesClick = async () => {
    setLoading(true);
    try {
      const stringIngredients = selectedIngredients
        .map((obj) => obj.name)
        .join(', ');

      const prompt = t('Gemini.prompt', { ingredients: stringIngredients });

      const textRecipes = await sendIngredientsGemini(prompt);
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
    dispatch(addIngredient(ingredient));
  };

  const removeIngredientClick = (ingredient: IngredientProps) => {
    dispatch(removeIngredient(ingredient));
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
