import { use } from "react";

export default function CaseStudyTemplate({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const isAuraLuxe = slug === 'aura-luxe';
  
  const content = {
    title: isAuraLuxe ? "Aura Luxe: Luxury Real Estate" : "Ancient Knowledge Hub: Digital Preservation",
    context: isAuraLuxe 
      ? "Engineering a high-conversion digital presence for a luxury real estate brand." 
      : "A web-based repository dedicated to exploring historical mysteries and ancient cultural narratives.",
    challenge: isAuraLuxe 
      ? "Optimizing high-resolution asset delivery for a premium visual experience." 
      : "Managing complex data structures while ensuring an immersive user experience.",
    solution: isAuraLuxe 
      ? "Implemented Next.js server-side rendering and CSS animations for a sub-1s load time." 
      : "Built using a modular component-based architecture for scalable, historical exploration.",
    outcome: isAuraLuxe 
      ? "40% increase in mobile engagement." 
      : "A highly organized, scalable hub serving as a central point for educational research."
  };

  return (
    <main className="min-h-screen bg-black text-white p-12 md:p-24">
      <div className="max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl font-bold mb-8">{content.title}</h1>
        
        <div className="space-y-8 border-l border-zinc-800 pl-8">
          <section>
            <h3 className="text-zinc-500 uppercase text-xs tracking-widest mb-2">The Context</h3>
            <p className="text-lg">{content.context}</p>
          </section>
          
          <section>
            <h3 className="text-zinc-500 uppercase text-xs tracking-widest mb-2">Technical Challenge</h3>
            <p className="text-lg">{content.challenge}</p>
          </section>

          <section>
            <h3 className="text-zinc-500 uppercase text-xs tracking-widest mb-2">Engineering Solution</h3>
            <p className="text-lg">{content.solution}</p>
          </section>

          <section>
            <h3 className="text-zinc-500 uppercase text-xs tracking-widest mb-2">The Outcome</h3>
            <p className="text-lg font-semibold text-zinc-300">{content.outcome}</p>
          </section>
        </div>
      </div>
    </main>
  );
}