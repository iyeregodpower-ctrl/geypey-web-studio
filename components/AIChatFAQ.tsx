"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqData = [
  { question: "How long does a premium web development build take?", answer: "Our standard engineering timeline is 4 to 6 weeks. This ensures ample time for bespoke architecture, UI/UX design, and rigorous performance testing." },
  { question: "Do you guarantee high performance?", answer: "Absolutely. We build exclusively with modern frameworks like Next.js and apply aggressive optimization techniques to guarantee a 95+ Lighthouse score." },
  { question: "Do you handle the visual design and animations?", answer: "Yes. We craft the entire visual aesthetic, utilizing tools like Framer Motion to integrate sleek, luxurious physics and transitions into the interface." },
  { question: "What happens after the website is deployed?", answer: "We deploy your digital asset to a global edge network, run final QA, and hand over the keys to your new platform along with full documentation." }
];

export default function AIChatFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Chat State (Desktop)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chatState, setChatState] = useState<"typing" | "thinking" | "replied">("typing");
  const [typedText, setTypedText] = useState("");
  
  // Accordion State (Mobile)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const currentQ = useMemo(() => faqData[currentIndex].question, [currentIndex]);

  // Desktop Chat Logic
  useEffect(() => {
    if (!isInView) return;

    let timeout: NodeJS.Timeout;
    
    if (chatState === "typing") {
      if (typedText.length < currentQ.length) {
        timeout = setTimeout(() => setTypedText(currentQ.slice(0, typedText.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setChatState("thinking"), 800);
      }
    } else if (chatState === "thinking") {
      timeout = setTimeout(() => setChatState("replied"), 1500);
    } else if (chatState === "replied") {
      timeout = setTimeout(() => {
        setTypedText("");
        setChatState("typing");
        setCurrentIndex((prev) => (prev + 1) % faqData.length);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [chatState, typedText, currentIndex, currentQ, isInView]);

  return (
    <section ref={ref} className="py-20 pt-32 bg-black flex flex-col items-center px-6 overflow-hidden relative">
      
      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Frequently Asked.</h2>
        <p className="text-zinc-400">Everything you need to know about our engineering process.</p>
      </div>

      {/* --- DESKTOP VIEW: AI Chat (Hidden on Mobile) --- */}
      <div className="hidden md:flex w-full max-w-xl bg-zinc-950/50 border border-zinc-900 rounded-3xl p-5 h-[380px] flex-col relative shadow-2xl z-10">
        <div className="flex-1 overflow-hidden flex flex-col justify-end space-y-4 pb-4">
          <AnimatePresence mode="wait">
            {chatState === "thinking" && (
              <motion.div key="thinking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white text-black p-4 rounded-2xl rounded-bl-sm w-16 flex justify-center gap-1 self-start">
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.2s]" />
              </motion.div>
            )}

            {chatState === "replied" && (
              <motion.div key="replied" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <div className="bg-zinc-800 text-white p-3 px-5 rounded-2xl rounded-br-sm max-w-[85%] self-end ml-auto text-sm">
                  {currentQ}
                </div>
                <div className="bg-white text-black p-4 px-5 rounded-2xl rounded-bl-sm max-w-[90%] text-sm leading-relaxed shadow-lg self-start">
                  {faqData[currentIndex].answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-auto border-t border-zinc-900 pt-4 flex items-center gap-3">
          <div className="flex-1 bg-black border border-zinc-800 rounded-full px-5 py-3 text-zinc-300 text-sm h-12 flex items-center">
            {chatState === "typing" && <span>{typedText}<span className="animate-pulse bg-white w-1 h-4 inline-block ml-1" /></span>}
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW: Sleek Accordion (Hidden on Desktop) --- */}
      <div className="flex md:hidden flex-col w-full max-w-md space-y-3 z-10 relative">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border transition-colors duration-300 rounded-2xl overflow-hidden ${isOpen ? 'bg-zinc-900/80 border-zinc-700' : 'bg-zinc-950/50 border-zinc-900'}`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-zinc-200 text-sm font-medium pr-4">{item.question}</span>
                <span className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-1 text-sm text-zinc-400 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: "url('/img/low-poly.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
    </section>
  );
}