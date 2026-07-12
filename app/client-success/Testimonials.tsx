"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Geypey Web Studio did not just build a website; they engineered a digital asset that completely elevated our brand presence and performance.",
    name: "Client Name",
    title: "Founder, Real Estate Firm",
  },
  {
    id: 2,
    quote: "The attention to detail in the UI/UX and the sheer speed of the Next.js architecture exceeded all of our technical requirements.",
    name: "Engineering Lead",
    title: "Tech Startup",
  },
  {
    id: 3,
    quote: "A seamless handoff and incredible communication throughout the entire build. The final product converts better than anything we have used before.",
    name: "Marketing Director",
    title: "E-commerce Brand",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-zinc-950 px-6 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-zinc-800/20 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Client Impact.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Do not just take our word for it. Here is what happens when you invest in high-performance digital architecture.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors duration-500 flex flex-col justify-between h-full"
            >
              {/* Quote Icon */}
              <div className="text-zinc-700 mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              
              <div>
                <div className="text-white font-semibold tracking-wide">
                  {testimonial.name}
                </div>
                <div className="text-zinc-500 text-sm mt-1">
                  {testimonial.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}