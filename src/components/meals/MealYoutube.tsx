import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Youtube } from "lucide-react";

interface MealYoutubeProps {
  youtubeUrl: string;
}

export const MealYoutube = ({ youtubeUrl }: MealYoutubeProps) => {
  if (!youtubeUrl) return null;

  const videoId = youtubeUrl.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Card className="border rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Youtube size={22} className="text-red-600" />
          How to Prepare
        </CardTitle>
      </CardHeader>

      <CardContent>
        <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
          <iframe
            src={embedUrl}
            title="Meal Preparation Video"
            allowFullScreen
            className="w-full h-full"
          />
        </AspectRatio>
      </CardContent>
    </Card>
  );
}
