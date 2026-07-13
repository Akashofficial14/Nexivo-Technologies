import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance (immediate, no scroll) ───────────────────────
      gsap.from(".hero-content > *", {
        opacity: 0, y: 40, stagger: 0.13, duration: 1.0,
        ease: "power4.out", delay: 0.1,
      });

      // ── Bento cards — each element is its own trigger ───────────────
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

      // ── Project rows ───────────────────────────────────────────────
      containerRef.current.querySelectorAll(".project-row").forEach((row) => {
        gsap.from(row.querySelectorAll(".order-1, .order-2"), {
          opacity: 0, y: 60, stagger: 0.18, duration: 1.0, ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });

      // ── CTA cards ──────────────────────────────────────────────────
      containerRef.current.querySelectorAll(".cta-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 40, duration: 0.8, delay: i * 0.1, ease: "power2.out",
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
    <div ref={containerRef} className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-mobile-margin py-section-padding overflow-hidden">
        <div className="max-w-4xl relative z-10 hero-content">
          <span className="inline-block px-4 py-1.5 mb-8 rounded-full bg-botanical-green/5 border border-botanical-green/10 text-botanical-green font-headline text-[12px] font-bold uppercase tracking-widest">
            Future-Ready Solutions
          </span>
          <h1 className="font-headline text-headline-xl md:text-[64px] mb-6 leading-tight tracking-tight text-ink-black">
            One Partner. Multiple <br />
            <span className="relative">
              Digital Capabilities.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-botanical-green/30"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h1>
          <p className="font-body text-body-lg text-secondary mb-10 max-w-2xl mx-auto">
            We build the AI systems you don't have time to figure out. Elevating businesses with premium web design and intelligent AI media assets. Expertly crafted for modern brands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
            <Link to="/technology" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-botanical-green text-surface px-10 py-4 font-bold rounded-lg text-lg hover:translate-y-[-2px] transition-transform cursor-pointer">
                [ Start Your Project ]
              </button>
            </Link>
            <a
              href="#services"
              className="group flex items-center gap-2 font-bold text-ink-black hover:text-botanical-green transition-colors"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            {/* Hero Scribble Annotation */}
            <div className="hidden lg:block absolute -right-24 top-0 scribble-accent">
              <svg fill="none" height="60" stroke="#618F70" strokeWidth="2" viewBox="0 0 120 60" width="120">
                <path d="M10,40 Q40,10 70,50 T110,20" fill="none" strokeLinecap="round" />
                <path d="M100,10 L110,20 L100,30" strokeLinecap="round" />
              </svg>
              <p className="text-botanical-green font-headline text-[10px] font-bold tracking-widest mt-2 ml-10">CLICK HERE!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="bg-surface-container py-20 px-mobile-margin border-t border-border-muted" id="services">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl text-left">
              <h2 className="font-headline text-headline-lg mb-4 uppercase tracking-wider text-ink-black">Services</h2>
              <p className="font-body text-body-md text-secondary">
                A refined suite of digital capabilities designed to scale strategy, visual systems, and intelligent applications for ambitious businesses.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-botanical-green font-headline text-headline-md font-bold">05</span>
              <p className="font-headline text-[12px] font-bold tracking-widest opacity-50 text-ink-black uppercase">CORE PILLARS</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Technology: Large Feature */}
            <div className="md:col-span-8 md:row-span-2 bento-card bg-surface p-10 flex flex-col justify-between border border-border-muted rounded-xl relative overflow-hidden group text-left">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-botanical-green/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-botanical-green" style={{ fontVariationSettings: "'FILL' 1" }}>
                    terminal
                  </span>
                </div>
                <h3 className="font-headline text-headline-lg mb-4 text-ink-black">Technology</h3>
                <p className="font-body text-body-md text-secondary max-w-md">
                  Custom AI automation, intelligent workflows, and software ecosystems that eliminate manual friction. We don't just build code; we build leverage.
                </p>
              </div>
              <div className="mt-auto relative z-10 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-full font-headline text-[10px] font-bold uppercase tracking-widest text-secondary">
                  AI Integration
                </span>
                <span className="px-3 py-1 bg-surface-container rounded-full font-headline text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Custom Web Apps
                </span>
                <span className="px-3 py-1 bg-surface-container rounded-full font-headline text-[10px] font-bold uppercase tracking-widest text-secondary">
                  API Dev
                </span>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-5 group-hover:opacity-10 transition-opacity">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSYmkAmR1gFQC0JTbbzWKk_YJdIzTa2ZN9xCQuTjnQB0oZRHPoSLzI0FMn1vPZdBV0lp7swoYYQqkyrVDTbsVOQ9BcpjV1eMWeCLRYzBudGQNgD_S9cM80NYi_cFg8WempGe3ZLLQBLpuoT_BJ-QuUYyTNKBDOGjvamZ2q6iI1zQSWKSHbF51vct1HgmCDmXEV4_fLEc0LT8ADkuEO969dyxSYGVsIoldvhw9lOkXfWdgpm0sJZBk"
                  alt="Abstract network graphic"
                />
              </div>
              <Link to="/technology" className="absolute inset-0 z-30" aria-label="Go to Technology page" />
            </div>

            {/* E-commerce */}
            <div className="md:col-span-4 md:row-span-1 bento-card bg-surface p-8 flex flex-col justify-between border border-border-muted rounded-xl relative group text-left">
              <div>
                <span className="material-symbols-outlined text-botanical-green mb-4">shopping_cart</span>
                <h3 className="font-headline text-headline-md mb-2 text-ink-black">E-commerce</h3>
                <p className="font-body text-body-md text-secondary text-sm">
                  Conversion-first online ordering systems and stores.
                </p>
              </div>
              <div className="text-botanical-green font-bold text-sm flex items-center gap-1">
                Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
              <Link to="/ecommerce" className="absolute inset-0 z-35" aria-label="Go to E-commerce page" />
            </div>

            {/* Marketing */}
            <div className="md:col-span-4 md:row-span-1 bento-card bg-surface p-8 flex flex-col justify-between border border-border-muted rounded-xl relative group text-left">
              <div>
                <span className="material-symbols-outlined text-botanical-green mb-4">campaign</span>
                <h3 className="font-headline text-headline-md mb-2 text-ink-black">Marketing</h3>
                <p className="font-body text-body-md text-secondary text-sm">
                  Performance driven strategies for modern digital brands.
                </p>
              </div>
              <div className="text-botanical-green font-bold text-sm flex items-center gap-1">
                Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
              <Link to="/marketing" className="absolute inset-0 z-35" aria-label="Go to Marketing page" />
            </div>

            {/* Creative */}
            <div className="md:col-span-6 md:row-span-1 bento-card bg-surface p-8 flex flex-col justify-between border border-border-muted rounded-xl relative group text-left">
              <div className="flex gap-6 h-full">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-botanical-green mb-4">draw</span>
                    <h3 className="font-headline text-headline-md mb-2 text-ink-black">Creative</h3>
                    <p className="font-body text-body-md text-secondary text-sm">
                      Brand identity systems, logos, typography, and premium web design aesthetics.
                    </p>
                  </div>
                  <div className="text-botanical-green font-bold text-sm flex items-center gap-1">
                    Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="w-32 h-32 hidden sm:block">
                  <img
                    className="w-full h-full object-cover rounded-lg border border-border-muted"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoz7hYk4uBFPwiDHgTuFw2rnD2hndffZZrv1zDHP4OtxD50ZSjGrMoUylQPinPth1bbz0vewxM8S40oE5GLwxeJc8atBZebK44eqL1UPMOxIkCI1OaAIXMviD7CLUP-e29mldULk6jvWYvcefMiqlp0HZw24WAzgwlQADl8FeMUuZ8PSK7pUHQQFqlXVPgT8bSlLH-P_zlGNvdktVLDBgRpcvPBfwkoyr0pITBi2X1L2hYlwcEBBs"
                    alt="Creative process display"
                  />
                </div>
              </div>
              <Link to="/creative" className="absolute inset-0 z-35" aria-label="Go to Creative page" />
            </div>

            {/* Video */}
            <div className="md:col-span-6 md:row-span-1 bento-card bg-ink-black text-surface p-8 flex flex-col justify-between border border-ink-black rounded-xl relative group text-left">
              <div>
                <span className="material-symbols-outlined text-botanical-green mb-4">movie</span>
                <h3 className="font-headline text-headline-md mb-2 text-surface">Video</h3>
                <p className="font-body text-body-md text-surface-container opacity-70 text-sm">
                  Intelligent AI media assets and high-end video production for storytelling.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="bg-botanical-green text-surface px-4 py-2 rounded text-xs font-bold uppercase tracking-widest cursor-pointer hover:opacity-90 active:scale-95 transition-all">
                  Watch Showreel
                </button>
              </div>
              <Link to="/video" className="absolute inset-0 z-35" aria-label="Go to Video page" />
            </div>
          </div>
        </div>
      </section>

      {/* Previous Work Section (Asymmetric Editorial Layout) */}
      <section className="py-24 px-mobile-margin" id="work">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline text-headline-xl text-center mb-20 uppercase tracking-[0.2em] opacity-80 text-ink-black">
            Previous Work
          </h2>

          {/* Project 01 */}
          <div className="project-row group grid md:grid-cols-2 gap-16 mb-32 items-center text-left cursor-pointer">
            <div className="order-2 md:order-1 transition-transform duration-500 ease-out group-hover:translate-x-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-headline text-headline-xl font-bold opacity-10 text-ink-black transition-colors group-hover:text-botanical-green/30">01</span>
                <div className="h-[1px] flex-1 bg-border-muted"></div>
              </div>
              <h3 className="font-headline text-headline-lg mb-4 text-ink-black transition-colors duration-300 group-hover:text-botanical-green">Velora Property Care</h3>
              <p className="font-headline text-[12px] font-bold tracking-widest text-botanical-green mb-6 uppercase">
                PROPERTY CARE & MAINTENANCE
              </p>
              <p className="font-body text-body-lg text-secondary mb-8 leading-relaxed">
                Built a professional lead-generation website for a Canadian property care company focused on trust, credibility, and conversions. We implemented a custom scheduling engine that reduced admin overhead by 40%.
              </p>
              <div className="flex gap-3 mb-8">
                <span className="px-4 py-2 border border-border-muted rounded-full text-xs font-bold text-secondary uppercase font-headline transition-all duration-300 group-hover:bg-ink-black group-hover:text-white group-hover:border-ink-black">
                  WEBSITE DESIGN
                </span>
                <span className="px-4 py-2 border border-border-muted rounded-full text-xs font-bold text-secondary uppercase font-headline transition-all duration-300 group-hover:bg-ink-black group-hover:text-white group-hover:border-ink-black">
                  BRANDING
                </span>
                <span className="px-4 py-2 border border-border-muted rounded-full text-xs font-bold text-secondary uppercase font-headline transition-all duration-300 group-hover:bg-ink-black group-hover:text-white group-hover:border-ink-black">
                  SEO
                </span>
              </div>
              <button className="flex items-center gap-2 font-bold border-b-2 border-ink-black pb-1 hover:border-botanical-green hover:text-botanical-green transition-all cursor-pointer">
                View Website <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl border border-border-muted">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhcmW54nnX3SRD66aGwFAaup2K__hEbTTvXpcaKf9qDbvUlmIuBqRVvagsY1uSgQz94Z0kaaCSR5ObouD_IRT2gfMJMU70jXhK7Zt7r2TnwKPx9yAUEymRuEU9hZuNx9q_Dbh3fy98W2eaHIlcYL-f4V5z49iVWAK3oVstVIzt2AemD5a5ikQm02i3jC3M6Pt_4ql3IapD3XNj-3m-ZhieVUyvmvwex7U0RejSvyUL7LATniZIPAM"
                  alt="Velora Property Care mockup"
                />
              </div>
            </div>
          </div>

          {/* Project 02 */}
          <div className="project-row group grid md:grid-cols-2 gap-16 mb-32 items-center text-left cursor-pointer">
            <div className="order-1">
              <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl border border-border-muted">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNmgekBBud8xxj7AyLRSa1u8sIKRTS-uiIPS0RXlkzQkcTJwIPrpwt2zxvWXbA1xSuFE9rSl8kWQ6cs1Yne6hmGQ1nAWTeV14YG8G3zVxlvkeBDKcpwP9cOU5ENolC3Ise0LHKh5cuk8WT3PFaGLYQu1igHUMJa37tEURtjXjHUNv_rkyksNe4ZR0L0uuTkyLyj2IfXs5Cxsb5QlVFsKNAz2Fm9ToWRw_8ALoflQD77jsINoFzqyU"
                  alt="Reddy Made Cakes mockup"
                />
              </div>
            </div>
            <div className="order-2 transition-transform duration-500 ease-out group-hover:translate-x-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-headline text-headline-xl font-bold opacity-10 text-ink-black transition-colors group-hover:text-botanical-green/30">02</span>
                <div className="h-[1px] flex-1 bg-border-muted"></div>
              </div>
              <h3 className="font-headline text-headline-lg mb-4 text-ink-black transition-colors duration-300 group-hover:text-botanical-green">Reddy Made Cakes</h3>
              <p className="font-headline text-[12px] font-bold tracking-widest text-botanical-green mb-6 uppercase">
                BAKERY & CUSTOM CAKES
              </p>
              <p className="font-body text-body-lg text-secondary mb-8 leading-relaxed">
                Created an online cake ordering experience with a streamlined customer journey and product showcase. Integrated a complex tiered pricing model based on custom decorative requests.
              </p>
              <div className="flex gap-3 mb-8">
                <span className="px-4 py-2 border border-border-muted rounded-full text-xs font-bold text-secondary uppercase font-headline transition-all duration-300 group-hover:bg-ink-black group-hover:text-white group-hover:border-ink-black">
                  WEBSITE DESIGN
                </span>
                <span className="px-4 py-2 border border-border-muted rounded-full text-xs font-bold text-secondary uppercase font-headline transition-all duration-300 group-hover:bg-ink-black group-hover:text-white group-hover:border-ink-black">
                  ONLINE ORDERING
                </span>
              </div>
              <button className="flex items-center gap-2 font-bold border-b-2 border-ink-black pb-1 hover:border-botanical-green hover:text-botanical-green transition-all cursor-pointer">
                View Website <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-surface-container-high py-20 px-mobile-margin border-y border-border-muted overflow-hidden">
        <div className="max-w-container-max mx-auto relative text-center">
          <div className="relative z-10">
            <h2 className="font-headline text-headline-xl mb-6 text-ink-black">LET'S BUILD TOGETHER.</h2>
            <p className="font-body text-body-lg text-secondary mb-12 max-w-2xl mx-auto">
              Have an idea, business, or project in mind? Let's turn it into something exceptional with AI, automation, and modern web experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
              {/* Card 1 */}
              <div className="cta-card bg-surface p-8 rounded-xl border border-border-muted flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-botanical-green/10 flex items-center justify-center mb-4 border border-botanical-green/20">
                  <span className="material-symbols-outlined text-botanical-green">link</span>
                </div>
                <h4 className="font-bold text-ink-black mb-2">LinkedIn</h4>
                <p className="text-sm text-secondary mb-6 font-body">Professional updates & networking</p>
                <button className="w-full py-3 bg-surface-container rounded-lg font-bold text-sm hover:bg-botanical-green hover:text-surface transition-colors cursor-pointer text-ink-black">
                  Visit LinkedIn
                </button>
              </div>
              {/* Card 2 */}
              <div className="cta-card bg-surface p-8 rounded-xl border border-border-muted flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-botanical-green/10 flex items-center justify-center mb-4 border border-botanical-green/20">
                  <span className="material-symbols-outlined text-botanical-green">photo_camera</span>
                </div>
                <h4 className="font-bold text-ink-black mb-2">Instagram</h4>
                <p className="text-sm text-secondary mb-6 font-body">Creative process & portfolio</p>
                <button className="w-full py-3 bg-surface-container rounded-lg font-bold text-sm hover:bg-botanical-green hover:text-surface transition-colors cursor-pointer text-ink-black">
                  Visit Instagram
                </button>
              </div>
              {/* Card 3 */}
              <div className="cta-card bg-surface p-8 rounded-xl border border-border-muted flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-botanical-green/10 flex items-center justify-center mb-4 border border-botanical-green/20">
                  <span className="material-symbols-outlined text-botanical-green">mail</span>
                </div>
                <h4 className="font-bold text-ink-black mb-2">Email</h4>
                <p className="text-sm text-secondary mb-6 font-body">Direct inquiries & partnerships</p>
                <button className="w-full py-3 bg-surface-container rounded-lg font-bold text-sm hover:bg-botanical-green hover:text-surface transition-colors cursor-pointer text-ink-black">
                  Send Email
                </button>
              </div>
            </div>

            <div className="bg-surface p-12 rounded-2xl border-2 border-botanical-green relative max-w-3xl mx-auto shadow-sm">
              <h3 className="font-headline text-headline-lg mb-4 text-ink-black">Ready To Build Something Amazing?</h3>
              <p className="font-body text-body-md text-secondary mb-8">
                From websites and branding to AI-powered solutions, DM us on Instagram to start your next project.
              </p>
              <button className="bg-botanical-green text-surface px-12 py-4 font-bold rounded-lg text-lg hover:translate-y-[-2px] transition-transform cursor-pointer">
                Start Your Project +
              </button>
              {/* Floating Scribble */}
              <div className="absolute -bottom-8 -right-8 opacity-40">
                <svg height="100" viewBox="0 0 100 100" width="100">
                  <path d="M20,80 Q50,20 80,80" fill="none" stroke="#618F70" strokeWidth="2" />
                  <circle cx="80" cy="80" fill="#618F70" r="4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
