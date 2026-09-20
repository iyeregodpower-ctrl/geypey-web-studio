import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeferredAnalytics from "../components/DeferredAnalytics";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Geypey Web Studio | Growth Engineering Firm",
  description: "Premium frontend architecture, AI-optimized web development, and 3D web experiences.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Geypey Web Studio",
    url: "https://geypeywebstudio.com.ng",
  };

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="bg-black text-zinc-300 antialiased pt-20 selection:bg-zinc-800 selection:text-white font-sans">
        <DeferredAnalytics />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
