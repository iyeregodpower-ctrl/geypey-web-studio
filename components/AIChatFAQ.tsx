const faqData = [
  {
    question: "How long does a premium web development build take?",
    answer: "Our standard engineering timeline is 4 to 6 weeks. This ensures ample time for bespoke architecture, UI/UX design, and rigorous performance testing.",
  },
  {
    question: "Do you guarantee high performance?",
    answer: "Absolutely. We build exclusively with modern frameworks like Next.js and apply aggressive optimization techniques to guarantee a 95+ Lighthouse score.",
  },
  {
    question: "Do you handle the visual design and animations?",
    answer: "Yes. We craft the entire visual aesthetic and integrate sleek, luxurious motion into the interface without slowing the site down.",
  },
  {
    question: "What happens after the website is deployed?",
    answer: "We deploy your digital asset to a global edge network, run final QA, and hand over the keys to your new platform along with full documentation.",
  },
];

export default function AIChatFAQ() {
  return (
    <section className="cv-auto py-20 pt-32 bg-black flex flex-col items-center px-6 overflow-hidden relative">
      <div className="text-center mb-12 relative z-10 animate-fade-in-up">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Frequently Asked.</h2>
        <p className="text-zinc-400">Everything you need to know about our engineering process.</p>
      </div>

      <div className="flex flex-col w-full max-w-xl space-y-3 z-10 relative">
        {faqData.map((item, index) => (
          <details key={item.question} className="group border border-zinc-900 bg-zinc-950 rounded-2xl overflow-hidden open:border-zinc-700 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
            <summary className="cursor-pointer list-none px-5 py-4 flex justify-between items-center text-zinc-200 text-sm font-medium">
              {item.question}
              <span className="text-zinc-500 transition-transform duration-200 open:rotate-45">+</span>
            </summary>
            <p className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
