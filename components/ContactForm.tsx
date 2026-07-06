"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Message received. We will be in touch shortly.");
  };

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-2xl mx-auto border border-zinc-900 rounded-3xl p-8 md:p-12 bg-zinc-950/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white mb-2">Let's Engineer Growth.</h2>
        <p className="text-zinc-400 mb-10">Have a project in mind? Reach out and let's discuss your vision.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:border-white transition-colors" required />
            <input type="email" placeholder="Email" className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:border-white transition-colors" required />
          </div>
          <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:border-white transition-colors" required />
          <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-colors">
            Send Message
          </button>
        </form>
        {status && <p className="mt-6 text-center text-sm text-zinc-500">{status}</p>}
      </div>
    </section>
  );
}