"use client";

import { motion } from "framer-motion";
import { pre } from "framer-motion/client";
import { useState, useEffect } from "react";

// Helper component for the project timeline
const TimelineItem = ({ stage, status, delay }: { stage: string; status: string; delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center gap-4 group"
  >
    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${status === 'Complete' ? 'bg-white' : 'bg-zinc-700 group-hover:bg-zinc-500'}`} />
    <span className={`text-sm ${status === 'Complete' ? 'text-white' : 'text-zinc-500'}`}>
      {stage}
    </span>
    {status === 'In Progress' && (
      <span className="ml-auto text-[10px] font-bold text-black bg-white px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
        Active
      </span>
    )}
  </motion.div>
);

export default function ClientPortal() {
  const [perfScore, setPerfScore] = useState("Loading...");

  // Fetch dynamic performance metrics
  useEffect(() => {
    fetch('/api/performance')
      .then(res => res.json())
      .then(data => setPerfScore(`${data.score}/100`))
      .catch(() => setPerfScore("N/A"));
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 border-b border-zinc-900 pb-8 pt-20">
          <h1 className="text-4xl font-bold tracking-tight ">Client Command Center</h1>
          <p className="text-zinc-500 mt-2">Engineering your digital growth in real-time.</p>
        </header>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Project Phase", value: "Development" },
            { label: "Performance Score", value: perfScore },
            { label: "Next Milestone", value: "UAT Review" },
          ].map((stat, i) => (
            <div key={i} className="p-6 border border-zinc-800 rounded-2xl bg-zinc-950/50">
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Dashboard Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Timeline Section */}
          <div className="lg:col-span-2 p-8 border border-zinc-800 rounded-3xl bg-zinc-950">
            <h2 className="text-xl font-bold mb-8">Development Timeline</h2>
            <div className="space-y-6">
              <TimelineItem stage="Strategy & Planning" status="Complete" delay={0.1} />
              <TimelineItem stage="UI/UX Prototyping" status="Complete" delay={0.2} />
              <TimelineItem stage="Core Engineering" status="In Progress" delay={0.3} />
              <TimelineItem stage="Performance Optimization" status="Pending" delay={0.4} />
            </div>
          </div>
          
          {/* Quick Links & Assets */}
          <div className="p-8 border border-zinc-800 rounded-3xl bg-zinc-950">
            <h2 className="text-xl font-bold mb-6">Asset Vault</h2>
            <ul className="space-y-4">
              {["Brand Guidelines", "Design Source Files", "Staging Environment", "Final Deliverables"].map((link) => (
                <li key={link} className="p-4 rounded-xl bg-black border border-zinc-900 hover:border-zinc-700 transition-colors cursor-pointer text-sm">
                  {link} ↗
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}