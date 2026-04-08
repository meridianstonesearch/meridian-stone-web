import SiteNav from "@/components/SiteNav";
export default function BatteryEnergyStorageRecruiter() {
  return (
  <>
    <SiteNav />
    <main className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans px-6 md:px-12 pt-32 pb-24">
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6">
          Battery Energy Storage Recruiter
        </p>

        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Executive search across utility-scale BESS, solar + storage, and grid infrastructure platforms.
        </h1>

        <p className="text-lg opacity-70 max-w-3xl mx-auto">
          Meridian Stone Search partners with developers, EPCs, and investors hiring across battery energy storage systems (BESS), solar + storage, and grid-scale infrastructure.
        </p>

        <p className="text-sm opacity-60 max-w-3xl mx-auto mt-4">
          We support targeted search mandates across development, interconnection, engineering, EPC execution, construction, and executive leadership — placing professionals who have delivered real projects.
        </p>
      </section>

      {/* MARKET CONTEXT */}
      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-center">
          BESS hiring is one of the most constrained markets in energy.
        </h2>

        <p className="opacity-70 mb-4">
          Utility-scale battery storage (BESS) is scaling rapidly across the U.S., driven by grid reliability needs, renewable integration, and increasing power demand from data centers and electrification.
        </p>

        <p className="opacity-70 mb-4">
          But the talent pool has not kept pace. Experienced professionals across interconnection, EPC execution, and grid integration remain extremely limited — and are typically already deployed across active projects.
        </p>

        <p className="opacity-70">
          The strongest candidates are not applying to job postings. They are executing projects, solving real constraints, and being approached directly.
        </p>
      </section>

      {/* COVERAGE */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl md:text-3xl font-black mb-10 text-center">
          Battery Energy Storage Search Coverage:
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-black/10 p-8">
            <h3 className="font-black mb-4">Development & Interconnection</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li>BESS Development Managers</li>
              <li>Interconnection Engineers</li>
              <li>Transmission & Grid Strategy</li>
              <li>Permitting & Siting</li>
            </ul>
          </div>

          <div className="border border-black/10 p-8">
            <h3 className="font-black mb-4">Engineering & Technical</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Battery Systems Engineers</li>
              <li>Power Systems Engineers</li>
              <li>BMS / Controls Engineers</li>
              <li>Grid Integration Specialists</li>
            </ul>
          </div>

          <div className="border border-black/10 p-8">
            <h3 className="font-black mb-4">EPC & Construction</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li>VP of EPC (Storage)</li>
              <li>Construction Directors</li>
              <li>Project Executives</li>
              <li>Commissioning Leadership</li>
            </ul>
          </div>

          <div className="border border-black/10 p-8">
            <h3 className="font-black mb-4">Commercial & Finance</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Project Finance (BESS)</li>
              <li>Structured Finance</li>
              <li>Origination & Offtake</li>
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
          The strongest battery energy storage professionals are not actively looking. Many are already embedded in utility-scale projects and are highly selective about opportunities.
        </p>

        <p className="opacity-70">
          Successful hiring in BESS requires direct access, technical credibility, and the ability to engage passive candidates — not reliance on inbound applications.
        </p>
      </section>

      {/* INTERNAL LINKING (VERY IMPORTANT FOR SEO) */}
      <section className="max-w-4xl mx-auto mb-24 text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-6">
          Broader Renewable Energy search coverage
        </h2>

        <p className="opacity-70 mb-6">
          Meridian Stone Search supports hiring across solar, storage, EPC, and infrastructure platforms nationwide.
        </p>

        <a
          href="/roles-and-mandates"
          className="underline opacity-70 hover:opacity-100 transition-all"
        >
          View full roles & mandates coverage
        </a>
      </section>

      {/* CTA */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Discuss a battery energy storage search mandate
        </h2>

        <p className="opacity-70 mb-8">
          If you are scaling a BESS, solar + storage, or grid infrastructure platform, we can support targeted hiring across your team.
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
  </>
  );
}
