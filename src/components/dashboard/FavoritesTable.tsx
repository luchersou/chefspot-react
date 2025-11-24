import { Heart, Eye, Trash2, Table as TableIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pagination } from '../elements/Pagination';
import { useFavorites } from '@/context/FavoritesContext';
import { usePagination } from '@/hooks/usePagination';

const ITEMS_PER_PAGE = 3;

export const FavoritesTable = () => {
  const { favorites, removeFavorite } = useFavorites();
  const navigate = useNavigate();
  
  const {
    currentPage,
    totalPages,
    currentItems: currentFavorites,
    setCurrentPage,
  } = usePagination({
    items: favorites,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  if (favorites.length === 0) {
    return (
      <div className="border rounded-lg p-8 text-center">
        <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">No favorites yet</h3>
        <p className="text-gray-500">Start exploring recipes and add your favorites!</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <TableIcon className="w-6 h-6 text-emerald-500" />
        My Favorites Collection ({favorites.length})
      </h2>
      
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Area</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentFavorites.map((meal) => (
              <TableRow key={meal.idMeal}>
                <TableCell>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-16 h-16 object-cover rounded"
                  />
                </TableCell>
                <TableCell className="font-medium">{meal.strMeal}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    {meal.strCategory}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {meal.strArea}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate(`/meal/${meal.idMeal}`)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFavorite(meal.idMeal)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={favorites.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
        itemName="favorites"
      />
    </div>
  );
};