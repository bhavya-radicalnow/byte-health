"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const cards = [
  {
    title: "Accessibility Gap",
    desc: "Too many communities lack nearby, reliable healthcare.",
    innerTitle: "Local Clinics",
    innerDesc: "Neighborhood clinics that bring care closer to home.",
    color: "bg-[#4A1E3F]",
    parentColor: "bg-[#EEE3EB]",
    direction: { x: 0, y: -30 },
  },
  {
    title: "Affordability Crisis",
    desc: "Rising costs force families to choose between health and daily needs.",
    innerTitle: "Membership",
    innerDesc: "Simple, low-cost plans that make quality care affordable.",
    color: "bg-[#E05C5C]",
    parentColor: "bg-[#FFE7E9]",
    direction: { x: 30, y: 0 },
  },
  {
    title: "Poor Service Quality",
    desc: "Long waits & fragmented services break trust in the system.",
    innerTitle: "Care Team",
    innerDesc: "Dedicated care teams, and priority access.",
    color: "bg-[#E05C5C]",
    parentColor: "bg-[#FFE7E9]",
    direction: { x: -30, y: 0 },
  },
  {
    title: "Health Ignorance",
    desc: "Lack of awareness leads to preventable illness.",
    innerTitle: "Outreach Programs",
    innerDesc: "Community outreach, and education—at your doorstep.",
    color: "bg-[#4A1E3F]",
    parentColor: "bg-[#EEE3EB]",
    direction: { x: 0, y: 30 },
  },
];

export default function MissionSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Only animate on Desktop (xl and above)
    if (window.innerWidth < 1280) return;

    const section = sectionRef.current;
    const floatingElements = document.querySelectorAll("[data-float-card]");

    const handleScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Animate when section is in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const shift = scrollProgress - 0.5;

        floatingElements.forEach((el, i) => {
          const { x, y } = cards[i].direction;
          const moveX = 32 + (shift * x);
          const moveY = -16 + (shift * y);
          el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden pt-16 lg:pt-24 pb-16 lg:pb-0">
      <div className="mx-auto max-w-[1220px] px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col h-full relative z-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#E5635B]">
                Our Mission
              </p>
              <h2 className="mt-3 text-4xl font-bold text-[#4A1E3F] lg:text-6xl lg:leading-[1.1] tracking-tight">
                Bridging the <br /> Healthcare Gap
              </h2>
            </div>

            <div className="hidden lg:block mt-auto relative w-full h-[550px] -ml-8 xl:-ml-4">
              <Image
                src="/mission-doctor.webp"
                alt="Doctor"
                fill
                className="object-contain object-bottom scale-x-[-1]"
                priority
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col lg:mt-12 lg:max-w-[540px] lg:ml-auto">
            
            <p className="text-lg font-medium text-gray-800 leading-relaxed mb-10">
              At Byte Health, we strengthen communities by building health systems that are <span className="font-bold">accessible, coordinated,</span> and <span className="font-bold">compassionate.</span>
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-5">
              {cards.map((card, i) => (
                <div
                  key={i}
                  // UPDATED: min-h increased to 340px to prevent overlap with new line-height
                  className={`relative rounded-2xl ${card.parentColor} p-6 shadow-sm min-h-[250px] flex flex-col justify-between gap-6`}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-[#2F2F2F] mb-1">
                      {card.title}
                    </h3>
                    {/* UPDATED: Changed leading-relaxed to leading-loose for more text spacing */}
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Animated Inner Card */}
                  <div
                    data-float-card
                    className={`
                      mt-auto w-[100%] self-end rounded-xl p-5 text-white shadow-lg
                      ${card.color}
                      transition-transform duration-75 ease-out
                      translate-x-4 -translate-y-2
                    `}
                    // UPDATED: Changed w-[90%] to w-[98%] for wider inner card
                  >
                    <h4 className="text-base font-bold">{card.innerTitle}</h4>
                    <p className="mt-1 text-xs opacity-90 leading-snug">
                      {card.innerDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}