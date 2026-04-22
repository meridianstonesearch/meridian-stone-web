import SiteNav from "@/components/SiteNav";

export const metadata = {
  title: "2026 Hiring Intelligence Report",
  description:
    "Download Meridian Stone Search's 2026 BESS and utility-scale hiring intelligence report with Director-to-VP compensation benchmarks, total rewards structures, BESS premium analysis, and market commentary.",
  alternates: {
    canonical: "/salary-guide",
  },
  openGraph: {
    title: "2026 Hiring Intelligence Report | Meridian Stone Search",
    description:
      "Director-to-VP compensation benchmarks, total rewards structures, BESS premium analysis, and hiring intelligence across utility-scale development, EPC, and project finance.",
    url: "https://meridianstonesearch.com/salary-guide",
  },
};

const summaryPoints = [
  {
    title: "Director-to-VP compensation benchmarks",
    body: "Base salary ranges across development, storage, EPC, and finance mandates using closed-offer market data rather than posted salary bands.",
  },
  {
    title: "Total rewards structures",
    body: "Annual bonus targets, equity prevalence, and the real compensation tradeoffs senior candidates evaluate before leaving existing platforms.",
  },
  {
    title: "BESS-specific premium analysis",
    body: "Where storage experience is consistently clearing above comparable non-storage roles — and how much that premium is worth in practice.",
  },
  {
    title: "Why finalist offers fail",
    body: "The non-salary variables most often killing Director and VP processes in 2026, from timing drag to title mismatch and forfeited upside.",
  },
];

const previewRows = [
  ["Director of Development", "$152K", "$178K", "$212K"],
  ["VP of Development", "$198K", "$252K", "$308K"],
  ["Director, BESS Engineering", "$165K", "$198K", "$235K"],
  ["VP, Energy Storage", "$208K", "$252K", "$302K"],
];

const reportSections = [
  "Executive summary and 2026 market shifts",
  "Development benchmark ranges",
  "BESS premium analysis",
  "Regional compensation adjustments",
  "Offer-structure and close-rate commentary",
  "Q2 and Q3 hiring outlook",
];

export default function SalaryGuidePage() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans px-6 md:px-12 pt-28 pb-24">
        <section className="min-h-[50vh] flex flex-col justify-center items-center text-center max-w-6xl mx-auto pt-10 pb-6 md:pt-14 md:pb-8">
          <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              Hiring Intelligence Report · April 2026
            </span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <h1 className="text-4xl md:text-[5.5rem] font-black uppercase tracking-[-0.06em] leading-[0.9] max-w-5xl mx-auto mb-4 text-balance">
            2026 BESS &amp; Utility-Scale
            <span className="block font-serif italic font-light normal-case tracking-tight text-[#111111]/70 mt-2 text-[0.8em] leading-[1.02]">
              Hiring Intelligence Report.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-[1.7rem] font-serif italic opacity-85 leading-[1.35] mb-7 text-balance">
            Director-to-VP compensation benchmarks · total rewards structures · utility-scale development, BESS, EPC, and project finance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-5xl mx-auto mb-8">
            {[
              "20+ roles benchmarked",
              "Closed offer data only",
              "Total comp breakdown",
              "BESS premium analysis",
              "YoY trend 2023 to 2026",
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
        </section>

        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-12 lg:gap-20 items-start">
          <div>
            <div className="bg-[#EFEEEA] border-l-[3px] border-[#111111] px-5 py-5 mb-12">
              <p className="text-xs font-black uppercase tracking-[0.08em] mb-1">
                Why this report exists
              </p>
              <p className="text-sm md:text-[15px] leading-relaxed text-[#111111]/70">
                Most public salary data is too thin and too stale at the Director and VP level. This report is built around closed offers, active searches, and live market calibration from Q4 2025 through Q1 2026.
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
                {summaryPoints.map((item, index) => (
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
                  Sample Preview
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <div className="border border-[#111111]/10 overflow-hidden bg-white relative">
                <div className="bg-[#111111] text-[#F7F6F3] px-5 py-3 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">
                  Partial preview · full report includes 20+ benchmarked roles
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#EFEEEA] border-b border-[#111111]/10">
                        <th className="px-4 py-3 text-left text-[10px] uppercase tracking-[0.05em] font-black">Role</th>
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">P25</th>
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">P50</th>
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">P75</th>
                      </tr>
                    </thead>
                    <tbody>
                      {previewRows.map((row, index) => (
                        <tr key={row[0]} className={index % 2 === 0 ? "bg-white" : "bg-[#F7F6F3]"}>
                          <td className="px-4 py-3 border-b border-[#111111]/10 font-bold text-[13px]">{row[0]}</td>
                          {row.slice(1).map((cell) => (
                            <td key={cell} className="px-4 py-3 border-b border-[#111111]/10 text-center font-mono text-[11px] text-[#111111]/65 blur-[1.5px] select-none">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6 opacity-40">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                  The Full Report Covers
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {reportSections.map((item) => (
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
                Enter your work email and Ian will receive the request directly. This is built for hiring leaders who want current market calibration, not stale survey data.
              </p>

              <form action="https://formspree.io/f/mdawneod" method="POST" className="space-y-0">
                <input type="hidden" name="inquiry_type" value="Salary Guide Request" />
                <input type="hidden" name="guide_name" value="2026 BESS Hiring Intelligence Report" />
                <input type="hidden" name="message" value="Salary guide request from meridianstonesearch.com/salary-guide" />

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
