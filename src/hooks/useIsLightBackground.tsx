import { useLocation } from "react-router-dom";

export const useIsLightBackground = (): boolean => {
  const location = useLocation();

  const lightRoutes = [
    "/filter",
    "/login",
    "/signup",
    "/dashboard",
    "/settings",
    "/about",
  ];

  return (
    lightRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/meal/")
  );
};
