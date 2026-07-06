"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Aura Luxe",
    category: "Real Estate",
    description: "High-performance digital presence for luxury property sales.",
    link: "https://auralexu-realestate.vercel.app/"
  },
  {
    title: "Ancient Knowledge Hub",
    category: "Cultural Media",
    description: "Immersive data architecture for historical research and storytelling.",
    link: "https://iyeregodpower-ctrl.github.io/ancient-knowledge-hub/index.html"
  }
];

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 tracking-tight">Engineering Excellence.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 border border-zinc-800 rounded-3xl bg-zinc-950 hover:border-zinc-500 transition-all cursor-pointer"
            >
              <span className="text-xs text-zinc-500 uppercase tracking-widest">{project.category}</span>
              <h2 className="text-2xl font-bold mt-2 mb-4">{project.title}</h2>
              <p className="text-zinc-400 mb-6">{project.description}</p>
              <Link href={project.link} className="text-sm font-semibold border-b border-white hover:text-zinc-300">
                View Case Study ↗
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}