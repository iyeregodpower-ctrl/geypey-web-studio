import { ShieldCheck, Zap, Code, Award } from 'lucide-react';

const stats = [
  { label: "Projects Shipped", value: "15+", icon: Code, accent: "text-blue-400" },
  { label: "Average Load Time", value: "<0.8s", icon: Zap, accent: "text-blue-400" },
  { label: "Corporate Status", value: "RC: 9977105", icon: ShieldCheck, accent: "text-blue-400" },
  { label: "Engineering Standard", value: "Next.js / TS", icon: Award, accent: "text-cyan-400" }
];

export default function StatStrip() {
  return (
    <section className="bg-[#090D16] py-16 px-6 md:px-12 lg:px-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${stat.accent}`} />
                </div>
                <span className="text-xs font-medium text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">Verified</span>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
