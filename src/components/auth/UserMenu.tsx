import type { User } from "firebase/auth";
import { Link } from "react-router-dom";
import { useIsLightBackground } from '@/hooks/useIsLightBackground';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserMenuProps {
  user: User;
  onLogout: () => void;
}

export const UserMenu = ({ user, onLogout }: UserMenuProps) => {
  const isLightBackground = useIsLightBackground();

  const displayName = user.displayName || user.email?.split("@")[0] || "User";
  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <span
        className={`
          text-sm font-medium hidden sm:block drop-shadow-md
          ${isLightBackground ? "text-gray-900" : "text-gray-100"}
        `}
      >
        Hello, {displayName}
      </span>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar
            className="
              w-12 h-12
              transition
              hover:scale-105
              outline-none
              ring-0
              cursor-pointer
            "
          >
            <AvatarImage src={user.photoURL || undefined} alt={displayName} />
            <AvatarFallback
              className="
                bg-gradient-to-br from-orange-500 to-orange-600 
                text-white font-semibold
              "
            >
              {avatarLetter}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="
            w-60 
            bg-white/30 
            backdrop-blur-xl 
            border border-white/40 
            shadow-xl 
            rounded-xl
            text-gray-800
            text-right
          "
        >
          <DropdownMenuLabel className="p-3">
            <p className="text-base text-gray-900">{displayName}</p>
            <p className="text-base text-gray-700/80 truncate">{user.email}</p>
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="bg-white/40" />

          <DropdownMenuItem
            className="justify-center text-base hover:bg-white/40 transition rounded-md"
          >
            <Link to="/dashboard" >
              My Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="justify-center text-base hover:bg-white/40 transition rounded-md"
          >
            <Link to="/settings" >
            Settings
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="bg-white/40" />

          <DropdownMenuItem
            className="
              text-red-600 
              text-base
              font-medium 
              hover:bg-red-500/20 
              focus:text-red-700
              transition rounded-md
              justify-center
              cursor-pointer
            "
            onClick={onLogout}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
