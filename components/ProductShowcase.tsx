import Image from 'next/image';
import { LayoutDashboard, Shield, Cpu, ArrowUpRight } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="bg-[#090D16] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4 shadow-lg shadow-blue-500/10">
            <LayoutDashboard className="w-3.5 h-3.5" />
            Fintech-Grade Architecture
          </div>
          <h2 className="section-heading text-3xl md:text-4xl font-semibold tracking-tight">
            Transparent systems. Built to scale.
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Every platform we engineer features robust state management, secure database design, and real-time dashboard visibility.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between relative group hover:border-white/20 transition-all">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-400 font-mono text-xs uppercase tracking-wider">Live System UI</span>
                <Cpu className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Secure Client Portals & Dashboards</h3>
              <p className="text-gray-400 text-sm">Engineered with Next.js App Router and Supabase RLS for enterprise-level data protection.</p>
            </div>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 relative bg-gray-900">
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Fintech Dashboard UI" fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Encrypted Workflows</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Built-in database authorization, strict TypeScript typing, and secure payment gateway integrations (Paystack).
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-sm text-blue-400 font-medium">
              <span>View Security Spec</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
