import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LenisProvider } from "../components/LenisProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geypey Web Studio | Growth Engineering Firm",
  description: "Premium frontend architecture, AI-optimized web development, and 3D web experiences.",
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Geypey Web Studio",
    "url": "https://geypeywebstudio.com.ng"
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-zinc-300 antialiased selection:bg-zinc-800 selection:text-white">
        <Navbar />
        
        {/* Isolated main content for premium scrolling */}
        <main>
          <LenisProvider>
            {children}
          </LenisProvider>
        </main>
        
        <Footer />
      </body>
    </html>
  );
}