import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { type Meal } from "@/types/Meal";

interface MealsResponse {
  meals: Meal[] | null;
}

export const useMealsByName = (name: string) =>{
  return useQuery<MealsResponse>({
    queryKey: ["mealsByName", name],
    queryFn: () =>
      api<MealsResponse>(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      ),
    enabled: !!name,
  });
}