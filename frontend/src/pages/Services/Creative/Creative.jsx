import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight, Palette, PenTool, Layout, Layers, Sparkles } from "lucide-react";
import Button from "../../../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Creative = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance stagger ────────────────────────────────────────
      gsap.from(".hero-content > *:not(.scribble-accent)", {
        opacity: 0,
        y: 40,
        stagger: 0.13,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.1,
      });

      // ── Service cards — per element ──────────────────────────────────
      containerRef.current.querySelectorAll(".hover-lift").forEach((card) => {
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

      // ── Project rows — asymmetric reveal ──────────────────────────────
      containerRef.current.querySelectorAll(".project-row").forEach((row) => {
        gsap.from(row.querySelectorAll("div"), {
          opacity: 0,
          y: 50,
          stagger: 0.18,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
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
    <div ref={containerRef} className="pt-20 bg-warm-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-mobile-margin max-w-container-max mx-auto text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 hero-content">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-botanical-green/5 border border-botanical-green/10 rounded-full">
            <Sparkles className="w-4.5 h-4.5 text-botanical-green" />
            <span className="font-headline text-[12px] font-bold uppercase tracking-widest text-botanical-green">
              SERVICES
            </span>
          </div>

          <h1 className="font-headline text-headline-xl md:text-[64px] mb-8 leading-tight tracking-tight text-ink-black max-w-4xl mx-auto font-extrabold">
            Design That Makes Your Brand
            <br />
            <span className="text-botanical-green relative inline-block mt-2">
              Impossible to Ignore.
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
            We create professional visual experiences that strengthen brand identity, communicate value, and help businesses stand out across digital platforms.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-botanical-green text-surface px-8 py-4 font-bold rounded-lg flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all cursor-pointer">
              View Our Portfolio
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
            <button className="border border-ink-black/30 px-8 py-4 font-bold rounded-lg flex items-center justify-center hover:bg-ink-black/5 active:scale-95 transition-all cursor-pointer text-ink-black bg-transparent">
              Service Guide
            </button>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="creative-services" className="py-24 bg-surface-container-low text-left border-y border-border-muted">
        <div className="max-w-container-max mx-auto px-mobile-margin">
          <div className="mb-16">
            <h2 className="font-headline text-headline-lg font-bold text-ink-black mb-4">Our Creative Ecosystem</h2>
            <p className="text-secondary max-w-xl font-body">
              A comprehensive suite of design disciplines structured to give your brand cohesive visual authority across every channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Service Card 1 */}
            <div className="md:col-span-8 bg-surface border border-border-muted p-10 hover-lift flex flex-col justify-between group rounded-xl">
              <div>
                <Palette className="w-10 h-10 text-botanical-green mb-6" />
                <h3 className="font-headline text-headline-md font-bold text-ink-black mb-4">Branding &amp; Visual Identity</h3>
                <p className="text-secondary mb-8 max-w-md font-body leading-relaxed">
                  Comprehensive brand systems including logo design, color guidelines, typography structures, and extensive brand books to ensure visual integrity.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 text-secondary font-headline">
                <li className="bg-ink-black/5 px-4 py-2 font-label-caps text-[10px] rounded">LOGO DESIGN</li>
                <li className="bg-ink-black/5 px-4 py-2 font-label-caps text-[10px] rounded">COLOR THEORY</li>
                <li className="bg-ink-black/5 px-4 py-2 font-label-caps text-[10px] rounded">TYPE SYSTEMS</li>
                <li className="bg-ink-black/5 px-4 py-2 font-label-caps text-[10px] rounded">BRAND VOICE</li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="md:col-span-4 bg-surface border border-border-muted p-10 hover-lift group rounded-xl flex flex-col justify-between">
              <div>
                <PenTool className="w-10 h-10 text-botanical-green mb-6" />
                <h3 className="font-headline text-headline-md font-bold text-ink-black mb-4">Graphic Design</h3>
              </div>
              <p className="text-secondary font-body leading-relaxed">
                Professional design solutions that give your brand a unique, high-end visual edge across digital and print mediums.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="md:col-span-4 bg-surface border border-border-muted p-10 hover-lift group rounded-xl flex flex-col justify-between">
              <div>
                <Layers className="w-10 h-10 text-botanical-green mb-6" />
                <h3 className="font-headline text-headline-md font-bold text-ink-black mb-4">Social Media Creatives</h3>
              </div>
              <p className="text-secondary font-body leading-relaxed">
                Engaging platform-native social designs and assets to grow organic reach and capture customer attention.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="md:col-span-8 bg-botanical-green p-10 hover-lift text-surface relative overflow-hidden rounded-xl">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-headline-md font-bold text-surface mb-4">E-Commerce Storefront Design</h3>
                  <p className="text-on-primary-container/80 mb-8 max-w-md font-body leading-relaxed">
                    Polished, conversion-focused design layouts for custom storefronts, Shopify pages, and digital product collections.
                  </p>
                </div>
                <button className="flex items-center gap-2 font-bold group self-start hover:opacity-90 cursor-pointer">
                  Explore Storefront Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              {/* Background Pattern */}
              <div className="absolute right-[-10%] bottom-[-20%] opacity-10 rotate-12 scale-150 text-surface select-none pointer-events-none">
                <span className="material-symbols-outlined text-[300px]">auto_graph</span>
              </div>
            </div>

            {/* Secondary Services Grid */}
            <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-gutter mt-8">
              {[
                { title: "Product Images & Infographics", desc: "Studio-quality product layouts, catalog image enhancements, and graphic specs.", icon: "photo_library" },
                { title: "Amazon A+ Content", desc: "Rich A+ page modules, descriptive content structures, and custom banner creatives.", icon: "featured_video" },
                { title: "Website & Digital Banners", desc: "Eye-catching website hero headers, marketing campaign slides, and banners.", icon: "view_carousel" },
                { title: "Advertising & Marketing Creatives", desc: "Data-optimized performance ad templates, PPC graphics, and outreach creatives.", icon: "ad_units" },
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
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 text-left">
        <div className="max-w-container-max mx-auto px-mobile-margin">
          <div className="flex justify-between items-end mb-20">
            <div>
              <span className="font-headline text-xs font-bold text-botanical-green tracking-widest uppercase mb-4 block">PREVIOUS WORK</span>
              <h2 className="font-headline text-headline-lg font-bold text-ink-black">Selected Projects</h2>
            </div>
            <p className="text-secondary max-w-xs text-right hidden md:block font-body text-sm leading-relaxed">
              A curated look at how we've helped brands find their voice through strategic design.
            </p>
          </div>

          {/* Project 04 (Aumya) */}
          <div className="project-row grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
            <div className="md:col-span-5 order-2 md:order-1">
              <span className="font-headline text-headline-xl font-bold text-ink-black/10 block mb-4">04</span>
              <h3 className="font-headline text-headline-lg font-bold text-ink-black mb-2">AUMYA</h3>
              <p className="font-headline text-[12px] font-bold tracking-widest text-secondary mb-6 uppercase">LUXURY SPIRITUAL JEWELRY</p>
              <p className="text-secondary mb-8 font-body leading-relaxed">
                A premium identity system that blends luxury and spirituality into a refined brand presence. Our approach focused on timeless elegance and tactile sophistication.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border-l border-ink-black/20 pl-4">
                  <span className="font-headline text-[10px] font-bold text-ink-black/40 block mb-1 uppercase">CHALLENGE</span>
                  <p className="text-body-md font-medium text-ink-black">Luxury and spirituality parity.</p>
                </div>
                <div className="border-l border-ink-black/20 pl-4">
                  <span className="font-headline text-[10px] font-bold text-ink-black/40 block mb-1 uppercase">OUTCOME</span>
                  <p className="text-body-md font-medium text-ink-black">Elevated market positioning.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="border border-ink-black/10 px-3 py-1 text-[11px] font-headline font-bold uppercase rounded text-secondary bg-ink-black/5">Logo Design</span>
                <span className="border border-ink-black/10 px-3 py-1 text-[11px] font-headline font-bold uppercase rounded text-secondary bg-ink-black/5">Packaging</span>
                <span className="border border-ink-black/10 px-3 py-1 text-[11px] font-headline font-bold uppercase rounded text-secondary bg-ink-black/5">Typography</span>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 border border-border-muted rounded-xl overflow-hidden shadow-sm">
              <div className="bg-surface-container overflow-hidden group">
                <img
                  className="w-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-4lCfPDEklKVOQrw_ud4PotSMIjgBgpSd-yoEK_FqLNc95xwreXaaxBkXFD8cgVIAFvcjFFCqiCFROHocov_AyarZ9VqofDmOFTLWrN68soSLsogycZpRkqc4rsa_PitgqP07Hh2uedRQuwi9wVpepff0mbAK36vd1kWc8EtP1Ir856ZmyPtI2EMwD0KrfQG7mg-iT_WTuxBoLP_Bmyi9Cn3sfvY7J2cNS1VAmfRHGxrLn5waq8A"
                  alt="Aumya Luxury branding mockups"
                />
              </div>
            </div>
          </div>

          {/* Project 05 (AI JUGAAD) */}
          <div className="project-row grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
            <div className="md:col-span-7 border border-border-muted rounded-xl overflow-hidden shadow-sm">
              <div className="bg-surface-container overflow-hidden group">
                <img
                  className="w-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH7TT2lRjM3xsJq2S4uWtVjI9G6NXH047jXl4A2PkFC8qMfCeHaWrgCz9pNTpjWt5QWKL2Qv7Bgcd9CPY5JcQ-ikGANP6o-UP1ENyVdNgatHzXVpPZ2cXC4JKZIzMa86ffwwDZiVH7iaBs4_VT7szKcoBnRZeORGwEpAwC2WHziWYqOJ_qHoqX1IiR1KqMghJVY256D91i-INOO4-ATxbsRD8D9xLYAIH5tn-tLoqDUpqP_IGkI-0"
                  alt="AI Jugaad branding Board"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <span className="font-headline text-headline-xl font-bold text-ink-black/10 block mb-4">05</span>
              <h3 className="font-headline text-headline-lg font-bold text-ink-black mb-2">AI JUGAAD</h3>
              <p className="font-headline text-[12px] font-bold tracking-widest text-secondary mb-6 uppercase">AGENCY BRANDING</p>
              <p className="text-secondary mb-8 font-body leading-relaxed">
                A polished agency identity system designed to elevate AI Jugaad’s visual authority across digital and print touchpoints.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border-l border-ink-black/20 pl-4">
                  <span className="font-headline text-[10px] font-bold text-ink-black/40 block mb-1 uppercase">STRATEGY</span>
                  <p className="text-body-md font-medium text-ink-black">Flexible &amp; Scalable.</p>
                </div>
                <div className="border-l border-ink-black/20 pl-4">
                  <span className="font-headline text-[10px] font-bold text-ink-black/40 block mb-1 uppercase">DELIVERABLES</span>
                  <p className="text-body-md font-medium text-ink-black">Social Kit &amp; Identity.</p>
                </div>
              </div>
              <button className="text-botanical-green font-bold flex items-center gap-2 group border-b-2 border-transparent hover:border-botanical-green pb-1 transition-all cursor-pointer">
                View Case Study
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </button>
            </div>
          </div>

          {/* Project 06 (TASTY BITE) */}
          <div className="project-row grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <span className="font-headline text-headline-xl font-bold text-ink-black/10 block mb-4">06</span>
              <h3 className="font-headline text-headline-lg font-bold text-ink-black mb-2">TASTY BITE</h3>
              <p className="font-headline text-[12px] font-bold tracking-widest text-secondary mb-6 uppercase">RESTAURANT BRANDING</p>
              <p className="text-secondary mb-8 font-body leading-relaxed">
                A bold restaurant identity system crafted to bring flavor, warmth, and premium hospitality to every touchpoint.
              </p>
              <div className="p-6 bg-surface-container border border-border-muted mb-8 rounded-lg">
                <p className="italic text-secondary font-body text-sm leading-relaxed">
                  "Nexivo transformed our brand into something that truly represents our passion for food. The attention to detail in the packaging design was unmatched."
                </p>
                <span className="block mt-4 font-bold text-body-md text-ink-black">— Founder, Tasty Bite</span>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 border border-border-muted rounded-xl overflow-hidden shadow-sm">
              <div className="bg-surface-container overflow-hidden group">
                <img
                  className="w-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnGCMd0jly0e0cXZrKEaG7A9qf2Rkw3Zn3_9GahT-LkgbzwJATTfsYHum3WNkylTiqEAR27_I8vPe23-KOrffU05nTGbHzZakiwplqv4vTSqDclSvxTrKWy2Uq171IvsoHbvlPpulh5GmUVTwhav-bj0EMM6GFMFM1iRsHMFe2c1DrjfkO21YGUJas4UD9-4ZUOK9B22XDPUNztgkYwlZpUCyxZPVNW-Ooj_1r36VjLYrbtZ5UWDo"
                  alt="Tasty Bite restaurant visual identity Board"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ink-black text-surface relative overflow-hidden text-center">
        {/* Animated Scribble Circle */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-20 border-4 border-botanical-green rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
        <div className="max-w-container-max mx-auto px-mobile-margin text-center relative z-10">
          <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl mb-6 text-surface font-extrabold">Ready to build something amazing?</h2>
          <p className="text-surface/70 max-w-2xl mx-auto mb-10 text-body-lg font-body leading-relaxed">
            From visual identities to AI-powered digital experiences, let's turn your vision into a premium reality.
          </p>
          <div className="inline-flex flex-col items-center">
            <button className="bg-botanical-green text-surface px-10 py-5 font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-xl mb-4 cursor-pointer text-lg">
              Start a Creative Project →
            </button>
            <div className="flex items-center gap-4 mt-8 opacity-60">
              <span className="font-headline text-[10px] font-bold tracking-widest uppercase text-surface">TRUSTED BY 50+ GLOBAL BRANDS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creative;
