"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Discovery & Architecture",
    description: "We analyze your business goals and architect the technical foundation, defining the exact scope and user journey."
  },
  {
    id: "02",
    title: "UI/UX & Motion Design",
    description: "We craft the visual aesthetic, integrating your brand identity with sleek interactive physics for a luxurious feel."
  },
  {
    id: "03",
    title: "High-Performance Engineering",
    description: "We write clean, scalable Next.js code, optimizing every digital asset to guarantee lightning-fast load times."
  },
  {
    id: "04",
    title: "Launch & Handoff",
    description: "We deploy the application to a global edge network, run rigorous QA, and hand over the keys to your new platform."
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Engineering Pipeline.</h2>
          <p className="text-zinc-400 text-lg">A strict, transparent workflow from concept to deployment.</p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Glowing Node */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 bg-zinc-950 text-zinc-300 font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.05)] z-10">
                {step.id}
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-zinc-950 border border-zinc-900 p-6 md:p-8 rounded-2xl hover:border-zinc-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}