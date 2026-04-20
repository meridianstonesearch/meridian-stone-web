import InteriorPassThrough from "@/components/InteriorPassThrough";
import SiteNav from "@/components/SiteNav";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Start a Search",
  description:
    "Start a search with Meridian Stone Search. Submit your hiring needs, team buildout plans, or market inquiry through our direct intake form.",
  alternates: {
    canonical: "/start-a-search",
  },
  openGraph: {
    title: "Start a Search | Meridian Stone Search",
    description:
      "Submit your hiring needs, team buildout plans, or market inquiry through our direct intake form.",
    url: "https://meridianstonesearch.com/start-a-search",
  },
};

export default function StartASearchPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans px-6 md:px-12 pt-40 pb-24">
        <InteriorPassThrough />

        <section className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-10 flex justify-center">
            <img
              src="/Meridian Stone Search logo.png"
              alt="Meridian Stone Search Logo"
              className="h-20 md:h-28 w-auto object-contain brightness-95"
            />
          </div>

          <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
            <div className="h-px w-10 bg-[#111111]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              Start a Search
            </span>
            <div className="h-px w-10 bg-[#111111]" />
          </div>

          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-balance">
            Tell us what you are building.
          </h1>

          <p className="text-lg md:text-xl opacity-75 leading-relaxed max-w-2xl mx-auto">
            Share your hiring needs, team buildout plans, or where the platform is under pressure. This form is designed for both hiring teams and professionals exploring the market.
          </p>
        </section>

        <section className="max-w-2xl mx-auto bg-white/50 border border-[#111111]/10 p-8 md:p-12 shadow-sm">
          <form
            action="https://formspree.io/f/mdawneod"
            method="POST"
            className="space-y-10"
          >
            <div className="border-b border-[#111111]/20 focus-within:border-[#111111] transition-colors relative">
              <label className="block text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">
                Inquiry Type
              </label>
              <select
                name="inquiry_type"
                required
                defaultValue=""
                className="w-full bg-transparent py-4 text-lg md:text-xl font-bold focus:outline-none appearance-none cursor-pointer pr-10"
              >
                <option value="" disabled>
                  Select an option...
                </option>
                <option value="Organization">Organization / Scaling Inquiry</option>
                <option value="Candidate">Candidate / Leadership Transition</option>
                <option value="General">General Dialogue</option>
              </select>
              <ChevronDown
                className="absolute bottom-5 right-0 opacity-30 pointer-events-none"
                size={20}
              />
            </div>

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full bg-transparent border-b border-[#111111]/20 py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-[#111111]"
            />

            <input
              name="company"
              type="text"
              placeholder="Company / Organization"
              className="w-full bg-transparent border-b border-[#111111]/20 py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-[#111111]"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-transparent border-b border-[#111111]/20 py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-[#111111]"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-[#111111]/20 py-4 text-lg md:text-xl font-bold focus:outline-none focus:border-[#111111] resize-none"
            />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="submit"
                className="inline-flex bg-[#111111] text-[#F7F6F3] px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
              >
                Submit Inquiry
              </button>

              <a
                href="https://meetings.hubspot.com/ian-farber"
                target="_blank"
                className="inline-flex border border-black/30 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
              >
                Schedule a Call
              </a>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
