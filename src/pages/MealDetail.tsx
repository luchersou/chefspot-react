import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { MotionUp } from "@/components/elements/MotionUp";
import { MealDetailHeader } from "@/components/meals/DetailHeader";
import { MealImage } from "@/components/meals/Image";
import { MealIngredients } from "@/components/meals/Ingredients";
import { MealInstructions } from "@/components/meals/Instructions";
import { MealYoutube } from "@/components/meals/MealYoutube";
import { useMealById } from "@/hooks/useMealById";
import { getIngredients } from "@/utils/getIngredients";

export const MealDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useMealById(id || "");
  const meal = data?.meals?.[0] || null;

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (!meal) return <p className="text-center py-10">Meal not found.</p>;

  return (
    <>
      <Header />

      <div className="fixed inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${meal.strMealThumb})` }}
        ></div>
        <div className="absolute inset-0 backdrop-blur-xl bg-white/20"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl rounded-xl p-8 mt-15 mb-10 space-y-10">
          <MotionUp>
            <MealDetailHeader
              name={meal.strMeal}
              category={meal.strCategory}
              area={meal.strArea}
            />
          </MotionUp>

          <MotionUp>
            <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
          </MotionUp>

          <MotionUp>
            <MealIngredients ingredients={getIngredients(meal)} />
          </MotionUp>

          <MotionUp>
            <MealInstructions instructions={meal.strInstructions || ""} />
          </MotionUp>

          {meal.strYoutube && (
            <MotionUp>
              <MealYoutube youtubeUrl={meal.strYoutube} />
            </MotionUp>
          )}
        </div>
      </div>
    </>
  );
};
