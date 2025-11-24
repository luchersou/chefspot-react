import { Search, Star, LayoutDashboard, Settings, Boxes , BookMarked, UserCheck, ListTree } from 'lucide-react';

export const features = [
  {
    icon: Search,
    title: "API-Driven Search",
    description: "Search meals in real time using TheMealDB API with TanStack Query."
  },
  {
    icon: Boxes ,
    title: "Component Modularization",
    description: "Clean and scalable architecture with fully modularized components."
  },
  {
    icon: Star,
    title: "Favorites System",
    description: "Save and persist your favorite meals with Context API + LocalStorage."
  },
  {
    icon: LayoutDashboard,
    title: "Interactive Dashboard",
    description: "Responsive dashboard with animated components powered by Framer Motion."
  },
  {
    icon: BookMarked,
    title: "Detailed Meal Viewer",
    description: "View full ingredient lists, instructions, and metadata using the meal-by-ID hook."
  },
  {
    icon: UserCheck,
    title: "Authentication",
    description: "Secure sign-in and session handling using Firebase Authentication."
  },
  {
    icon: ListTree,
    title: "Custom Hooks Architecture",
    description: "Modular logic with hooks for pagination, theme detection, and data fetching."
  },
  {
    icon: Settings,
    title: "Profile & Preferences",
    description: "Manage your account  through a clean settings page."
  }
];
