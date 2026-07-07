"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Founder() {
  return (
    <section className="px-6 w-full my-32">
      
      {/* The Animated Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-zinc-950 rounded-3xl p-8 md:p-16 border border-zinc-900 overflow-hidden"
      >
        
        {/* Image Container - Sweeps LEFT */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
          className="w-full md:w-1/3 relative group flex justify-center"
        >
          <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-700" />
          
          {/* Optimized Next.js Image */}
          <Image 
            src="/img/portfolio-image2.png" 
            alt="Iyere" 
            width={400} 
            height={500}
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={85}
            className="relative z-10 rounded-2xl shadow-2xl hover:scale-[1.02] transition-all duration-700 ease-in-out border border-zinc-800 object-cover" 
          />
        </motion.div>
        
        {/* Text Container - Sweeps RIGHT */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.4 }}
          className="w-full md:w-2/3"
        >
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Crafting Bright Experiences.</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I am Iyere Gods power, the founder of Geypey Web Studio. We combine technical precision in Next.js with a sharp eye for UI/UX to ensure your project is not just code, but a digital experience that converts.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}