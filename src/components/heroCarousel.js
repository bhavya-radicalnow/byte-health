"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { useEffect } from "react";
import { heroSlides } from "./heroSlides";

export function HeroCarousel({ onChange }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
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
    <div ref={emblaRef} className="overflow-hidden w-full h-full">
      <div className="flex h-full">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="relative flex-[0_0_100%] flex items-end justify-center"
          >
            <div className="relative h-[360px] w-[320px] md:h-[480px] md:w-[420px] lg:h-[560px] lg:w-[520px]">
              <Image
                src={slide.image}
                alt={slide.highlight}
                fill
                priority={i === 0}
                className="object-contain object-bottom"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
