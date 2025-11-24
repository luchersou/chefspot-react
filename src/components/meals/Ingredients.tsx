import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";

interface IngredientItem {
  ingredient: string;
  measure: string;
}

interface MealIngredientsProps {
  ingredients: IngredientItem[];
}

export const MealIngredients = ({ ingredients }: MealIngredientsProps) =>{
  return (
    <Card className="border rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <UtensilsCrossed className="text-orange-500" size={22} />
          Ingredients
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {ingredients.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>

              <span className="font-medium text-gray-800">
                {item.ingredient}
              </span>

              <span className="text-gray-600 text-sm">
                — {item.measure}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
