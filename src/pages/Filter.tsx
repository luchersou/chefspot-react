import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { getIngredientNames } from "@/utils/getIngredientNames";
import { useMealsByName } from "@/hooks/useMeals";
import { MealCard } from "@/components/meals/Card";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 20;

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameFromUrl = searchParams.get("name") || "";
  
  const [searchTerm, setSearchTerm] = useState(nameFromUrl);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  
  const { data: mealsByName, isLoading } = useMealsByName(nameFromUrl);
  const meals = mealsByName?.meals || [];
  
  const visibleMeals = meals.slice(0, visibleCount);
  const hasMore = visibleCount < meals.length;

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    setSearchParams({ name: searchTerm });
    setVisibleCount(ITEMS_PER_PAGE); 
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };
  
  return (
    <>
      <Header />
      <div className="w-full pt-24 max-w-4xl mx-auto p-4 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Recipe Search
        </h1>

        <Card className="shadow-md border">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <Input
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 focus-visible:ring-orange-500"
              />
              <Button className="cursor-pointer text-xl p-5" onClick={handleSearch} disabled={isLoading}>
                <Search className="w-4 h-4 mr-1" />
                {isLoading ? "Searching..." : "Search"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {isLoading ? (
          <p className="text-center py-8 text-gray-500">Loading recipes...</p>
        ) : !meals.length && nameFromUrl ? (
          <p className="text-center py-8 text-gray-500">No recipes found for "{nameFromUrl}"</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleMeals.map((meal) => (
                <MealCard
                  key={meal.idMeal}
                  id={meal.idMeal}
                  name={meal.strMeal}
                  image={meal.strMealThumb}
                  category={meal.strCategory}
                  area={meal.strArea}
                  ingredients={getIngredientNames(meal)}
                  meal={meal} 
                  onCardClick={() => navigate(`/meal/${meal.idMeal}`)}
                />
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center py-6">
                <Button 
                  onClick={handleLoadMore}
                  variant="outline"
                  className="px-8 py-2"
                >
                  Show more ({meals.length - visibleCount} remaining)
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}