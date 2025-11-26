import { Button } from "@/components/ui/button";
import { User, UserPlus } from "lucide-react";

interface AuthButtonsProps {
  onLogin: () => void;
  onSignUp: () => void;
}

export const AuthButtons = ({ onLogin, onSignUp }: AuthButtonsProps) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <Button
        variant="ghost"
        onClick={onLogin}
        className="px-2 sm:px-4 py-2 bg-black text-white hover:bg-neutral-800 hover:text-white rounded-lg transition-all duration-300 flex items-center gap-1 sm:gap-2"
      >
        <User className="w-4 h-4" />
        <span className="text-sm sm:text-base">Login</span>
      </Button>

      <Button
        onClick={onSignUp}
        className="px-2 sm:px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-lg rounded-lg transition-all duration-300 flex items-center gap-1 sm:gap-2 shadow-lg hover:shadow-xl"
      >
        <UserPlus className="w-4 h-4" />
        <span className="text-sm sm:text-base whitespace-nowrap">SignUp</span>
      </Button>
    </div>
  );
};
