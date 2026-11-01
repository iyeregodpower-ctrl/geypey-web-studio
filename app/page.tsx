import Link from "next/link";
import Hero from "../components/Hero";
import Founder from "../components/Founder";
import Services from "../components/Services";
import Process from "../components/Process";
import Success from "../components/Success";
import Pricing from "../components/Pricing";
import StatStrip from "../components/StatStrip";
import ProductShowcase from "../components/ProductShowcase";
import PerformanceProof from "../components/PerformanceProof";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "./client-success/Testimonials";
import AIChatFAQ from "../components/AIChatFAQ";
import About from "../components/About";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <StatStrip />
      <Founder />
      <Services />
      <ProductShowcase />
      <Process />
      <Success />
      <CaseStudies />
      <PerformanceProof />
      <Pricing />
      
      <div id="testimonials">
        <Testimonials />
      </div>
      <AIChatFAQ />
      <About />

      <section className="py-32 text-center px-6">
        <h2 className="section-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to scale your digital presence?
        </h2>
        <Link
          href="/hire"
          className="inline-block bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-zinc-200 transition-colors"
        >
          Start Your Project
        </Link>
      </section>
    </div>
  );
}
