import SiteNav from "@/components/SiteNav";
export const metadata = {
  title: "Solar Executive Search",
  description:
    "Executive search across utility-scale solar, community solar, C&I, EPC, and project delivery platforms. Meridian Stone Search supports targeted hiring across development, engineering, construction, and executive leadership.",
  alternates: {
    canonical: "/solar-recruiter",
  },
  openGraph: {
    title: "Solar Executive Search | Meridian Stone Search",
    description:
      "Executive search across utility-scale solar, community solar, C&I, EPC, and project delivery platforms.",
    url: "https://meridianstonesearch.com/solar-recruiter",
  },
};
export default function SolarRecruiterPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans px-6 md:px-12 pt-40 pb-24">
        {/* HERO */}
        <section className="max-w-6xl mx-auto text-center mb-32">
          <div className="mb-14 md:mb-16 flex justify-center">
            <img
              src="/Meridian Stone Search logo.png"
              alt="Meridian Stone Search Logo"
              className="h-24 md:h-36 w-auto object-contain brightness-95"
            />
          </div>

          <div className="flex items-center justify-center gap-3 mb-8 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              Solar Executive Search
            </span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 max-w-5xl mx-auto">
            The right hires in solar <br />
            <span className="font-serif italic font-light lowercase tracking-tight normal-case opacity-70">
              are already building projects.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-3xl font-serif italic mb-10 opacity-80">
            Executive search across utility-scale solar, community solar, C&amp;I, EPC, and project delivery platforms.
          </p>

          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-80">
            Meridian Stone Search partners with developers, EPCs, investors, and growth platforms to build high-impact teams across solar development, engineering, construction, and executive leadership.
          </p>

          <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed opacity-60 mt-6">
            We support targeted search across origination, permitting, interconnection, engineering, EPC execution, construction, commercial strategy, and platform leadership — focusing on professionals who have delivered real projects in competitive markets.
          </p>
        </section>

        {/* MARKET NARRATIVE */}
        <section className="max-w-5xl mx-auto mb-32">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                Market Context
              </span>
              <div className="h-px w-10 bg-[#111111]" />
            </div>

            <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight max-w-4xl mx-auto">
              Solar hiring is no longer just a volume issue. It is an execution issue.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl opacity-80 leading-relaxed font-medium text-center">
            <p>
              Utility-scale solar continues to account for a dominant share of new U.S. power capacity, but project delivery is increasingly shaped by permitting pressure, module availability, labor tightness, interconnection complexity, and commercial discipline.
            </p>

            <p>
              That means the strongest hires are not simply experienced solar candidates. They are the operators who know how to move projects from development through EPC execution, navigate real-world constraints, and build teams that can scale without losing rigor.
            </p>
          </div>
        </section>

        {/* WHY THIS MARKET IS DIFFERENT */}
        <section className="py-24 px-8 md:px-12 bg-[#111111] text-[#F7F6F3] mb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6 opacity-40">
                <div className="h-px w-10 bg-white" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                  Why This Market Is Different
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight">
                Solar platforms do not slow down because they lack interest.
                <br />
                <span className="opacity-70">They slow down because leadership, technical judgment, and execution talent are harder to secure than the market admits.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg opacity-80 leading-relaxed font-medium">
              <p>
                The strongest professionals in solar are typically already deployed inside active development, EPC, construction, or commercial teams. They are selective, difficult to access, and rarely surfaced through applicant flow alone.
              </p>

              <p>
                In this market, the wrong hire can create drag across permitting, interconnection, procurement, schedule, field execution, and stakeholder alignment. The right hire can unlock a platform’s ability to scale.
              </p>

              <p className="font-serif italic text-xl opacity-100">
                Successful hiring in solar requires access, calibration, and a search process built around highly relevant operators — not generic recruiting volume.
              </p>
            </div>
          </div>
        </section>

        {/* SEARCH COVERAGE */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                Search Coverage
              </span>
              <div className="h-px w-10 bg-[#111111]" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Solar mandates across the roles that move projects.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">
                Development &amp; Interconnection
              </h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>Development Engineers</li>
                <li>Development Managers</li>
                <li>Permitting &amp; Siting Leadership</li>
                <li>Interconnection Managers</li>
                <li>Grid / Transmission Strategy</li>
              </ul>
            </div>

            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">
                Engineering &amp; Technical
              </h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>Electrical Engineers</li>
                <li>PVSyst / Design Engineers</li>
                <li>Owner&apos;s Engineers</li>
                <li>Grid Integration Specialists</li>
                <li>Technical Leadership</li>
              </ul>
            </div>

            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">
                EPC &amp; Construction
              </h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>VP of EPC</li>
                <li>Directors of Construction</li>
                <li>Project Executives</li>
                <li>Field / Execution Leadership</li>
                <li>Commissioning &amp; Delivery Leadership</li>
              </ul>
            </div>

            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">
                Commercial &amp; Executive
              </h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>Project Finance</li>
                <li>Capital Markets</li>
                <li>Origination &amp; Commercial Strategy</li>
                <li>Executive &amp; Platform Buildout Hires</li>
                <li>Leadership Upgrades</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEARCH STYLE */}
        <section className="max-w-4xl mx-auto mb-32 text-center">
          <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              Search Philosophy
            </span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight mb-8">
            This is not a volume hiring market.
          </h2>

          <p className="opacity-80 mb-4 text-lg md:text-xl leading-relaxed font-medium">
            The strongest solar professionals are usually already operating inside active development, EPC, construction, or commercial environments. They are selective, difficult to access, and rarely persuaded by generic outreach alone.
          </p>

          <p className="opacity-80 text-lg md:text-xl leading-relaxed font-medium">
            Meridian Stone Search approaches this market accordingly — through targeted search, role calibration, direct engagement, and a disciplined process built for critical hires rather than applicant flow.
          </p>
        </section>

<section className="max-w-5xl mx-auto mb-24 text-center">
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm font-black uppercase tracking-[0.15em]">
    <a href="/development-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">Development Search</a>
    <a href="/renewable-energy-finance-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">Finance Search</a>
    <a href="/battery-energy-storage-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">Battery Storage Search</a>
    <a href="/epc-construction-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">EPC &amp; Construction Search</a>
    <a href="/roles-and-mandates" className="underline opacity-70 hover:opacity-100 transition-all">Roles &amp; Mandates</a>
  </div>
</section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Discuss a solar hiring mandate</h2>
          <p className="opacity-70 mb-8 text-lg leading-relaxed font-medium">If you are scaling a utility-scale solar, community solar, or EPC platform, Meridian Stone Search can support targeted hiring across your team.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:ian@meridianstonesearch.com?subject=Solar%20Search%20Mandate" className="inline-flex bg-black text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all">Email Ian</a>
            <a href="https://meetings.hubspot.com/ian-farber" target="_blank" className="inline-flex border border-black/30 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">Schedule a Call</a>
          </div>
        </section>
      </main>
    </>
  );
}
