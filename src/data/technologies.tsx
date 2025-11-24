import { Code2, Palette, Zap, Database } from 'lucide-react';

export const technologies = [
  {
    category: "Frontend Framework",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "React 19", description: "Concurrent rendering & modern UI patterns" },
      { name: "TypeScript", description: "Fully type-safe development" },
      { name: "React Router", description: "Client-side navigation and routing" },
      { name: "Vite", description: "Ultra-fast bundling and dev tooling" }
    ]

  },
  {
    category: "Styling & UI",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Tailwind CSS", description: "Utility-first styling approach" },
      { name: "Shadcn UI", description: "Accessible and themeable components" },
      { name: "Lucide Icons", description: "Clean and consistent iconography" },
      { name: "Framer Motion", description: "Smooth animations and transitions" }
    ]
  },
  {
    category: "State & Performance",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    items: [
      { name: "Context API", description: "Authentication and favorites state" },
      { name: "Custom Hooks", description: "Reusable logic for API, UI and pagination" },
      { name: "LocalStorage", description: "Persistent favorites management" },
      { name: "TanStack Query", description: "Optimized server-state caching" }
    ]
  },
  {
    category: "API & Data",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    items: [
      { name: "TheMealDB API", description: "Open-source recipe and meal data" },
      { name: "TanStack Query", description: "Data fetching, caching and mutations" },
      { name: "Firebase Authentication", description: "Secure login and session handling" }
    ]
  }
];
