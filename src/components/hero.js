"use client";

import { useState } from "react";
import { HeroCarousel } from "./heroCarousel";
import { heroSlides } from "./heroSlides";

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  return (
    <section className="bg-white overflow-hidden">

      {/* ========================= */}
      {/* MOBILE + iPAD (IMAGE + GRADIENT TEXT) */}
      {/* ========================= */}
      <div className="xl:hidden">
        <div className="
          relative
          h-[520px]
          md:h-[620px]
          lg:h-[770px]
          xl:hidden
          w-full
          overflow-hidden
        ">
          {/* IMAGE */}
          <HeroCarousel onChange={setActive} variant="card" />

          {/* STRONG BOTTOM GRADIENT */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

          {/* TEXT CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 text-white">
            <h1 className="text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              {slide.titleParts.map((part, i) => (
                <span
                  key={i}
                  className={`
        block
        ${part.highlight ? "font-semibold text-[#E5635B]" : ""}
      `}
                >
                  {part.text}
                </span>
              ))}
            </h1>


            <p className="mt-2 text-sm text-white/90 leading-relaxed max-w-[90%]">
              {slide.description}
            </p>

            <div className="mt-5 flex items-center gap-3 flex-wrap">
              {/* PRIMARY CTA */}
              <button
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full
                  bg-[rgba(235,81,88,0.86)]
                  px-5 py-3
                  text-sm font-medium text-white
                  shadow-lg
                  hover:bg-[rgba(235,81,88,1)]
                  transition
                  whitespace-nowrap
                "
              >
                {slide.ctaPrimary}
              </button>

              {/* SECONDARY CTA */}
              <button
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  bg-white
                  px-5 py-3
                  text-sm font-medium text-[#2F2F2F]
                  shadow
                  hover:bg-gray-100
                  transition
                  whitespace-nowrap
                "
              >
                {slide.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* ========================= */}
      {/* DESKTOP (CONSTRAINED SPLIT HERO) */}
      {/* ========================= */}
      <div className="hidden xl:block">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 lg:min-h-[80vh]">

            {/* LEFT CONTENT */}
            <div
              key={active}
              className="flex flex-col justify-center max-w-[520px] py-14 transition-all duration-500"
            >
              <h1 className="text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                {slide.titleParts.map((part, i) => (
                  <span
                    key={i}
                    className={`
        block
        ${part.highlight ? "font-semibold text-[#E5635B]" : "font-semibold text-[#2F2F2F]"}
      `}
                  >
                    {part.text}
                  </span>
                ))}
              </h1>


              <p className="mt-6 max-w-md text-base text-gray-600">
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

            {/* RIGHT IMAGE */}
            <div className="flex items-end justify-center">
              <HeroCarousel onChange={setActive} />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
