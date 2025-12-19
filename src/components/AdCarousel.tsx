import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import syscamposAd from "@/assets/ads/syscampos.png";

interface Ad {
  id: string;
  image: string;
  alt: string;
  link: string;
}

const ads: Ad[] = [
  {
    id: "syscampos",
    image: syscamposAd,
    alt: "Syscampos - Automatize seu secador com mais segurança, controle e eficiência",
    link: "https://api.whatsapp.com/send?phone=5527997856364&text=Olá%2C+gostaria+de+conhecer+o+sistema+Syscampos!",
  },
];

interface AdCarouselProps {
  className?: string;
  autoPlayInterval?: number;
}

const AdCarousel = ({ className, autoPlayInterval = 5000 }: AdCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % ads.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (ads.length <= 1) return;
    
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  const currentAd = ads[currentIndex];

  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <a
        href={currentAd.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full cursor-pointer transition-transform hover:scale-[1.01]"
      >
        <img
          src={currentAd.image}
          alt={currentAd.alt}
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </a>

      {/* Navigation arrows - only show if multiple ads */}
      {ads.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors shadow-md"
            aria-label="Anúncio anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors shadow-md"
            aria-label="Próximo anúncio"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-primary w-4"
                    : "bg-primary/40 hover:bg-primary/60"
                )}
                aria-label={`Ir para anúncio ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdCarousel;
