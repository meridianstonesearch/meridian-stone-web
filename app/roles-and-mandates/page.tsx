"use client";
import React from "react";

export default function RolesAndMandatesPage() {
  return (
    <div className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans antialiased selection:bg-[#111111] selection:text-[#F7F6F3]">
      <main>
        <section className="py-40 px-6 md:px-12 text-center border-b border-[#111111]/10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                Search Coverage
              </span>
              <div className="h-px w-10 bg-[#111111]" />
            </div>

            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Roles &amp; Mandates
            </h1>

            <p className="text-xl md:text-3xl font-serif italic opacity-80 mb-10">
              Search coverage across the renewable energy lifecycle.
            </p>

            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80 leading-relaxed font-medium">
              Meridian Stone Search partners with developers, EPCs, investors, and growth platforms to hire proven operators across solar, storage, and infrastructure.
            </p>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 border-b border-[#111111]/10 bg-white/50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-light italic font-serif mb-12 leading-tight">
              From early-stage development through execution and leadership.
            </h2>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium opacity-70 uppercase tracking-[0.12em]">
              {[
                "Development",
                "Interconnection",
                "Engineering",
                "EPC",
                "Construction",
                "Asset Management",
                "Executive Leadership",
                "Finance & Commercial",
              ].map((item, i) => (
                <span key={i} className="border border-[#111111]/20 px-4 py-2 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 bg-[#F7F6F3]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: "Development & Interconnection",
                roles: [
                  "Development Engineers",
                  "Development Managers",
                  "Interconnection Managers",
                  "Transmission / Grid Strategy",
                  "Head of Development",
                ],
              },
              {
                title: "EPC & Construction",
                roles: [
                  "VP of EPC",
                  "Directors of Construction",
                  "Project Executives",
                  "Project Managers",
                  "Field Operations Leadership",
                  "Estimating & Preconstruction",
                ],
              },
              {
                title: "Energy Storage (BESS)",
                roles: [
                  "BESS Development",
                  "Storage Engineering",
                  "Hybrid Project Leadership",
                  "EPC Leadership (Storage)",
                  "Commissioning & O&M",
                ],
              },
              {
                title: "Engineering & Technical",
                roles: [
                  "Electrical Engineers",
                  "Power Systems Engineers",
                  "PVSyst / Design Engineers",
                  "Owner's Engineers",
                  "Grid Integration",
                ],
              },
              {
                title: "Finance & Commercial",
                roles: [
                  "Project Finance",
                  "FP&A Leadership",
                  "Capital Markets",
                  "Investment Roles",
                  "Commercial Strategy",
                ],
              },
              {
                title: "Executive & Platform Buildouts",
                roles: [
                  "CEO / COO",
                  "VP & SVP Leadership",
                  "Platform Buildouts",
                  "Strategic Expansion Hires",
                  "Leadership Upgrades",
                ],
              },
            ].map((group, i) => (
              <div key={i} className="space-y-6 border-t border-[#111111]/10 pt-8">
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  {group.title}
                </h3>

                <ul className="space-y-2 text-lg opacity-80 leading-relaxed font-medium">
                  {group.roles.map((role, idx) => (
                    <li key={idx}>— {role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 border-t border-[#111111]/10 bg-white">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight">
              Typical mandates include:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg opacity-80 font-medium leading-relaxed">
              {[
                "Confidential replacement searches",
                "Growth-stage team buildouts",
                "First-in-market hires",
                "Leadership upgrades",
                "Platform expansion mandates",
                "Retained & strategic search engagements",
              ].map((item, i) => (
                <div key={i}>— {item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-40 px-6 bg-[#111111] text-[#F7F6F3] text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
              Discuss a Search Mandate
            </h2>

            <p className="text-lg opacity-70 leading-relaxed font-medium">
              If you are scaling a solar, storage, or EPC platform, Meridian Stone Search can support targeted hiring across your team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">

  <a
    href="mailto:ian@meridianstonesearch.com?subject=Search%20Mandate%20Inquiry"
    className="inline-flex bg-white text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all"
  >
    Email 
  </a>

  <a
    href="tel:18456253864"
    className="inline-flex border border-white/30 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
  >
    Call Direct
  </a>

</div>
          </div>
        </section>
      </main>
    </div>
  );
}
