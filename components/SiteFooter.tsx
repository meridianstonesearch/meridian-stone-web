import { Phone, Mail, Linkedin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-[#111111]/10 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 items-start text-center md:text-left">
        <div>
          <img
            src="/Meridian Stone Search logo.png"
            className="h-8 opacity-80 mx-auto md:mx-0"
            alt="Meridian Stone Search Logo"
          />
          <p className="mt-5 text-sm opacity-60 max-w-sm mx-auto md:mx-0 leading-relaxed">
            Boutique executive search across renewable energy development, solar, storage, finance, and EPC platforms.
          </p>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-4">
            Specialties
          </p>
          <div className="flex flex-col gap-3 text-sm font-medium opacity-75">
            <a href="/battery-energy-storage-recruiter" className="hover:opacity-100 transition-all">Battery Storage</a>
            <a href="/solar-recruiter" className="hover:opacity-100 transition-all">Solar</a>
            <a href="/development-recruiter" className="hover:opacity-100 transition-all">Development</a>
            <a href="/renewable-energy-finance-recruiter" className="hover:opacity-100 transition-all">Finance</a>
            <a href="/epc-construction-recruiter" className="hover:opacity-100 transition-all">EPC &amp; Construction</a>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-4">
            Contact
          </p>
          <div className="flex flex-col gap-3 text-sm font-medium opacity-75">
            <a href="/roles-and-mandates" className="hover:opacity-100 transition-all">Roles &amp; Mandates</a>
            <a href="mailto:ian@meridianstonesearch.com" className="hover:opacity-100 transition-all">ian@meridianstonesearch.com</a>
            <a href="tel:18456253864" className="hover:opacity-100 transition-all">+1 845 625 3864</a>
            <a href="mailto:ian@meridianstonesearch.com?subject=Schedule%20a%20Call" className="hover:opacity-100 transition-all">Schedule a Call</a>
            <a href="https://www.linkedin.com/in/ian-farber-b73428233/" target="_blank" className="hover:opacity-100 transition-all">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left mt-14 pt-8 border-t border-[#111111]/10">
        <div className="flex gap-8 items-center">
          <a href="tel:18456253864" className="hover:opacity-50 transition-all">
            <Phone size={16} />
          </a>
          <a href="mailto:ian@meridianstonesearch.com" className="hover:opacity-50 transition-all">
            <Mail size={16} />
          </a>
          <a href="https://www.linkedin.com/in/ian-farber-b73428233/" target="_blank" className="hover:opacity-50 transition-all">
            <Linkedin size={16} />
          </a>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-30 italic">
          © 2026 Meridian Stone Search
        </p>
      </div>
    </footer>
  );
}
