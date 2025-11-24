import { MotionUp } from '../elements/MotionUp';
import { MotionRight } from '../elements/MotionRight';
import { features } from '@/data/features';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '../ui/badge';

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MotionUp>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all hover:-translate-y-1 border-orange-100"
                >
                  <CardContent className="pt-6 text-center">
                    <feature.icon className="w-10 h-10 mx-auto text-orange-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </MotionUp>

          <MotionRight>
            <div className="space-y-6">
              <Badge variant="orange">
                Features
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Build a Scalable and Modern  
                <span className="text-orange-600"> Component Architecture</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Designed with modern React principles, this project emphasizes modular
                components, clean separation of concerns, and flexible UI patterns.
                Every feature was built to scale smoothly and adapt to future growth.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reusable Components</h4>
                    <p className="text-gray-600">
                      UI elements are fully modular, reusable, and consistent across the entire app.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Hooks Architecture</h4>
                    <p className="text-gray-600">
                      Logic is abstracted into isolated hooks for fetching, filtering, and state handling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Clean, Scalable Structure</h4>
                    <p className="text-gray-600">
                      A well-organized folder structure with clear separation of responsibilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionRight>
        </div>
      </div>
    </section>
  );
};