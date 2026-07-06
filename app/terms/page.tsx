import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Geypey Web Studio",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 py-32 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Terms & Conditions</h1>
      <p className="text-sm text-zinc-500 mb-12">Last Updated: July 2026</p>
      
      <div className="prose prose-invert prose-zinc max-w-none space-y-8">
        
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Geypey Web Studio ("we," "us," or "our"), concerning your access to and use of the geypeywebstudio.com.ng website. By accessing the site, you agree that you have read, understood, and agreed to be bound by all of these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Agency Services</h2>
          <p>
            Information provided on this website regarding project scopes, tiers, and pricing is for general informational purposes and constitutes an invitation to treat, not a binding contract. A formal, separate agreement and Statement of Work (SOW) will be provided and must be signed prior to the commencement of any engineering or design services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, Geypey Web Studio and/or its licensors own the intellectual property rights for all material on this website, including all source code, databases, functionality, software, website designs, audio, video, text, and graphics. Upon completion of a client project and receipt of full payment, intellectual property rights for the developed assets are transferred to the client as outlined in their specific project contract.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall Geypey Web Studio, nor its directors, employees, or partners, be liable for any indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">5. Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of Lagos State, Nigeria. Geypey Web Studio and yourself irrevocably consent that the courts of Lagos, Nigeria shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </section>

      </div>
    </main>
  );
}