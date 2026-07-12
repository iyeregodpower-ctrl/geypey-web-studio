"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Eager imports for above-the-fold content (Critical for FCP)
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Founder from "../components/Founder";
import Success from "../components/Success";
import Testimonials from "./client-success/Testimonials";

// 1. Dynamic imports for heavy/interactive components
// This prevents them from blocking the initial page rendering
const AIChatFAQ = dynamic(() => import("../components/AIChatFAQ"), { 
  ssr: false, 
  loading: () => <div className="h-[380px] w-full max-w-xl mx-auto animate-pulse bg-zinc-900/50 rounded-3xl my-20" /> 
});

const Process = dynamic(() => import("../components/Process"), { 
  ssr: true,
  loading: () => <div className="h-[200px] w-full animate-pulse bg-zinc-900/50 rounded-xl my-20" /> 
});

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-zinc-800 selection:text-white">
      {/* Above-the-fold components load immediately */}
      <Hero />
      <Founder />
      <Services />
      <Process />
      <Success />
      <div id= "testimonials">
        <Testimonials />
      </div>
      
      <AIChatFAQ />
      <About />
    
      
      {/* 2. The Final Call to Action */}
      <section className="py-32 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to scale your digital presence?
        </h2>
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