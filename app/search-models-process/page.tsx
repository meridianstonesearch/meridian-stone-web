import SiteNav from "@/components/SiteNav";

export const metadata = {
  title: "Search Models & Process",
  description:
    "Explore Meridian Stone Search's contingent, retained, and multi-role search models, plus the process behind targeted renewable energy executive search.",
  alternates: {
    canonical: "/search-models-process",
  },
  openGraph: {
    title: "Search Models & Process | Meridian Stone Search",
    description:
      "Explore Meridian Stone Search's contingent, retained, and multi-role search models, plus the process behind targeted renewable energy executive search.",
    url: "https://meridianstonesearch.com/search-models-process",
  },
};

export default function SearchModelsProcessPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans px-6 md:px-12 pt-28 pb-16">
        <section className="max-w-6xl mx-auto text-center mb-16">
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
              Search Models &amp; Process
            </span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 max-w-5xl mx-auto">
            Search structures built for <br />
            <span className="font-serif italic font-light lowercase tracking-tight normal-case opacity-70">
              critical hires, tight markets, and real execution.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-3xl font-serif italic mb-10 opacity-80">
            Contingent, retained, and multi-role search models designed around hiring urgency, talent scarcity, and long-term growth.
          </p>

          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-80">
            Meridian Stone Search works with developers, EPCs, investors, and growth platforms across renewable energy. Each engagement is structured around the actual requirements of the mandate — whether the role is fast-moving, confidential, or central to the next phase of platform growth.
          </p>
        </section>

        <section className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                Why Structure Matters
              </span>
              <div className="h-px w-10 bg-[#111111]" />
            </div>

            <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight max-w-4xl mx-auto">
              The way a search is structured changes the quality of access, the speed of execution, and the signal your company sends into the market.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl opacity-80 leading-relaxed font-medium text-center">
            <p>
              Some roles can be run successfully on a contingent basis. Others sit inside smaller, highly networked talent pools where the best candidates are passive, already committed, and being approached carefully.
            </p>
            <p>
              In those markets, multiple recruiters calling the same shortlist creates noise. Employer messaging becomes fragmented. Timelines stretch. Candidate confidence drops.
            </p>
            <p>
              Meridian Stone Search aligns engagement structure to role criticality, confidentiality, and market tightness. The process should match the stakes.
            </p>
          </div>
        </section>
      {/* Differentiators strip */}
      <section className="max-w-5xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="border border-[#111111]/10 px-8 py-10">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Focus</p>
          <h3 className="text-lg font-black uppercase tracking-tight mb-3">Renewable Energy Only</h3>
          <p className="opacity-70 text-sm leading-relaxed">We don't split attention across unrelated sectors. Every client, every search, every market map is within renewable energy infrastructure.</p>
        </div>
        <div className="border border-[#111111]/10 px-8 py-10">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Access</p>
          <h3 className="text-lg font-black uppercase tracking-tight mb-3">Senior-Level Direct Outreach</h3>
          <p className="opacity-70 text-sm leading-relaxed">No junior sourcers, no bulk outreach. Every candidate is contacted directly and qualified at the senior level before any presentation.</p>
        </div>
        <div className="border border-[#111111]/10 px-8 py-10">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Accountability</p>
          <h3 className="text-lg font-black uppercase tracking-tight mb-3">One Point of Contact</h3>
          <p className="opacity-70 text-sm leading-relaxed">One consistent voice into every market. The same person who designs the search executes it and delivers the shortlist.</p>
        </div>
      </section>



        <section className="py-16 px-8 md:px-12 bg-[#111111] text-[#F7F6F3] mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8 opacity-40">
              <div className="h-px w-10 bg-white" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                Engagement Models
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-white/10 p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-4">Model One</p>
                <h3 className="text-2xl font-black tracking-tight mb-5">Contingent Search</h3>
                <p className="opacity-80 leading-relaxed mb-5">
                  Best for one-off roles where timing is flexible and the talent pool is broader. You pay on outcome, without exclusivity.
                </p>
                <p className="opacity-65 leading-relaxed text-sm">
                  This structure can make sense for lower-friction searches, but timelines are less predictable and market messaging is harder to control when multiple firms are approaching overlapping candidates.
                </p>
              </div>

              <div className="border border-white/10 p-8 bg-white/5">
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-4">Model Two</p>
                <h3 className="text-2xl font-black tracking-tight mb-5">Retained Search</h3>
                <p className="opacity-80 leading-relaxed mb-5">
                  Best for critical hires where quality and speed both matter. Structured around search launch, vetted shortlist delivery, and successful close.
                </p>
                <p className="opacity-65 leading-relaxed text-sm">
                  This is the preferred model for leadership, confidential replacements, and tightly networked markets where exclusivity improves access, accountability, and candidate experience.
                </p>
              </div>

              <div className="border border-white/10 p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-4">Model Three</p>
                <h3 className="text-2xl font-black tracking-tight mb-5">Multi-Role Retainer</h3>
                <p className="opacity-80 leading-relaxed mb-5">
                  Best for platforms scaling across several openings over a defined window â from PMs and engineers to leadership buildouts.
                </p>
                <p className="opacity-65 leading-relaxed text-sm">
                  This model creates continuity across the hiring roadmap: one process, one market voice, one quality bar, and no reset between searches.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                Process
              </span>
              <div className="h-px w-10 bg-[#111111]" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              How every search runs.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Calibration & Search Design",
                body: "We begin by aligning on the mandate itself: role scope, reporting line, success profile, market context, compensation, urgency, and where the real pressure points sit inside the business.",
              },
              {
                title: "Target Mapping",
                body: "We build a focused market map around comparable platforms, adjacent talent pools, and specific competitor sets â especially where passive candidates are most likely to sit.",
              },
              {
                title: "Direct Outreach & Qualification",
                body: "We engage the market with one consistent voice, qualifying not just rÃ©sumÃ© fit, but motivation, timing, technical depth, leadership judgment, and platform alignment.",
              },
              {
                title: "Shortlist Delivery",
                body: "Clients receive a disciplined shortlist of relevant candidates with clear context on track record, fit, compensation, motivators, and likely closing considerations.",
              },
              {
                title: "Interview & Close Support",
                body: "We stay tight to the process through interview coordination, feedback, reference support, offer shaping, and candidate management â especially where momentum and confidentiality matter.",
              },
              {
                title: "Post-Placement Follow-Through",
                body: "A successful search does not end at signature. We stay close through transition and early-stage integration to support durable outcomes rather than transactional closes.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Step {i + 1}</p>
                <h3 className="text-xl font-black uppercase tracking-tight mb-6">{item.title}</h3>
                <div className="h-px w-8 bg-[#111111]/20 mb-6" />
                <p className="text-sm opacity-75 leading-relaxed font-medium">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              Why Clients Use Meridian
            </span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight mb-8">
            One consistent market voice. One accountable process. One search partner close enough to understand what actually matters.
          </h2>

          <p className="opacity-80 mb-4 text-lg md:text-xl leading-relaxed font-medium">
            Meridian Stone Search is built for clients who want more than candidate flow. We work selectively, stay close to the mandate, and structure each engagement around actual market conditions rather than generic recruiting volume.
          </p>

          <p className="opacity-80 text-lg md:text-xl leading-relaxed font-medium">
            That includes confidential replacements, executive buildouts, team scaling mandates, and project-critical hires across renewable energy development, solar, storage, finance, and EPC execution.
          </p>
        </section>

        <section className="max-w-5xl mx-auto mb-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-5 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              Related Search Coverage
            </span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm font-black uppercase tracking-[0.15em]">
            <a href="/roles-and-mandates" className="underline opacity-70 hover:opacity-100 transition-all">Roles &amp; Mandates</a>
            <a href="/development-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">Development Search</a>
            <a href="/battery-energy-storage-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">Battery Storage Search</a>
            <a href="/solar-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">Solar Executive Search</a>
            <a href="/epc-construction-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">EPC &amp; Construction Search</a>
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to structure your search?
          </h2>

          <p className="opacity-70 mb-8 text-lg leading-relaxed font-medium">
            Whether you need a single critical hire, a confidential replacement, or a multi-role buildout — Meridian Stone Search will structure the engagement to match what's actually at stake.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ian@meridianstonesearch.com?subject=Start%20a%20Search"
              className="inline-flex bg-black text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all"
            >
              Start a Search
            </a>

            <a
              href="https://meetings.hubspot.com/ian-farber"
              target="_blank"
              className="inline-flex border border-black/30 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              Schedule a Call
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
