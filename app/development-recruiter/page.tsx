import SiteNav from "@/components/SiteNav";

export const metadata = {
  title: "Development Executive Search",
  description:
    "Executive search across renewable energy development, interconnection, permitting, siting, and origination platforms. Meridian Stone Search supports targeted hiring across solar, storage, and grid-scale project development.",
};

export default function DevelopmentRecruiterPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans px-6 md:px-12 pt-40 pb-24">
        <section className="max-w-6xl mx-auto text-center mb-32">
          <div className="mb-14 md:mb-16 flex justify-center">
            <img src="/Meridian Stone Search logo.png" alt="Meridian Stone Search Logo" className="h-24 md:h-36 w-auto object-contain brightness-95" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-8 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Development Executive Search</span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 max-w-5xl mx-auto">
            The right leaders in development <br />
            <span className="font-serif italic font-light lowercase tracking-tight normal-case opacity-70">are what turn land, queue position, and permits into viable projects.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-3xl font-serif italic mb-10 opacity-80">
            Executive search across renewable energy development, interconnection, permitting, siting, and origination platforms.
          </p>

          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-80">
            Meridian Stone Search partners with developers, IPPs, investors, and growth platforms to build the teams that move solar, storage, and grid-scale projects from greenfield strategy to construction-ready reality.
          </p>

          <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed opacity-60 mt-6">
            We support targeted search across development leadership, interconnection, transmission strategy, permitting, community engagement, origination, and executive buildouts — focusing on operators who know how to manage risk before it becomes schedule drag.
          </p>
        </section>

        <section className="max-w-5xl mx-auto mb-32">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Market Context</span>
              <div className="h-px w-10 bg-[#111111]" />
            </div>

            <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight max-w-4xl mx-auto">
              Development hiring is no longer just about pipeline growth. It is about navigating constraint.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl opacity-80 leading-relaxed font-medium text-center">
            <p>Renewable energy development is increasingly shaped by interconnection uncertainty, transmission limits, permitting pressure, local stakeholder complexity, policy volatility, and equipment or construction timing. The strongest development teams know how to manage all of it at once.</p>
            <p>That means the strongest hires are not simply experienced developers. They are the people who understand how land strategy, queue position, permitting, commercial viability, and timing risk all interact across a portfolio.</p>
          </div>
        </section>

        <section className="py-24 px-8 md:px-12 bg-[#111111] text-[#F7F6F3] mb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6 opacity-40">
                <div className="h-px w-10 bg-white" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Why This Market Is Different</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight">
                Projects do not reach NTP because companies have enough resumes.
                <br />
                <span className="opacity-70">They move because the right development leaders know how to solve risk before it compounds.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg opacity-80 leading-relaxed font-medium">
              <p>Development leadership sits upstream of nearly every major project outcome. Land control, interconnection, permitting, community engagement, utility coordination, environmental diligence, and commercial sequencing all determine whether a project becomes buildable or remains stuck in the pipeline.</p>
              <p>The strongest development professionals are usually already embedded inside active portfolios. They are selective, hard to access, and rarely surfaced through inbound channels. In this market, hiring the wrong person does not just slow hiring — it can slow the entire platform.</p>
              <p className="font-serif italic text-xl opacity-100">Successful hiring in development requires access, judgment, and a search process built around operators who understand how projects actually get de-risked.</p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Search Coverage</span>
              <div className="h-px w-10 bg-[#111111]" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Development mandates across the roles that shape project viability.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">Development Leadership</h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>Development Managers</li><li>Senior Development Managers</li><li>Directors / Heads of Development</li><li>Portfolio Development Leadership</li><li>Executive Buildout Hires</li>
              </ul>
            </div>

            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">Interconnection &amp; Grid Strategy</h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>Interconnection Managers</li><li>Interconnection Engineers</li><li>Transmission / Grid Strategy</li><li>Utility Coordination Leadership</li><li>Queue Risk Management</li>
              </ul>
            </div>

            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">Permitting, Siting &amp; Stakeholder Management</h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>Permitting Managers</li><li>Siting Leadership</li><li>Environmental / Land Strategy</li><li>Community Engagement</li><li>Local &amp; State Stakeholder Coordination</li>
              </ul>
            </div>

            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">Commercial &amp; Origination</h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>Origination</li><li>Commercial Strategy</li><li>Land Acquisition &amp; Real Estate</li><li>Development Finance Interface</li><li>Cross-Functional Platform Hires</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-32 text-center">
          <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Search Philosophy</span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight mb-8">This is not a volume hiring market.</h2>
          <p className="opacity-80 mb-4 text-lg md:text-xl leading-relaxed font-medium">The strongest development professionals are usually already operating inside active solar, storage, or hybrid portfolios. They are selective, difficult to access, and rarely persuaded by generic outreach or broad applicant funnels.</p>
          <p className="opacity-80 text-lg md:text-xl leading-relaxed font-medium">Meridian Stone Search approaches this market accordingly — through targeted search, role calibration, direct engagement, and a disciplined process built for leadership and project-critical hires rather than applicant flow.</p>
        </section>

        <section className="max-w-5xl mx-auto mb-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-5 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Related Search Coverage</span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>
          <p className="opacity-70 mb-10 text-lg leading-relaxed font-medium max-w-3xl mx-auto">Meridian Stone Search supports targeted hiring across development, solar, battery storage, EPC, and broader renewable energy platform buildouts.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm font-black uppercase tracking-[0.15em]">
            <a href="/battery-energy-storage-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">Battery Storage Search</a>
            <a href="/solar-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">Solar Executive Search</a>
            <a href="/epc-construction-recruiter" className="underline opacity-70 hover:opacity-100 transition-all">EPC &amp; Construction Search</a>
            <a href="/roles-and-mandates" className="underline opacity-70 hover:opacity-100 transition-all">Roles &amp; Mandates</a>
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Discuss a development hiring mandate</h2>
          <p className="opacity-70 mb-8 text-lg leading-relaxed font-medium">If you are scaling a solar, storage, or hybrid development platform, Meridian Stone Search can support targeted hiring across your team.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:ian@meridianstonesearch.com?subject=Development%20Search%20Mandate" className="inline-flex bg-black text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all">Email Ian</a>
            <a href="https://meetings.hubspot.com/ian-farber" target="_blank" className="inline-flex border border-black/30 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">Schedule a Call</a>
          </div>
        </section>
      </main>
    </>
  );
}
