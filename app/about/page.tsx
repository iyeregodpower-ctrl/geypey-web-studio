import Link from 'next/link';
import { ShieldCheck, Zap, Code2, Cpu, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#090D16] text-white pt-28 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-blue-500/10">
            <Building2 className="w-4 h-4" />
            Official Corporate Entity
          </div>
          <h1 className="section-heading text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Architecting the future of digital growth.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            Geypey Web Studio Limited is a premier front-end architecture and digital growth agency officially incorporated with the Corporate Affairs Commission (<span className="text-blue-400 font-medium">RC: 9977105</span>). We build secure, high-performance web platforms designed to scale modern businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Performance-First</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sub-second page load times, optimized Next.js App Router architectures, and elite Lighthouse standards guaranteed.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Security by Design</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enterprise-grade data protection backed by Supabase Row Level Security, strict TypeScript typing, and secure payment integrations.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transparent Systems</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Clean, scalable codebases and intuitive client dashboards that give you total visibility throughout project execution.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10">
          <div className="space-y-6">
            <h2 className="section-heading text-3xl font-bold tracking-tight">Our Origin & Vision</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Founded by <strong className="text-white">Iyere Godspower</strong>, Geypey Web Studio started with a clear mission: to bridge the gap between high-end aesthetic design and robust engineering execution for African and global brands.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Today, as a fully incorporated limited company, we partner with real estate leaders, fintech innovators, and ambitious startups to deliver bespoke digital products that drive measurable revenue and command absolute market trust.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>CAC Registered Private Company Limited by Shares</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Specialized in Next.js, TypeScript & Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Committed to global standards & local excellence</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 via-blue-900/10 to-transparent p-8 rounded-2xl border border-blue-500/20 space-y-6">
            <h3 className="text-2xl font-bold text-white">Ready to scale your digital presence?</h3>
            <p className="text-gray-400 text-sm">
              Whether you need a high-converting landing page or a complex web platform, our engineering team is ready to bring your vision to life.
            </p>
            <Link href="/hire" className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20">
              <span>Initialize Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
