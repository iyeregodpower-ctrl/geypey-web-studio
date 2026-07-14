"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding, Copyright & Legal */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" className="text-xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
            GEYPEY <span className="text-zinc-500">STUDIO</span>
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} Geypey Web Studio. All rights reserved.</p>
            <span className="hidden md:inline text-zinc-700">|</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        
        {/* Social & Contact Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
          <a 
            href="https://www.linkedin.com/in/iyere-godspower-76b092227" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://instagram.com/geypey_webstudio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://tiktok.com/@geypey_web" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-400 hover:text-white transition-colors"
          >
            TikTok
          </a>
          <a 
            href="mailto:hello@geypeywebstudio.com.ng" 
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}