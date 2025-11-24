import { useIsLightBackground } from '@/hooks/useIsLightBackground';
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserMenu } from "../auth/UserMenu";
import { AuthButtons } from "../auth/AuthButtons";
import { Logo } from "../elements/Logo";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isLightBackground = useIsLightBackground();

  const textColor = isLightBackground
    ? "text-gray-800"
    : "text-white drop-shadow-lg";

  return (
    <header
      className="
        backdrop-blur-md 
        bg-white/20 
        border-b border-white/30 
        shadow-sm
        fixed top-0 left-0 w-full 
        z-50
      "
    >
      <div className="mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <div className="flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/about")}
              className={`
                ${textColor}
                text-lg
                hover:opacity-80
                transition
              `}
            >
              About
            </Button>

            {user ? (
              <UserMenu user={user} onLogout={() => logout()} />
            ) : (
              <AuthButtons
                onLogin={() => navigate("/login")}
                onSignUp={() => navigate("/signup")}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
