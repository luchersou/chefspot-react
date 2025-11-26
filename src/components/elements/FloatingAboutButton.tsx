import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingAboutButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/about")}
      className="
        fixed bottom-4 right-4 z-50
        flex items-center gap-2
        bg-black/80 text-white
        hover:bg-black hover:text-white
        backdrop-blur
        shadow-lg
        rounded-full
        px-4 py-2
        text-sm font-medium
        transition-all duration-200
        active:scale-95
        sm:hidden
      "
      aria-label="Go to About page"
    >
      <Info className="w-4 h-4" />
      About
    </Button>
  );
}
