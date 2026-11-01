'use client';
import { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const faqData = [
  { question: "How long does a premium web development build take?", answer: "Our standard engineering timeline is 4 to 6 weeks. This ensures ample time for bespoke architecture, UI/UX design, and rigorous performance testing." },
  { question: "Do you guarantee high performance?", answer: "Absolutely. We build exclusively with modern frameworks like Next.js and apply aggressive optimization techniques to guarantee a 95+ Lighthouse score." },
  { question: "Do you handle the visual design and animations?", answer: "Yes. We craft the entire visual aesthetic and integrate sleek, luxurious motion into the interface without slowing the site down." },
  { question: "What happens after the website is deployed?", answer: "We deploy your digital asset to a global edge network, run final QA, and hand over the keys to your new platform along with full documentation." },
  { question: "What are your payment terms?", answer: "50% upfront, 50% on delivery." },
  { question: "How many revisions are included?", answer: "Up to 3 rounds of revisions per project." },
  { question: "Do you offer post-launch support?", answer: "Yes, via maintenance retainers." },
  { question: "Do you provide ongoing maintenance?", answer: "Yes, we offer comprehensive maintenance packages to ensure your website remains up-to-date and performs optimally." },
];

export default function AIChatFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-[#090D16] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4 shadow-lg shadow-blue-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            FAQ
          </div>
          <h2 className="section-heading text-3xl md:text-4xl font-semibold tracking-tight">Frequently Asked.</h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">Everything you need to know about our engineering process.</p>
        </div>
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div key={index} className="border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === index ? null : index)} className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-medium">
                {item.question}
                <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform ${open === index ? 'rotate-180' : ''}`} />
              </button>
              {open === index && <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
