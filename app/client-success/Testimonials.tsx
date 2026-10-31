"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: '1',
    name: 'Sammi Vee',
    initial: 'S',
    date: '24 hours ago',
    text: "Geypey Web Studio delivered exceptional results for our digital project. Their attention to detail in front-end architecture, clean UI/UX implementation, and professional execution exceeded our expectations. If you are looking for an elite software engineering studio to bring your web platform to life, I strongly recommend working with them!"
  },
  {
    id: '2',
    name: 'Georgina David-West',
    initial: 'G',
    date: '3 weeks ago',
    text: "Working with this team was an excellent experience. They are professional, creative, and highly skilled at turning ideas into clean, functional, and modern websites. Their attention to detail, communication, and commitment to delivering quality really stood out."
  },
  {
    id: '3',
    name: 'Paul Olaniyan',
    initial: 'P',
    date: '3 weeks ago',
    text: "Impressed by the ability to understand the problems, suggest practical solutions, and execute them efficiently. Communication was clear throughout the project delivery, and the focus remained on building something reliable and genuinely useful."
  },
  {
    id: '4',
    name: 'Makata Faith',
    initial: 'M',
    date: '2 weeks ago',
    text: "I'm impressed with the work from Geypey Web Studio! The design is clean, modern, and professional, and you can tell there's real thought behind the user experience. If you're looking for a team to bring your website ideas to life, I'd definitely recommend giving them a try."
  }
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
          <p className="text-gray-400 mt-3 text-lg">
            Verified client outcomes and engineering excellence.
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
