import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useFavorites } from '@/context/FavoritesContext';
import { MealCard } from '../meals/Card';
import { getIngredientNames } from '@/utils/getIngredientNames';

export const FavoritesSection = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-orange-500" />
            Your Favorites
          </CardTitle>
          <CardDescription>Save your favorite recipes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-center py-8">
            No favorites yet. Start exploring recipes!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Heart className="w-6 h-6 text-orange-500 fill-orange-500" />
        Your Favorites ({favorites.length})
      </h2>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {favorites.map((meal) => (
            <CarouselItem
              key={meal.idMeal}
              className="pl-2 md:pl-3 basis-[65%] sm:basis-[60%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <MealCard
                id={meal.idMeal}
                name={meal.strMeal}
                image={meal.strMealThumb}
                category={meal.strCategory}
                area={meal.strArea}
                ingredients={getIngredientNames(meal)}
                meal={meal}
                onCardClick={() => navigate(`/meal/${meal.idMeal}`)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-5 md:-left-8 h-10 w-10 md:h-12 md:w-12" />
        <CarouselNext className="-right-5 md:-right-8 h-10 w-10 md:h-12 md:w-12" />
      </Carousel>
    </div>
  );
};