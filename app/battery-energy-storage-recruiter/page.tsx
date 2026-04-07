export default function BatteryEnergyStorageRecruiter() {
  return (
    <main className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans px-6 md:px-12 pt-32 pb-24">
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6">
          Battery Energy Storage Recruitment
        </p>

        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Battery energy storage recruiters for utility-scale and grid infrastructure teams.
        </h1>

        <p className="text-lg opacity-70 max-w-3xl mx-auto">
          Meridian Stone Search partners with developers, EPCs, and investors building battery energy storage systems (BESS) across the U.S.
        </p>

        <p className="text-sm opacity-60 max-w-3xl mx-auto mt-4">
          We support hiring across development, engineering, EPC execution, construction, and executive leadership — placing professionals who have delivered real projects, not just resumes.
        </p>
      </section>

      {/* MARKET CONTEXT */}
      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-center">
          The BESS hiring market is tight — and getting tighter
        </h2>

        <p className="opacity-70 mb-4">
          Battery storage is one of the fastest-growing segments in the U.S. energy market, with new capacity being deployed alongside solar and grid infrastructure.
        </p>

        <p className="opacity-70 mb-4">
          But the talent pool has not scaled at the same pace. Experienced professionals with hands-on utility-scale storage experience are limited, highly specialized, and already employed.
        </p>

        <p className="opacity-70">
          The result is a market where the strongest candidates are not applying to job postings — they are executing projects, managing interconnection, and being pulled across multiple platforms simultaneously.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl md:text-3xl font-black mb-10 text-center">
          Search coverage across battery storage
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-black/10 p-8">
            <h3 className="font-black mb-4">Development &amp; Interconnection</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li>BESS Development Managers</li>
              <li>Interconnection Engineers</li>
              <li>Transmission &amp; Grid Strategy</li>
              <li>Permitting &amp; Siting</li>
            </ul>
          </div>

          <div className="border border-black/10 p-8">
            <h3 className="font-black mb-4">Engineering &amp; Technical</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Battery Systems Engineers</li>
              <li>Power Systems Engineers</li>
              <li>BMS / Controls</li>
              <li>Grid Integration Specialists</li>
            </ul>
          </div>

          <div className="border border-black/10 p-8">
            <h3 className="font-black mb-4">EPC &amp; Construction</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li>VP of EPC (Storage)</li>
              <li>Construction Directors</li>
              <li>Project Executives</li>
              <li>Commissioning Leadership</li>
            </ul>
          </div>

          <div className="border border-black/10 p-8">
            <h3 className="font-black mb-4">Commercial &amp; Finance</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Project Finance (Storage)</li>
              <li>Structured Finance</li>
              <li>Origination &amp; Offtake</li>
              <li>Commercial Strategy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-2xl md:text-3xl font-black mb-6">
          This is not a job board market
        </h2>

        <p className="opacity-70 mb-4">
          The strongest battery storage professionals are not actively applying. Many are already deployed across utility-scale projects, often receiving multiple inbound approaches per week.
        </p>

        <p className="opacity-70">
          Successful hiring in this market requires direct access, technical credibility, and the ability to engage passive candidates who are not responding to traditional recruiting channels.
        </p>
      </section>

      {/* MANDATES */}
      <section className="max-w-4xl mx-auto mb-24 text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-6">
          Typical battery storage mandates
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm opacity-70">
          <div>Utility-scale BESS development teams</div>
          <div>EPC leadership buildouts</div>
          <div>Hybrid solar + storage platforms</div>
          <div>Grid integration hiring</div>
          <div>Executive leadership hires</div>
          <div>Confidential replacements</div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Discuss a battery storage search mandate
        </h2>

        <p className="opacity-70 mb-8">
          If you are scaling a battery energy storage platform, we can support targeted hiring across your team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:ian@meridianstonesearch.com?subject=BESS%20Search%20Mandate"
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
  );
}
