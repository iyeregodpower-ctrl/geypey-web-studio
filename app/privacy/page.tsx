import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Geypey Web Studio",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 py-32 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Privacy Policy</h1>
      <p className="text-sm text-zinc-500 mb-12">Last Updated: July 2026</p>
      
      <div className="prose prose-invert prose-zinc max-w-none space-y-8">
        
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
          <p>
            Geypey Web Studio ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. The Data We Collect</h2>
          <p>
            We may collect, use, and store different kinds of personal data about you. When you request a project proposal through our website, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400 mt-4">
            <li><strong>Identity Data:</strong> Your first and last name.</li>
            <li><strong>Contact Data:</strong> Your email address.</li>
            <li><strong>Project Data:</strong> Information regarding your business goals, budget, and project requirements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400 mt-4">
            <li>To respond to your project inquiries and provide service proposals.</li>
            <li>To manage our relationship with you as a prospective or active client.</li>
            <li>To improve our website, services, and client experiences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing and Security</h2>
          <p>
            We do not sell, trade, or rent your personal identification information to others. We use secure, industry-standard third-party services (such as Formspree) exclusively to process our contact forms. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at: <a href="mailto:hello@geypeywebstudio.com.ng" className="text-white hover:underline">hello@geypeywebstudio.com.ng</a>.
          </p>
        </section>

      </div>
    </main>
  );
}