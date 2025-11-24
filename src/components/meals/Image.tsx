import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MealImageProps {
  src: string;
  alt: string;
}

export const MealImage = ({ src, alt }: MealImageProps) => {
  return (
    <div
      className="
        w-full 
        rounded-xl 
        shadow-md 
        border 
        overflow-hidden
      "
    >
      <AspectRatio ratio={16 / 9}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
    </div>
  );
}
