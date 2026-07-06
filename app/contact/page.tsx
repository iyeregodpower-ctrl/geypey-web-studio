"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meepgjej", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-black text-zinc-300 px-6 py-24 max-w-4xl mx-auto flex flex-col justify-center">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Let's Talk
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Ready to bring your vision to life? I'm currently accepting new projects for Geypey Web Studio. Send me a message and let's build something extraordinary.
        </p>
      </header>

      <form 
        onSubmit={handleSubmit} 
        className="space-y-6 bg-zinc-950/50 border border-zinc-900 p-8 rounded-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
          <textarea 
            name="message" 
            id="message" 
            required 
            rows={5}
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === "submitting" || status === "success"}
          className="w-full bg-white text-black font-bold text-sm uppercase tracking-wider py-4 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "idle" && "Send Message"}
          {status === "submitting" && "Sending..."}
          {status === "success" && "Message Sent ✓"}
          {status === "error" && "Error. Try Again."}
        </button>
      </form>
    </main>
  );
}