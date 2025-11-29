import { Header } from "@/components/layout/Header";
import { SignUpForm } from "@/components/auth/SignUpForm";
import bgLogin from "../assets/bg-login.jpg";

export const SignUp = () => {
  return (
    <>
      <Header />
      <div className="w-full relative overflow-hidden h-[100vh] flex items-center justify-center px-4">
        <img 
          src={bgLogin}
          alt="Background"
          loading="eager"
          className="
            absolute inset-0 
            w-full h-full
            object-cover
            blur-sm scale-110
          "
        />

        <SignUpForm />
      </div>
    </>
  );
}