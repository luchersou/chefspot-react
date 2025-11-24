import { HeroSection } from '@/components/about/HeroSection';
import { FeaturesSection } from '@/components/about/FeaturesSection';
import { TechnologyStack } from '@/components/about/TechnologyStack';
import { Header } from '@/components/layout/Header';

export const About = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TechnologyStack />
    </div>
  );
};