import { createContext, useContext, useReducer, useEffect } from "react";
import { type Meal } from "@/types/Meal";
import { favoritesReducer, initialFavoritesState } from "@/reducer/favoritesReducer";
import { useAuth } from "@/context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

interface FavoritesContextType {
  favorites: Meal[];
  addFavorite: (meal: Meal) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    initialFavoritesState
  );

  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem("favorites-demo-user");
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as Meal[];
          dispatch({ type: "SET_FAVORITES", payload: parsed });
        } catch (err) {
          console.error("Error parsing favorites:", err);
        }
      }
    } else {
      dispatch({ type: "SET_FAVORITES", payload: [] });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("favorites-demo-user", JSON.stringify(favorites));
    }
  }, [favorites, user]);

  useEffect(() => {
    if (user && location.state?.favoriteMeal) {
      const { favoriteMeal, from } = location.state;
      
      dispatch({ type: "ADD_FAVORITE", payload: favoriteMeal });
      
      navigate(from || location.pathname, { 
        replace: true, 
        state: {} 
      });
    }
  }, [user, location.state, navigate]);

  const addFavorite = (meal: Meal) => {
    dispatch({ type: "ADD_FAVORITE", payload: meal });
  };

  const removeFavorite = (id: string) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
  };

  const isFavorite = (id: string) => favorites.some((m) => m.idMeal === id);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return ctx;
};
