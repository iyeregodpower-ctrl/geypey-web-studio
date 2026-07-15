"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import Hero from "../components/Hero";

const Founder = dynamic(() => import("../components/Founder"), {
  ssr: true,
  loading: () => <div className="h-[420px] w-full max-w-4xl mx-auto my-32 animate-pulse bg-zinc-900/30 rounded-3xl" />,
});

const Services = dynamic(() => import("../components/Services"), {
  ssr: true,
  loading: () => <div className="h-[320px] w-full animate-pulse bg-zinc-900/30 rounded-xl my-20" />,
});

const AIChatFAQ = dynamic(() => import("../components/AIChatFAQ"), {
  ssr: false,
  loading: () => <div className="h-[380px] w-full max-w-xl mx-auto animate-pulse bg-zinc-900/50 rounded-3xl my-20" />,
});

const Process = dynamic(() => import("../components/Process"), {
  ssr: true,
  loading: () => <div className="h-[200px] w-full animate-pulse bg-zinc-900/50 rounded-xl my-20" />,
});

const Success = dynamic(() => import("../components/Success"), {
  ssr: true,
  loading: () => <div className="h-[280px] w-full animate-pulse bg-zinc-900/30 rounded-xl my-20" />,
});

const Testimonials = dynamic(() => import("./client-success/Testimonials"), {
  ssr: true,
  loading: () => <div className="h-[360px] w-full animate-pulse bg-zinc-900/30 rounded-xl my-20" />,
});

const About = dynamic(() => import("../components/About"), {
  ssr: true,
  loading: () => <div className="h-[240px] w-full animate-pulse bg-zinc-900/30 rounded-xl my-20" />,
});

export default function Home() {
  return (
    <div className="bg-black min-h-screen selection:bg-zinc-800 selection:text-white">
      <Hero />
      <Founder />
      <Services />
      <Process />
      <Success />
      <div id="testimonials">
        <Testimonials />
      </div>

      <AIChatFAQ />
      <About />

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
    </div>
  );
}
