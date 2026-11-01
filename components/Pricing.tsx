import Link from 'next/link';
import { Check, Zap, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: "Landing Experience",
    price: "₦150,000 - ₦300,000",
    description: "High-impact, lightning-fast landing pages optimized for maximum conversion and brand prestige.",
    features: [
      "1-2 Custom Next.js Pages",
      "Tailwind CSS & Framer Motion Animations",
      "Mobile-First Responsive Design",
      "WhatsApp & Booking Integration",
      "Basic SEO Setup & Metadata"
    ],
    popular: false,
  },
  {
    name: "Professional Corporate",
    price: "₦300,000 - ₦600,000",
    description: "Full corporate web platforms designed to reflect your official registered entity and scale leads.",
    features: [
      "3-6 Custom Architecture Pages",
      "Interactive Case Studies & Bento Grids",
      "Verified Google Review Integration",
      "Corporate Schema & Trust Badges",
      "Sub-second Edge Performance"
    ],
    popular: true,
  },
  {
    name: "Enterprise & Custom SaaS",
    price: "₦600,000+",
    description: "Advanced database-driven web applications, secure client portals, and bespoke frontend systems.",
    features: [
      "7+ Dynamic Pages & Dashboards",
      "Supabase / Firebase Integration",
      "Secure Authentication & Row Level Security",
      "Payment Gateway Integration (Paystack)",
      "Priority 24/7 Engineering Support"
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#090D16] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4 shadow-lg shadow-blue-500/10">
            <Zap className="w-3.5 h-3.5" />
            Transparent Investment
          </div>
          <h2 className="section-heading text-3xl md:text-4xl font-semibold tracking-tight">
            Engineering investment tiers.
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Clear, value-driven pricing designed to filter intent and match our status as an official corporate studio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${plan.popular ? 'bg-white/[0.04] border-2 border-blue-500 shadow-2xl shadow-blue-500/10' : 'bg-white/[0.02] border border-white/10 hover:border-white/20'}`}>
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold tracking-wide uppercase shadow-md">
                  Most Popular Choice
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{plan.description}</p>
                <div className="text-3xl font-extrabold text-white tracking-tight mb-6">
                  {plan.price}
                </div>
                <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/hire" className={`w-full py-3.5 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                <span>Initialize Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
