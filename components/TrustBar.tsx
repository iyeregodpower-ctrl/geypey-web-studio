export default function TrustBar() {
  return (
    <div className="py-12 border-y border-zinc-900 bg-black text-center">
      <p className="text-zinc-500 text-sm mb-6 uppercase tracking-widest">Technically Certified By</p>
      <div className="flex justify-center gap-12 opacity-50 grayscale">
        {/* Placeholder logos for your certifications/partnerships */}
        <span>F-Bridge Africa</span>
        <span>FlyRank AI Engineering</span>
      
      </div>
    </div>
  );
}