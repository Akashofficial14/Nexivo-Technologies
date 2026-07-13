import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight, ShoppingCart, ShoppingBag, BarChart2, CheckCircle2, CloudLightning } from "lucide-react";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Ecommerce = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance ────────────────────────────────────────────────
      gsap.from(".ecom-hero > *", {
        opacity: 0, y: 40, stagger: 0.13, duration: 1.0,
        ease: "power4.out", delay: 0.1,
      });

      // ── Core service cards — per element ─────────────────────────────
      containerRef.current.querySelectorAll(".bento-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0, y: 50, duration: 0.85, ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });

      // ── Success panel ────────────────────────────────────────────────
      const successPanel = containerRef.current.querySelector(".success-panel");
      if (successPanel) {
        gsap.from(successPanel, {
          opacity: 0, y: 50, duration: 0.9, ease: "power3.out",
          scrollTrigger: {
            trigger: successPanel,
            start: "top 90%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      }

      // ── Blueprint steps ───────────────────────────────────────────────
      containerRef.current.querySelectorAll(".blueprint-item").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0, y: 35, duration: 0.8, delay: i * 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: item,
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
    <div ref={containerRef} className="pt-20">
      {/* Hero Section */}
      <header className="ecom-hero pt-32 pb-20 px-mobile-margin max-w-container-max mx-auto text-center relative text-left">
        <div className="absolute top-20 left-10 opacity-20 hidden md:block">
          <ShoppingCart className="w-16 h-16 text-botanical-green" />
        </div>
        <div className="absolute top-40 right-10 opacity-20 hidden md:block">
          <ShoppingBag className="w-16 h-16 text-botanical-green" />
        </div>
        
        <h1 className="font-headline text-headline-xl sm:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto font-extrabold text-ink-black leading-tight">
          Scale your brand across the <span className="scribble-underline">digital marketplaces</span> with Nexivo.
        </h1>
        
        <p className="font-body text-body-lg text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          From Amazon optimization to Shopify scaling, we manage the technical complexity of modern retail so you can focus on your product.
        </p>
        
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 font-headline font-bold text-lg select-none text-secondary">
          <span>AMAZON</span>
          <span>FLIPKART</span>
          <span>MEESHO</span>
          <span>SHOPIFY</span>
        </div>
      </header>

      {/* E-Commerce Solutions Bento Grid */}
      <section id="ecom-services" className="py-20 px-mobile-margin max-w-container-max mx-auto border-t border-border-muted text-left">
        <div className="mb-16">
          <h2 className="font-headline text-headline-lg mb-4 text-ink-black font-bold">Core Marketplace Services</h2>
          <div className="w-20 h-1 bg-botanical-green"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Amazon Management */}
          <div className="md:col-span-8 bg-surface-container-low p-10 bento-card flex flex-col justify-between rounded-xl">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-botanical-green text-4xl">local_shipping</span>
                <h3 className="font-headline text-headline-md text-ink-black">Amazon FBA &amp; FBM Mastery</h3>
              </div>
              <p className="text-secondary font-body text-body-md mb-8 max-w-xl leading-relaxed">
                Comprehensive A-to-Z account management including listing optimization, A+ content creation, PPC management, and inventory forecasting to dominate the world's largest marketplace.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-surface p-4 text-center rounded border border-border-muted">
                <span className="block font-headline font-bold text-botanical-green text-xl">99%</span>
                <span className="text-[10px] uppercase tracking-widest font-headline font-bold text-secondary">OOS Prevention</span>
              </div>
              <div className="bg-surface p-4 text-center rounded border border-border-muted">
                <span className="block font-headline font-bold text-botanical-green text-xl">3x</span>
                <span className="text-[10px] uppercase tracking-widest font-headline font-bold text-secondary">Avg. ROAS</span>
              </div>
            </div>
          </div>

          {/* Shopify */}
          <div className="md:col-span-4 bg-surface-container p-10 bento-card relative overflow-hidden rounded-xl">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-headline-md mb-4 text-ink-black">Shopify Scaling</h3>
                <p className="text-secondary font-body text-sm mb-6 leading-relaxed">
                  Custom storefront design and backend automation to turn your private brand into a direct-to-consumer powerhouse.
                </p>
              </div>
              <a className="text-botanical-green font-bold flex items-center gap-2 group text-sm" href="#">
                Explore Shopify Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5 text-ink-black pointer-events-none">
              <span className="material-symbols-outlined text-[160px]">storefront</span>
            </div>
          </div>

          {/* Flipkart & Meesho */}
          <div className="md:col-span-4 bg-surface-container p-10 bento-card rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="font-headline text-headline-md mb-4 text-ink-black">Flipkart &amp; Meesho</h3>
              <p className="text-secondary font-body text-sm leading-relaxed">
                Optimizing for the Indian consumer base with localized keyword research and high-velocity promotional strategies.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border-muted flex gap-4">
              <span className="px-3 py-1 bg-botanical-green/10 text-botanical-green text-[10px] font-bold tracking-wider rounded uppercase font-headline">
                LOGISTICS
              </span>
              <span className="px-3 py-1 bg-botanical-green/10 text-botanical-green text-[10px] font-bold tracking-wider rounded uppercase font-headline">
                ADS
              </span>
            </div>
          </div>

          {/* Marketplace Analytics */}
          <div className="md:col-span-8 bg-ink-black text-surface p-10 bento-card flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-xl">
            <div className="md:w-1/2 space-y-4">
              <h3 className="font-headline text-headline-md text-surface font-bold">Nexivo Analytics Dashboard</h3>
              <p className="text-outline-variant font-body text-sm leading-relaxed">
                Unify your data from every marketplace into a single, humanist-designed dashboard that tells you exactly where to invest next.
              </p>
              <button className="border border-surface/30 px-6 py-2.5 rounded text-sm hover:bg-surface hover:text-ink-black transition-colors cursor-pointer font-bold">
                View Demo
              </button>
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
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-surface-container-low border-y border-border-muted overflow-hidden text-left">
        <div className="max-w-container-max mx-auto px-mobile-margin grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 success-panel">
            <div className="relative">
              <img
                className="w-full aspect-[4/5] object-cover border border-border-muted grayscale hover:grayscale-0 transition-all duration-700 rounded-lg shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs497lj_UVaO-vkWu1mgpDwu8y_Q-JhNHBRpScH1amJk6EaN_cKDdJLuqZuFO0hgeZzj-7XOzz7sCBC4Y58JQJ0m9ClRe7mneXGu4JXVgBi-VQQSSf1MIM6gfM8u8XUPB6nDzsHZe-XtCrXSG9erMAA2cEJWn7X8QKbzOI7Ao5SMeDxLWwmPWkh0ew27P7M0Fwj7g-KEGBMVQXkEOXHZSqkgxrHyK4o2edP1ILoH8XICEPAgrgoxg"
                alt="E-commerce Analytics dashboard mockup"
              />
              <div className="absolute -bottom-6 -right-6 bg-botanical-green p-8 text-surface rounded shadow-md hidden md:block">
                <p className="font-headline text-3xl font-bold">+145%</p>
                <p className="text-[10px] font-headline font-bold uppercase tracking-widest text-surface-container-low">
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
          
          <div className="relative z-10 bg-surface blueprint-item">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6 border border-border-muted">
              <span className="text-xl font-bold text-botanical-green">01</span>
            </div>
            <h4 className="font-headline text-headline-md mb-4 text-ink-black font-bold">Audit &amp; Align</h4>
            <p className="text-secondary text-sm px-4 leading-relaxed font-body">
              We analyze your current marketplace performance and align it with your overall brand vision.
            </p>
          </div>

          <div className="relative z-10 bg-surface blueprint-item">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6 border border-border-muted">
              <span className="text-xl font-bold text-botanical-green">02</span>
            </div>
            <h4 className="font-headline text-headline-md mb-4 text-ink-black font-bold">Scale &amp; Optimize</h4>
            <p className="text-secondary text-sm px-4 leading-relaxed font-body">
              Aggressive listing optimization and PPC scaling to capture high-intent buyers.
            </p>
          </div>

          <div className="relative z-10 bg-surface blueprint-item">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6 border border-border-muted">
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
      <section className="py-20 bg-warm-bg relative overflow-hidden text-center">
        <div className="max-w-container-max mx-auto px-mobile-margin text-center relative z-10">
          <h2 className="font-headline text-headline-xl mb-6 text-ink-black font-extrabold">Ready to Build Something Amazing?</h2>
          <p className="font-body text-body-lg text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            From websites and branding to AI-powered solutions, DM us on Instagram to start your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-botanical-green text-surface px-10 py-5 font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer">
              Start Your Project
              <span className="material-symbols-outlined text-lg">rocket_launch</span>
            </button>
            <button className="border border-ink-black px-10 py-5 font-bold rounded-lg hover:bg-ink-black hover:text-surface active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer text-ink-black">
              Contact Us
              <span className="material-symbols-outlined text-lg">mail</span>
            </button>
          </div>
        </div>
        {/* Scribble Annotation */}
        <div className="absolute bottom-10 right-20 opacity-20 pointer-events-none select-none">
          <svg className="animate-pulse" fill="none" height="200" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 160C80 180 160 140 180 40M180 40L160 60M180 40L140 30" stroke="#618F70" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
