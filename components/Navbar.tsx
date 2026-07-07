"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Grouping links makes the component much cleaner and easier to map over
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Client Portal", href: "/client-portal" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-zinc-900">
      
      {/* 1. Logo Section (Stays visible on all screens, z-index pushed up to stay above mobile menu) */}
      <Link href="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsOpen(false)}>
        <div className="relative h-12 w-12 sm:h-16 sm:w-16 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/img/logo2.png" 
            alt="Geypey Web Studio Logo"
            width={64}   
            height={64} 
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xl sm:text-2xl font-bold text-white tracking-tighter">
          GEYPEY <span className="text-zinc-500">STUDIO</span>
        </span>
      </Link>
      
      {/* 2. Desktop Navigation (Hidden on Mobile) */}
      <div className="hidden md:flex gap-1 items-center text-sm">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-4 py-2 rounded-full transition-colors"
            >
              {/* The Sliding Hover Border */}
              {hoveredLink === link.name && !isActive && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded-full border border-zinc-700 bg-zinc-800/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* The Active State Background & Border */}
              {isActive && (
                <motion.div
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full border border-white/20 bg-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* The Link Text & Dot Indicator */}
              <span className={`relative z-10 flex items-center gap-2 ${
                isActive ? "text-white font-medium" : "text-zinc-400 hover:text-zinc-200"
              }`}>
                {link.name}
                
                {/* A subtle white dot that animates in next to the active page name */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active-dot"
                    className="w-1.5 h-1.5 rounded-full bg-white"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </span>
            </Link>
          );
        })}

        {/* Request Project Button */}
        <Link 
          href="/hire" 
          className="ml-4 bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
        >
          Request Project
        </Link>
      </div>

      {/* 3. Hamburger Button (Visible ONLY on Mobile) */}
      <button 
        className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {/* 4. Mobile Menu Overlay (Animated with Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-bold transition-colors ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <Link 
              href="/hire" 
              onClick={() => setIsOpen(false)}
              className="mt-6 text-lg font-bold text-black bg-white px-8 py-4 rounded-full hover:bg-zinc-200 transition-colors"
            >
              Request Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
  );
}