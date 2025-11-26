import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/Hero";
import { FloatingAboutButton } from "@/components/elements/FloatingAboutButton";

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FloatingAboutButton />
    </div>
  );
}
