import { MotionUp } from '../elements/MotionUp';
import { MotionRight } from '../elements/MotionRight';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge"
import { ChefHat, ArrowRight, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <MotionUp>
            <Badge 
              variant="secondary" 
              className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <ChefHat className="w-4 h-4" />
              Modern Web Development Project
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              A Complete
              <span className="text-orange-600"> React Application </span>
              Built From Scratch
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              This project showcases a fully typed React application featuring 
              API integration, authentication, custom hooks, responsive UI, and modern component 
              patterns. Explore meals, manage favorites, and experience smooth navigation powered 
              by a clean and scalable architecture.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              
              <Button
                size="lg"
                onClick={() => navigate('/filter')}
                className="bg-orange-600 hover:bg-orange-700"
              >
                View App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/login')}
              >
                Create Account
              </Button>

              <a 
                href="https://github.com/luchersou/chefspot-react"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-base font-medium"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
            </MotionUp>
          </div>

          <MotionRight>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg" 
                alt="Delicious meal 1"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
              <img 
                src="https://www.themealdb.com/images/media/meals/1550441882.jpg" 
                alt="Delicious meal 2"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg" 
                alt="Delicious meal 3"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
              <img 
                src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg" 
                alt="Delicious meal 4"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </div>
          </div>
          </MotionRight>
        </div>
      </div>
    </section>
  );
};