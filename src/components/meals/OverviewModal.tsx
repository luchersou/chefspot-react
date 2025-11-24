import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tag, Globe } from "lucide-react";

interface MealOverviewModalProps {
  name: string;
  image: string;
  category: string;
  area: string;
  ingredients: string[];
  isOpen: boolean;
  onClose: () => void;
  onNavigateToDetails: () => void;
}

export const MealOverviewModal = ({
  name,
  image,
  category,
  area,
  ingredients,
  isOpen,
  onClose,
  onNavigateToDetails,
}: MealOverviewModalProps) =>{
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{name}</DialogTitle>
          <DialogDescription>
            Visão Geral Rápida da Receita.
          </DialogDescription>
        </DialogHeader>

        <section className="space-y-4 pt-4">
          <div className="w-full h-56 overflow-hidden rounded-md">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>

          <div className="flex justify-around text-sm border-b pb-3">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-orange-600" />
              <span>{category}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-orange-600" />
              <span>{area}</span>
            </div>
          </div>

          <h3 className="font-semibold text-lg">Ingredientes</h3>
          <ul className="list-disc list-inside grid grid-cols-2 gap-1 text-sm pl-4">
            {ingredients.map((ing, index) => (
              <li key={index} className="truncate">{ing}</li>
            ))}
          </ul>

          <div className="pt-4 flex justify-end">
            <Button onClick={onNavigateToDetails} className="bg-orange-600 hover:bg-orange-700">
              View Full Recipe
            </Button>
          </div>
        </section >
      </DialogContent>
    </Dialog>
  );
}