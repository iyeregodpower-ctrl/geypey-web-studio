import { ShieldCheck } from 'lucide-react';

export default function CACBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wide">
      <ShieldCheck className="w-4 h-4 text-blue-400" />
      <span>CAC Registered (RC: 9977105)</span>
    </div>
  );
}
