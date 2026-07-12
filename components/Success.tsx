"use client";

import { motion, Variants } from "framer-motion";

const successMetrics = [
  {
    id: "01",
    title: "Lightning-Fast Performance",
    description: "A 95+ score on Google's Core Web Vitals. Your Next.js architecture will load instantly across global edge networks.",
    colSpan: "md:col-span-2",
  },
  {
    id: "02",
    title: "Immersive Design",
    description: "A high-end UI/UX that incorporates smooth motion and premium aesthetics for a luxurious feel.",
    colSpan: "md:col-span-1",
  },
  {
    id: "03",
    title: "Conversion-Engineered",
    description: "Every pixel and user journey is intentionally mapped to guide visitors seamlessly from discovery to booking.",
    colSpan: "md:col-span-1",
  },
  {
    id: "04",
    title: "Future-Proof Codebase",
    description: "A clean, scalable technical foundation built on the same modern frameworks used by global enterprise leaders.",
    colSpan: "md:col-span-2",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Success() {
  return (
    <section className="py-32 bg-black px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What Success Looks Like.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            We do not just launch websites. We engineer scalable digital assets designed to dominate your market.
          </p>
        </div>

        {/* High-Performance Staggered Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {successMetrics.map((metric) => (
            <motion.div 
              key={metric.id}
              variants={itemVariants}
              className={`bg-zinc-950 border border-zinc-900 rounded-3xl p-8 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-500 group relative overflow-hidden ${metric.colSpan}`}
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 text-sm font-mono mb-6 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                  {metric.id}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                    {metric.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Handoff Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-4 bg-white text-black rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">Total Ownership & Handoff</h3>
            <p className="text-zinc-700 max-w-xl">
              A seamless transition. You receive full ownership of your digital asset, complete with the documentation you need to confidently manage your platform.
            </p>
          </div>
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}