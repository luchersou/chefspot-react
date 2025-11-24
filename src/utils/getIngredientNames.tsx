import { type Meal } from '@/types/Meal'; 

export const getIngredientNames = (meal: Meal): string[] => 
  Object.keys(meal)
    .filter(key => key.startsWith("strIngredient") && meal[key])
    .map(key => meal[key] as string);