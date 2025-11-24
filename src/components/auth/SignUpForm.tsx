import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export const SignUpForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    try {
      await signup(form.email, form.password, form.name);
      navigate("/"); 
    } catch (error) {
      console.error("Error creating account", error);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-xl bg-white/90 backdrop-blur-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-gray-800">
          Create your ChefSpot account
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex flex-col space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="focus-visible:ring-orange-500"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="youremail@exemple.com"
              value={form.email}
              onChange={handleChange}
              className="focus-visible:ring-orange-500"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="•••••••••••"
              value={form.password}
              onChange={handleChange}
              className="focus-visible:ring-orange-500"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="•••••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
              className="focus-visible:ring-orange-500"
              required
            />
          </div>

          <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className="flex justify-center items-center gap-2 mt-5 text-sm text-gray-700">
          <span>Already have an account?</span>

          <Link
            to="/login"
            className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
