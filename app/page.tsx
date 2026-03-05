"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Phone, Mail, Linkedin, Minus, Briefcase, Users, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      gsap.from(".hero-reveal", { 
        y: 30, 
        opacity: 0, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: "power3.out" 
      });

      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.from((section as HTMLElement).querySelectorAll(".reveal-item"), {
          scrollTrigger: { 
            trigger: section as HTMLElement, 
            start: "top 85%" 
          },
          y: 20, 
          opacity: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out"
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-[#F7F6F3] text-[#111111] min-h-screen font-sans selection:bg-[#111111] selection:text-[#F7F6F3] antialiased">
      
      <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 bg-[#F7F6F3]/90 backdrop-blur-md border-b border-[#111111]/5">
        <img src="/Meridian Stone Search logo.png" alt="Meridian Stone Search" className="h-8 md:h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity" />
        <button 
          onClick={() => setIsContactOpen(true)}
          className="bg-[#111111] text-[#F7F6F3] px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-lg"
        >
          Connect
        </button>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center pt-20 pb-32">
          <div className="max-w-7xl flex flex-col items-center">
            <div className="hero-reveal mb-16 md:mb-20">
               <img src="/Meridian Stone Search logo.png" alt="Meridian Stone Search Logo" className="h-24 md:h-36 w-auto object-contain brightness-95" />
            </div>
            
            <div className="hero-reveal flex items-center gap-3 mb-10 opacity-30">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold">Executive Search</span>
            </div>
            
            <h1 className="hero-reveal text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12 max-w-6xl">
              The right direction <br/> 
              <span className="font-serif italic font-light lowercase tracking-tight normal-case opacity-70">changes everything.</span>
            </h1>
            
            <p className="hero-reveal max-w-3xl mx-auto text-lg md:text-2xl font-medium leading-relaxed opacity-80">
              Founded by Ian Farber, Meridian Stone Search is a boutique executive search firm specializing in renewable energy infrastructure.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="reveal-section py-40 px-6 md:px-12 bg-[#111111] text-[#F7F6F3]">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="reveal-item flex items-center gap-4 opacity-30">
              <Minus size={24} />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em]">The Doctrine</span>
            </div>
            <div className="reveal-item space-y-12">
              <h2 className="text-3xl md:text-5xl font-light italic font-serif leading-tight border-l border-white/20 pl-8">
                "A meridian stone historically served as a marker of alignment — a fixed point used to guide movement with clarity and precision."
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg opacity-80 leading-relaxed font-medium">
                <p>That philosophy defines how we operate. In a market saturated with transactional recruiting, we exist to bring alignment, intention, and long-term vision to talent strategy. With a focused market lens and disciplined methodology, Meridian partners directly with developers, EPCs, and investment platforms to build high-performing teams that accelerate growth.</p>
                <p>As the renewable energy sector continues to expand, securing the right talent has never been more critical. We partner with organizations to scale intelligently—sourcing engineers, developers, construction leaders, and finance professionals who are shaping the future of sustainable energy worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALTIES SECTION */}
        <section id="specialties" className="py-32 px-6 md:px-12 border-b border-[#111111]/10 bg-[#F7F6F3]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-16 opacity-40">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold">Specialties</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Developers & IPPs", content: "Project Development · Asset Management · Engineering · Capital Markets" },
                { title: "EPC & Construction Platforms", content: "Project Management · Field Operations · Estimating · Preconstruction" },
                { title: "Investors & Growth Platforms", content: "VP-Level Hires · Strategic Expansion Roles · Platform Buildouts" }
              ].map((item, i) => (
                <div key={i} className="bg-[#EFEEEA] p-12 border border-[#111111]/5 hover:border-[#111111]/20 transition-all group rounded-sm shadow-sm">
                  <h4 className="text-xl font-black uppercase tracking-tighter mb-6 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                  <div className="h-px w-8 bg-[#111111]/20 mb-6" />
                  <p className="text-sm opacity-70 leading-relaxed font-bold tracking-tight uppercase">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIC ALIGNMENT SECTION */}
        <section className="reveal-section py-40 px-6 md:px-12 bg-white/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="reveal-item">
              <h4 className="text-4xl font-black uppercase tracking-tighter mb-8">Strategic Alignment</h4>
              <p className="text-xl opacity-70 leading-relaxed mb-8">
                We are a boutique executive search firm with global reach, specializing in renewable energy, infrastructure, construction, and real asset sectors. Our work is rooted in retained and confidential search models, partnering closely with leadership teams to build high-impact organizations — not just fill roles.
              </p>
              <p className="text-xl font-black uppercase tracking-tighter border-t border-[#111111]/10 pt-8">
                What differentiates Meridian Stone Search is our approach.
              </p>
            </div>
            <div className="reveal-item space-y-8 text-lg opacity-70 leading-relaxed pt-0 md:pt-4 font-medium">
              <p>We do not operate transactionally. We embed ourselves in our clients’ strategic growth conversations — advising on team structure, succession planning, market compensation, and long-term scaling initiatives.</p>
              <p>Over the past several years, we have cultivated a trusted network of developers, EPC leaders, investors, operators, and executives across North America and international markets. These relationships were built through discretion, consistency, and results.</p>
              <p className="font-bold text-[#111111] opacity-100 italic font-serif">Meridian Stone Search partners with organizations navigating growth, transformation, or pivotal leadership transitions — ensuring each hire reinforces direction, culture, and execution.</p>
            </div>
          </div>
        </section>

        {/* ABOUT IAN */}
        <section id="about" className="reveal-section py-40 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 reveal-item group">
              <div className="aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700 bg-[#111111]/5 overflow-hidden rounded-sm border border-[#111111]/5 shadow-sm relative">
                <img src="/ian-farber-headshot.jpg" alt="Ian Farber" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            <div className="lg:col-span-7 reveal-item">
              <span className="font-mono text-[9px] uppercase tracking-[0.5em] opacity-40 mb-6 block font-bold">Founding Partner</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">About Ian</h2>
              <div className="space-y-8 text-lg opacity-70 leading-relaxed font-medium">
                <p className="text-[#111111] opacity-100 font-bold text-xl leading-snug">
                  Ian is a strategic and results-oriented talent partner with over five years of experience across the Renewable Energy, Construction, and Real Estate sectors.
                </p>
                <p>He specializes in targeted, lifecycle-driven searches spanning early-stage development through engineering, procurement, and construction. Ian has successfully placed professionals at every level—from Project Engineers to C-suite executives.</p>
                <p>His consultative approach enables him to deeply understand organizational structures, operational priorities, and long-term growth strategies, ensuring each search is aligned with both immediate needs and future objectives.</p>
                <p className="italic font-serif">Based in Upstate New York. International reach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT HUB */}
        <section className="reveal-section py-48 px-6 bg-[#111111] text-[#F7F6F3]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-20 leading-tight">Start a Dialogue.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-20 shadow-2xl">
              <button onClick={() => setIsContactOpen(true)} className="group bg-[#111111] p-16 flex flex-col items-center hover:bg-[#1a1a1a] transition-all">
                <Users className="mb-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" size={32} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">For Organizations</span>
                <span className="mt-4 text-2xl font-serif italic opacity-60 group-hover:opacity-100">Scale Your Platform</span>
              </button>
              <button onClick={() => setIsContactOpen(true)} className="group bg-[#111111] p-16 flex flex-col items-center hover:bg-[#1a1a1a] transition-all">
                <Briefcase className="mb-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" size={32} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">For Talent</span>
                <span className="mt-4 text-2xl font-serif italic opacity-60 group-hover:opacity-100">Explore Transitions</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 md:px-12 border-t border-[#111111]/10 bg-[#F7F6F3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <img src="/Meridian Stone Search logo.png" className="h-8 mb-4 mx-auto md:mx-0 opacity-80" alt="Logo" />
            <p className="text-[10px] font-mono opacity-50 tracking-[0.2em] uppercase font-bold">Upstate New York / International Reach</p>
          </div>
          <div className="flex gap-8 items-center">
            <a href="tel:18456253864" className="hover:opacity-50 transition-all"><Phone size={16} /></a>
            <a href="mailto:ian@meridianstonesearch.com" className="hover:opacity-50 transition-all"><Mail size={16} /></a>
            <a href="https://www.linkedin.com/in/ian-farber-b73428233/" target="_blank" className="hover:opacity-50 transition-all"><Linkedin size={16} /></a>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-30 italic">© 2026 Meridian Stone Search</p>
        </div>
      </footer>
    </div>
  );
}

function ContactOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const overlayRef = useRef(null);
  useEffect(() => {
    if (isOpen) { gsap.to(overlayRef.current, { x: 0, duration: 0.5, ease: "power2.out" }); }
    else { gsap.to(overlayRef.current, { x: '100%', duration: 0.4, ease: "power2.in" }); }
  }, [isOpen]);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[60] bg-[#F7F6F3] translate-x-full p-8 md:p-20 overflow-y-auto">
      <button onClick={onClose} className="absolute top-10 right-10 p-2 hover:rotate-90 transition-transform duration-300"><X size={32} /></button>
      <div className="max-w-xl mx-auto mt-20 space-y-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic font-serif">Protocol</h2>
        
        {/* WIRED FORMSPREE */}
        <form action="https://formspree.io/f/mdawneod" method="POST" className="space-y-12">
          <div className="border-b border-[#111111]/20 focus-within:border-[#111111] transition-colors relative">
            <label className="block text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">Inquiry Type</label>
            <select 
              name="inquiry_type" 
              required
              className="w-full bg-transparent py-4 text-xl font-bold focus:outline-none appearance-none cursor-pointer pr-10"
            >
              <option value="" disabled selected>Select an option...</option>
              <option value="organization">Organization / Scaling Inquiry</option>
              <option value="candidate">Candidate / Leadership Transition</option>
              <option value="general">General Dialogue</option>
            </select>
            <ChevronDown className="absolute bottom-5 right-0 opacity-30 pointer-events-none" size={20} />
          </div>
          
          <div className="border-b border-[#111111]/20 focus-within:border-[#111111] transition-colors">
            <label className="block text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">Full Name</label>
            <input name="name" type="text" required className="w-full bg-transparent py-4 text-2xl font-bold focus:outline-none" />
          </div>
          
          <div className="border-b border-[#111111]/20 focus-within:border-[#111111] transition-colors">
            <label className="block text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">Transmission / Email</label>
            <input name="email" type="email" required className="w-full bg-transparent py-4 text-2xl font-bold focus:outline-none" />
          </div>
          
          <div className="border-b border-[#111111]/20 focus-within:border-[#111111] transition-colors">
            <label className="block text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">Scope / Message</label>
            <textarea name="message" rows={3} required className="w-full bg-transparent py-4 text-xl font-bold focus:outline-none resize-none"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-[#111111] text-[#F7F6F3] py-8 rounded-full font-black uppercase tracking-widest text-xs hover:invert transition-all shadow-xl">
            Submit Transmission
          </button>
        </form>
      </div>
    </div>
  );
}
