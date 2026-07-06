"use client";

import { motion, Variants } from "framer-motion";

const expertiseAreas = [
  {
    title: "High-Performance Engineering",
    description: "We build secure, lightning-fast websites that load instantly and scale flawlessly as your business grows.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Immersive 3D & Animation",
    description: "Captivating visual experiences and smooth, interactive elements designed to keep visitors engaged on your site longer.",
    tools: ["Three.js", "React Three Fiber", "Spline", "Framer Motion"],
  },
  {
    title: "Design & Conversion Strategy",
    description: "Intuitive, premium layouts engineered to not just look beautiful, but to turn your traffic into loyal clients.",
    tools: ["Figma", "Responsive Design", "UI/UX Systems", "SEO"],
  },
];

// 1. The Director (Now explicitly typed as Variants)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

// 2. The Actor (Now explicitly typed as Variants)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15,
      mass: 1 
    } 
  }
};

export default function About() {
  return (
    <section className="py-32 px-6 w-full relative bg-black overflow-hidden border-t border-zinc-900/50">
      
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: "url('/img/low-poly.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* Main motion container that triggers the stagger effect on scroll */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
      >
        
        {/* Text Content - Acts as the first item in the stagger */}
        <motion.div variants={itemVariants} className="pt-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Engineered for Growth.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            Based in Ibeju-Lekki, Geypey Web Studio is a premium digital agency dedicated to crafting experiences that perform as beautifully as they look. We specialize in high-end web architecture, 3D interactions, and conversion-focused design.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We don't just write code; we build digital assets. Whether it is a luxury real estate platform or a modern corporate hub, our mission is to deliver lightning-fast products that elevate your brand and drive actual business results.
          </p>
        </motion.div>

        {/* Expertise Stack Grid */}
        <div className="space-y-6">
          {expertiseAreas.map((area, index) => (
            // Each card is a subsequent item in the stagger sequence
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-zinc-500 hover:bg-zinc-900/80 transition-all duration-500"
            >
              
              {/* Refined subtle top glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700" />

              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{area.title}</h3>
              <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                {area.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {area.tools.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 bg-black border border-zinc-800 rounded-full text-zinc-300 text-xs font-medium group-hover:border-zinc-600 transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </motion.div>
    </section>
  );
}