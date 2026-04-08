import SiteNav from "@/components/SiteNav";
export default function RolesAndMandates() {
 return (
    <>
      <SiteNav />
      <main className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans px-6 md:px-12 pt-32 pb-24">
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6">
          Roles & Mandates
        </p>

        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Search coverage across the renewable energy lifecycle.
        </h1>

        <p className="text-lg opacity-70 max-w-3xl mx-auto">
          Meridian Stone Search partners with developers, EPCs, investors, and growth platforms to hire proven operators across solar, storage, and infrastructure.
        </p>

        <p className="text-sm opacity-60 max-w-3xl mx-auto mt-4">
          From early-stage development through engineering, EPC execution, construction leadership, and executive buildouts, we support targeted search mandates across the roles that drive project delivery and platform growth.
        </p>
      </section>

      {/* ROLE CLUSTERS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-24">

        {/* DEVELOPMENT */}
        <div className="border border-black/10 p-8">
          <h3 className="font-black mb-4">Development & Interconnection</h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Development Engineer</li>
            <li>Development Manager</li>
            <li>Interconnection Manager</li>
            <li>Transmission / Grid Strategy</li>
            <li>Head of Development</li>
          </ul>
        </div>

        {/* EPC */}
        <div className="border border-black/10 p-8">
          <h3 className="font-black mb-4">EPC & Construction</h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li>VP of EPC</li>
            <li>Director of Construction</li>
            <li>Project Executive</li>
            <li>Project Manager</li>
            <li>Field Operations Leadership</li>
            <li>Estimating / Preconstruction</li>
          </ul>
        </div>

        {/* BESS */}
        <div className="border border-black/10 p-8">
          <h3 className="font-black mb-4">Energy Storage (BESS)</h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li>BESS Development</li>
            <li>Storage Engineering</li>
            <li>Hybrid Project Leadership</li>
            <li>EPC Leadership, Storage</li>
            <li>Commissioning & O&M</li>
          </ul>
        </div>

        {/* ENGINEERING */}
        <div className="border border-black/10 p-8">
          <h3 className="font-black mb-4">Engineering & Technical</h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Electrical Engineer</li>
            <li>Power Systems Engineer</li>
            <li>PVSyst / Design Engineer</li>
            <li>Owner’s Engineer</li>
            <li>Grid Integration</li>
          </ul>
        </div>

        {/* FINANCE */}
        <div className="border border-black/10 p-8">
          <h3 className="font-black mb-4">Finance & Commercial</h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Project Finance</li>
            <li>FP&A Leadership</li>
            <li>Capital Markets</li>
            <li>Investment Roles</li>
            <li>Commercial Strategy</li>
          </ul>
        </div>

        {/* EXEC */}
        <div className="border border-black/10 p-8">
          <h3 className="font-black mb-4">Executive & Platform Buildouts</h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li>CEO / COO</li>
            <li>VP / SVP Leadership</li>
            <li>Platform Buildouts</li>
            <li>Strategic Expansion Hires</li>
            <li>Leadership Upgrades</li>
          </ul>
        </div>

      </section>

      {/* MANDATE TYPES */}
      <section className="max-w-4xl mx-auto mb-24 text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-6">
          Typical mandates include
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm opacity-70">
          <div>Confidential replacements</div>
          <div>Team buildouts</div>
          <div>First-in-market hires</div>
          <div>Leadership upgrades</div>
          <div>Platform expansion</div>
          <div>Retained / strategic searches</div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Discuss a search mandate
        </h2>

        <p className="opacity-70 mb-8">
          If you are scaling a solar, storage, or EPC platform, Meridian Stone Search can support targeted hiring across your team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:ian@meridianstonesearch.com?subject=Search%20Mandate%20Inquiry"
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
