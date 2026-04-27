import bannerImg from "../assets/banner.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Globe, Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgesRef = useRef(null);
  const ctaRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(eyebrowRef.current,    { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .to(titleRef.current,      { opacity: 1, y: 0, duration: 1.0 }, 0.55)
      .to(subtitleRef.current,   { opacity: 1, y: 0, duration: 0.8 }, 0.85)
      .to(badgesRef.current,     { opacity: 1, y: 0, duration: 0.7 }, 1.05)
      .to(ctaRef.current,        { opacity: 1, y: 0, duration: 0.7 }, 1.2);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;

      gsap.to(heroImgRef.current, { x: dx * -18, y: dy * -12, duration: 1.2, ease: "power2.out" });
      gsap.to(heroBgRef.current,  { x: dx * 10,  y: dy * 6,   duration: 1.6, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to([heroImgRef.current, heroBgRef.current], { x: 0, y: 0, duration: 1.2, ease: "power2.out" });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={heroRef} className="w-full relative overflow-hidden h-[100vh] bg-[#1a0f00]">

      {/* Background layers */}
      <div ref={heroBgRef} className="absolute inset-0 will-change-transform" />
      <img
        ref={heroImgRef}
        src={bannerImg}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-45 saturate-[1.2] will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/40 to-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center gap-0">

        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="flex items-center gap-3 mb-6 opacity-0 translate-y-5"
        >
          <div className="w-8 h-px bg-orange-400/70" />
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-orange-400/90">
            Discover · Cook · Savor
          </span>
          <div className="w-8 h-px bg-orange-400/70" />
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-serif text-5xl sm:text-6xl font-bold text-white leading-[1.1] mb-5 max-w-2xl opacity-0 translate-y-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Find your next{" "}
          <em className="italic text-orange-400">favorite recipe</em>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base font-light text-white/65 max-w-md leading-relaxed mb-8 opacity-0 translate-y-5"
        >
          From quick weekday meals to global flavors —<br />
          inspiration for every moment, just one click away.
        </p>

        {/* Badges */}
        <div ref={badgesRef} className="flex items-center gap-3 mb-9 opacity-0 translate-y-5">
          {[
            { icon: <Globe className="w-3.5 h-3.5" />, label: "Global Cuisines" },
            { icon: <Heart className="w-3.5 h-3.5" />, label: "Save Favorites" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/7 border border-white/12 backdrop-blur-md text-white/75 text-xs tracking-wide"
            >
              {icon}
              {label}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="opacity-0 translate-y-5">
          <Link to="/filter">
            <Button className="flex items-center gap-3 px-8 py-6 text-base font-medium bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-[0_8px_32px_rgba(249,115,22,0.35)] transition-all duration-300 active:scale-95">
              <Search className="w-4 h-4" />
              Search Recipe
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};