"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "Frontend Architecture",
    description: "Lightning-fast, secure, and scalable web applications engineered with Next.js and React. We build the robust foundation your business needs to grow.",
  },
  {
    icon: "🧊",
    title: "3D & Creative Coding",
    description: "Stand out from the competition with immersive 3D web interactions using Three.js and Spline that captivate your audience the moment they land.",
  },
  {
    icon: "🎯",
    title: "UI/UX Strategy",
    description: "Beautiful, intuitive layouts designed in Figma that don't just look stunning, but are strategically mapped out to turn visitors into paying clients.",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 w-full relative bg-black overflow-hidden">
      
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: "url('/img/low-poly.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header Section - Sweeps in from the LEFT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Expertise.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with conversion-focused design to deliver digital assets that dominate your industry.
          </p>
        </motion.div>

        {/* Services Grid - Cards spring up from the BOTTOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              // The magic stagger trick: multiply the index by 0.15s to delay each card
              transition={{ type: "spring", stiffness: 70, damping: 15, delay: index * 0.15 }}
              className="group relative p-8 rounded-2xl bg-zinc-950/80 border border-zinc-900 hover:border-zinc-500 hover:bg-zinc-900/80 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
              
              <div className="text-4xl mb-6 bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-xl border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Badge - Sweeps in from the RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          // Delayed by 0.4s so it slides in right after the cards finish appearing
          transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.4 }}
        >
          <GuaranteeBadge />
        </motion.div>

      </div>
    </section>
  );
}

export function GuaranteeBadge() {
  return (
    <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-zinc-700 transition-colors duration-500 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">The Geypey Engineering Guarantee</h3>
        <p className="text-zinc-400">Every project we ship is engineered to achieve a 95+ Lighthouse Performance Score.</p>
      </div>
      <div className="flex gap-4">
        <div className="text-center px-6 py-3 border border-zinc-700 rounded-lg bg-black/50">
          <span className="block text-2xl font-bold text-white">95+</span>
          <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Lighthouse</span>
        </div>
      </div>
    </div>
  );
}