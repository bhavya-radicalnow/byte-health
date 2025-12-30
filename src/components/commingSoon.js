'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden px-6">
      
      {/* Subtle Background Decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-50 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#4A1E3F]/5 rounded-full blur-[120px] opacity-60" />

      {/* Header/Logo Area */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 md:top-12"
      >
        <Link href="/">
          <Image
            src="/byte-logo.png"
            alt="Byte Health Logo"
            width={140}
            height={60}
            priority
            className="cursor-pointer"
          />
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-rose-500 bg-rose-50 rounded-full">
            Something Big is Coming
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-[#4A1E3F] leading-tight"
        >
          We are building <br />
          <span className="text-rose-500">better health systems</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed"
        >
          Our new experience is under construction. We&apos;re working hard to bring you 
          accessible, coordinated, and compassionate healthcare solutions.
        </motion.p>

        {/* Action / Notification Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full sm:w-72 px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all shadow-sm"
          />
          <button className="w-full sm:w-auto px-8 py-4 bg-[#4A1E3F] text-white font-bold rounded-full hover:bg-[#36162e] transition-all active:scale-95 shadow-lg shadow-[#4A1E3F]/20">
            Notify Me
          </button>
        </motion.div>

        {/* Social / Contact Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 text-slate-400"
        >
          <Link href="#" className="hover:text-rose-500 transition-colors text-sm font-medium">LinkedIn</Link>
          <Link href="#" className="hover:text-rose-500 transition-colors text-sm font-medium">Twitter</Link>
          <Link href="mailto:info@bytehealth.com" className="hover:text-rose-500 transition-colors text-sm font-medium">info@bytehealth.com</Link>
        </motion.div>
      </div>

      {/* Bottom Footer Text */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 text-xs text-slate-400 uppercase tracking-widest"
      >
        © 2025 Byte Health. All Rights Reserved.
      </motion.p>
    </div>
  );
}