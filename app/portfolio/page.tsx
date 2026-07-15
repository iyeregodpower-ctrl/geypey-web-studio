"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// All 10 projects extracted from your vanilla HTML portfolio
const projects = [
  {
    title: "Aura Luxe Estates",
    category: "Corporate Real Estate Platform",
    description: "A high-ticket luxury real estate sales engine. Engineered with a dark-mode cinematic UI, interactive legal FAQ accordions, and a premium 'Inner Circle' lead generation funnel.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "UI/UX Design"],
    image: "/img/auraluxe-preview.png",
    liveLink: "https://auralexu-realestate.vercel.app/",
  },
  {
    title: "Ancient Knowledge Hub",
    category: "UI/UX & Web Development",
    description: "A dedicated digital platform exploring ancient history, mythology, and cultural discoveries, built with a focus on immersive user experience.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/ancient.png",
    liveLink: "https://iyeregodpower-ctrl.github.io/ancient-knowledge-hub/index.html",
  },
  {
    title: "Fisayo Digital Infrastructure",
    category: "Personal Brand & Portfolio",
    description: "A custom-engineered digital portfolio designed to elevate personal branding, showcase professional authority, and streamline client connections.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/fisayo-preview.png",
    liveLink: "https://iyeregodpower-ctrl.github.io/fisayo-tech/",
  },
  {
    title: "Kamsi Business Hub",
    category: "UI/UX & Web Platform",
    description: "A sleek, high-converting web platform crafted to optimize user interactions and present a premium digital footprint for the modern market.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/kamsi-preview.png",
    liveLink: "https://iyeregodpower-ctrl.github.io/kamsi-web/",
  },
  {
    title: "Premium E-Commerce Platform",
    category: "Front-End Development",
    description: "A fully responsive online store featuring dynamic product cards, a seamless shopping cart interface, and a modern UI/UX design.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/swift.png",
    liveLink: "https://iyeregodpower-ctrl.github.io/swift-shop/",
  },
  {
    title: "E-Commerce Admin Dashboard",
    category: "Full-Stack Design",
    description: "A fully responsive backend management interface featuring dynamic data tables, a CSS grid product catalog, interactive modals, and mobile-first navigation.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/dashboard-preview.png",
    liveLink: "https://iyeregodpower-ctrl.github.io/geypey-admin/",
  },
  {
    title: "Amarlux Executive Showcase",
    category: "Corporate Real Estate Platform",
    description: "A high-end digital storefront engineered for premium Ikoyi and V.I. real estate, featuring an exclusive dark theme and direct lead funnels.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/amarlux-preview.png",
    liveLink: "https://iyeregodpower-ctrl.github.io/amarlux/",
  },
  {
    title: "Aura Luxury Hotel",
    category: "Hospitality / UI/UX",
    description: "A premium UI/UX booking experience featuring a custom grid layout, glassmorphism, and a high-end typography system.",
    tags: ["HTML5", "CSS3", "UI/UX Design"],
    image: "/img/aura-preview.jpg",
    liveLink: "https://iyeregodpower-ctrl.github.io/aura-luxury-hotel/",
  },
  {
    title: "VibePress Entertainment",
    category: "Frontend Development",
    description: "A modern, responsive entertainment news platform featuring a dynamic dark/light mode toggle, cinematic article highlights, and CSS grid content layouts.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/vibepress-preview.png",
    liveLink: "https://iyeregodpower-ctrl.github.io/vibepress/",
  },
  {
    title: "Neon Lounge",
    category: "Hospitality / Web App",
    description: "A premium digital experience for a luxury nightlife venue. Features a dynamic, zero-reload tabbed menu and a fully integrated, real-time VIP table reservation system.",
    tags: ["HTML5", "CSS Grid", "JavaScript", "EmailJS"],
    image: "/img/lounge-preview.png",
    liveLink: "https://iyeregodpower-ctrl.github.io/neon-lounge/",
  }
];



export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 relative overflow-hidden">
      
      {/* Consistent Premium Low Poly Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: "url('/img/low-poly.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* Content Container - Forced to the front */}
      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Selected Works
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-xl text-lg"
          >
            A comprehensive collection of responsive frontend architecture, interactive interfaces, and premium digital brand design.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(index * 0.05, 0.25) }}
              className="group relative border border-zinc-900 bg-zinc-950/80 backdrop-blur-sm rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-48 mb-6 overflow-hidden rounded-xl border border-zinc-800/50 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">{project.category}</span>
                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">{project.title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-mono px-2.5 py-1 rounded-md bg-black text-zinc-500 border border-zinc-800/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 border-t border-zinc-900/50 pt-4 text-xs font-medium uppercase tracking-wider">
                  <Link href={project.liveLink} target="_blank" className="text-white hover:text-zinc-400 transition-colors flex items-center gap-1">
                    View Live Site ↗
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}