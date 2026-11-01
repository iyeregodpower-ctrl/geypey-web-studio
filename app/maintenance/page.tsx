export default function MaintenancePage() {
  return (
    <div className="bg-[#090D16] min-h-screen pt-32 px-6 md:px-12 lg:px-24 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-heading text-4xl font-bold mb-6">Maintenance & Support Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">Basic Retainer</h2>
            <p className="text-gray-400 text-sm">Monthly updates, security patches, and uptime monitoring.</p>
          </div>
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">Premium Retainer</h2>
            <p className="text-gray-400 text-sm">Everything in Basic plus feature enhancements and priority support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
