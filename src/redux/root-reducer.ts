import { combineReducers } from 'redux';

import selectedIngredientsReducer from './selected-ingredients/reducer';

export const rootReducer = combineReducers({ selectedIngredientsReducer });
export type IRootState = ReturnType<typeof rootReducer>;
