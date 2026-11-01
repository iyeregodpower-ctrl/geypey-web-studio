import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import CACBadge from "./CACBadge";

export default function Footer() {
  return (
    <footer className="bg-[#090D16] border-t border-white/10 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Brand & Legal Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Geypey Web Studio Limited</h3>
          <CACBadge />
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            A premium UI/UX and front-end architecture agency delivering secure, technology-driven digital platforms.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="mailto:hello@geypeywebstudio.com.ng" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" /> hello@geypeywebstudio.com.ng
              </a>
            </li>
            <li>
              <a href="https://wa.me/2347050280871" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" /> +234 705 028 0871 (WhatsApp)
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>52, Femi Ayinuola Street Gbetu,<br/>Lekki, Lagos State, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center md:text-left text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Geypey Web Studio Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
