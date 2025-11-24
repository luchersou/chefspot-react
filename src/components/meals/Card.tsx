import { useState } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { Tag, Globe, Flame, Star } from "lucide-react";
import { MealOverviewModal } from "./OverviewModal";
import { useFavorites } from "@/context/FavoritesContext";
import { type Meal } from "@/types/Meal";
import { useAuth } from '@/context/AuthContext';

interface MealCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  area: string;
  ingredients: string[]; 
  meal: Meal; 
  onCardClick?: () => void; 
}

export const MealCard = ({ 
  id,
  name, 
  image, 
  category, 
  area, 
  ingredients, 
  meal,
  onCardClick 
}: MealCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const ingredientsCount = ingredients.length;
  const favorite = isFavorite(id);

  const handleOverviewClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIsModalOpen(true);
  };
  
  const handleNavigateFromModal = () => {
    setIsModalOpen(false); 
    onCardClick?.(); 
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      return navigate("/login", {
        state: {
          from: location.pathname + location.search,
          favoriteMeal: meal
        }
      });
    }
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite(meal);
    }
  };

  return (
    <>
      <Card 
        className="overflow-hidden shadow-md hover:shadow-lg transition-all p-0 cursor-pointer hover:scale-[1.01] relative"
        onClick={onCardClick}
      >
        <Button
          onClick={handleFavoriteClick}
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all hover:scale-110"
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Star 
            className={`w-5 h-5 transition-colors ${
              favorite 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-400 hover:text-yellow-400'
            }`}
          />
        </Button>

        <div className="w-full h-48 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <CardHeader className="pb-2">
          <h2 className="font-bold text-lg">{name}</h2>
        </CardHeader>

        <CardContent className="space-y-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-orange-600" />
            <span>
              <strong>Category:</strong> {category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-orange-600" />
            <span>
              <strong>Area:</strong> {area}
            </span>
          </div>

          <div className="flex items-center gap-2 pb-4">
            <Flame className="w-4 h-4 text-red-600" />
            <span>
              <strong>Ingredients:</strong> {ingredientsCount}
            </span>
          </div>
          
          <div className="py-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={handleOverviewClick}
            >
              See Overview
            </Button>
          </div>
        </CardContent>
      </Card>

      <MealOverviewModal
        name={name}
        image={image}
        category={category}
        area={area}
        ingredients={ingredients}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNavigateToDetails={handleNavigateFromModal}
      />
    </>
  );
}