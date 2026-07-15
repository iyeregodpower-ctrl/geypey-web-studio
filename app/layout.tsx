import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LenisProvider } from "../components/LenisProvider";
import { Metadata } from "next";
import Script from "next/script";

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
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
      </head>
      
      <body className="bg-black text-zinc-300 antialiased pt-20 selection:bg-zinc-800 selection:text-white">
        
        {/* --- GOOGLE ANALYTICS 4 --- */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-660HDDQSBF`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-660HDDQSBF', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* --- MICROSOFT CLARITY --- */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xitamor5qe");
          `}
        </Script>

        <Navbar />
        
        <main className="min-h-screen">
          <LenisProvider>
            {children}
          </LenisProvider>
        </main>
        
        <Footer />
      </body>
    </html>
  );
}