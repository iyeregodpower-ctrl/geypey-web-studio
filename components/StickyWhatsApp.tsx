import { MessageCircle } from 'lucide-react';

export default function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/2347050280871"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:bg-blue-400 hover:scale-110 transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
