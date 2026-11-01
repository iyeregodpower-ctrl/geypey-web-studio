'use client';
import { useState } from 'react';
import { ShieldCheck, LogIn } from 'lucide-react';

export default function ClientPortalPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="min-h-screen bg-[#090D16] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-3xl p-8">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheck className="w-6 h-6 text-blue-400" />
          <h1 className="text-2xl font-bold text-white">Client Portal</h1>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" />
          <button type="submit" disabled={loading} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center gap-2 transition-colors">
            <LogIn className="w-4 h-4" />
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
        <p className="text-gray-500 text-xs mt-6 text-center">Secure access for active clients of Geypey Web Studio Limited.</p>
      </div>
    </div>
  );
}
