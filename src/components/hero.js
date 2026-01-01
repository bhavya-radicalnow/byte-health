"use client";

import { useState } from "react";
import { HeroCarousel } from "./heroCarousel";
import { heroSlides } from "./heroSlides";

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  return (
    <section className="bg-white overflow-hidden pt-1 md:pt-2 xl:pt-4">
      {/* ================= MOBILE + iPAD ================= */}
      <div className="xl:hidden">
        <div className="relative min-h-[440px] md:min-h-[520px] w-full">
          <HeroCarousel onChange={setActive} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 text-white">
            <p className="leading-tight">
              {slide.titleParts.map((part, i) => (
                <span
                  key={i}
                  className={`block font-light ${
                    part.highlight
                      ? "text-[48px] font-semibold text-[#EE656C]"
                      : "text-[36px] text-white" // Fixed mobile color to white for visibility
                  }`}
                >
                  {part.text}
                </span>
              ))}
            </p>
            <p className="mt-2 text-sm text-white/90 max-w-[100%]">
              {slide.description}
            </p>
            <div className="mt-8 flex gap-4">
                <button className="h-[51px] w-[192px] rounded-full bg-[rgba(235,81,88,0.86)] text-sm font-medium text-white">
                  {slide.ctaPrimary}
                </button>

                <button className="h-[51px] w-[192px] rounded-full border border-[#E5E5E5] text-sm font-medium text-[#FFFFFF] flex items-center justify-center gap-3">
                  {slide.ctaSecondary}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E5635B] text-[#E5635B] text-xs">
                    ▶
                  </span>
                </button>
              </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden xl:block">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 min-h-[52vh]">
            {/* LEFT */}
            <div className="flex flex-col justify-center max-w-[520px] xl:-mt-6">
              <h1 className="leading-tight">
                {slide.titleParts.map((part, i) => (
                  <span
                    key={i}
                    className={`block font-semibold ${
                      part.highlight
                        ? "text-6xl text-[#E5635B]" // LARGER SIZE for highlight
                        : "text-4xl text-[#2F2F2F]" // SMALLER SIZE for normal
                    }`}
                  >
                    {part.text}
                  </span>
                ))}
              </h1>

              <p className="mt-5 max-w-md text-base text-gray-600">
                {slide.description}
              </p>
              <div className="mt-8 flex gap-4">
                <button className="h-[51px] w-[192px] rounded-full bg-[rgba(235,81,88,0.86)] text-sm font-medium text-white">
                  {slide.ctaPrimary}
                </button>

                <button className="h-[51px] w-[192px] rounded-full border border-[#E5E5E5] text-sm font-medium text-[#2F2F2F] flex items-center justify-center gap-3">
                  {slide.ctaSecondary}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E5635B] text-[#E5635B] text-xs">
                    ▶
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-end justify-center xl:-mt-4">
              <HeroCarousel onChange={setActive} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}