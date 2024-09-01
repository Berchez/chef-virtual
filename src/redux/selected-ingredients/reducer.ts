import { IngredientProps } from '@/components/Ingredient';
import SelectedIngredientsActionTypes from './action-types';

const initialState: { ingredients: IngredientProps[] } = {
  ingredients: [],
};

const selectedIngredientsReducer = (
  state = initialState,
  action: { type: string; payload: IngredientProps },
) => {
  switch (action.type) {
    case SelectedIngredientsActionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };

    case SelectedIngredientsActionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.name !== action.payload.name,
        ),
      };

    default:
      return state;
  }
};

export default selectedIngredientsReducer;
