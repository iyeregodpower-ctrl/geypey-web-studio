import Image from 'next/image';
import { Activity, Zap, CheckCircle2 } from 'lucide-react';

const cases = [
  {
    title: "Aura Luxe Real Estate",
    role: "Full-Stack Architecture & UI/UX",
    challenge: "The client needed a high-end luxury property showcase that loaded instantly despite heavy video tours.",
    solution: "Engineered a Next.js platform with optimized edge caching, Framer Motion for premium interactions, and WhatsApp booking integration.",
    results: ["98/100 Lighthouse Performance", "40% increase in mobile inquiries", "Sub-second page load times"],
    image: "/img/auraluxe-preview.png"
  },
  {
    title: "ShipTrust Escrow Platform",
    role: "Fintech Platform Engineering",
    challenge: "Required a secure, database-driven environment to handle multi-step transaction verifications.",
    solution: "Deployed a secure architecture using Next.js App Router, Supabase with Row Level Security, and strict TypeScript types.",
    results: ["100% secure data transactions", "Seamless Paystack integration", "Scalable cloud database"],
    image: "/img/shiptrust-mockup.jpg"
  }
];

export default function CaseStudies() {
  return (
    <section className="bg-[#090D16] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-3xl md:text-4xl font-semibold tracking-tight">Featured Engineering.</h2>
        
        <div className="space-y-16">
          {cases.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
              
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden relative border border-white/10">
                <Image 
  src={project.image} 
  alt={project.title}
  fill
  className="object-cover"
/>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-blue-400 text-sm font-semibold mb-2 tracking-wide uppercase">{project.role}</div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                
                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <p><strong className="text-gray-200">Challenge:</strong> {project.challenge}</p>
                  <p><strong className="text-gray-200">Solution:</strong> {project.solution}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <strong className="text-white text-sm block mb-3">Measurable Impact:</strong>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" /> {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
