import InteriorPassThrough from "@/components/InteriorPassThrough";
import SiteNav from "@/components/SiteNav";

export const metadata = {
  title: "2026 BESS Hiring Intelligence Report",
  description:
    "Download Meridian Stone Search's 2026 BESS and utility-scale hiring intelligence report with Director-to-VP compensation benchmarks, total rewards structures, BESS premium analysis, and market commentary.",
  alternates: {
    canonical: "/salary-guide",
  },
  openGraph: {
    title: "2026 BESS Hiring Intelligence Report | Meridian Stone Search",
    description:
      "Director-to-VP compensation benchmarks, total rewards structures, BESS premium analysis, and hiring intelligence across utility-scale development, EPC, and project finance.",
    url: "https://meridianstonesearch.com/salary-guide",
  },
};

const shifts = [
  {
    title: "Director bases are up 18 to 24 percent since 2023",
    body:
      "Median Director of Development compensation has moved materially, and companies still pricing against older benchmarks are losing access to the pool they think they are targeting.",
  },
  {
    title: "VP compensation has split into two markets",
    body:
      "Growth-stage developers and larger public or utility-backed platforms can both be competitive, but the structures are different and not interchangeable.",
  },
  {
    title: "BESS experience carries a structural premium",
    body:
      "Roles requiring co-location, standalone storage depth, or FERC and NERC fluency are consistently clearing above comparable non-storage roles.",
  },
  {
    title: "Total compensation is the right metric. Base is not.",
    body:
      "At Director and VP level, bonus design, equity structure, and forfeited upside all influence whether an offer actually closes.",
  },
  {
    title: "The supply constraint is getting worse",
    body:
      "The bottleneck in BESS and utility-scale hiring is the size of the qualified senior pool, not the level of recruiting effort being applied to the search.",
  },
];

const developmentRows = [
  ["Sr. Project Developer", "$118K", "$138K", "$158K", "$178K", "+14%"],
  ["Director of Development", "$152K", "$178K", "$212K", "$245K", "+20%"],
  ["Sr. Director of Development", "$178K", "$210K", "$242K", "$272K", "+22%"],
  ["VP of Development", "$198K", "$252K", "$308K", "$362K", "+19%"],
  ["Head of Development", "$205K", "$258K", "$315K", "$370K", "+21%"],
  ["Director of Origination", "$148K", "$178K", "$210K", "$238K", "+18%"],
  ["Head of Origination", "$185K", "$222K", "$258K", "$292K", "+23%"],
  ["Director, Land & Permitting", "$132K", "$158K", "$188K", "$215K", "+12%"],
  ["Director, Interconnection", "$158K", "$192K", "$228K", "$262K", "+26%"],
];

const bessRows = [
  ["BESS Development Manager", "$138K", "$162K", "$190K", "$218K", "+$22K"],
  ["BESS Engineering Lead", "$152K", "$178K", "$208K", "$238K", "+$28K"],
  ["Director of Storage Development", "$168K", "$202K", "$240K", "$278K", "+$34K"],
  ["Director, BESS Asset Management", "$158K", "$185K", "$218K", "$252K", "+$26K"],
  ["Director, BESS Engineering", "$165K", "$198K", "$235K", "$272K", "+$32K"],
  ["Sr. Director, Energy Storage", "$188K", "$225K", "$268K", "$308K", "+$36K"],
  ["VP, Energy Storage", "$208K", "$252K", "$302K", "$352K", "+$40K"],
  ["Head of Battery Storage", "$222K", "$268K", "$318K", "$372K", "+$44K"],
];

const offerFails = [
  "Remote and hybrid inflexibility",
  "Offer timing that does not match the candidate's timeline",
  "Title misaligned with actual authority",
  "Unvested equity forfeiture not addressed",
  "Pipeline credibility gap",
];

const regionalRows = [
  ["Northeast / Mid-Atlantic", "+15 to 22%", "ISO-NE and PJM complexity; COL", "$205K to $218K"],
  ["California (CAISO)", "+18 to 25%", "CPUC and CEQA depth; COL premium", "$210K to $225K"],
  ["Texas (ERCOT)", "+8 to 14%", "High project volume; competitive pool", "$192K to $205K"],
  ["Mid-Continent / PJM", "+2 to 6%", "Strong supply; moderate COL", "$182K to $190K"],
  ["Mountain West", "+4 to 10%", "WECC expertise; growing density", "$186K to $200K"],
  ["Southeast", "-2 to +5%", "Growing market; lower COL", "$175K to $188K"],
  ["Remote, Director+", "+3 to 8%", "Flexibility premium now priced in", "$184K to $194K"],
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
              Hiring Intelligence Report.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-[1.7rem] font-serif italic opacity-85 leading-[1.35] mb-10 text-balance">
            Director-to-VP compensation benchmarks · total rewards structures · utility-scale development, BESS, EPC, and project finance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-5xl mx-auto mb-12">
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

          <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#111111]/35 animate-pulse">
            ↓ Get the Report
          </div>
        </section>

        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-12 lg:gap-20 items-start">
          <div>
            <div className="bg-[#EFEEEA] border-l-[3px] border-[#111111] px-5 py-5 mb-12">
              <p className="text-xs font-black uppercase tracking-[0.08em] mb-1">
                How this report was built
              </p>
              <p className="text-sm md:text-[15px] leading-relaxed text-[#111111]/70">
                Every range in this report comes from closed offers, not posted salary bands. Meridian Stone Search tracks accepted offers, declined-offer debriefs, candidate intake conversations, active search mandates, and passive candidate response thresholds because what companies want to pay and what the market is clearing are not the same numbers right now.
              </p>
            </div>

            <section className="mb-14">
              <div className="flex items-center gap-3 mb-6 opacity-40">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                  Executive Summary
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <div className="space-y-1">
                {shifts.map((item, index) => (
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
                  Base Salary Benchmarks — Development
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <div className="border border-[#111111]/10 overflow-hidden bg-white">
                <div className="bg-[#111111] text-[#F7F6F3] px-5 py-3 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">
                  Development · Percentile ranges and YoY change
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
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">YoY</th>
                      </tr>
                    </thead>
                    <tbody>
                      {developmentRows.map((row, index) => (
                        <tr key={row[0]} className={index % 2 === 0 ? "bg-white" : "bg-[#F7F6F3]"}>
                          <td className="px-4 py-3 border-b border-[#111111]/10 font-bold text-[13px]">{row[0]}</td>
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
              </div>
            </section>

            <section className="mb-14">
              <div className="flex items-center gap-3 mb-6 opacity-40">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                  BESS-Specific Premiums
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <div className="border border-[#111111]/10 overflow-hidden bg-white">
                <div className="bg-[#111111] text-[#F7F6F3] px-5 py-3 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">
                  Storage roles consistently closing above non-storage comparables
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
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bessRows.map((row, index) => (
                        <tr key={row[0]} className={index % 2 === 0 ? "bg-white" : "bg-[#F7F6F3]"}>
                          <td className="px-4 py-3 border-b border-[#111111]/10 font-bold text-[13px]">{row[0]}</td>
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
              </div>
            </section>

            <section className="mb-14">
              <div className="flex items-center gap-3 mb-6 opacity-40">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                  Why Offers Fail
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {offerFails.map((item) => (
                  <div key={item} className="bg-[#EFEEEA] px-4 py-4 text-sm leading-relaxed flex gap-3">
                    <span className="opacity-30 font-black">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6 opacity-40">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                  Regional Premiums
                </span>
                <div className="h-px flex-1 bg-[#111111]/10" />
              </div>

              <div className="border border-[#111111]/10 overflow-hidden bg-white">
                <div className="bg-[#111111] text-[#F7F6F3] px-5 py-3 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">
                  Geographic adjustments to median Director base
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#EFEEEA] border-b border-[#111111]/10">
                        <th className="px-4 py-3 text-left text-[10px] uppercase tracking-[0.05em] font-black">Region</th>
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">Adj. vs Median</th>
                        <th className="px-4 py-3 text-left text-[10px] uppercase tracking-[0.05em] font-black">Key Driver</th>
                        <th className="px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] font-black">Director P50 Adjusted</th>
                      </tr>
                    </thead>
                    <tbody>
                      {regionalRows.map((row, index) => (
                        <tr key={row[0]} className={index % 2 === 0 ? "bg-white" : "bg-[#F7F6F3]"}>
                          <td className="px-4 py-3 border-b border-[#111111]/10 font-bold text-[13px]">{row[0]}</td>
                          <td className="px-4 py-3 border-b border-[#111111]/10 text-center font-mono text-[11px] text-[#111111]/65">{row[1]}</td>
                          <td className="px-4 py-3 border-b border-[#111111]/10 text-[12px] text-[#111111]/70">{row[2]}</td>
                          <td className="px-4 py-3 border-b border-[#111111]/10 text-center font-mono text-[11px] text-[#111111]/65">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
