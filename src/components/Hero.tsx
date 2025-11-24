import bannerImg from "../assets/banner.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Globe, Heart } from "lucide-react";

export const Hero = () => {
  return (
    <div
      className="
        w-full 
        relative 
        overflow-hidden h-[100vh] 
      "
    >
      <img
        src={bannerImg}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 backdrop-blur-md bg-black/20 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg leading-tight">
          Search your favorite recipe
        </h1>
        <p className="text-white/90 text-lg pt-5 md:text-xl font-light mb-6 max-w-2xl mx-auto text-center leading-relaxed">
          From quick meals to global flavors — inspiration for every moment, just one click away.
        </p>
        <div className="flex items-center justify-center gap-6 text-white/80 text-sm mb-8">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span>Global Cuisines</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            <span>Save Favorites</span>
          </div>
        </div>
    
        <div className="mt-6">
          <Link to="/filter">
            <Button 
              className="mx-auto cursor-pointer flex items-center gap-4 py-6 text-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-xl"
            >
              <Search className="w-5 h-5"/> Search Recipe
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
