import InteriorPassThrough from "@/components/InteriorPassThrough";
import SiteNav from "@/components/SiteNav";

export const metadata = {
  title: "2026 BESS Hiring Intelligence Report",
  description:
    "Download Meridian Stone Search's 2026 BESS and utility-scale hiring intelligence report with Director-to-VP compensation benchmarks, total comp structures, and market commentary.",
  alternates: {
    canonical: "/salary-guide",
  },
  openGraph: {
    title: "2026 BESS Hiring Intelligence Report | Meridian Stone Search",
    description:
      "Director-to-VP compensation benchmarks, total comp structures, and hiring intelligence across BESS and utility-scale platforms.",
    url: "https://meridianstonesearch.com/salary-guide",
  },
};

const whatsInside = [
  {
    title: "Base Salary Benchmarks",
    body:
      "20+ roles across Development, EPC, Finance, and BESS-specific functions. Percentile ranges, market alignment, and cross-validated compensation context.",
  },
  {
    title: "Total Compensation Structures",
    body:
      "Annual bonus targets by level, equity prevalence, and the real tradeoffs candidates evaluate when leaving unvested upside behind.",
  },
  {
    title: "Why Offers Fail",
    body:
      "The controllable non-salary factors most often killing finalist processes in 2026 — from timing friction to hybrid expectations and process drag.",
  },
  {
    title: "Regional Premiums & YoY Trends",
    body:
      "Regional adjustments across major markets, plus directional compensation movement from 2023 through 2026 for key Director and VP mandates.",
  },
  {
    title: "Market Commentary",
    body:
      "Direct hiring intelligence from active searches and closed placements — what the data misses, where searches stall, and what to expect next.",
  },
];

const previewRows = [
  ["Director of Development", "$148K", "$178K", "$210K", "$240K"],
  ["Sr. Director of Development", "$178K", "$208K", "$238K", "$265K"],
  ["VP of Development", "$195K", "$248K", "$305K", "$355K"],
  ["Head of Origination", "$182K", "$218K", "$252K", "$285K"],
  ["Director, BESS Engineering", "$162K", "$195K", "$228K", "$265K"],
];

const whoItsFor = [
  "You are building an offer and want to know if your compensation bands are actually current.",
  "You lost a finalist recently and suspect the offer structure was part of it.",
  "You are planning a Director or VP search in Q2 or Q3 and need cleaner budget expectations.",
  "Your internal benchmark data has not caught up to the 2025–2026 market.",
];

export default function SalaryGuidePage() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans px-6 md:px-12 pt-40 pb-24">
        <InteriorPassThrough text="Hiring Intelligence Report" />

        <section className="min-h-[78vh] flex flex-col justify-center items-center text-center max-w-6xl mx-auto pb-12">
          <div className="flex items-center justify-center gap-3 mb-10 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              Hiring Intelligence Report · April 2026
            </span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <h1 className="text-4xl md:text-[5.5rem] font-black uppercase tracking-[-0.06em] leading-[0.9] max-w-5xl mx-auto mb-5 text-balance">
            2026 BESS &amp; Utility-Scale
            <span className="block font-serif italic font-light normal-case tracking-tight text-[#111111]/70 mt-2 text-[0.8em] leading-[1.02]">
              Hiring Intelligence.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-[1.7rem] font-serif italic opacity-85 leading-[1.35] mb-10 text-balance">
            Director-to-VP compensation benchmarks sourced from closed placements and active searches.
            Not Glassdoor. Not LinkedIn. Real offers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-5xl mx-auto mb-12">
            {[
              "20+ roles benchmarked",
              "Multi-source verified",
              "Total comp breakdown",
              "BESS premium analysis",
              "YoY trend review",
            ].map((item) => (
              <div
                key={item}
                className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#111111]/45 flex items-center gap-2"
              >
                <span className="inline-block h-1 w-1 rounded-full bg-[#111111]/30" />
                {item}
              </div>
            ))}
          </div>

          <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#111111]/35 animate-pulse">
            ↓ Get the Report
          </div>
        </section>

        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-12 lg:gap-20 items-start">
          <div>
            <div className="bg-[#EFEEEA] border-l-[3px] border-[#111111] px-5 py-5 mb-12">
              <p className="text-xs font-black uppercase tracking-[0.08em] mb-1">
                Not Glassdoor. Not LinkedIn.
              </p>
              <p className="text-sm md:text-[15px] leading-relaxed text-[#111111]/70">
                Consumer salary data is usually too thin and too stale at the Director and VP level. This report is built around closed placements, active searches, and live market calibration from Q4 2025 through Q1 2026.
              </p>
            </div>

            <section className="mb-14">
              <div className="flex items-center gap-3 mb-6 opacity-40">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                  What&apos;s Inside
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <div className="space-y-1">
                {whatsInside.map((item, index) => (
                  <div key={item.title} className="flex gap-4 border border-[#111111]/10 bg-white px-5 py-5 hover:border-[#111111]/20 transition-all">
                    <div className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#111111]/40 pt-1 w-7 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h2 className="text-[13px] font-black uppercase tracking-[0.05em] mb-1">
                        {item.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-[#111111]/70">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-14">
              <div className="flex items-center gap-3 mb-6 opacity-40">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                  Sample Data — Development Roles
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <div className="border border-[#111111]/10 overflow-hidden bg-white">
                <div className="bg-[#111111] text-[#F7F6F3] px-5 py-3 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">
                  Base Salary Benchmarks · Development · Director &amp; VP Level
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#EFEEEA] border-b border-[#111111]/10">
                        <th className="px-4 py-3 text-left text-[10px] uppercase tracking-[0.05em] font-black">Role</th>
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">P25</th>
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">P50</th>
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">P75</th>
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">P90</th>
                      </tr>
                    </thead>
                    <tbody>
                      {previewRows.map((row, index) => (
                        <tr key={row[0]} className={index % 2 === 0 ? "bg-white" : "bg-[#F7F6F3]"}>
                          <td className="px-4 py-3 border-b border-[#111111]/10 font-bold text-[13px]">
                            {row[0]}
                            {row[0] === "Director, BESS Engineering" ? (
                              <span className="ml-2 inline-block bg-[#111111] text-[#F7F6F3] px-2 py-1 align-middle font-mono text-[7px] uppercase tracking-[0.15em] font-bold">
                                +$32K prem.
                              </span>
                            ) : null}
                          </td>
                          {row.slice(1).map((cell) => (
                            <td key={cell} className="px-4 py-3 border-b border-[#111111]/10 text-center font-mono text-[11px] text-[#111111]/65">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-[#EFEEEA] px-5 py-3 font-mono text-[8px] uppercase tracking-[0.12em] font-bold text-[#111111]/45">
                  Full report includes EPC, Finance, Asset Management, and BESS-specific roles · 20+ benchmarks total
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6 opacity-40">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                  Who This Is For
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {whoItsFor.map((item) => (
                  <div key={item} className="bg-[#EFEEEA] px-4 py-4 text-sm leading-relaxed flex gap-3">
                    <span className="opacity-30 font-black">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="bg-white border border-[#111111]/10 p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-5 opacity-40">
                <div className="h-px flex-1 bg-[#111111]/10" />
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] font-bold whitespace-nowrap">
                  Free Download
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <h2 className="text-2xl font-black uppercase tracking-tight leading-[1.05] mb-2">
                Get the Report.
                <span className="block font-serif italic font-light normal-case text-[#111111]/65 text-[0.95em]">
                  No pitch attached.
                </span>
              </h2>

              <p className="text-sm leading-relaxed text-[#111111]/70 mb-7">
                Enter your work email and Ian will receive the request directly. This is built for hiring leaders who want current market calibration, not generic survey data.
              </p>

              <form action="https://formspree.io/f/mdawneod" method="POST" className="space-y-0">
                <input type="hidden" name="inquiry_type" value="Salary Guide Request" />
                <input type="hidden" name="guide_name" value="2026 BESS Hiring Intelligence Report" />

                <div className="border-b border-[#111111]/15 focus-within:border-[#111111] transition-colors">
                  <label className="block pt-4 text-[8px] font-mono font-bold uppercase tracking-[0.25em] text-[#111111]/40">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Sarah"
                    required
                    className="w-full bg-transparent border-none outline-none py-2 pb-4 text-xl font-bold placeholder:text-[#111111]/20"
                  />
                </div>

                <div className="border-b border-[#111111]/15 focus-within:border-[#111111] transition-colors">
                  <label className="block pt-4 text-[8px] font-mono font-bold uppercase tracking-[0.25em] text-[#111111]/40">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your organization"
                    className="w-full bg-transparent border-none outline-none py-2 pb-4 text-xl font-bold placeholder:text-[#111111]/20"
                  />
                </div>

                <div className="border-b border-[#111111]/15 focus-within:border-[#111111] transition-colors">
                  <label className="block pt-4 text-[8px] font-mono font-bold uppercase tracking-[0.25em] text-[#111111]/40">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    className="w-full bg-transparent border-none outline-none py-2 pb-4 text-xl font-bold placeholder:text-[#111111]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 bg-[#111111] text-[#F7F6F3] rounded-full px-6 py-5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] hover:opacity-85 transition-all"
                >
                  Send Me the Report →
                </button>

                <p className="mt-4 text-center font-mono text-[7.5px] uppercase tracking-[0.12em] text-[#111111]/40">
                  Work email only · No sequences · No newsletter
                </p>
              </form>

              <div className="border-t border-[#111111]/10 mt-8 pt-8 flex items-center gap-4">
                <div className="w-11 h-11 bg-[#111111] text-[#F7F6F3] flex items-center justify-center text-sm font-black shrink-0">
                  IF
                </div>
                <div>
                  <p className="text-[13px] font-black uppercase tracking-[0.04em]">Ian Farber</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#111111]/45">
                    Founder · Meridian Stone Search
                  </p>
                  <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-[#111111]/45 mt-1">
                    +1 845 625 3864
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="bg-[#111111] text-[#F7F6F3] mt-24 px-6 md:px-12 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8 opacity-35">
              <div className="h-px w-8 bg-white/20" />
              <span className="font-mono text-[8.5px] uppercase tracking-[0.35em] font-bold">
                Meridian Stone Search
              </span>
              <div className="h-px w-8 bg-white/20" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[-0.03em] leading-[0.95] max-w-3xl mx-auto mb-4">
              Planning a Search
              <span className="block font-serif italic font-light normal-case tracking-tight text-[#F7F6F3]/55 text-[0.95em]">
                in Q2 or Q3?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-[#F7F6F3]/60 mb-8">
              If you are scaling a BESS, utility-scale solar, or EPC platform, Meridian Stone Search runs targeted Director and VP searches across development, engineering, construction, and executive leadership.
            </p>

            <a
              href="https://meetings.hubspot.com/ian-farber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#F7F6F3] text-[#111111] rounded-full px-8 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.22em] hover:opacity-85 transition-all"
            >
              Schedule a Call
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
