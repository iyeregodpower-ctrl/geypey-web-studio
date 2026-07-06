"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// The Strategic Agency Q&A Array
const faqData = [
  {
    question: "How long does a premium web development build take?",
    answer: "Our standard engineering timeline is 4 to 6 weeks. This ensures ample time for bespoke architecture, UI/UX design, and rigorous performance testing."
  },
  {
    question: "Do you guarantee high performance?",
    answer: "Absolutely. We build exclusively with modern frameworks like Next.js and apply aggressive optimization techniques to guarantee a 95+ Lighthouse score."
  },
  {
    question: "Do you handle the visual design and animations?",
    answer: "Yes. We craft the entire visual aesthetic, utilizing tools like Framer Motion to integrate sleek, luxurious physics and transitions into the interface."
  },
  {
    question: "What happens after the website is deployed?",
    answer: "We deploy your digital asset to a global edge network, run final QA, and hand over the keys to your new platform along with full documentation."
  }
];

export default function AIChatFAQ() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chatState, setChatState] = useState<"typing" | "thinking" | "replied">("typing");
  const [typedText, setTypedText] = useState("");

  // The Core Engine: Handles typing, thinking delays, and looping
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (chatState === "typing") {
      const currentQuestion = faqData[currentIndex].question;
      
      if (typedText.length < currentQuestion.length) {
        // Type the next character every 40ms
        timeout = setTimeout(() => {
          setTypedText(currentQuestion.slice(0, typedText.length + 1));
        }, 40);
      } else {
        // Finished typing, pause for a moment before hitting "send"
        timeout = setTimeout(() => {
          setChatState("thinking");
        }, 600);
      }
    } else if (chatState === "thinking") {
      // AI is "processing" the answer for 1.2 seconds
      timeout = setTimeout(() => {
        setChatState("replied");
      }, 1200);
    } else if (chatState === "replied") {
      // Answer is on screen. Wait 5 seconds so the user can read it, then loop.
      timeout = setTimeout(() => {
        setTypedText("");
        setChatState("typing");
        setCurrentIndex((prev) => (prev + 1) % faqData.length);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [chatState, typedText, currentIndex]);

  return (
    <section className="py-32 bg-black flex flex-col items-center px-6">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Frequently Asked.</h2>
        <p className="text-zinc-400 text-lg">Everything you need to know about our engineering process.</p>
      </div>

      <div className="w-full max-w-2xl bg-zinc-950/50 backdrop-blur-sm border border-zinc-900 rounded-3xl p-6 h-[420px] flex flex-col relative overflow-hidden shadow-2xl">
        
        {/* Chat History Window */}
        <div className="flex-1 overflow-y-auto flex flex-col justify-end space-y-6 pb-6">
          <AnimatePresence>
            
            {/* The User Question Bubble */}
            {(chatState === "thinking" || chatState === "replied") && (
              <motion.div 
                key={`user-${currentIndex}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="bg-zinc-800 text-white p-4 px-6 rounded-2xl rounded-br-sm max-w-[85%] self-end ml-auto text-sm md:text-base shadow-md"
              >
                {faqData[currentIndex].question}
              </motion.div>
            )}

            {/* The AI "Thinking" Indicator */}
            {chatState === "thinking" && (
              <motion.div 
                key="thinking"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white text-black p-4 rounded-2xl rounded-bl-sm w-20 mt-4 shadow-md flex items-center justify-center gap-1"
              >
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
              </motion.div>
            )}

            {/* The AI Answer Bubble */}
            {chatState === "replied" && (
              <motion.div 
                key={`ai-${currentIndex}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="bg-white text-black p-4 px-6 rounded-2xl rounded-bl-sm max-w-[90%] mt-4 text-sm md:text-base shadow-md leading-relaxed"
              >
                {faqData[currentIndex].answer}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* The Simulated Input Box */}
        <div className="mt-auto border-t border-zinc-900 pt-4 flex items-center gap-3">
          <div className="flex-1 bg-black border border-zinc-800 rounded-full px-6 py-4 text-zinc-300 font-mono text-sm shadow-inner flex items-center h-14">
            {chatState === "typing" ? (
              <span>{typedText}<span className="animate-pulse bg-white w-1.5 h-4 inline-block ml-1 align-middle"></span></span>
            ) : (
              <span className="opacity-0">.</span>
            )}
          </div>
          
          {/* Simulated Send Button - Lights up when typing is complete */}
          <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${chatState === "typing" && typedText.length === faqData[currentIndex].question.length ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "bg-zinc-900 text-zinc-600"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}