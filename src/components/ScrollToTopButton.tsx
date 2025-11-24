import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = () =>{
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50 transition-opacity
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="
          rounded-full shadow-lg 
          hover:scale-110 transition 
          p-3 cursor-pointer
        "
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
