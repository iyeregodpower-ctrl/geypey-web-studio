import Image from "next/image";
import { ShieldCheck } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="bg-[#090D16] min-h-screen pt-32 px-6 md:px-12 lg:px-24 pb-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="section-heading text-4xl md:text-5xl font-bold tracking-tight mb-12">Leadership & Engineering</h1>
        <div className="flex flex-col md:flex-row gap-10 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-10">
          <Image src="/img/portfolio-image2.png" alt="Iyere Godspower" width={240} height={300} className="rounded-2xl object-cover border border-white/10" />
          <div>
            <h2 className="text-2xl font-bold text-white">Iyere Godspower</h2>
            <p className="text-blue-400 text-sm mb-4">Founder & Lead Engineer · Geypey Web Studio Limited</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading Geypey Web Studio Limited with expertise in Next.js, Supabase, and fintech-grade architecture. Specializes in high-performance web platforms, secure client portals, and conversion-focused UI/UX.
            </p>
            <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              CAC Registered (RC: 9977105)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
