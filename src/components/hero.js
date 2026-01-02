"use client";

import { useState } from "react";
import { HeroCarousel } from "./heroCarousel";
import { heroSlides } from "./heroSlides";

export default function Hero() {
  const [active, setActive] = useState(0);
  // Guard clause in case slides are empty to prevent crash
  const slide = heroSlides[active] || heroSlides[0];

  return (
    <section className="bg-white overflow-hidden pt-4 md:pt-8 lg:pt-12">

      {/* ================= MOBILE + TABLET (Portrait) ================= */}
      <div className="xl:hidden">
        {/* Aspect Ratio controls the height here. 
            The Carousel will fill this box completely. */}
        <div className="relative w-full aspect-[4/5] md:aspect-[16/10] max-h-[650px]">

          <HeroCarousel onChange={setActive} />

          {/* Gradient Overlay for text readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 text-white z-10">
            <h1 className="leading-[1.1]">
              {slide.titleParts.map((part, i) => (
                <span key={i} className={`block ${part.highlight ? "text-[40px] font-bold text-[#EE656C]" : "text-[32px] font-light"}`}>
                  {part.text}
                </span>
              ))}
            </h1>
            <p className="mt-3 text-sm text-white/90 line-clamp-3 md:line-clamp-none max-w-lg">
              {slide.description}
            </p>
            <div className="mt-6 flex gap-3">
              {/* Check if string exists AND has length > 0 */}
              {slide.ctaPrimary && slide.ctaPrimary.length > 0 && (
                <button className="px-6 py-3 rounded-full bg-[#EB5158] text-sm font-medium text-white shadow-lg">
                  {slide.ctaPrimary}
                </button>
              )}

              {/* Check if string exists AND has length > 0 */}
              {slide.ctaSecondary && slide.ctaSecondary.length > 0 && (
                <button className="px-6 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium text-white flex items-center gap-2">
                  {slide.ctaSecondary} <span className="text-[10px]">▶</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP (Max Width 1220px) ================= */}
      <div className="hidden xl:block">
        <div className="mx-auto max-w-[1220px] px-8">
          {/* Defined min-height here ensures the carousel is tall enough */}
          <div className="grid grid-cols-[1fr_1.1fr] gap-12 items-center min-h-[550px]">

            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center pb-10">
              <h1 className="leading-[1.15]">
                {slide.titleParts.map((part, i) => (
                  <span key={i} className={`block ${part.highlight ? "text-[64px] font-bold text-[#E5635B]" : "text-[42px] font-medium text-[#2F2F2F]"}`}>
                    {part.text}
                  </span>
                ))}
              </h1>

              <p className="mt-6 max-w-md text-lg text-gray-600 leading-relaxed">
                {slide.description}
              </p>

              <div className="mt-6 flex gap-3">
                {/* Check if string exists AND has length > 0 */}
                {slide.ctaPrimary && slide.ctaPrimary.length > 0 && (
                  <button className="px-6 py-3 rounded-full bg-[#EB5158] text-sm font-medium text-white shadow-lg">
                    {slide.ctaPrimary}
                  </button>
                )}

                {/* Check if string exists AND has length > 0 */}
                {slide.ctaSecondary && slide.ctaSecondary.length > 0 && (
                  <button className="px-6 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium text-white flex items-center gap-2">
                    {slide.ctaSecondary} <span className="text-[10px]">▶</span>
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            {/* h-full ensures it takes the full height of the grid row */}
            <div className="flex items-end justify-center h-full pt-10">
              <div className="w-full h-full">
                <HeroCarousel onChange={setActive} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}