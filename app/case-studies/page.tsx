import Link from "next/link";

const projects = [
  {
    title: "Aura Luxe",
    category: "Real Estate",
    description: "High-performance digital presence for luxury property sales.",
    link: "https://auralexu-realestate.vercel.app/"
  },
  {
    title: "Ancient Knowledge Hub",
    category: "Cultural Media",
    description: "Immersive data architecture for historical research and storytelling.",
    link: "https://iyeregodpower-ctrl.github.io/ancient-knowledge-hub/index.html"
  }
];

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 tracking-tight animate-fade-in-up">Engineering Excellence.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="p-8 border border-zinc-800 rounded-3xl bg-zinc-950 hover:border-zinc-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-xs text-zinc-500 uppercase tracking-widest">{project.category}</span>
              <h2 className="text-2xl font-bold mt-2 mb-4">{project.title}</h2>
              <p className="text-zinc-400 mb-6">{project.description}</p>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold border-b border-white hover:text-zinc-300">
                View Case Study ↗
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}