import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import type { Meal } from "@/types/Meal";

interface MealResponse {
  meals: Meal[] | null;
}

export const useMealById = (id: string) =>{
  return useQuery<MealResponse>({
    queryKey: ["mealById", id],
    queryFn: () =>
      api<MealResponse>(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      ),
    enabled: !!id,
  });
}
