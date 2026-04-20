"use client";

import React, { useEffect, useRef, useState } from "react";
import SiteNav from "@/components/SiteNav";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  X,
  Minus,
  Briefcase,
  Users,
  Award,
  Check,
  ChevronDown,
  Linkedin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePageClient() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.from((section as HTMLElement).querySelectorAll(".reveal-item"), {
          scrollTrigger: {
            trigger: section as HTMLElement,
            start: "top 85%",
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainRef}
      className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans selection:bg-[#111111] selection:text-[#F7F6F3] antialiased"
    >
      <ContactOverlay
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <SiteNav onConnect={() => setIsContactOpen(true)} />

      <main>
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center pt-56 pb-24">
          <div className="max-w-7xl flex flex-col items-center">
            <div className="hero-reveal mb-16 md:mb-20">
              <img
                src="/Meridian Stone Search logo.png"
                alt="Meridian Stone Search Logo"
                className="h-32 md:h-48 w-auto object-contain brightness-95"
              />
            </div>

            <div className="hero-reveal flex items-center gap-3 mb-8 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                Boutique Executive Search for Renewable Energy & Infrastructure
              </span>
              <div className="h-px w-10 bg-[#111111]" />
            </div>

            <h1 className="hero-reveal text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 max-w-6xl">
              The right direction <br />
              <span className="font-serif italic font-light lowercase tracking-tight normal-case opacity-70">
                changes everything.
              </span>
            </h1>

            <p className="hero-reveal max-w-3xl mx-auto text-xl md:text-3xl font-serif italic mb-10 opacity-80">
              We build high-performing teams across solar, storage, and EPC
              platforms nationwide.
            </p>

            <p className="hero-reveal max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-80 mb-10">
              Meridian Stone Search combines the rigor of a national search firm
              with the precision of a boutique partner. We work directly with
              developers, EPCs, and investors to hire proven operators across
              development, interconnection, construction, and executive
              leadership — delivering disciplined, performance-aligned search
              execution.
            </p>

            <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex bg-[#111111] text-[#F7F6F3] px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-lg"
              >
                Start a Search
              </button>
              <a
                href="https://meetings.hubspot.com/ian-farber"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-[#111111]/20 px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-[#F7F6F3] transition-all"
              >
                Schedule a Call
              </a>
            </div>

            <div className="hero-reveal grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left max-w-4xl mx-auto bg-white/50 p-8 border border-[#111111]/5">
              <div className="flex items-start gap-3">
                <Check size={18} className="mt-1 opacity-40 shrink-0" />
                <span className="font-medium">
                  Exclusive focus on renewable energy infrastructure
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={18} className="mt-1 opacity-40 shrink-0" />
                <span className="font-medium">
                  Direct access to decision-makers
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={18} className="mt-1 opacity-40 shrink-0" />
                <span className="font-medium">
                  Referral-driven candidate networks
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={18} className="mt-1 opacity-40 shrink-0" />
                <span className="font-medium">
                  Confidential, strategic search mandates
                </span>
              </div>
            </div>

            <div className="hero-reveal mt-10 grid grid-cols-1 md:grid-cols-4 gap-3 w-full max-w-5xl">
              {[
                "Solar, Storage & EPC Search",
                "Developers, EPCs & Investors",
                "Executive & Project-Critical Hiring",
                "National Reach",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-[#111111]/10 bg-white/40 px-4 py-4 text-[10px] md:text-[11px] font-black uppercase tracking-[0.18em] opacity-80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-24 text-center border border-black/10 bg-white/50 px-8 py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">
            Search Models &amp; Process
          </p>
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            The way a search is structured changes the quality of access, speed,
            and execution.
          </h2>
          <p className="opacity-70 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore Meridian Stone Search’s contingent, retained, and multi-role
            models — plus the process behind how we run critical mandates in
            tight renewable energy markets.
          </p>
          <a
            href="/search-models-process"
            className="inline-flex bg-black text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all"
          >
            View Search Models &amp; Process
          </a>
        </section>

        <section className="py-32 px-6 md:px-12 bg-white border-t border-[#111111]/10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight">
              The best talent in renewables aren’t applying.
            </h2>

            <div className="space-y-6 text-lg md:text-xl opacity-80 leading-relaxed font-medium">
              <p>
                The people building utility-scale solar, battery storage, and
                EPC platforms are already deployed — managing projects,
                navigating interconnection, and driving execution.
              </p>

              <p>
                At the senior level, job boards and inbound applications rarely
                surface the operators actually capable of delivering projects.
              </p>

              <p className="font-semibold text-[#111111]">
                That’s where targeted search becomes critical.
              </p>
            </div>
          </div>
        </section>

        <section className="reveal-section py-40 px-6 md:px-12 bg-[#111111] text-[#F7F6F3]">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="reveal-item flex items-center gap-4 opacity-30 text-white">
              <Minus size={24} />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em]">
                About Meridian Stone
              </span>
            </div>
            <div className="reveal-item space-y-12">
              <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight border-l border-white/20 pl-8 text-white text-left mb-12">
                "A meridian stone historically served as a marker of alignment —
                a fixed point used to guide movement with clarity and precision."
              </h2>
              <div className="space-y-8 text-lg opacity-80 leading-relaxed font-medium text-left">
                <p>
                  Founded by Ian Farber, Meridian Stone Search is a boutique
                  executive search firm specializing in renewable energy
                  infrastructure.
                </p>
                <p>
                  That philosophy defines how we operate. In a market saturated
                  with transactional recruiting, we exist to bring alignment,
                  intention, and long-term vision to talent strategy.
                </p>
                <p>
                  With a focused market lens and disciplined methodology,
                  Meridian partners directly with developers, EPCs, and
                  investment platforms to build high-performing teams that
                  accelerate growth.
                </p>
                <p>
                  As the renewable energy sector continues to expand, securing
                  the right talent has never been more critical. We partner with
                  organizations to scale intelligently—sourcing engineers,
                  developers, construction leaders, and finance professionals
                  who are shaping the future of sustainable energy worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="specialties"
          className="py-32 px-6 md:px-12 border-b border-[#111111]/10 bg-[#F7F6F3]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-16 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
                Specialties
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Developers & IPPs",
                  content:
                    "Project Development · Asset Management · Engineering · Capital Markets",
                },
                {
                  title: "EPC & Construction Platforms",
                  content:
                    "Project Management · Field Operations · Estimating · Preconstruction",
                },
                {
                  title: "Investors & Growth Platforms",
                  content:
                    "VP-Level Hires · Strategic Expansion Roles · Platform Buildouts",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#EFEEEA] p-12 border border-[#111111]/5 hover:border-[#111111]/20 transition-all group rounded-sm shadow-sm"
                >
                  <h4 className="text-xl font-black uppercase tracking-tighter mb-6 group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h4>
                  <div className="h-px w-8 bg-[#111111]/20 mb-6" />
                  <p className="text-sm opacity-70 leading-relaxed font-bold tracking-tight uppercase">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 bg-white border-b border-[#111111]/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-16 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
                Roles & Mandates
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
              <div>
                <h2 className="text-4xl md:text-6xl font-light italic font-serif leading-tight mb-8">
                  Search coverage across the renewable energy lifecycle.
                </h2>
                <p className="text-lg md:text-xl opacity-80 leading-relaxed font-medium max-w-2xl">
                  From development and interconnection through EPC,
                  construction, finance, and executive leadership, we support
                  targeted search mandates across the roles that drive
                  execution.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Development & Interconnection",
                  "EPC & Construction",
                  "Energy Storage (BESS)",
                  "Engineering & Technical",
                  "Finance & Commercial",
                  "Executive & Platform Buildouts",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#111111]/10 bg-[#F7F6F3] px-5 py-5 text-sm font-bold uppercase tracking-[0.08em] opacity-80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href="/roles-and-mandates"
                className="inline-flex bg-[#111111] text-[#F7F6F3] px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-lg"
              >
                View Full Search Coverage
              </a>
            </div>
          </div>
        </section>

        <section className="reveal-section py-40 px-6 md:px-12 bg-white/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="reveal-item">
              <h4 className="text-4xl font-black uppercase tracking-tighter mb-8">
                Strategic Alignment
              </h4>
              <p className="text-xl opacity-70 leading-relaxed mb-8">
                We are a boutique executive search firm with global reach,
                specializing in renewable energy, infrastructure, construction,
                and real asset sectors. Our work is rooted in retained and
                confidential search models, partnering closely with leadership
                teams to build high-impact organizations — not just fill roles.
              </p>
              <p className="text-xl font-black uppercase tracking-tighter border-t border-[#111111]/10 pt-8">
                What differentiates Meridian Stone Search is our approach.
              </p>
            </div>
            <div className="reveal-item space-y-8 text-lg opacity-80 leading-relaxed pt-0 md:pt-4 font-medium">
              <p>
                We do not operate transactionally. We embed ourselves in our
                clients’ strategic growth conversations — advising on team
                structure, succession planning, market compensation, and
                long-term scaling initiatives. Many of our engagements begin
                before a job description is ever written.
              </p>
              <p>
                Over the past several years, we have cultivated a trusted
                network of developers, EPC leaders, investors, operators, and
                executives across North America and international markets. These
                relationships were not built through volume — they were built
                through discretion, consistency, and results.
              </p>
              <p className="font-bold text-[#111111] opacity-100 italic font-serif">
                Meridian Stone Search partners with organizations navigating
                growth, transformation, or pivotal leadership transitions —
                ensuring each hire reinforces direction, culture, and execution.
              </p>
            </div>
          </div>
        </section>

        <section className="reveal-section py-40 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="reveal-item lg:sticky lg:top-32">
              <img
                src="/ian_headshot 2.jpg"
                alt="Ian Farber"
                className="w-full max-w-md grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
              />
            </div>
            <div className="reveal-item space-y-10">
              <div className="flex items-center gap-3 opacity-40">
                <Award size={20} />
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
                  Founder
                </span>
              </div>
              <h3 className="text-5xl font-black uppercase tracking-tighter italic font-serif">
                Ian Farber
              </h3>
              <div className="space-y-6 text-lg opacity-80 leading-relaxed font-medium">
                <p>
                  Ian is a strategic and results-oriented talent partner with
                  over five years of experience across the Renewable Energy,
                  Construction, and Real Estate sectors. He has built a
                  reputation for developing high-performing teams and cultivating
                  long-term partnerships with executives, hiring managers, and
                  project leaders throughout the United States.
                </p>
                <p>
                  He specializes in targeted, lifecycle-driven searches spanning
                  early-stage development through engineering, procurement, and
                  construction. Ian has successfully placed professionals at
                  every level—from Project Engineers and Interconnection
                  Managers to senior leadership and C-suite executives. His
                  consultative approach enables him to deeply understand
                  organizational structures, operational priorities, and
                  long-term growth strategies, ensuring each search is aligned
                  with both immediate needs and future objectives.
                </p>
                <p>
                  With a strong foundation in market intelligence, lead
                  generation, and business development, Ian consistently
                  identifies growth opportunities and delivers measurable value.
                  He thrives in competitive, fast-evolving markets, partnering
                  closely with leading Developers, Design-Build General
                  Contractors, and EPC firms to secure the talent that drives
                  execution, scalability, and performance.
                </p>
                <p>
                  Ian’s philosophy centers on building genuine, trust-based
                  partnerships—serving as a strategic extension of his clients’
                  teams to ensure clarity, alignment, and lasting impact.
                </p>
              </div>
              <div className="pt-8 flex flex-col gap-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold opacity-60 bg-[#F7F6F3] inline-block py-2 px-4 rounded-sm self-start">
                  Based in Upstate New York. International reach.
                </p>
                <a
                  href="https://www.linkedin.com/in/ian-farber-b73428233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-[#111111] pb-1 hover:opacity-50 transition-all self-start mt-4"
                >
                  LinkedIn Profile <Linkedin size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal-section py-48 px-6 bg-[#111111] text-[#F7F6F3]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-20 leading-tight">
              Request a Search.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-20 shadow-2xl">
              <button
                onClick={() => setIsContactOpen(true)}
                className="group bg-[#111111] p-16 flex flex-col items-center hover:bg-[#1a1a1a] transition-all"
              >
                <Users
                  className="mb-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all"
                  size={32}
                />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  For Organizations
                </span>
                <span className="mt-4 text-2xl font-serif italic opacity-60 group-hover:opacity-100">
                  Scale Your Platform
                </span>
              </button>
              <button
                onClick={() => setIsContactOpen(true)}
                className="group bg-[#111111] p-16 flex flex-col items-center hover:bg-[#1a1a1a] transition-all"
              >
                <Briefcase
                  className="mb-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all"
                  size={32}
                />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  For Talent
                </span>
                <span className="mt-4 text-2xl font-serif italic opacity-60 group-hover:opacity-100">
                  Explore Transitions
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto py-24 px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Discuss a search mandate
          </h2>
          <p className="opacity-70 mb-4">
            If you are scaling a solar, battery storage, or EPC platform,
            Meridian Stone Search supports targeted hiring across development,
            engineering, construction, and executive leadership.
          </p>
          <a
            href="/roles-and-mandates"
            className="inline-block text-sm underline opacity-60 hover:opacity-100 transition-all mb-8"
          >
            View roles & mandates coverage
          </a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex bg-black text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all"
            >
              Start a Search
            </button>
            <a
              href="https://meetings.hubspot.com/ian-farber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-black/30 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              Schedule a Call
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function ContactOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(overlayRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power2.in",
      });
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] bg-[#F7F6F3] translate-x-full p-8 md:p-20 overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-10 right-10 p-2 hover:rotate-90 transition-transform duration-300"
      >
        <X size={32} />
      </button>

      <div className="max-w-xl mx-auto mt-20 space-y-16 text-left">
        <div className="space-y-4">
          <h2 className="text-5xl font-black uppercase italic font-serif">
            Start a Search
          </h2>
          <p className="text-base opacity-65 leading-relaxed max-w-lg">
            Tell us what you are building, who you need, or where the team is
            under pressure. You can also schedule a call directly.
          </p>
          <a
            href="https://meetings.hubspot.com/ian-farber"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-[#111111]/20 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-[#F7F6F3] transition-all"
          >
            Schedule a Call
          </a>
        </div>

        <form
          action="https://formspree.io/f/mdawneod"
          method="POST"
          className="space-y-12"
        >
          <div className="border-b border-[#111111]/20 focus-within:border-[#111111] transition-colors relative">
            <label className="block text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">
              Inquiry Type
            </label>
            <select
              name="inquiry_type"
              required
              defaultValue=""
              className="w-full bg-transparent py-4 text-xl font-bold focus:outline-none appearance-none cursor-pointer pr-10"
            >
              <option value="" disabled>
                Select an option...
              </option>
              <option value="Organization">
                Organization / Scaling Inquiry
              </option>
              <option value="Candidate">
                Candidate / Leadership Transition
              </option>
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
            className="w-full bg-transparent border-b border-[#111111]/20 py-4 text-2xl font-bold focus:outline-none focus:border-[#111111]"
          />
          <input
            name="company"
            type="text"
            placeholder="Company / Organization"
            className="w-full bg-transparent border-b border-[#111111]/20 py-4 text-2xl font-bold focus:outline-none focus:border-[#111111]"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full bg-transparent border-b border-[#111111]/20 py-4 text-2xl font-bold focus:outline-none focus:border-[#111111]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            required
            className="w-full bg-transparent border-b border-[#111111]/20 py-4 text-xl font-bold focus:outline-none focus:border-[#111111] resize-none"
          />

          <button
            type="submit"
            className="w-full bg-[#111111] text-[#F7F6F3] py-8 rounded-full font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl"
          >
            Start a Search
          </button>
        </form>
      </div>
    </div>
  );
}
