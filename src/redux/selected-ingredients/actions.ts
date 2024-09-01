import { IngredientProps } from '@/components/Ingredient';
import SelectedIngredientsActionTypes from './action-types';

export const addIngredient = (payload: IngredientProps) => ({
  type: SelectedIngredientsActionTypes.ADD_INGREDIENT,
  payload,
});

export const removeIngredient = (payload: IngredientProps) => ({
  type: SelectedIngredientsActionTypes.REMOVE_INGREDIENT,
  payload,
});
