export const ENDPOINTS = {
  mealById: (id: string) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  mealsByName: (name: string) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
};