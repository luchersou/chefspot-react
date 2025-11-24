import { type Meal } from "@/types/Meal";

export type IngredientItem = {
  ingredient: string;
  measure: string;
};

export const getIngredients = (meal: Meal): IngredientItem[] => {
  return Array.from({ length: 20 })
    .map((_, i) => {
      const ingredient = meal[`strIngredient${i + 1}`];
      const measure = meal[`strMeasure${i + 1}`];

      if (!ingredient || ingredient.trim() === "") return null;

      return {
        ingredient,
        measure: measure ?? "",
      };
    })
    .filter((item): item is IngredientItem => item !== null);
};
