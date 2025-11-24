import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { FavoritesSection } from '@/components/dashboard/FavoritesSection';
import { FavoritesTable } from '@/components/dashboard/FavoritesTable';
import { useFavorites } from '@/context/FavoritesContext';

export const Dashboard = () => {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <DashboardHeader />
        <FavoritesSection />
        {favorites.length > 0 && <FavoritesTable />}
      </div>
    </div>
  );
};

export default Dashboard;