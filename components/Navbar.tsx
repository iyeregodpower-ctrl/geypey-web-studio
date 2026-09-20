"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/portfolio" },
  { name: "Client success", href: "/#testimonials" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="nav-glass fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/70 border-b border-zinc-900 md:backdrop-blur-md">
      <Link href="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsOpen(false)}>
        <div className="relative h-12 w-12 sm:h-16 sm:w-16">
          <Image
            src="/img/logo2.png"
            alt="Geypey Web Studio Logo"
            width={64}
            height={64}
            sizes="64px"
            priority
            quality={85}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xl sm:text-2xl font-bold text-white tracking-tighter">
          GEYPEY <span className="text-zinc-500">STUDIO</span>
        </span>
      </Link>

      <div className="hidden md:flex gap-1 items-center text-sm">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 rounded-full border transition-colors ${
                isActive
                  ? "border-white/20 bg-white/10 text-white font-medium"
                  : "border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
              }`}
            >
              {link.name}
            </Link>
          );
        })}

        <Link
          href="/hire"
          className="ml-4 bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-zinc-200 transition-colors"
        >
          Request Project
        </Link>
      </div>

      <button
        className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-dvh bg-black z-40 md:hidden flex flex-col items-center justify-center gap-8 cv-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-bold ${isActive ? "text-white" : "text-zinc-400"}`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/hire"
            onClick={() => setIsOpen(false)}
            className="mt-6 text-lg font-bold text-black bg-white px-8 py-4 rounded-full"
          >
            Request Project
          </Link>
        </div>
      )}
    </nav>
  );
}
