import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight, BarChart2, Target, CheckCircle2 } from "lucide-react";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marketing = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance stagger ──────────────────────────────────────
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 40,
        stagger: 0.13,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.1,
      });

      // ── Service bento cards — per element ──────────────────────────
      containerRef.current.querySelectorAll(".bento-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });

      // ── Story panels ───────────────────────────────────────────────
      containerRef.current.querySelectorAll(".story-panel").forEach((panel) => {
        gsap.from(panel, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 90%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-mobile-margin pt-32 pb-20 relative text-left">
        <div className="absolute -top-12 -left-8 scribble-accent text-botanical-green opacity-20 pointer-events-none">
          <span className="material-symbols-outlined text-6xl">draw</span>
        </div>
        <div className="max-w-3xl hero-content">
          <span className="font-headline text-[12px] font-bold text-botanical-green mb-4 block uppercase tracking-widest">
            Growth Engines
          </span>
          <h1 className="font-headline text-headline-xl sm:text-5xl lg:text-6xl mb-6 font-extrabold text-ink-black leading-tight">
            Digital Marketing{" "}
            <span className="relative">
              &amp; Growth
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-botanical-green/30"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h1>
          <p className="font-body text-body-lg text-secondary max-w-2xl leading-relaxed">
            We engineer multi-channel growth systems that combine technical precision with creative flair. Transform your digital footprint into a high-performance lead generation engine.
          </p>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section id="marketing-services" className="max-w-container-max mx-auto px-mobile-margin mb-24 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* SEO Strategy */}
          <div className="md:col-span-8 bento-card bg-surface-container-low p-10 rounded-xl flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-botanical-green">query_stats</span>
                <span className="font-headline text-xs font-bold text-secondary border border-border-muted px-3 py-1 rounded-full uppercase tracking-wider bg-surface">
                  Organic Growth
                </span>
              </div>
              <h3 className="font-headline text-headline-lg mb-4 text-ink-black font-bold">Precision SEO &amp; Authority Building</h3>
              <p className="font-body text-body-md text-secondary max-w-lg mb-8 leading-relaxed">
                Moving beyond keywords. We focus on semantic search, technical architecture, and content clusters that establish your brand as a market leader.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-surface rounded border border-border-muted">
                <span className="block font-bold text-botanical-green font-headline text-sm uppercase tracking-wider mb-1">Technical SEO</span>
                <span className="text-sm text-secondary font-body">Core Web Vitals &amp; Schema setups</span>
              </div>
              <div className="p-4 bg-surface rounded border border-border-muted">
                <span className="block font-bold text-botanical-green font-headline text-sm uppercase tracking-wider mb-1">Content Authority</span>
                <span className="text-sm text-secondary font-body">Strategic content clusters &amp; linking</span>
              </div>
            </div>
          </div>

          {/* Performance Marketing */}
          <div className="md:col-span-4 bento-card bg-surface-container-highest p-10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="mb-12">
                <span className="material-symbols-outlined text-4xl text-botanical-green">ads_click</span>
              </div>
              <h3 className="font-headline text-headline-md mb-4 text-ink-black font-bold">Paid Performance</h3>
              <p className="font-body text-sm text-secondary mb-8 leading-relaxed">
                Data-backed advertising across Meta, Google, and LinkedIn optimized for ROAS, not just clicks.
              </p>
            </div>
            <ul className="space-y-3 font-body text-sm text-secondary">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-botanical-green shrink-0" />
                <span>Dynamic Retargeting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-botanical-green shrink-0" />
                <span>A/B Creative Testing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-botanical-green shrink-0" />
                <span>Funnel Optimization</span>
              </li>
            </ul>
          </div>

          {/* Social & Brand */}
          <div className="md:col-span-4 bento-card bg-surface-container-high p-10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="mb-12">
                <span className="material-symbols-outlined text-4xl text-botanical-green">share_reviews</span>
              </div>
              <h3 className="font-headline text-headline-md mb-4 text-ink-black font-bold">Social Ecosystems</h3>
              <p className="font-body text-sm text-secondary mb-6 leading-relaxed">
                Building communities through strategic storytelling and platform-native content.
              </p>
            </div>
            <div className="w-full h-32 bg-surface/50 rounded border border-dashed border-border-muted flex items-center justify-center italic text-secondary text-xs font-body p-4 text-center">
              Social Sentiment Analysis Dashboard Mockup
            </div>
          </div>

          {/* Lead Gen Engine */}
          <div className="md:col-span-8 bento-card bg-ink-black text-surface p-10 rounded-xl flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-botanical-green mb-6">hub</span>
                <h3 className="font-headline text-headline-lg mb-4 text-surface font-bold">Lead Generation Automation</h3>
                <p className="font-body text-sm text-surface-dim mb-6 leading-relaxed">
                  We don't just find leads; we nurture them. Integrated CRM systems and automated follow-ups that turn prospects into loyal partners.
                </p>
              </div>
              <button className="border border-surface-dim/30 px-6 py-2.5 rounded hover:bg-surface hover:text-ink-black transition-all cursor-pointer font-bold text-sm self-start">
                View Case Studies
              </button>
            </div>
            <div className="md:w-1/2 overflow-hidden relative rounded border border-white/10">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABpFuKSeVGUMc-DyhcSluBkSImYP9VletVEB-DPSb3STy57jHymykeMi4opv0iCSYoSfkuAFDLtYGTFwG_2aZJ8p2eKu6NGRKvp8PZCebAMNBwP_Towkl9b5yss6GsSNNTAywcszKkYUS2kyj9vkcZcJao3I6QnzfkrMkkbNMecpG9ri4tiySTquyxnG4rWvVnMHassdRC47Di4QWfUa50b3zV8XbNAPDCEpTPZvutOaf7V1g4dyg"
                alt="Growth Metrics dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Previous Work Sub-Section */}
      <section className="max-w-container-max mx-auto px-mobile-margin mb-24 text-left border-t border-border-muted pt-24 story-panel">
        <h2 className="font-headline text-headline-lg mb-12 text-center text-ink-black font-bold">Featured Growth Stories</h2>
        <div className="space-y-24">
          {/* Case Study 01 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="text-[100px] font-bold text-border-muted leading-none font-headline">01</div>
              <h4 className="font-headline text-headline-md mb-2 text-ink-black font-bold">Nexflow Dynamics</h4>
              <p className="font-headline text-[12px] font-bold tracking-widest text-secondary uppercase">SaaS GROWTH • SEO • PPC</p>
              
              <div className="grid grid-cols-2 gap-8 border-y border-border-muted py-8">
                <div>
                  <span className="block text-4xl font-headline font-bold text-botanical-green">+240%</span>
                  <span className="text-sm text-secondary font-body">Organic Traffic Increase</span>
                </div>
                <div>
                  <span className="block text-4xl font-headline font-bold text-botanical-green">-45%</span>
                  <span className="text-sm text-secondary font-body">CPA Reduction Rate</span>
                </div>
              </div>
              
              <p className="text-secondary font-body text-sm leading-relaxed">
                Strategic overhaul of their inbound funnel, focusing on high-intent search terms and performance retargeting.
              </p>
              
              <a className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all text-sm group" href="#">
                View Campaign <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="w-full md:w-1/2 border border-border-muted p-4 bg-surface-container-low rounded-xl shadow-sm">
              <img
                className="w-full h-[380px] object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCWp1nM9oPezXRK2WH6MXtsA66AfxlIJicMxwekwOWyQY5cpRI4a8EGAU3jA4uEdvTrKp2dZIbu6k7Un19WxlzCaHS_JyF2nMO2R3AUGPm8H_SgiWopB5XJHSRbf2XU_bTK4g4hb0TUyoJMnq37p__zVOYgliRNm12VMJsMZ4LMVFbYzhgxlYdpVK-cUp0Ecs4C2szOI5tn-80XtWCilxuqz52D7bkowi33RFBg_1dg7A4H4uNARg"
                alt="Growth details mockup brochure"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-container-max mx-auto px-mobile-margin mb-24">
        <div className="bg-surface-container rounded-2xl p-12 md:p-20 relative overflow-hidden text-center border border-border-muted shadow-sm">
          <div className="absolute -bottom-10 -right-10 scribble-accent opacity-20 pointer-events-none text-botanical-green">
            <span className="material-symbols-outlined text-[200px]">motion_photos_on</span>
          </div>
          <h2 className="font-headline text-headline-xl mb-6 text-ink-black font-extrabold">Ready to scale your impact?</h2>
          <p className="font-body text-body-lg text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
            Let's discuss how our data-driven growth strategies can integrate with your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button className="bg-botanical-green text-surface px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform cursor-pointer">
              Start Your Project
            </button>
            <button className="border border-ink-black/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-ink-black hover:text-surface transition-all cursor-pointer text-ink-black">
              Book a Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
