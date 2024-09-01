import { IRootState } from '../root-reducer';
export const selectedIngredientsCount = (rootReducer: IRootState) => {
  return rootReducer.selectedIngredientsReducer.ingredients.length || 0;
};
