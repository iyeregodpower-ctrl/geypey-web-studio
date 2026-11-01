import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="hero-stage" aria-hidden="true">
        <div className="hero-orb" />
        <div className="hero-core" />
        <div className="hero-ring" />
        <div className="hero-fade" />
      </div>

      <div className="z-10 text-center px-4 mt-12 md:mt-0 animate-fade-in-up">
        <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide shadow-lg shadow-blue-500/10">
          Premium UI/UX & Frontend Architecture
        </div>

        <h1 className="section-heading text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 drop-shadow-lg">
          We Engineer <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
            Digital Experiences.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 mb-8 rounded-lg p-2">
          Geypey Web Studio builds high-performance websites that scale your brand and convert visitors into loyal clients.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/portfolio" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors duration-300">
            View Our Work
          </Link>
          <Link href="/hire" className="px-8 py-3 rounded-full border border-zinc-800 bg-black/50 text-white font-semibold hover:bg-zinc-800 transition-colors duration-300">
            Request Proposal
          </Link>
        </div>
      </div>
    </section>
  );
}
