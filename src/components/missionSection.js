"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const cards = [
  {
    title: "Accessibility Gap",
    desc: "Quality healthcare facilities are often far from underserved communities, making regular care a challenge.",
    innerTitle: "Local Clinics",
    innerDesc: "We bring healthcare to your doorstep with neighbourhood clinics in Bhiwandi and Vasai.",
    color: "bg-[#4A1E3F]",
    parentColor: "bg-[#EEE3EB]",
    direction: { x: 0, y: -40 }, // Moves UP
  },
  {
    title: "Affordability Crisis",
    desc: "Rising healthcare costs push families into debt, making them choose between health and daily necessities.",
    innerTitle: "Subscription Model",
    innerDesc: "Low-cost, all-inclusive monthly plans that cover everything from checkups to specialists.",
    color: "bg-[#E05C5C]",
    parentColor: "bg-[#FFE7E9]",
    direction: { x: 40, y: 0 }, // Moves RIGHT
  },
  {
    title: "Poor Service Quality",
    desc: "Long wait times, impersonal care, and fragmented health records make healthcare frustrating.",
    innerTitle: "Care Team",
    innerDesc: "Personal health coordinators, digital records, and priority appointments.",
    color: "bg-[#E05C5C]",
    parentColor: "bg-[#FFE7E9]",
    direction: { x: -40, y: 0 }, // Moves LEFT
  },
  {
    title: "Health Ignorance",
    desc: "Lack of awareness about preventive care leads to late diagnoses and preventable complications.",
    innerTitle: "Outreach Programs",
    innerDesc: "Regular health camps, screenings, and education sessions at workplaces.",
    color: "bg-[#4A1E3F]",
    parentColor: "bg-[#EEE3EB]",
    direction: { x: 0, y: 40 }, // Moves DOWN
  },
];

export default function MissionSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Only run on Desktop (xl)
    if (window.innerWidth < 1280) return;

    const section = sectionRef.current;
    const floatingElements = document.querySelectorAll("[data-float-card]");

    const handleScroll = () => {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if section is in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate progress (0 to 1) of the section moving through the viewport
        const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        
        // Normalize progress around center (-0.5 to 0.5)
        const shift = scrollProgress - 0.5;

        floatingElements.forEach((el, i) => {
          const { x, y } = cards[i].direction;
          
          // Apply directional parallax
          // We keep the base 32px/-16px from your original design and add the shift
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
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT TEXT */}
            <div className="max-w-lg lg:sticky lg:top-40 h-fit">
              <p className="text-sm font-medium text-[#E5635B]">
                Our Mission
              </p>
              <h2 className="mt-2 text-4xl font-semibold text-[#4A1E3F] lg:text-5xl lg:leading-tight">
                Bridging the <br /> Healthcare Gap
              </h2>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl ${card.parentColor} p-6 shadow-sm`}
                >
                  <h3 className="text-sm font-semibold text-[#2F2F2F]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {card.desc}
                  </p>

                  {/* INNER FLOAT CARD */}
                  <div
                    data-float-card
                    className={`
                      mt-6 rounded-xl p-5 text-white
                      transition-transform duration-75 ease-out
                      /* Default positions for Mobile/Tablet */
                      translate-x-4 -translate-y-2
                      /* Desktop starting positions set by JS */
                      xl:translate-x-8 xl:-translate-y-4
                      ${card.color}
                      shadow-xl
                    `}
                  >
                    <h4 className="text-sm font-semibold">
                      {card.innerTitle}
                    </h4>
                    <p className="mt-2 text-xs opacity-90">
                      {card.innerDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* DESKTOP IMAGE - Sticky to bottom */}
      <div className="pointer-events-none absolute bottom-0 left-10 hidden lg:block">
        <Image
          src="/mission-doctor.webp"
          alt="Doctor"
          width={500}
          height={500}
          className="h-[65vh] w-auto object-contain scale-x-[-1] object-bottom"
          priority
        />
      </div>
    </section>
  );
}