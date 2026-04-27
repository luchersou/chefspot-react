import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { type Meal } from "@/types/Meal";
import { ENDPOINTS } from "@/services/endpoints";

interface MealsResponse {
  meals: Meal[] | null;
}

export const useMealsByName = (name: string) =>{
  return useQuery<MealsResponse>({
    queryKey: ["mealsByName", name],
    queryFn: () =>
      api<MealsResponse>(
        ENDPOINTS.mealsByName(name)
      ),
    enabled: !!name,
  });
}