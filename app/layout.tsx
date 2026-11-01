import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeferredAnalytics from "../components/DeferredAnalytics";
import StickyWhatsApp from "../components/StickyWhatsApp";
import CookieBanner from "../components/CookieBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://geypeywebstudio.com.ng"),
  title: {
    default: "Geypey Web Studio | Growth Engineering Firm",
    template: "%s | Geypey Web Studio",
  },
  description: "Premium frontend architecture and UI/UX engineering agency based in Lagos, Nigeria. Specializing in high-performance websites for luxury real estate, hospitality, and modern brands.",
  keywords: [
    "Geypey Web Studio",
    "Iyere Godspower",
    "Web Developer Lagos",
    "Front End Developer Nigeria",
    "Real Estate Web Design",
    "Next.js Developer Lagos",
    "UI UX Designer Lagos",
  ],
  authors: [{ name: "Iyere Godspower" }],
  creator: "Iyere Godspower",
  publisher: "Geypey Web Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Geypey Web Studio | Growth Engineering Firm",
    description: "Premium frontend architecture and UI/UX engineering agency based in Lagos, Nigeria. Specializing in high-performance websites for luxury real estate, hospitality, and modern brands.",
    url: "https://geypeywebstudio.com.ng",
    siteName: "Geypey Web Studio",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Geypey Web Studio Portfolio Showcase",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geypey Web Studio | Growth Engineering Firm",
    description: "Premium frontend architecture and UI/UX engineering agency based in Lagos, Nigeria.",
    images: ["/img/og-image.png"],
    creator: "@geypey_webstudio",
  },
  alternates: {
    canonical: "https://geypeywebstudio.com.ng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Geypey Web Studio",
    url: "https://geypeywebstudio.com.ng",
    logo: "https://geypeywebstudio.com.ng/img/logo2.png",
    image: "https://geypeywebstudio.com.ng/img/og-image.png",
    description: "Premium frontend architecture and UI/UX engineering agency based in Lagos, Nigeria.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ibeju-Lekki",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.4698,
      longitude: 3.5852,
    },
    priceRange: "$$$",
    areaServed: "NG",
    sameAs: [
      "https://www.linkedin.com/in/iyere-godspower-76b092227",
      "https://instagram.com/geypey_webstudio",
      "https://tiktok.com/@geypey_web",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-XXX-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: "English",
    },
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Geypey Web Studio Limited",
    legalName: "Geypey Web Studio Limited",
    url: "https://geypeywebstudio.com.ng",
    logo: "https://geypeywebstudio.com.ng/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-705-028-0871",
      contactType: "customer service",
      email: "hello@geypeywebstudio.com.ng",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "52, Femi Ayinuola Street Gbetu",
      addressLocality: "Lekki",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    taxID: "2622497345354",
    founder: {
      "@type": "Person",
      name: "Iyere Godspower",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`,
          }}
        />
      </head>

      <body className="bg-black text-zinc-300 antialiased pt-20 selection:bg-zinc-800 selection:text-white font-sans">
        <DeferredAnalytics />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
