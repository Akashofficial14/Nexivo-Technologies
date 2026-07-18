import React, { useLayoutEffect, useRef } from "react";
import { Compass, Eye, Heart, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 40,
        stagger: 0.13,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.1,
      });

      containerRef.current.querySelectorAll(".about-card").forEach((card) => {
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

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section id="who-we-are" className="relative pt-10 pb-16 md:py-24 px-5 md:px-10 max-w-container-max mx-auto text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 hero-content">
          {/* Badge */}
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-botanical-green/5 border border-botanical-green/10 rounded-full">
            <Sparkles className="w-4 h-4 text-botanical-green" />
            <span className="font-headline text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-botanical-green">
              WHO WE ARE
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-headline mb-6 md:mb-8 leading-[1.05] tracking-tight text-ink-black max-w-3xl mx-auto font-extrabold" style={{ fontSize: "clamp(2.6rem, 9.5vw, 4.25rem)" }}>
            We Turn Ideas Into
            <br />
            <span className="text-botanical-green relative inline-block mt-1 md:mt-2">
              Meaningful Impact.
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

          {/* Body paragraphs */}
          <div className="font-body text-sm md:text-base lg:text-lg text-secondary max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed space-y-4 md:space-y-6 text-center px-2 md:px-0">
            <p>
              Nexivo Solutions is a multidisciplinary digital solutions company helping businesses navigate technology,
              e-commerce, marketing, and creative challenges.
            </p>
            <p>
              We believe businesses should not have to coordinate with multiple disconnected service providers to build
              their digital presence. That's why we bring together technical expertise, strategic thinking, and creative
              execution within one integrated ecosystem.
            </p>
            <p className="font-bold text-ink-black italic font-headline text-base md:text-xl">
              Our goal is simple: understand the idea, build the right solution, and create measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────── */}
      <section id="mission" className="bg-surface py-14 md:py-24 px-5 md:px-10 border-y border-border-muted">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Mission */}
            <div className="about-card bg-surface-container-low p-7 md:p-10 rounded-xl border border-border-muted flex flex-col justify-between text-left group hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-botanical-green/10 flex items-center justify-center mb-4 md:mb-6">
                  <Compass className="w-5 h-5 md:w-6 md:h-6 text-botanical-green" />
                </div>
                <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 md:mb-4 text-ink-black">
                  Our Mission
                </h3>
                <p className="font-body text-sm md:text-base text-secondary leading-relaxed">
                  To empower businesses with practical, scalable, and high-quality
                  digital solutions that create meaningful long-term value.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div id="vision" className="about-card bg-surface-container-low p-7 md:p-10 rounded-xl border border-border-muted flex flex-col justify-between text-left group hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-botanical-green/10 flex items-center justify-center mb-4 md:mb-6">
                  <Eye className="w-5 h-5 md:w-6 md:h-6 text-botanical-green" />
                </div>
                <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 md:mb-4 text-ink-black">
                  Our Vision
                </h3>
                <p className="font-body text-sm md:text-base text-secondary leading-relaxed">
                  To become a trusted digital transformation and growth partner for
                  ambitious businesses worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Philosophy ─────────────────────────────────────── */}
      <section id="philosophy" className="py-14 md:py-24 px-5 md:px-10">
        <div className="max-w-container-max mx-auto">
          <div className="about-card bg-botanical-green text-surface p-8 md:p-12 lg:p-16 rounded-2xl border border-white/10 relative overflow-hidden group text-center max-w-4xl mx-auto shadow-md">
            {/* Decorative rings */}
            <div className="absolute -left-24 -bottom-24 w-72 md:w-96 h-72 md:h-96 border-4 border-white/10 rounded-full border-dashed animate-[spin_30s_linear_infinite]" />
            <div className="absolute -right-24 -top-24 w-72 md:w-96 h-72 md:h-96 border border-white/20 rounded-full" />

            <div className="relative z-10 space-y-4 md:space-y-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3 md:mb-4 border border-white/35">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="font-headline text-xl md:text-3xl font-extrabold tracking-wide text-white leading-tight">
                Brand Philosophy: From Ideas to Impact
              </h3>
              <p className="font-body text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
                Every successful business begins with an idea. We help transform
                that idea into technology, experiences, campaigns, and solutions
                that create real-world impact.
              </p>
              <div className="pt-2 md:pt-4">
                <button
                  className="bg-white text-[#C9922A] hover:bg-[#fbf9f2] px-8 md:px-10 py-3.5 md:py-4 font-bold rounded-lg text-sm md:text-base hover:translate-y-[-2px] transition-all cursor-pointer shadow-lg premium-btn-anim"
                  onClick={() => { window.location.href = "/contact"; }}
                >
                  Let's Build Together →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
