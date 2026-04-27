import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import type { Meal } from "@/types/Meal";
import { ENDPOINTS } from "@/services/endpoints";

interface MealResponse {
  meals: Meal[] | null;
}

export const useMealById = (id: string) =>{
  return useQuery<MealResponse>({
    queryKey: ["mealById", id],
    queryFn: () =>
      api<MealResponse>(
        ENDPOINTS.mealById(id)
      ),
    enabled: !!id,
  });
}
