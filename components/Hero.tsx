"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// 1. Defer the Spline component import to prevent main-thread blocking
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false, 
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-zinc-600/50 text-sm font-medium tracking-widest uppercase">Loading Experience...</div>
    </div>
  )
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      
      {/* DESKTOP ONLY: Interactive 3D Spline Background */}
      <div className="hidden md:flex absolute inset-0 z-0 opacity-60 pointer-events-none items-center justify-center">
        <Spline scene="https://prod.spline.design/BHzJvrFOzwtRLies/scene.splinecode" />
      </div>

      {/* MOBILE ONLY: High-Performance CSS Gradient Fallback */}
      <div className="flex md:hidden absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-500 via-black to-black pointer-events-none" />

      {/* The glowing orb - HIDDEN ON MOBILE for GPU performance */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-600/20 rounded-full blur-[100px] pointer-events-none z-0"
      />

      <div className="z-10 text-center px-4 pointer-events-none mt-12 md:mt-0">
        
        {/* Agency Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium tracking-wide backdrop-blur-sm"
        >
          Premium UI/UX & Frontend Architecture
        </motion.div>

        {/* Updated Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-lg"
        >
          We Engineer <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">
            Digital Experiences.
          </span>
        </motion.h1>
        
        {/* Updated Agency Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 mb-8 drop-shadow-md bg-black/20 backdrop-blur-sm rounded-lg p-2"
        >
          Geypey Web Studio builds high-performance websites that scale your brand and convert visitors into loyal clients.
        </motion.p>
        
        {/* Updated Buttons & Routing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
        >
          <Link href="/portfolio" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors duration-300">
            View Our Work
          </Link>
          <Link href="/hire" className="px-8 py-3 rounded-full border border-zinc-800 bg-black/50 backdrop-blur-md text-white font-semibold hover:bg-zinc-800 transition-colors duration-300">
            Request Proposal
          </Link>
        </motion.div>

        {/* MOBILE ONLY: Desktop Experience Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex md:hidden items-center justify-center gap-2 text-zinc-500 text-xs font-medium uppercase tracking-widest opacity-80"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
          <span>View on desktop for 3D experience</span>
        </motion.div>

      </div>
    </section>
  );
}