import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import About from "../components/About";
import Founder from "../components/Founder";
import AIChatFAQ from "../components/AIChatFAQ";
import Link from "next/link"; // Imported for the final CTA button

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-zinc-800 selection:text-white">
      <Hero />
      <Services />
      <About />
      <Founder />
      <AIChatFAQ />
      {/* 1. The Process timeline added here */}
      <Process />
      
      {/* 2. The Final Call to Action */}
      <section className="py-32 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to scale your digital presence?</h2>
        <Link 
          href="/hire" 
          className="inline-block bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Start Your Project
        </Link>
      </section>
    </main>
  );
}