import { Header } from "@/components/layout/Header";
import { LoginForm } from "@/components/auth/LoginForm";
import bgLogin from "../assets/bg-login.jpg";

export const Login = () => {
  return (
    <>
      <Header />
      <div className="w-full relative overflow-hidden h-[100vh] flex items-center justify-center px-4">
        <div
          className="
            absolute inset-0 
            bg-cover bg-center 
            blur-sm scale-110
          "
          style={{ backgroundImage: `url(${bgLogin})` }}
        />

        <LoginForm />
      </div>
    </>
  );
}
