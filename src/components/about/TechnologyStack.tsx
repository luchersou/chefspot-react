import { MotionUp } from '../elements/MotionUp';
import { MotionRight } from '../elements/MotionRight';
import { Badge } from '@/components/ui/badge';
import { technologies } from '@/data/technologies';

export const TechnologyStack = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <MotionUp>
            <div className="space-y-6 sticky top-8">
              <Badge variant="orange">
                Technology
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Built With
                <span className="text-orange-600"> Modern Web Technologies</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                This project is built with a modern and performance-oriented web ecosystem. 
                It combines a type-safe codebase, fast rendering, and a clean UI architecture. 
                The application integrates Firebase Authentication, data fetching from TheMealDB 
                using TanStack Query, and custom hooks designed to keep the code organized, 
                scalable, and maintainable.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Lightning-fast rendering with React 19 and Vite</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Modern and accessible UI using ShadCN and Tailwind CSS</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Efficient server state management with TanStack Query</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Secure and seamless authentication via Firebase Auth</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Custom hooks for theming, pagination, and API integration</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Fully type-safe foundation powered by TypeScript</span>
                </div>
              </div>
            </div>
          </MotionUp>
          <MotionRight>
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <MotionRight>
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{tech.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {tech.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          {item.name}
                        </Badge>
                        <p className="text-sm text-gray-600 flex-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                </MotionRight>
              ))}
            </div>
          </MotionRight>
        </div>
      </div>
    </section>
  );
};