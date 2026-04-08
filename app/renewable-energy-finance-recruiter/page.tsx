import SiteNav from "@/components/SiteNav";

export const metadata = {
  title: "Renewable Energy Finance Executive Search",
  description:
    "Executive search across renewable energy finance, project finance, capital markets, structured finance, FP&A, valuation, and executive leadership. Meridian Stone Search supports targeted hiring across solar, storage, and infrastructure finance platforms.",
};

export default function RenewableEnergyFinanceRecruiterPage() {
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
              Renewable Energy Finance Executive Search
            </span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 max-w-5xl mx-auto">
            The right leaders in finance <br />
            <span className="font-serif italic font-light lowercase tracking-tight normal-case opacity-70">
              are what turn project ambition into fundable reality.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-3xl font-serif italic mb-10 opacity-80">
            Executive search across renewable energy project finance, capital markets, FP&amp;A, structured finance, and platform leadership.
          </p>

          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-80">
            Meridian Stone Search partners with developers, IPPs, investors, and growth platforms to build the finance teams that underwrite, structure, fund, and scale solar, storage, and infrastructure portfolios.
          </p>

          <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed opacity-60 mt-6">
            We support targeted search across project finance, tax equity and transferability interfaces, debt structuring, capital markets, valuation, portfolio FP&amp;A, asset-backed strategy, and executive finance buildouts — focusing on operators who understand both capital formation and execution risk.
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
              Finance hiring in renewables is no longer just about model-building. It is about structuring through uncertainty.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl opacity-80 leading-relaxed font-medium text-center">
            <p>
              Renewable energy finance teams are being asked to underwrite in a market shaped by higher power demand, tax credit policy shifts, transferability execution, merchant exposure, interconnection risk, supply chain pressure, and rising expectations around capital efficiency.
            </p>

            <p>
              The strongest hires are not simply good analysts. They are the people who understand how project economics, tax strategy, capital structure, commercial assumptions, and construction reality all connect inside a live platform.
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
                Projects do not close because companies have enough spreadsheets.
                <br />
                <span className="opacity-70">They close because the right finance leaders know how to price risk, structure capital, and align assumptions with execution.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg opacity-80 leading-relaxed font-medium">
              <p>
                Finance sits at the center of project viability. Capital markets, tax equity or transferability strategy, debt sizing, valuation, underwriting discipline, and portfolio planning all influence whether a project can move from concept to notice to proceed and ultimately into operating cash flow.
              </p>

              <p>
                The strongest finance professionals in renewables are usually already embedded inside active platforms or live transactions. They are selective, difficult to access, and rarely surfaced through generic finance recruiting channels.
              </p>

              <p className="font-serif italic text-xl opacity-100">
                Successful hiring in finance requires search partners who understand both infrastructure capital and the operating realities behind the numbers.
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
              Finance mandates across the roles that fund and scale platforms.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">
                Project Finance &amp; Structured Finance
              </h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>Project Finance Associates / VPs</li>
                <li>Structured Finance</li>
                <li>Tax Equity / Transferability Interface</li>
                <li>Debt Structuring</li>
                <li>Transaction Execution Leadership</li>
              </ul>
            </div>

            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">
                Capital Markets &amp; Investment Strategy
              </h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>Capital Markets</li>
                <li>Infrastructure Investment Roles</li>
                <li>Valuation &amp; Portfolio Strategy</li>
                <li>M&amp;A / Platform Finance</li>
                <li>Investor-Facing Finance Leadership</li>
              </ul>
            </div>

            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">
                FP&amp;A &amp; Corporate Finance
              </h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>FP&amp;A Leadership</li>
                <li>Corporate Planning</li>
                <li>Scenario Modeling</li>
                <li>Board / Investor Reporting</li>
                <li>Growth Platform Finance</li>
              </ul>
            </div>

            <div className="bg-white/50 border border-[#111111]/10 p-10 shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">
                Executive &amp; Commercial Finance
              </h3>
              <div className="h-px w-8 bg-[#111111]/20 mb-6" />
              <ul className="space-y-3 text-sm opacity-75 leading-relaxed font-medium">
                <li>Chief Financial Officers</li>
                <li>VP / SVP Finance</li>
                <li>Commercial Strategy</li>
                <li>Asset Management Finance</li>
                <li>Executive Buildout Hires</li>
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
            This is not a generic finance hiring market.
          </h2>

          <p className="opacity-80 mb-4 text-lg md:text-xl leading-relaxed font-medium">
            The strongest renewable energy finance professionals are usually already operating inside developers, IPPs, private equity-backed platforms, or infrastructure funds. They are selective, difficult to access, and rarely responsive to undifferentiated outreach.
          </p>

          <p className="opacity-80 text-lg md:text-xl leading-relaxed font-medium">
            Meridian Stone Search approaches this market accordingly — through targeted search, role calibration, direct engagement, and a disciplined process built for project-critical and platform-critical hires rather than generic applicant flow.
          </p>
        </section>

        {/* RELATED SEARCH COVERAGE */}
        <section className="max-w-5xl mx-auto mb-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-5 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              Related Search Coverage
            </span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <p className="opacity-70 mb-10 text-lg leading-relaxed font-medium max-w-3xl mx-auto">
            Meridian Stone Search supports targeted hiring across finance, development, solar, battery storage, EPC, and broader renewable energy platform buildouts.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm font-black uppercase tracking-[0.15em]">
            <a
              href="/development-recruiter"
              className="underline opacity-70 hover:opacity-100 transition-all"
            >
              Development Search
            </a>

            <a
              href="/battery-energy-storage-recruiter"
              className="underline opacity-70 hover:opacity-100 transition-all"
            >
              Battery Storage Search
            </a>

            <a
              href="/solar-recruiter"
              className="underline opacity-70 hover:opacity-100 transition-all"
            >
              Solar Executive Search
            </a>

            <a
              href="/epc-construction-recruiter"
              className="underline opacity-70 hover:opacity-100 transition-all"
            >
              EPC &amp; Construction Search
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Discuss a finance hiring mandate
          </h2>

          <p className="opacity-70 mb-8 text-lg leading-relaxed font-medium">
            If you are scaling a renewable energy platform and need stronger project finance, capital markets, FP&amp;A, or executive finance leadership, Meridian Stone Search can support targeted hiring across your team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ian@meridianstonesearch.com?subject=Finance%20Search%20Mandate"
              className="inline-flex bg-black text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all"
            >
              Email Ian
            </a>

            <a
              href="tel:18456253864"
              className="inline-flex border border-black/30 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              Call Direct
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
