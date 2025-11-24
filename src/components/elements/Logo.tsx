import { Link } from "react-router-dom";
import { useIsLightBackground } from '@/hooks/useIsLightBackground';

export const Logo = () => {
  const isLightBackground = useIsLightBackground();

  const textColor = isLightBackground ? 'text-gray-800' : 'text-white drop-shadow-lg';
  const subTextColor = isLightBackground ? 'text-gray-600' : 'text-white/80';
  
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="Home">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105">
          <span className="text-white font-bold text-2xl italic">C</span>
        </div>
        
        <div className="flex flex-col leading-tight">
          <span className={`text-lg font-bold ${textColor}`}>ChefSpot</span>
          <span className={`text-xs ${subTextColor}`}>Find your flavor</span>
        </div>
      </div>
    </Link>
  );
};