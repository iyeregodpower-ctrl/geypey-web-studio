const expertiseAreas = [
  {
    title: "High-Performance Engineering",
    description: "We build secure, lightning-fast websites that load instantly and scale flawlessly as your business grows.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Immersive 3D & Animation",
    description: "Captivating visual experiences and smooth, interactive elements designed to keep visitors engaged on your site longer.",
    tools: ["Three.js", "React Three Fiber", "Spline", "CSS Animations"],
  },
  {
    title: "Design & Conversion Strategy",
    description: "Intuitive, premium layouts engineered to not just look beautiful, but to turn your traffic into loyal clients.",
    tools: ["Figma", "Responsive Design", "UI/UX Systems", "SEO"],
  },
];

export default function About() {
  return (
    <section className="cv-auto py-32 px-6 w-full relative bg-black overflow-hidden border-t border-zinc-900/50">
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none cv-auto"
        style={{
          backgroundImage: "url('/img/low-poly.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="pt-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Engineered for Growth.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            Based in Ibeju-Lekki, Geypey Web Studio is a premium digital agency dedicated to crafting experiences that perform as beautifully as they look. We specialize in high-end web architecture, 3D interactions, and conversion-focused design.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We don&apos;t just write code; we build digital assets. Whether it is a luxury real estate platform or a modern corporate hub, our mission is to deliver lightning-fast products that elevate your brand and drive actual business results.
          </p>
        </div>

        <div className="space-y-6">
          {expertiseAreas.map((area, index) => (
            <div key={area.title} className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{area.title}</h3>
              <p className="text-zinc-400 text-sm mb-5 leading-relaxed">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.tools.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-black border border-zinc-800 rounded-full text-zinc-300 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
