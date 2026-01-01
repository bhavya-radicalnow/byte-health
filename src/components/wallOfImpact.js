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

const partners = [
  "/logo-icertis.png",
  "/logo-zenoti.png",
  "/logo-freshworks.png",
  "/logo-kotak.png",
];

export default function WallOfImpactSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={containerRef} className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl xl:max-w-[1440px] px-6 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">

          {/* LEFT CONTENT */}
          {/* ADDED: lg:pl-6 xl:pl-12 to push content to the right */}
          <div className="lg:sticky lg:top-32 z-10 max-w-lg lg:pl-5 xl:pl-10">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/certified-badge.png"
                alt="Certified Conscious Employer 2025"
                width={100}
                height={110}
                className="object-contain"
              />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-5xl md:text-6xl font-bold leading-[1.1] text-[#4A1E3F]"
            >
              Wall of <br />
              <span className="text-[#EB5757]">Impact</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-[#2F2F2F] leading-relaxed"
            >
              Join the growing community of employers who prioritise their
              workforce&apos;s health and well-being
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <button className="group flex items-center gap-3 rounded-full bg-[#FAFAFA] border border-gray-100 px-8 py-4 text-base font-bold text-[#2F2F2F] shadow-sm transition-all hover:shadow-md hover:bg-white active:scale-95">
                Partner with us 
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: Cards */}
          <div className="relative z-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              <motion.div style={{ y: y1 }} className="h-fit">
                <TestimonialCard data={testimonials[0]} />
              </motion.div>

              <motion.div style={{ y: y2 }} className="h-fit md:mt-24">
                <TestimonialCard data={testimonials[1]} />
              </motion.div>

            </div>
          </div>
        </div>

        {/* LOGO STRIP */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-24 lg:mt-32 flex flex-wrap items-center gap-x-12 gap-y-8 lg:gap-x-16 lg:pl-24" 
        >
          {partners.map((logo, i) => (
            <div key={i} className="relative h-8 w-28 lg:h-10 lg:w-36 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={logo}
                alt="Partner logo"
                fill
                className="object-contain object-left"
              />
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}

function TestimonialCard({ data }) {
  return (
    <div className={`rounded-[2rem] p-8 lg:p-10 shadow-sm border border-black/5 ${data.bgColor} h-full flex flex-col`}>
      <div>
        <p className="text-xs font-medium text-gray-500 mb-1">Company Name</p>
        <h3 className="text-xl font-bold text-black">{data.company}</h3>
      </div>
      <div className="mt-6 rounded-2xl bg-[#EEFDF3] border border-[#DCFCE7] p-5">
        <p className="text-xs font-bold text-[#1F2937] mb-1">{data.impactLabel}</p>
        <p className="text-xl font-bold text-[#1F2937] leading-tight">
          {data.impact}
        </p>
      </div>
      <p className="mt-8 text-[15px] leading-relaxed text-[#4B5563] font-medium">
        “{data.quote}”
      </p>
      <div className="my-6 border-t border-gray-200/60 w-full" />
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative h-12 w-12 overflow-hidden rounded-full shrink-0">
          <Image src={data.avatar} alt={data.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold text-black">{data.name}</p>
          <p className="text-xs text-gray-500">{data.role}</p>
        </div>
      </div>
    </div>
  );
}