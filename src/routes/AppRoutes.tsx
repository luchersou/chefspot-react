import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import { Filters } from "@/pages/Filter";
import { MealDetail } from "@/pages/MealDetail";
import { Dashboard } from "@/pages/Dashboard";
import { Settings } from "@/pages/Settings";
import { About } from "@/pages/About";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/filter" element={<Filters />} />
      <Route path="/meal/:id" element={<MealDetail />} />
      <Route path="/about" element={<About />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
