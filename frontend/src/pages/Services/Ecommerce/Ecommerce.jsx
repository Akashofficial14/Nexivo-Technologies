import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight, ShoppingCart, ShoppingBag, BarChart2, CheckCircle2, CloudLightning, Sparkles } from "lucide-react";
import Button from "../../../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Ecommerce = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance stagger ────────────────────────────────────────
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 40,
        stagger: 0.13,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.1,
      });

      // ── Service cards — per element ──────────────────────────────────
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20 bg-warm-bg min-h-screen text-left">
      {/* Hero Section */}
      <header className="ecom-hero pt-24 pb-12 px-mobile-margin max-w-container-max mx-auto text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 hero-content">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-botanical-green/5 border border-botanical-green/10 rounded-full">
            <Sparkles className="w-4.5 h-4.5 text-botanical-green" />
            <span className="font-headline text-[12px] font-bold uppercase tracking-widest text-botanical-green">
              SERVICES
            </span>
          </div>

          <h1 className="font-headline text-headline-xl md:text-[64px] mb-8 leading-tight tracking-tight text-ink-black max-w-4xl mx-auto font-extrabold">
            Everything You Need to
            <br />
            <span className="text-botanical-green relative inline-block mt-2">
              Build and Grow.
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

          <p className="font-body text-body-2xl text-secondary max-w-3xl mx-auto leading-relaxed text-center mb-12">
            From marketplace setup and daily operations to advertising, content, and analytics, we help brands manage and scale their online selling ecosystem.
          </p>
          
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 font-headline font-bold text-lg select-none text-secondary">
            <span>AMAZON</span>
            <span>FLIPKART</span>
            <span>MEESHO</span>
            <span>SHOPIFY</span>
          </div>
        </div>
      </header>

      {/* E-Commerce Solutions Bento Grid */}
      <section id="ecom-services" className="py-20 px-mobile-margin max-w-container-max mx-auto border-t border-border-muted text-left">
        <div className="mb-16">
          <h2 className="font-headline text-headline-lg mb-4 text-ink-black font-bold">Core Marketplace Services</h2>
          <div className="w-20 h-1 bg-botanical-green"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Amazon, Flipkart, Meesho & Shopify Management */}
          <div className="md:col-span-8 bg-surface border border-border-muted p-10 bento-card flex flex-col justify-between rounded-xl hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-botanical-green text-4xl">local_shipping</span>
                <h3 className="font-headline text-headline-md text-ink-black">Amazon, Flipkart, Meesho &amp; Shopify Management</h3>
              </div>
              <p className="text-secondary font-body text-body-md mb-8 max-w-xl leading-relaxed">
                Comprehensive A-to-Z channel oversight including catalog syncing, inventory alignment, logistics coordination, and multi-channel operations management to dominate key online sales platforms.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-surface-container-low p-4 text-center rounded border border-border-muted">
                <span className="block font-headline font-bold text-botanical-green text-xl">99%</span>
                <span className="text-[10px] uppercase tracking-widest font-headline font-bold text-secondary">OOS Prevention</span>
              </div>
              <div className="bg-surface-container-low p-4 text-center rounded border border-border-muted">
                <span className="block font-headline font-bold text-botanical-green text-xl">3x</span>
                <span className="text-[10px] uppercase tracking-widest font-headline font-bold text-secondary">Avg. ROAS</span>
              </div>
            </div>
          </div>

          {/* Marketplace & Seller Account Setup */}
          <div className="md:col-span-4 bg-surface border border-border-muted p-10 bento-card relative overflow-hidden rounded-xl hover:shadow-md transition-shadow">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-headline-md mb-4 text-ink-black">Marketplace &amp; Seller Account Setup</h3>
                <p className="text-secondary font-body text-sm mb-6 leading-relaxed">
                  Complete account creation, brand registry applications, tax profiles, and catalog configurations on top e-commerce platforms.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5 text-ink-black pointer-events-none">
              <span className="material-symbols-outlined text-[160px]">storefront</span>
            </div>
          </div>

          {/* Seller Account & Store Management */}
          <div className="md:col-span-4 bg-surface border border-border-muted p-10 bento-card rounded-xl flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-headline text-headline-md mb-4 text-ink-black">Seller Account &amp; Store Management</h3>
              <p className="text-secondary font-body text-sm leading-relaxed">
                Daily store operations, promotion planning, feedback monitoring, and compliance management to ensure frictionless sales flow.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border-muted flex gap-4">
              <span className="px-3 py-1 bg-botanical-green/10 text-botanical-green text-[10px] font-bold tracking-wider rounded uppercase font-headline">
                OPERATIONS
              </span>
              <span className="px-3 py-1 bg-botanical-green/10 text-botanical-green text-[10px] font-bold tracking-wider rounded uppercase font-headline">
                COMPLIANCE
              </span>
            </div>
          </div>

          {/* Product Listing & Catalog Management */}
          <div className="md:col-span-8 bg-ink-black text-surface p-10 bento-card flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-xl hover:shadow-md transition-shadow">
            <div className="md:w-1/2 space-y-4">
              <h3 className="font-headline text-headline-md text-surface font-bold">Product Listing &amp; Catalog Management</h3>
              <p className="text-outline-variant font-body text-sm leading-relaxed">
                Organizing complex parent-child variations, creating clean item descriptions, mapping keywords, and optimizing catalog schemas for visibility.
              </p>
            </div>
            <div className="hidden md:block md:w-1/2 pl-10 w-full space-y-4">
              <div className="h-2 w-full bg-botanical-green/20 rounded-full overflow-hidden">
                <div className="h-full bg-botanical-green w-3/4"></div>
              </div>
              <div className="h-2 w-full bg-botanical-green/20 rounded-full overflow-hidden">
                <div className="h-full bg-botanical-green w-1/2"></div>
              </div>
              <div className="h-2 w-full bg-botanical-green/20 rounded-full overflow-hidden">
                <div className="h-full bg-botanical-green w-5/6"></div>
              </div>
            </div>
          </div>

          {/* Secondary Services Grid */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter mt-8">
            {[
              { title: "Inventory & Order Management", desc: "Automated warehouse links, stock forecasting, and replenishment audits.", icon: "inventory" },
              { title: "Account Health & Compliance", desc: "Fulfillment rate monitoring, policy audits, and case logs management.", icon: "gavel" },
              { title: "E-Commerce PPC & Sales Growth", desc: "Sponsored ads orchestration, display targeting, and budget scaling.", icon: "trending_up" },
              { title: "Product Content Optimization", desc: "High-conversion details copywriting, bullet mapping, and A+ detail pages.", icon: "edit_note" },
              { title: "Performance Reports & Analytics", desc: "BI tools linking gross margins, sales velocity, and catalog traffic.", icon: "monitoring" },
              { title: "Customer Support Management", desc: "Quick message responses, buyer feedback recovery, and refund processing.", icon: "contact_support" },
              { title: "E-Commerce Business Consulting", desc: "D2C business scaling guidance, profit margin planning, and pricing strategies.", icon: "insights" },
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

      {/* Case Study Section */}
      <section className="py-24 bg-surface border-y border-border-muted overflow-hidden text-left">
        <div className="max-w-container-max mx-auto px-mobile-margin grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 success-panel">
            <div className="relative">
              <img
                className="w-full aspect-[4/5] object-cover border border-border-muted grayscale hover:grayscale-0 transition-all duration-700 rounded-lg shadow-sm"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
                alt="E-commerce Analytics dashboard mockup"
              />
              <div className="absolute -bottom-6 -right-6 bg-botanical-green p-8 text-surface rounded shadow-md hidden md:block">
                <p className="font-headline text-3xl font-bold text-white">+145%</p>
                <p className="text-[10px] font-headline font-bold uppercase tracking-widest text-white/90">
                  Revenue Increase
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <span className="text-botanical-green font-bold text-xs uppercase tracking-[0.2em] font-headline">Success Story</span>
            <h2 className="font-headline text-headline-lg text-ink-black font-bold">Aumya: From Local Craft to Global Marketplace</h2>
            <div className="space-y-4 text-secondary font-body">
              <p className="leading-relaxed">
                We took Aumya's spiritual jewelry from a localized Shopify store to an international Amazon FBA leader within 6 months.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-botanical-green shrink-0 mt-0.5" />
                  <span>Full Catalog SEO &amp; Keyword Mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-botanical-green shrink-0 mt-0.5" />
                  <span>High-Conversion A+ Content &amp; Video Ads</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-botanical-green shrink-0 mt-0.5" />
                  <span>Inventory Logistics &amp; Forecasting Automation</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="bg-botanical-green text-surface px-8 py-4 font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer">
                Read Case Study
              </button>
              <button className="border border-ink-black/20 px-8 py-4 font-bold rounded-lg hover:bg-ink-black/5 active:scale-95 transition-all cursor-pointer text-ink-black">
                View Brand Identity
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-24 px-mobile-margin max-w-container-max mx-auto text-center">
        <h2 className="font-headline text-headline-lg mb-16 text-ink-black font-bold">The Nexivo Blueprint</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative text-center">
          <div className="hidden md:block absolute top-10 left-1/4 w-1/2 h-px border-t border-dashed border-botanical-green/30 z-0"></div>
          
          <div className="relative z-10 bg-warm-bg blueprint-item">
            <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 border border-border-muted">
              <span className="text-xl font-bold text-botanical-green">01</span>
            </div>
            <h4 className="font-headline text-headline-md mb-4 text-ink-black font-bold">Audit &amp; Align</h4>
            <p className="text-secondary text-sm px-4 leading-relaxed font-body">
              We analyze your current marketplace performance and align it with your overall brand vision.
            </p>
          </div>

          <div className="relative z-10 bg-warm-bg blueprint-item">
            <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 border border-border-muted">
              <span className="text-xl font-bold text-botanical-green">02</span>
            </div>
            <h4 className="font-headline text-headline-md mb-4 text-ink-black font-bold">Scale &amp; Optimize</h4>
            <p className="text-secondary text-sm px-4 leading-relaxed font-body">
              Aggressive listing optimization and PPC scaling to capture high-intent buyers.
            </p>
          </div>

          <div className="relative z-10 bg-warm-bg blueprint-item">
            <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 border border-border-muted">
              <span className="text-xl font-bold text-botanical-green">03</span>
            </div>
            <h4 className="font-headline text-headline-md mb-4 text-ink-black font-bold">Maintain &amp; Grow</h4>
            <p className="text-secondary text-sm px-4 leading-relaxed font-body">
              Daily management and strategic pivots based on real-time market data.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-botanical-green relative overflow-hidden text-center text-white">
        <div className="max-w-container-max mx-auto px-mobile-margin text-center relative z-10">
          <h2 className="font-headline text-headline-xl mb-6 text-white font-extrabold">Ready to Build Something Amazing?</h2>
          <p className="font-body text-body-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            From websites and branding to AI-powered solutions, let's grow your business together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => { window.location.href = "/contact"; }}
              className="bg-white text-botanical-green hover:bg-[#fbf9f2] px-10 py-5 font-bold rounded-lg text-lg hover:translate-y-[-2px] transition-all cursor-pointer shadow-lg"
            >
              Grow Your E-Commerce Business →
            </button>
            <button
              onClick={() => { window.location.href = "/contact"; }}
              className="border border-white/40 px-10 py-5 font-bold rounded-lg hover:bg-white hover:text-botanical-green transition-all flex items-center justify-center gap-3 cursor-pointer text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
        {/* Subtle white accents */}
        <div className="absolute -left-24 -bottom-24 w-96 h-96 border-4 border-white/10 rounded-full border-dashed animate-[spin_30s_linear_infinite]"></div>
      </section>
    </div>
  );
};

export default Ecommerce;
