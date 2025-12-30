'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Family testimonials coming soon after clinic launch. We can't wait to share the stories of transformed lives!",
    name: "Rajesh Sharma",
    role: "CEO",
    avatar: "/avatar-rajesh.png",
  },
  {
    text: "Family testimonials coming soon after clinic launch. We can't wait to share the stories of transformed lives!",
    name: "Rajesh Sharma",
    role: "CEO",
    avatar: "/avatar-rajesh.png",
  },
  {
    text: "Family testimonials coming soon after clinic launch. We can't wait to share the stories of transformed lives!",
    name: "Rajesh Sharma",
    role: "CEO",
    avatar: "/avatar-rajesh.png",
  },
];

export default function StoriesOfHopeSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* ================= LEFT CONTENT ================= */}
          {/* Flex col to push image to bottom */}
          <div className="flex flex-col justify-between">
            
            {/* TEXT CONTENT */}
            <div className="max-w-lg">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold uppercase tracking-wide text-[#E5635B]"
              >
                Our Users
              </motion.p>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-4xl md:text-5xl font-bold text-[#4A1E3F] leading-tight"
              >
                Stories of <span className="text-[#E5635B]">Hope</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed"
              >
                Real stories from families whose lives have been transformed by
                accessible healthcare.
              </motion.p>
            </div>

            {/* IMAGE - Placed in flow to ensure alignment */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 lg:mt-auto relative"
            >
              <Image
                src="/family.webp"
                alt="Happy family"
                width={600}
                height={700}
                className="
                  w-full 
                  max-w-[480px] 
                  mx-auto 
                  lg:mx-0 
                  lg:w-[110%] /* Slight overhang for dynamic look */
                  h-auto 
                  object-contain
                "
                priority
              />
            </motion.div>
          </div>

          {/* ================= RIGHT TESTIMONIALS ================= */}
          <div className="flex flex-col gap-6 justify-center">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                className="
                  group
                  rounded-2xl 
                  bg-white 
                  p-6 md:p-8
                  shadow-[0_4px_20px_rgba(0,0,0,0.06)] 
                  border border-gray-100
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="text-[#FFC107] text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-base text-gray-700 leading-relaxed font-medium">
                  “{t.text}”
                </p>

                {/* Footer with Divider */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover ring-2 ring-gray-50"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#2F2F2F]">
                      {t.name}
                    </p>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}