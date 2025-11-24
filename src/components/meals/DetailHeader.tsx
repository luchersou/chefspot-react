import { ArrowLeft, Tag, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface MealDetailHeaderProps {
  name: string;
  category: string;
  area: string;
}

export const MealDetailHeader = ({ name, category, area }: MealDetailHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header  className="w-full flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>

        <div className="flex items-center gap-6 text-gray-700 text-sm">
          <div className="flex items-center gap-1">
            <Tag size={18} className="text-orange-500" />
            <span className="font-medium">
              Category: <span className="text-gray-900">{category}</span>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <MapPin size={18} className="text-red-500" />
            <span className="font-medium">
              Area: <span className="text-gray-900">{area}</span>
            </span>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2"
      >
        <ArrowLeft size={18} />
        Back
      </Button>
    </header>
  );
}
