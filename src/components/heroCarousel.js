"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { useEffect } from "react";
import { heroSlides } from "./heroSlides";

export function HeroCarousel({ onChange }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [Fade()]
  );

  useEffect(() => {
    if (!emblaApi || !onChange) return;

    const update = () => onChange(emblaApi.selectedScrollSnap());
    emblaApi.on("select", update);
    update();

    const auto = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(auto);
  }, [emblaApi, onChange]);

  return (
    // REMOVED max-w-[1220px] here. Let the parent control the width.
    <div ref={emblaRef} className="overflow-hidden w-full h-full select-none">
      <div className="flex h-full">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="relative flex-[0_0_100%] h-full flex items-end justify-center"
          >
            {/* FLUID DIMENSIONS:
               Instead of w-[320px], we use w-full h-full.
               This adapts to the 'aspect-ratio' on mobile and 'min-h' on desktop.
            */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.highlight || "Hero Image"}
                fill
                priority={i === 0}
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}