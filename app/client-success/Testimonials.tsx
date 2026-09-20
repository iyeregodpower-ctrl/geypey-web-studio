const testimonials = [
  {
    id: 1,
    quote: "Geypey Web Studio did not just build a website; they engineered a digital asset that completely elevated our brand presence and performance.",
    name: "CEO",
    title: "Founder, Real Estate Firm",
  },
  {
    id: 2,
    quote: "The attention to detail in the UI/UX and the sheer speed of the Next.js architecture exceeded all of our technical requirements.",
    name: "Engineering Lead",
    title: "Tech Startup",
  },
  {
    id: 3,
    quote: "A seamless handoff and incredible communication throughout the entire build. The final product converts better than anything we have used before.",
    name: "Marketing Director",
    title: "E-commerce Brand",
  },
];

export default function Testimonials() {
  return (
    <section className="cv-auto py-32 bg-zinc-950 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 md:text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Client Impact.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Do not just take our word for it. Here is what happens when you invest in high-performance digital architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-black border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="text-white font-semibold tracking-wide">{testimonial.name}</div>
                <div className="text-zinc-500 text-sm mt-1">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
