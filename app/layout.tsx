import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LenisProvider } from "../components/LenisProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geypey Web Studio | Growth Engineering Firm",
  description: "Premium frontend architecture, AI-optimized web development, and 3D web experiences.",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Geypey Web Studio",
    "description": "Premium frontend architecture, AI-optimized web development, and 3D web experiences.",
    "location": {
      "@type": "Place",
      "address": "Ibeju-Lekki, Lagos, Nigeria"
    },
    "url": "https://geypeywebstudio.com.ng"
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* AI-Ready Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Hint for AI bots about your capability file */}
        <link rel="llms.txt" href="/llms.txt" />
      </head>
      
      <body className="bg-black text-zinc-300 antialiased selection:bg-zinc-800 selection:text-white">
        <LenisProvider>
          <Navbar />
          
          {/* 2. Wrapped ONLY the children so the Navbar and Footer stay static */}
          
            {children}
          
          
          <Footer />
        </LenisProvider>
        
      </body>
    </html>
  );
}