import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { type Meal } from "@/types/Meal";
import { useAuth } from "@/context/AuthContext";
import { useFavorites } from "@/context/FavoritesContext";
import { useNavigate, useLocation } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, loginWithGoogle } = useAuth();
  const { addFavorite } = useFavorites();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      const state = location.state as {
        from?: string;
        favoriteMeal?: Meal;
      };
      if (state?.favoriteMeal) {
        addFavorite(state.favoriteMeal);
      }
      navigate(state?.from || "/dashboard", { replace: true });
    } catch {
      setError("Invalid credentials. Please check your email and password.");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await loginWithGoogle();
      const state = location.state as {
        from?: string;
        favoriteMeal?: Meal;
      };
      if (state?.favoriteMeal) {
        addFavorite(state.favoriteMeal);
      }
      navigate(state?.from || "/dashboard", { replace: true });
    } catch {
      setError("Failed to login with Google. Try again.");
    }
  };

  return (
    <Card className="w-full max-w-md shadow-xl bg-white/90 backdrop-blur-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-800">
          Sign in to your account
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleLogin} className="space-y-5">
          
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="youremail@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus-visible:ring-orange-500"
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="•••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus-visible:ring-orange-500"
              required
            />
          </div>

          <Button type="submit" variant="default" className="w-full">
            Sign in
          </Button>

          <Separator className="my-4" />

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full mt-2 flex items-center justify-center gap-3 bg-white"
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </Button>

          {error && (
            <p className="text-red-500 text-sm font-medium text-center">{error}</p>
          )}

          <div className="flex justify-end items-center text-sm pt-4 px-1">
            <Link to="/signup" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
              Create account
            </Link>
          </div>

        </form>
      </CardContent>
    </Card>
  );
}
