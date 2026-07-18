import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight, BarChart2, Target, CheckCircle2, Sparkles } from "lucide-react";
import Button from "../../../components/Button";
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
    <div ref={containerRef} className="pt-20 bg-warm-bg min-h-screen text-left">
      {/* Hero Section */}
      <section className="relative pt-10 pb-16 md:py-24 px-mobile-margin max-w-container-max mx-auto text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 hero-content">
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-botanical-green/5 border border-botanical-green/10 rounded-full">
            <Sparkles className="w-4 h-4 text-botanical-green" />
            <span className="font-headline text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-botanical-green">
              SERVICES
            </span>
          </div>

          <h1 className="font-headline mb-8 leading-[1.05] tracking-tight text-ink-black max-w-4xl mx-auto font-extrabold" style={{ fontSize: "clamp(2.6rem, 9.5vw, 4.25rem)" }}>
            Marketing Strategies
            <br />
            <span className="text-botanical-green relative inline-block mt-2">
              Built for Growth.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-botanical-green/30"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h1>

          <p className="font-body text-body-2xl text-secondary max-w-3xl mx-auto leading-relaxed text-center">
            We combine creativity, performance marketing, and data to help businesses reach the right audience and turn attention into measurable results.
          </p>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section id="marketing-services" className="max-w-container-max mx-auto px-mobile-margin mb-24 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* SEO Strategy */}
          <div className="md:col-span-8 bento-card bg-surface p-10 rounded-xl border border-border-muted flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-botanical-green">query_stats</span>
                <span className="font-headline text-xs font-bold text-secondary border border-border-muted px-3 py-1 rounded-full uppercase tracking-wider bg-surface-container-low">
                  Organic Growth
                </span>
              </div>
              <h3 className="font-headline text-headline-lg mb-4 text-ink-black font-bold">Search Engine Optimization (SEO)</h3>
              <p className="font-body text-body-md text-secondary max-w-lg mb-8 leading-relaxed">
                Moving beyond keywords. We focus on semantic search, technical site architecture, core web vitals, and structured content clusters to establish search authority.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-surface-container-low rounded border border-border-muted">
                <span className="block font-bold text-botanical-green font-headline text-sm uppercase tracking-wider mb-1">Technical SEO</span>
                <span className="text-sm text-secondary font-body">Core Web Vitals &amp; Schema setups</span>
              </div>
              <div className="p-4 bg-surface-container-low rounded border border-border-muted">
                <span className="block font-bold text-botanical-green font-headline text-sm uppercase tracking-wider mb-1">Content Authority</span>
                <span className="text-sm text-secondary font-body">Strategic content clusters &amp; linking</span>
              </div>
            </div>
          </div>

          {/* Performance Marketing */}
          <div className="md:col-span-4 bento-card bg-surface p-10 rounded-xl border border-border-muted flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="mb-12">
                <span className="material-symbols-outlined text-4xl text-botanical-green">ads_click</span>
              </div>
              <h3 className="font-headline text-headline-md mb-4 text-ink-black font-bold">Performance Marketing</h3>
              <p className="font-body text-sm text-secondary mb-8 leading-relaxed">
                Data-backed advertising across Meta, Google Ads, and LinkedIn optimized for ROAS, not just clicks.
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

          {/* Social Media Management */}
          <div className="md:col-span-4 bento-card bg-surface p-10 rounded-xl border border-border-muted flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="mb-12">
                <span className="material-symbols-outlined text-4xl text-botanical-green">share_reviews</span>
              </div>
              <h3 className="font-headline text-headline-md mb-4 text-ink-black font-bold">Social Media Management</h3>
              <p className="font-body text-sm text-secondary mb-6 leading-relaxed">
                Building organic reach and community through strategic storytelling and platform-native content.
              </p>
            </div>
            <div className="w-full h-32 bg-surface-container-low rounded border border-dashed border-border-muted flex items-center justify-center italic text-secondary text-xs font-body p-4 text-center">
              Social Analytics Dashboard Mockup
            </div>
          </div>

          {/* Lead Gen & Campaign Management */}
          <div className="md:col-span-8 bento-card bg-ink-black text-surface p-10 rounded-xl flex flex-col md:flex-row gap-10 hover:shadow-md transition-shadow">
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-botanical-green mb-6">hub</span>
                <h3 className="font-headline text-headline-lg mb-4 text-surface font-bold">Lead Generation &amp; Campaigns</h3>
                <p className="font-body text-sm text-surface-dim mb-6 leading-relaxed">
                  CRM integrations, email automation sequences, and multi-channel campaign architectures designed to scale client acquisition.
                </p>
              </div>
              <button
                onClick={() => { window.location.href = "/contact"; }}
                className="border border-white/30 text-white px-6 py-2.5 rounded hover:bg-white hover:text-ink-black transition-all cursor-pointer font-bold text-sm self-start bg-transparent"
              >
                Let's Discuss →
              </button>
            </div>
            <div className="md:w-1/2 overflow-hidden relative rounded border border-white/10">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
                alt="Growth Metrics dashboard"
              />
            </div>
          </div>

          {/* Secondary Services Grid */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter mt-8">
            {[
              { title: "Digital Marketing", desc: "Holistic online brand orchestration across all channels and target pipelines.", icon: "language" },
              { title: "Paid Advertising", desc: "Optimized ad budgets, sponsored placements, and target keyword retargeting.", icon: "ad_units" },
              { title: "Content Marketing", desc: "High-value blog layouts, copy clusters, and marketing brochures.", icon: "edit_note" },
              { title: "Conversion Optimization", desc: "Landing page speed optimization, interactive maps, and forms analytics.", icon: "ads_click" },
              { title: "Digital Growth Strategy", desc: "Long-term revenue maps, customer journey audits, and growth consulting.", icon: "insights" },
              { title: "Marketing Analytics", desc: "Server-side event configurations, UTM checks, and BI dashboard views.", icon: "monitoring" },
            ].map((service, idx) => (
              <div key={idx} className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface hover:shadow-sm transition-all duration-300">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">{service.icon}</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">{service.title}</h4>
                  <p className="text-sm text-secondary font-body leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
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
            </div>
            
            <div className="w-full md:w-1/2 border border-border-muted p-4 bg-surface rounded-xl shadow-sm">
              <img
                className="w-full h-[380px] object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
                alt="Growth details mockup brochure"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-container-max mx-auto px-mobile-margin mb-24">
        <div className="bg-botanical-green rounded-2xl p-12 md:p-20 relative overflow-hidden text-center border border-white/10 shadow-lg text-white">
          <div className="absolute -bottom-10 -right-10 scribble-accent opacity-10 pointer-events-none text-white">
            <span className="material-symbols-outlined text-[200px]">motion_photos_on</span>
          </div>
          <h2 className="font-headline text-headline-xl mb-6 text-white font-extrabold">Ready to scale your impact?</h2>
          <p className="font-body text-body-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Let's discuss how our data-driven growth strategies can integrate with your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button
              onClick={() => { window.location.href = "/contact"; }}
              className="bg-white text-botanical-green hover:bg-[#fbf9f2] px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform cursor-pointer"
            >
              Build Your Growth Strategy →
            </button>
            <button
              onClick={() => { window.location.href = "/contact"; }}
              className="border border-white/40 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-botanical-green transition-all cursor-pointer"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
