"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HirePage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/meepgjej", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // The Success UI - Replaces the form so the user knows it worked
  if (status === "success") {
    return (
      <main className="min-h-screen bg-black text-zinc-300 py-32 px-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-center bg-zinc-950 p-12 rounded-3xl border border-zinc-900 max-w-lg"
        >
          <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
          <h2 className="text-3xl font-bold text-white mb-4">Request Received</h2>
          <p className="text-zinc-400">
            Thank you for reaching out. We will review your project details and get back to you within 24-48 hours to discuss the next steps.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-zinc-300 py-32 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Request a Project Proposal</h1>
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl leading-relaxed">
          Tell us about your goals. We review every request to ensure we can deliver the high-performance results Geypey Web Studio is known for.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-950/80 p-8 md:p-10 rounded-3xl border border-zinc-900 backdrop-blur-sm">
          
          {/* Client Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:outline-none focus:border-zinc-500 transition-colors" 
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:outline-none focus:border-zinc-500 transition-colors" 
                placeholder="john@company.com" 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Project Type</label>
            <select name="project_type" className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer">
              <option>Landing Page</option>
              <option>E-commerce Store</option>
              <option>Corporate Website</option>
              <option>Custom SaaS/Platform</option>
            </select>
          </div>
          
          {/* Scope Bounded Budget Dropdown */}
          <div>
            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Investment & Scope</label>
            <select name="budget" className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer">
              <option value="150k-300k">The Landing Tier (1-2 Pages) — ₦150,000 - ₦300,000</option>
              <option value="300k-600k">The Professional Tier (3-6 Pages) — ₦300,000 - ₦600,000</option>
              <option value="600k-plus">The Comprehensive Tier (7-12+ Pages) — ₦600,000+</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Project Goals</label>
            <textarea 
              name="goals" 
              placeholder="What are the main business goals for this project? (e.g., Increase sales, rebrand, better performance)" 
              required 
              className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white h-32 focus:outline-none focus:border-zinc-500 transition-colors resize-none" 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={status === "submitting"} 
            className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
          >
            {status === "submitting" ? "Encrypting & Sending..." : "Submit Project Request"}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center mt-4">Something went wrong. Please try again or email us directly.</p>
          )}
        </form>
      </motion.div>
    </main>
  );
}