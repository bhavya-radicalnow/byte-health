"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { heroSlides } from "./heroSlides";

export function HeroCarousel({
  onChange,
  variant = "desktop",
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi || !onChange) return;

    const update = () => onChange(emblaApi.selectedScrollSnap());
    emblaApi.on("select", update);
    update();

    const auto = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(auto);
  }, [emblaApi, onChange]);

  return (
    <div ref={emblaRef} className="overflow-hidden w-full h-full">
      <div className="flex h-full">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="relative flex-[0_0_100%] flex items-end justify-center"
          >
            {variant === "card" ? (
              <Image
                src={slide.image}
                alt={slide.highlight}
                fill
                priority={i === 0}
                className="object-cover object-top"
              />
            ) : (
              <Image
                src={slide.image}
                alt={slide.highlight}
                width={520}
                height={720}
                priority={i === 0}
                className="w-auto max-h-[78vh] object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
