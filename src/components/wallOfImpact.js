'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    company: "TechFabric Industries",
    impact: "40% reduction in sick leaves",
    quote: "Byte Health transformed our workforce wellness. Our employees are healthier and more productive.",
    name: "Rajesh Sharma",
    role: "CEO",
    avatar: "/avatar-rajesh.png",
  },
  {
    company: "Global Logistics Co.",
    impact: "25% increase in engagement",
    quote: "The personalized care approach is what sets them apart. Our team feels genuinely supported.",
    name: "Anjali Gupta",
    role: "HR Director",
    avatar: "/avatar-rajesh.png", // Replace with actual avatar
  },
];

const partners = [
  "/logo-icertis.png",
  "/logo-zenoti.png",
  "/logo-freshworks.png",
  "/logo-kotak.png",
];

export default function WallOfImpactSection() {
  const containerRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax: Card 1 moves UP, Card 2 moves DOWN
  // Increased range slightly (80) to account for wider desktop cards
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={containerRef} className="bg-white py-20 lg:py-32 overflow-hidden">
      {/* Main Container: 
          - Mobile: Standard max-w-7xl
          - Desktop: xl:max-w-[1440px] to allow for the 'Wider' card look
      */}
      <div className="mx-auto max-w-7xl xl:max-w-[1440px] px-6 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT: Sticky on Desktop */}
          <div className="max-w-md lg:sticky lg:top-32 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/certified-badge.png"
                alt="Certified Employer"
                width={80}
                height={80}
                className="xl:w-24 xl:h-24"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl xl:text-5xl font-bold leading-tight text-[#4A1E3F]"
            >
              Wall of <br />
              <span className="text-[#E5635B]">Impact</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed"
            >
              Join the growing community of employers who prioritise their
              workforce&apos;s health and well-being.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#4A1E3F] px-8 py-3 text-sm font-bold text-[#4A1E3F] transition-all hover:bg-[#4A1E3F] hover:text-white"
            >
              Partner with us <span>→</span>
            </motion.button>
          </div>

          {/* RIGHT CONTENT: Wide Parallax Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 relative z-0">
            
            {/* CARD 1: Moving UP */}
            <motion.div style={{ y: y1 }} className="h-fit">
              <div className="rounded-[2.5rem] border p-8 xl:p-12 shadow-sm bg-[#FBF4F7] border-[#E5635B]/10 min-h-[380px] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5635B]/60">Case Study</p>
                  <h3 className="mt-3 text-2xl xl:text-3xl font-bold text-[#4A1E3F]">{testimonials[0].company}</h3>
                  
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-bold text-green-700">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    {testimonials[0].impact}
                  </div>

                  <p className="mt-8 text-lg xl:text-xl text-gray-700 leading-relaxed font-medium italic">
                    “{testimonials[0].quote}”
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4 border-t border-gray-100 pt-8">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-md">
                    <Image src={testimonials[0].avatar} alt={testimonials[0].name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">{testimonials[0].name}</p>
                    <p className="text-sm text-gray-500 font-medium">{testimonials[0].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Moving DOWN */}
            <motion.div style={{ y: y2 }} className="h-fit md:mt-24 lg:mt-48">
              <div className="rounded-[2.5rem] border border-gray-100 bg-white p-8 xl:p-12 shadow-sm min-h-[380px] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Case Study</p>
                  <h3 className="mt-3 text-2xl xl:text-3xl font-bold text-[#4A1E3F]">{testimonials[1].company}</h3>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-bold text-green-700">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    {testimonials[1].impact}
                  </div>

                  <p className="mt-8 text-lg xl:text-xl text-gray-700 leading-relaxed font-medium italic">
                    “{testimonials[1].quote}”
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4 border-t border-gray-100 pt-8">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-md">
                    <Image src={testimonials[1].avatar} alt={testimonials[1].name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">{testimonials[1].name}</p>
                    <p className="text-sm text-gray-500 font-medium">{testimonials[1].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* LOGO STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 pt-16 border-t border-gray-50 flex flex-wrap items-center justify-center gap-x-16 gap-y-10"
        >
          {partners.map((logo, i) => (
            <div key={i} className="relative h-10 w-32 xl:w-40 filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <Image
                src={logo}
                alt="Partner logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}