import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "../pages/LoaderPage/Loader";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const [isLoaderComplete, setIsLoaderComplete] = useState(() => {
    return !!sessionStorage.getItem("nexivo_initial_loaded");
  });

  // Disable scroll when preloader is active
  useEffect(() => {
    if (!isLoaderComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoaderComplete]);

  useLayoutEffect(() => {
    if (!isLoaderComplete) return;

    const ctx = gsap.context(() => {
      // ── Hero entrance (immediate, no scroll) ───────────────────────
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 40,
        stagger: 0.13,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.1,
      });

      // ── Bento cards — each element is its own trigger ───────────────
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

      // ── CTA cards ──────────────────────────────────────────────────
      containerRef.current.querySelectorAll(".cta-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
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
  }, [isLoaderComplete]);

  return (
    <>
      {!isLoaderComplete && (
        <Loader
          onComplete={() => {
            sessionStorage.setItem("nexivo_initial_loaded", "true");
            setIsLoaderComplete(true);
          }}
        />
      )}
      <div ref={containerRef} className="pt-10">
        {/* ── Hero Section ─────────────────────────────────────────── */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-5 md:px-10 py-16 md:py-24 overflow-hidden">
          <div className="max-w-4xl relative z-10 hero-content">
            {/* Badge */}
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 mb-6 md:mb-8 rounded-full bg-botanical-green/5 border border-botanical-green/10 text-botanical-green font-headline text-[11px] md:text-[14px] font-bold uppercase tracking-widest">
              Future-Ready Solutions
            </span>

            {/* H1 */}
            <h1 className="font-headline mb-5 md:mb-6 leading-[1.05] tracking-tight text-ink-black font-extrabold" style={{ fontSize: "clamp(2.8rem, 10vw, 4.5rem)" }}>
              Turning Ideas Into
              <br />
              <span className="relative">
                Digital Impact.
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

            {/* Paragraph */}
            <p className="font-body text-base md:text-lg lg:text-xl text-secondary mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
              We help businesses build, grow, and scale through technology, e-commerce, digital
              marketing, creative design, and video solutions — all under one roof.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 relative">
              <Link to="/services/technology" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-botanical-green text-surface px-8 md:px-10 py-3.5 md:py-4 font-bold rounded-lg text-base md:text-lg hover:translate-y-[-2px] transition-transform cursor-pointer shadow-lg">
                  [ Start Your Project ]
                </button>
              </Link>
              <a
                href="#services"
                className="group flex items-center gap-2 font-bold text-ink-black hover:text-botanical-green transition-colors text-sm md:text-base"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </a>
              {/* Hero Scribble Annotation */}
              <div className="hidden lg:block absolute -right-24 top-0 scribble-accent">
                <svg
                  fill="none"
                  height="60"
                  stroke="#C9922A"
                  strokeWidth="2"
                  viewBox="0 0 120 60"
                  width="120"
                >
                  <path
                    d="M10,40 Q40,10 70,50 T110,20"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path d="M100,10 L110,20 L100,30" strokeLinecap="round" />
                </svg>
                <p className="text-botanical-green font-headline text-[10px] font-bold tracking-widest mt-2 ml-10">
                  CLICK HERE!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Bento Grid ────────────────────────────────────── */}
        <section
          className="bg-surface-container py-14 md:py-20 px-5 md:px-10 border-t border-border-muted"
          id="services"
        >
          <div className="max-w-container-max mx-auto">
            {/* Section header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
              <div className="max-w-xl text-left">
                <h2 className="font-headline text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 uppercase tracking-wider text-ink-black">
                  Services
                </h2>
                <p className="font-body text-sm md:text-base text-secondary leading-relaxed">
                  A refined suite of digital capabilities designed to scale
                  strategy, visual systems, and intelligent applications for
                  ambitious businesses.
                </p>
              </div>
              <div className="text-left md:text-right hidden md:block">
                <span className="text-botanical-green font-headline text-4xl font-bold">
                  05
                </span>
                <p className="font-headline text-[12px] font-bold tracking-widest opacity-50 text-ink-black uppercase">
                  CORE PILLARS
                </p>
              </div>
            </div>

            {/* Bento Grid — stacks to single col on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {/* Technology: Large Feature */}
              <div className="md:col-span-8 md:row-span-2 bento-card bg-surface p-6 md:p-10 flex flex-col justify-between border border-border-muted rounded-xl relative overflow-hidden group text-left min-h-[260px] md:min-h-[auto]">
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-botanical-green/10 flex items-center justify-center mb-4 md:mb-6">
                    <span
                      className="material-symbols-outlined text-botanical-green text-xl md:text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      terminal
                    </span>
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-ink-black">
                    Technology
                  </h3>
                  <p className="font-body text-sm md:text-base text-secondary max-w-md leading-relaxed">
                    Custom AI automation, intelligent workflows, and software
                    ecosystems that eliminate manual friction. We don't just build
                    code; we build leverage.
                  </p>
                </div>
                <div className="mt-6 md:mt-auto relative z-10 flex flex-wrap gap-2">
                  {["AI Integration", "Custom Web Apps", "API Dev"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-surface-container rounded-full font-headline text-[10px] font-bold uppercase tracking-widest text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-5 group-hover:opacity-10 transition-opacity">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSYmkAmR1gFQC0JTbbzWKk_YJdIzTa2ZN9xCQuTjnQB0oZRHPoSLzI0FMn1vPZdBV0lp7swoYYQqkyrVDTbsVOQ9BcpjV1eMWeCLRYzBudGQNgD_S9cM80NYi_cFg8WempGe3ZLLQBLpuoT_BJ-QuUYyTNKBDOGjvamZ2q6iI1zQSWKSHbF51vct1HgmCDmXEV4_fLEc0LT8ADkuEO969dyxSYGVsIoldvhw9lOkXfWdgpm0sJZBk"
                    alt="Abstract network graphic"
                  />
                </div>
                <Link
                  to="/services/technology"
                  className="absolute inset-0 z-30"
                  aria-label="Go to Technology page"
                />
              </div>

              {/* E-commerce */}
              <div className="md:col-span-4 bento-card bg-surface p-6 md:p-8 flex flex-col justify-between border border-border-muted rounded-xl relative group text-left min-h-[180px]">
                <div>
                  <span className="material-symbols-outlined text-botanical-green mb-3 md:mb-4 text-2xl md:text-3xl">
                    shopping_cart
                  </span>
                  <h3 className="font-headline text-lg md:text-xl font-bold mb-2 text-ink-black">
                    E-commerce
                  </h3>
                  <p className="font-body text-sm text-secondary leading-relaxed">
                    Conversion-first online ordering systems and stores.
                  </p>
                </div>
                <div className="text-botanical-green font-bold text-sm flex items-center gap-1 mt-4">
                  Explore{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
                <Link
                  to="/services/ecommerce"
                  className="absolute inset-0 z-35"
                  aria-label="Go to E-commerce page"
                />
              </div>

              {/* Marketing */}
              <div className="md:col-span-4 bento-card bg-surface p-6 md:p-8 flex flex-col justify-between border border-border-muted rounded-xl relative group text-left min-h-[180px]">
                <div>
                  <span className="material-symbols-outlined text-botanical-green mb-3 md:mb-4 text-2xl md:text-3xl">
                    campaign
                  </span>
                  <h3 className="font-headline text-lg md:text-xl font-bold mb-2 text-ink-black">
                    Marketing
                  </h3>
                  <p className="font-body text-sm text-secondary leading-relaxed">
                    Performance driven strategies for modern digital brands.
                  </p>
                </div>
                <div className="text-botanical-green font-bold text-sm flex items-center gap-1 mt-4">
                  Explore{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
                <Link
                  to="/services/marketing"
                  className="absolute inset-0 z-35"
                  aria-label="Go to Marketing page"
                />
              </div>

              {/* Creative */}
              <div className="md:col-span-6 bento-card bg-surface p-6 md:p-8 flex flex-col justify-between border border-border-muted rounded-xl relative group text-left min-h-[180px]">
                <div className="flex gap-4 md:gap-6 h-full">
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="material-symbols-outlined text-botanical-green mb-3 md:mb-4 text-2xl md:text-3xl">
                        draw
                      </span>
                      <h3 className="font-headline text-lg md:text-xl font-bold mb-2 text-ink-black">
                        Creative
                      </h3>
                      <p className="font-body text-sm text-secondary leading-relaxed">
                        Brand identity systems, logos, typography, and premium web
                        design aesthetics.
                      </p>
                    </div>
                    <div className="text-botanical-green font-bold text-sm flex items-center gap-1 mt-4">
                      Explore{" "}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="w-20 h-20 md:w-32 md:h-32 hidden sm:block self-center">
                    <img
                      className="w-full h-full object-cover rounded-lg border border-border-muted"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoz7hYk4uBFPwiDHgTuFw2rnD2hndffZZrv1zDHP4OtxD50ZSjGrMoUylQPinPth1bbz0vewxM8S40oE5GLwxeJc8atBZebK44eqL1UPMOxIkCI1OaAIXMviD7CLUP-e29mldULk6jvWYvcefMiqlp0HZw24WAzgwlQADl8FeMUuZ8PSK7pUHQQFqlXVPgT8bSlLH-P_zlGNvdktVLDBgRpcvPBfwkoyr0pITBi2X1L2hYlwcEBBs"
                      alt="Creative process display"
                    />
                  </div>
                </div>
                <Link
                  to="/services/creative"
                  className="absolute inset-0 z-35"
                  aria-label="Go to Creative page"
                />
              </div>

              {/* Video */}
              <div className="md:col-span-6 bento-card bg-ink-black text-surface p-6 md:p-8 flex flex-col justify-between border border-ink-black rounded-xl relative group text-left min-h-[180px]">
                <div>
                  <span className="material-symbols-outlined text-botanical-green mb-3 md:mb-4 text-2xl md:text-3xl">
                    movie
                  </span>
                  <h3 className="font-headline text-lg md:text-xl font-bold mb-2 text-surface">
                    Video
                  </h3>
                  <p className="font-body text-sm text-surface-container opacity-70 leading-relaxed">
                    Intelligent AI media assets and high-end video production for
                    storytelling.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-botanical-green text-surface px-4 py-2 rounded text-xs font-bold uppercase tracking-widest cursor-pointer hover:opacity-90 active:scale-95 transition-all">
                    Watch Showreel
                  </button>
                </div>
                <Link
                  to="/services/video"
                  className="absolute inset-0 z-35"
                  aria-label="Go to Video page"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── How We Work Section ────────────────────────────────────── */}
        <section className="py-14 md:py-24 px-5 md:px-10 bg-surface text-left border-t border-border-muted" id="workflow">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-xl mb-10 md:mb-16">
              <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 mb-4 rounded-full bg-botanical-green/5 border border-botanical-green/10 text-botanical-green font-headline text-[11px] md:text-[12px] font-bold uppercase tracking-widest">
                Our Process
              </span>
              <h2 className="font-headline text-2xl md:text-4xl font-extrabold text-ink-black uppercase tracking-[0.05em] md:tracking-[0.1em] mb-4">
                From Idea to Impact
              </h2>
              <p className="font-body text-sm md:text-base text-secondary leading-relaxed">
                Our systematic methodology ensures your vision translates seamlessly into robust, production-grade solutions.
              </p>
            </div>

            {/* Steps — 2-col on mobile, 5-col on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
              {[
                { num: "01", step: "Discover", desc: "We understand your business, goals, audience, challenges, and requirements." },
                { num: "02", step: "Strategize", desc: "We define the right approach, scope, technology, and execution roadmap." },
                { num: "03", step: "Create", desc: "Our team designs, develops, manages, and executes the solution." },
                { num: "04", step: "Launch", desc: "We test, refine, and deliver a polished, market-ready outcome." },
                { num: "05", step: "Grow", desc: "We continuously support, optimize, and help your business scale." }
              ].map((item, idx) => (
                <div key={idx} className="relative group space-y-3 md:space-y-6 p-4 md:p-6 rounded-xl border border-border-muted bg-surface-container-low hover:border-botanical-green transition-colors duration-300 col-span-1">
                  <div className="flex justify-between items-center">
                    <span className="font-headline text-xl md:text-2xl font-bold text-botanical-green/20 group-hover:text-botanical-green transition-colors duration-300">
                      {item.num}
                    </span>
                    <span className="material-symbols-outlined text-botanical-green text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      arrow_right_alt
                    </span>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="font-headline text-base md:text-xl font-bold text-ink-black">{item.step}</h3>
                    <p className="font-body text-xs md:text-sm text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries Section ────────────────────────────────────── */}
        <section className="py-14 md:py-24 px-5 md:px-10 bg-surface border-t border-border-muted text-left" id="industries">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-xl mb-10 md:mb-16">
              <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 mb-4 rounded-full bg-botanical-green/5 border border-botanical-green/10 text-botanical-green font-headline text-[11px] md:text-[12px] font-bold uppercase tracking-widest">
                Our Reach
              </span>
              <h2 className="font-headline text-2xl md:text-4xl font-extrabold text-ink-black uppercase tracking-[0.05em] md:tracking-[0.1em] mb-4">
                Solutions Across Industries
              </h2>
              <p className="font-body text-sm md:text-base text-secondary leading-relaxed">
                Empowering businesses across diverse domains with custom digital products, scalability, and strategic growth.
              </p>
            </div>

            {/* 2-col mobile → 4-col desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {[
                { name: "E-Commerce & Retail", icon: "shopping_bag" },
                { name: "Startups & SaaS", icon: "rocket_launch" },
                { name: "Healthcare & Wellness", icon: "medical_services" },
                { name: "Education", icon: "school" },
                { name: "Professional Services", icon: "work" },
                { name: "Consumer Brands", icon: "sell" },
                { name: "Technology Companies", icon: "memory" },
                { name: "Manufacturing & Enterprises", icon: "factory" },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bento-card bg-surface-container p-4 md:p-8 rounded-xl border border-border-muted flex flex-col justify-between h-36 md:h-44 hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg bg-botanical-green/10 flex items-center justify-center mb-2 md:mb-4">
                    <span className="material-symbols-outlined text-botanical-green text-xl md:text-2xl">
                      {industry.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-sm md:text-lg font-bold text-ink-black leading-snug">
                    {industry.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ───────────────────────────────────────────── */}
        <section className="cta-section bg-white py-16 md:py-24 px-5 md:px-10 border-t border-border-muted relative overflow-hidden text-center text-ink-black">
          <div className="absolute -left-24 -bottom-24 w-72 md:w-96 h-72 md:h-96 border-4 border-botanical-green/5 rounded-full border-dashed animate-[spin_30s_linear_infinite]" />
          <div className="absolute -right-24 -top-24 w-72 md:w-96 h-72 md:h-96 border border-botanical-green/10 rounded-full" />

          <div className="max-w-container-max mx-auto relative z-10">
            <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
              <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl text-ink-black font-extrabold leading-tight">
                Have an Idea? <br />
                <span className="text-botanical-green italic">Let's Turn It Into Impact.</span>
              </h2>
              <p className="font-body text-sm md:text-base lg:text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
                Whether you're building a new digital product, growing an e-commerce business, strengthening your online presence, or creating a powerful brand experience — Nexivo Solutions is ready to help.
              </p>
              <div className="pt-2 md:pt-4">
                <Link to="/contact">
                  <button className="bg-botanical-green text-surface hover:opacity-90 px-8 md:px-12 py-4 md:py-5 font-bold rounded-lg text-base md:text-lg hover:translate-y-[-2px] transition-all duration-300 shadow-xl cursor-pointer">
                    Start Your Project →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
