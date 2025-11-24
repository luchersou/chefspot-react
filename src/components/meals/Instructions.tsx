import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks } from "lucide-react";

interface MealInstructionsProps {
  instructions: string;
}

export const MealInstructions = ({ instructions }: MealInstructionsProps) => {
  const steps = instructions
    .split(/\r?\n/)
    .map(step => step.trim())
    .filter(step => step.length > 0);

  return (
    <Card className="border rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <ListChecks className="text-orange-500" size={22} />
          Instructions
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <span className="text-orange-600 font-bold text-lg">
              {index + 1}.
            </span>

            <p className="text-gray-800 leading-relaxed">
              {step}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
