import { type Meal } from '@/types/Meal';

export type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: Meal }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'SET_FAVORITES'; payload: Meal[] };

export const initialFavoritesState: Meal[] = [];

export const favoritesReducer = (state: Meal[], action: FavoritesAction): Meal[] => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const exists = state.some((meal) => meal.idMeal === action.payload.idMeal);
      if (exists) {
        return state;
      }
      return [...state, action.payload];
    }
    
    case 'REMOVE_FAVORITE': {
      return state.filter((meal) => meal.idMeal !== action.payload);
    }
    
    case 'SET_FAVORITES': {
      return action.payload;
    }
    
    default:
      return state;
  }
};