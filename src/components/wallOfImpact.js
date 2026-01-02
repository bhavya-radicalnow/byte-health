'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    company: "TechFabric Industries",
    impactLabel: "Key Impact",
    impact: "40% reduction in sick leaves",
    quote: "Byte Health transformed our workforce wellness. Our employees are healthier and more productive.",
    name: "Rajesh Sharma",
    role: "CEO",
    avatar: "/avatar-rajesh.png",
    bgColor: "bg-[#FDF7FA]",
  },
  {
    company: "Global Logistics Co.",
    impactLabel: "Key Impact",
    impact: "25% increase in engagement",
    quote: "The personalized care approach is what sets them apart. Our team feels genuinely supported.",
    name: "Anjali Gupta",
    role: "HR Director",
    avatar: "/avatar-rajesh.png",
    bgColor: "bg-white",
  },
];

export default function WallOfImpactSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  // Reduced movement range for a more concise feel
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={containerRef} className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-[1220px] px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Sticky Content */}
          <div className="lg:sticky lg:top-32 z-10">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <Image src="/certified-badge.png" alt="Certified" width={90} height={100} className="object-contain" />
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-[#4A1E3F]">
              Wall of <span className="text-[#EB5757]">Impact</span>
            </motion.h2>

            <p className="mt-4 text-lg text-[#2F2F2F] leading-relaxed max-w-md">
              Join the growing community of employers who prioritise their workforce&apos;s health and well-being.
            </p>

            <div className="mt-8">
              <button className="group flex items-center gap-2 rounded-full bg-gray-50 border border-gray-200 px-8 py-3.5 text-sm font-bold text-[#2F2F2F] hover:bg-white hover:shadow-md transition-all">
                Partner with us <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div style={{ y: y1 }} className="h-fit">
              <TestimonialCard data={testimonials[0]} />
            </motion.div>
            <motion.div style={{ y: y2 }} className="h-fit md:mt-16">
              <TestimonialCard data={testimonials[1]} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ data }) {
  return (
    <div className={`rounded-[24px] p-6 lg:p-8 shadow-sm border border-black/5 ${data.bgColor} flex flex-col gap-6`}>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Success Story</p>
        <h3 className="text-lg font-bold text-black">{data.company}</h3>
      </div>
      <div className="rounded-xl bg-[#EEFDF3] border border-[#DCFCE7] p-4">
        <p className="text-xs font-bold text-[#1F2937] mb-0.5">{data.impactLabel}</p>
        <p className="text-lg font-bold text-[#1F2937] leading-tight">{data.impact}</p>
      </div>
      <p className="text-sm leading-relaxed text-[#4B5563] font-medium">“{data.quote}”</p>
      <div className="border-t border-gray-200/60 pt-4 flex items-center gap-3">
        <Image src={data.avatar} alt={data.name} width={40} height={40} className="rounded-full bg-gray-200" />
        <div>
          <p className="text-sm font-bold text-black">{data.name}</p>
          <p className="text-xs text-gray-500">{data.role}</p>
        </div>
      </div>
    </div>
  );
}