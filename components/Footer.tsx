import Link from "next/link";

export default function Footer() {
  return (
    <footer role="contentinfo" className="py-12 border-t border-zinc-900 bg-black mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" className="text-xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity" aria-label="Geypey Web Studio Home">
            GEYPEY <span className="text-zinc-500">STUDIO</span>
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-zinc-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Geypey Web Studio. All rights reserved.</p>
            <span className="hidden md:inline text-zinc-700" aria-hidden="true">|</span>
            <nav aria-label="Legal links">
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms & Conditions</Link>
              </div>
            </nav>
          </div>
        </div>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium list-none">
            <li>
              <a href="https://www.linkedin.com/in/iyere-godspower-76b092227" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn profile">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://instagram.com/geypey_webstudio" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Instagram profile">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://tiktok.com/@geypey_web" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="TikTok profile">
                TikTok
              </a>
            </li>
            <li>
              <a href="mailto:hello@geypeywebstudio.com.ng" className="text-zinc-400 hover:text-white transition-colors" aria-label="Email Geypey Web Studio">
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
