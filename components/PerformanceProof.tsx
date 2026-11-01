import { Zap, ShieldCheck, Search, CheckCircle2 } from 'lucide-react';

const metrics = [
  { label: "Performance", score: "99", icon: Zap, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { label: "Accessibility", score: "100", icon: ShieldCheck, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { label: "Best Practices", score: "100", icon: CheckCircle2, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
  { label: "SEO Optimization", score: "100", icon: Search, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
];

export default function PerformanceProof() {
  return (
    <section className="bg-[#090D16] py-20 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4 shadow-lg shadow-blue-500/10">
            <Zap className="w-3.5 h-3.5" />
            Verified Lighthouse Standards
          </div>
          <h2 className="section-heading text-3xl md:text-4xl font-semibold tracking-tight">
            Engineered for elite speed.
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            We don't just promise performance—we back it with optimized Next.js architecture, edge caching, and clean codebases.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center hover:border-white/25 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${item.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-4xl font-bold text-white tracking-tight mb-1">{item.score}<span className="text-blue-400 text-2xl">/100</span></span>
                <span className="text-gray-400 text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
