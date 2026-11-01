'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#090D16] border-t border-white/10 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-400">
        We use cookies to improve your experience and comply with the Nigeria Data Protection Act (NDPA). By continuing, you consent to our use of cookies.
      </p>
      <button
        onClick={accept}
        className="px-5 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-400 transition-colors"
      >
        Accept
      </button>
    </div>
  );
}
