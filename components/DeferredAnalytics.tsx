"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function DeferredAnalytics() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;

    if (connection?.saveData) return;
    if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") return;

    const enable = () => setLoad(true);
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 3500));
    const id = idle(enable);

    return () => {
      if (typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(id as number);
      } else {
        clearTimeout(id as number);
      }
    };
  }, []);

  if (!load) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-660HDDQSBF"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-660HDDQSBF', { page_path: window.location.pathname });
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="lazyOnload">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xitamor5qe");
        `}
      </Script>
    </>
  );
}
