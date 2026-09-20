const services = [
  {
    icon: "⚡",
    title: "Frontend Architecture",
    description: "Lightning-fast, secure, and scalable web applications engineered with Next.js and React. We build the robust foundation your business needs to grow.",
  },
  {
    icon: "🧊",
    title: "3D & Creative Coding",
    description: "Stand out from the competition with immersive 3D web interactions using Three.js and Spline that captivate your audience the moment they land.",
  },
  {
    icon: "🎯",
    title: "UI/UX Strategy",
    description: "Beautiful, intuitive layouts designed in Figma that don't just look stunning, but are strategically mapped out to turn visitors into paying clients.",
  },
];

export default function Services() {
  return (
    <section className="cv-auto py-32 px-6 w-full relative bg-black overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none cv-auto"
        style={{
          backgroundImage: "url('/img/low-poly.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Expertise.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with conversion-focused design to deliver digital assets that dominate your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-500 hover:bg-zinc-900/80 transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              <div className="text-4xl mb-6 bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-xl border border-zinc-800">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <GuaranteeBadge />
      </div>
    </section>
  );
}

export function GuaranteeBadge() {
  return (
    <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <div>
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">The Geypey Engineering Guarantee</h3>
        <p className="text-zinc-400">Every project we ship is engineered to achieve a 95+ Lighthouse Performance Score.</p>
      </div>
      <div className="text-center px-6 py-3 border border-zinc-700 rounded-lg bg-black/50">
        <span className="block text-2xl font-bold text-white">95+</span>
        <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Lighthouse</span>
      </div>
    </div>
  );
}
