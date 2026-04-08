"use client";

type SiteNavProps = {
  onConnect?: () => void;
};

export default function SiteNav({ onConnect }: SiteNavProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-4 md:px-12 py-5 md:py-8 bg-[#F7F6F3]/90 backdrop-blur-md border-b border-[#111111]/5">
      <div className="flex items-center gap-2 md:gap-5 shrink-0">
        <a href="/" className="shrink-0">
          <img
            src="/Meridian Stone Search logo.png"
            alt="Logo"
            className="h-5 md:h-8 w-auto opacity-90"
          />
        </a>

        <a
          href="/roles-and-mandates"
          className="group relative text-[8px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
        >
          <span>Roles</span>
          <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#111111] transition-all duration-300 group-hover:w-full" />
        </a>

        <a
          href="/battery-energy-storage-recruiter"
          className="group relative text-[8px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
        >
          <span>BESS</span>
          <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#111111] transition-all duration-300 group-hover:w-full" />
        </a>

        <a
          href="/solar-recruiter"
          className="group relative text-[8px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
        >
          <span className="md:hidden">Sol</span>
          <span className="hidden md:inline">Solar</span>
          <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#111111] transition-all duration-300 group-hover:w-full" />
        </a>

        <a
          href="/development-recruiter"
          className="group relative text-[8px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
        >
          <span>Dev</span>
          <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#111111] transition-all duration-300 group-hover:w-full" />
        </a>

        <a
          href="/renewable-energy-finance-recruiter"
          className="group relative text-[8px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
        >
          <span className="md:hidden">Fin</span>
          <span className="hidden md:inline">Finance</span>
          <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#111111] transition-all duration-300 group-hover:w-full" />
        </a>

        <a
          href="/epc-construction-recruiter"
          className="group relative text-[8px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
        >
          <span>EPC</span>
          <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#111111] transition-all duration-300 group-hover:w-full" />
        </a>
      </div>

      {onConnect ? (
        <button
          onClick={onConnect}
          className="shrink-0 bg-[#111111] text-[#F7F6F3] px-4 md:px-6 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.2em] hover:scale-105 transition-all shadow-lg"
        >
          <span className="md:hidden">Connect</span>
          <span className="hidden md:inline">Connect</span>
        </button>
      ) : (
        <a
          href="mailto:ian@meridianstonesearch.com?subject=Search%20Inquiry"
          className="shrink-0 bg-[#111111] text-[#F7F6F3] px-4 md:px-6 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.2em] hover:scale-105 transition-all shadow-lg"
        >
          <span className="md:hidden">Connect</span>
          <span className="hidden md:inline">Connect</span>
        </a>
      )}
    </nav>
  );
}
