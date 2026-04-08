"use client";

type SiteNavProps = {
  onConnect?: () => void;
};

export default function SiteNav({ onConnect }: SiteNavProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 bg-[#F7F6F3]/90 backdrop-blur-md border-b border-[#111111]/5">
      <div className="flex items-center gap-4 md:gap-6 shrink-0">
        <a href="/" className="shrink-0">
          <img
            src="/Meridian Stone Search logo.png"
            alt="Logo"
            className="h-6 md:h-8 w-auto opacity-90"
          />
        </a>

        <a
          href="/roles-and-mandates"
          className="group relative text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
        >
          Roles
          <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#111111] transition-all duration-300 group-hover:w-full" />
        </a>

       <a
  href="/battery-energy-storage-recruiter"
  className="group relative text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
>
  BESS
  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#111111] transition-all duration-300 group-hover:w-full" />
</a>

<a
  href="/solar-recruiter"
  className="group relative text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
>
  Solar
  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#111111] transition-all duration-300 group-hover:w-full" />
</a>
</div>
        
      </div>

      {onConnect ? (
        <button
          onClick={onConnect}
          className="shrink-0 bg-[#111111] text-[#F7F6F3] px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-lg"
        >
          Connect
        </button>
      ) : (
        <a
          href="mailto:ian@meridianstonesearch.com?subject=Search%20Inquiry"
          className="shrink-0 bg-[#111111] text-[#F7F6F3] px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-lg"
        >
          Connect
        </a>
      )}
    </nav>
  );
}
