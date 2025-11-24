import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { AppRoutes } from "./routes/AppRoutes";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import ScrollToTop from "./components/elements/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <ScrollToTop />
        <QueryClientProvider client={queryClient}>
          <ScrollToTopButton />
          <AppRoutes />
        </QueryClientProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

