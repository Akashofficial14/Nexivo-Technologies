import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight, Play, Film, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
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

      // ── Service bento cards — per element ────────────────────────────
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

      // ── Production reveal items ──────────────────────────────────────
      containerRef.current.querySelectorAll(".reveal-on-scroll").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });

      // ── Workflow steps stagger ───────────────────────────────────────
      containerRef.current.querySelectorAll(".workflow-step").forEach((step, i) => {
        gsap.from(step, {
          opacity: 0,
          y: 35,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
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
      <section className="max-w-container-max mx-auto px-mobile-margin pt-32 pb-20 relative text-left">
        <div className="md:w-3/4 mb-12 relative hero-content">
          <span className="font-headline text-[12px] font-bold text-botanical-green mb-4 block uppercase tracking-widest">
            SERVICES
          </span>
          <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl mb-6 leading-tight font-extrabold text-ink-black">
            Cinematic Video Editing <br /> &amp; Production for{" "}
            <span className="underline decoration-botanical-green/30">Digital-First Brands.</span>
          </h1>
          <p className="font-body text-body-lg text-secondary max-w-2xl leading-relaxed">
            We transform raw footage into high-impact visual stories. From dynamic highlight reels to bespoke motion graphics, we help modern brands dominate the social landscape.
          </p>
          
          {/* Hand-drawn Scribble Accent */}
          <div className="hidden md:block absolute -right-20 top-0 text-botanical-green pointer-events-none select-none">
            <svg className="fill-none stroke-current stroke-2" height="120" viewBox="0 0 120 120" width="120">
              <path d="M10,50 Q30,10 70,30 T 110,50" strokeDasharray="4 4" />
              <path d="M90,30 L110,50 L90,70" />
            </svg>
            <span className="font-headline text-[10px] font-bold tracking-wider absolute top-14 left-10 uppercase text-botanical-green">
              THE MAGIC HAPPENS HERE
            </span>
          </div>
        </div>

        {/* Bento Grid of Services */}
        <div id="video-services" className="grid grid-cols-1 md:grid-cols-12 gap-gutter pt-8">
          {/* Highlight Reels */}
          <div className="md:col-span-8 bg-surface-container-low border border-border-muted p-8 flex flex-col justify-between group transition-all duration-300 hover:border-botanical-green rounded-xl bento-card">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-botanical-green mb-4">movie_edit</span>
              <h3 className="font-headline text-headline-lg font-bold text-ink-black mb-4">Highlight Reels</h3>
              <p className="text-secondary max-w-md font-body text-sm leading-relaxed">
                Distilling long-form content into punchy, high-energy summaries that capture the essence of your events or brand milestones.
              </p>
            </div>
            <div className="relative overflow-hidden aspect-video w-full rounded-lg border border-border-muted">
              <img
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-750"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSJ21GWJkZ9-GSkGhD2VfhvLT5UVkl9HlYeepystlZyi7oW87BUeGC4R8egpPcsLGmK6Kvf1b77oNdnLQ1dJjhKpS-qH6YzwToMH2c0ghIP4KT2U1KrkiIS2mNTOxRcmgJW2c0fptcDVE-TlsxuXs3C6cL6a0hgCMmi59WruE9vULvJUvhpcEc4_ooQSPNTc5qMMcGWndB6wK4HABYWwcfNUj0G9EMrnSJ71d8tLrSfs7WlN3QNx0"
                alt="Video production suites color grade panel display"
              />
            </div>
          </div>

          {/* Social Video & Motion */}
          <div className="md:col-span-4 space-y-gutter flex flex-col">
            <div className="bg-surface-container border border-border-muted p-8 transition-all duration-300 hover:border-botanical-green rounded-xl flex-1 flex flex-col justify-center">
              <span className="material-symbols-outlined text-4xl text-botanical-green mb-4">smartphone</span>
              <h3 className="font-headline text-headline-md font-bold text-ink-black mb-2">Social-First Content</h3>
              <p className="text-secondary font-body text-sm leading-relaxed">
                9:16 optimized edits for TikTok, Reels, and Shorts designed for maximum retention.
              </p>
            </div>
            <div className="bg-surface-container border border-border-muted p-8 transition-all duration-300 hover:border-botanical-green rounded-xl flex-1 flex flex-col justify-center">
              <span className="material-symbols-outlined text-4xl text-botanical-green mb-4">auto_awesome</span>
              <h3 className="font-headline text-headline-md font-bold text-ink-black mb-2">Motion Graphics</h3>
              <p className="text-secondary font-body text-sm leading-relaxed">
                Bespoke 2D/3D typography and visual accents that bring your data and brand to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Work Section */}
      <section className="bg-surface-container-high py-24 border-y border-border-muted text-left">
        <div className="max-w-container-max mx-auto px-mobile-margin">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline text-headline-xl mb-4 text-ink-black font-extrabold">Selected Productions</h2>
              <p className="text-secondary max-w-lg font-body leading-relaxed">
                A showcase of recent visual storytelling projects for industry leaders and creative pioneers.
              </p>
            </div>
            <button className="border border-ink-black/30 px-8 py-3 font-bold rounded-lg hover:bg-ink-black hover:text-surface active:scale-95 transition-all flex items-center gap-2 cursor-pointer text-ink-black bg-transparent">
              View Showreel <Play className="w-4.5 h-4.5 fill-current" />
            </button>
          </div>

          <div className="space-y-16">
            {/* Case Study 01 */}
            <div className="reveal-on-scroll flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden group rounded-xl border border-border-muted">
                  <img
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB18kNc0UK0lafLCNm7SKhUZBmb1nUcuml7APRccCUHod13Ji3oEjakudWQLY84fULPtgca6LBy5bURgFBmzFAVx1ZE4HsqRvkhKO6mchiT_RMnjD-GB_8wIEHYjMznilAhsGRHH4MmU1kLyEu50pP-QhpCly44Mk8zK9xhFgIHCFqw6T6rUWQv0VUPa55ZzXEhPlq8zm6lCrSKE515xOis93LYIUOmtXNe7uO0VukWOtLxxBiFl-4"
                    alt="Luxury architectural project screen grab"
                  />
                  <div className="absolute inset-0 bg-ink-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-surface rounded-full p-6 text-ink-black shadow-lg flex items-center justify-center">
                      <Play className="w-6 h-6 fill-current text-botanical-green" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-botanical-green font-headline text-headline-xl opacity-20 block mb-2 font-bold">01</span>
                <h3 className="font-headline text-headline-lg font-bold text-ink-black">The Artisan Collection</h3>
                <div className="flex gap-2">
                  <span className="bg-ink-black/5 text-secondary px-3 py-1 font-label-caps text-[10px] font-bold uppercase tracking-widest rounded">
                    DOCUMENTARY
                  </span>
                  <span className="bg-ink-black/5 text-secondary px-3 py-1 font-label-caps text-[10px] font-bold uppercase tracking-widest rounded">
                    COLOR GRADING
                  </span>
                </div>
                <p className="text-secondary mb-8 font-body text-body-lg leading-relaxed">
                  A cinematic exploration of hand-crafted ceramics. We used slow, sweeping movements and tactile close-ups to emphasize the human touch behind the craft.
                </p>
                <a className="inline-flex items-center gap-2 border-b-2 border-botanical-green pb-1 font-bold hover:text-botanical-green transition-colors text-sm group" href="#">
                  View Full Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Case Study 02 */}
            <div className="reveal-on-scroll flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden group rounded-xl border border-border-muted">
                  <img
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs_1kmP5NuIm3CaCoMTdQArDluA4ERbO7D_D7pBwwLne7HaDE7bRDBpECUAA5BXhfNvxKh-SZBRl_4GIv1C5ryuPkGfwtMW2Ei3Pc_649qelMvMfRDpWIj50M2zkuzFSiinNHYKdfiEL8UK690bvnHdLkMTVf3FCx-IS7yKGDrTNBK_zUD94X0MD3KSp3bkuN0ZMrw-y38NcFw7wZR42Sk-_VwccfUD5fDpCDSQDZYHh1JB7aaD7o"
                    alt="Glitch tech visual projection"
                  />
                  <div className="absolute inset-0 bg-ink-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-surface rounded-full p-6 text-ink-black shadow-lg flex items-center justify-center">
                      <Play className="w-6 h-6 fill-current text-botanical-green" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-botanical-green font-headline text-headline-xl opacity-20 block mb-2 font-bold">02</span>
                <h3 className="font-headline text-headline-lg font-bold text-ink-black">TechPulse Global Summit</h3>
                <div className="flex gap-2">
                  <span className="bg-ink-black/5 text-secondary px-3 py-1 font-label-caps text-[10px] font-bold uppercase tracking-widest rounded">
                    EVENT REEL
                  </span>
                  <span className="bg-ink-black/5 text-secondary px-3 py-1 font-label-caps text-[10px] font-bold uppercase tracking-widest rounded">
                    MOTION GRAPHICS
                  </span>
                </div>
                <p className="text-secondary mb-8 font-body text-body-lg leading-relaxed">
                  High-energy highlight reel for an AI technology summit. Dynamic transitions and overlayed data visualizations were used to maintain an aggressive pace.
                </p>
                <a className="inline-flex items-center gap-2 border-b-2 border-botanical-green pb-1 font-bold hover:text-botanical-green transition-colors text-sm group" href="#">
                  View Full Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 text-left">
        <div className="max-w-container-max mx-auto px-mobile-margin text-center mb-20">
          <h2 className="font-headline text-headline-xl font-bold text-ink-black mb-4">The Workflow</h2>
          <p className="text-secondary max-w-xl mx-auto font-body leading-relaxed">
            We follow a structured editorial process to ensure every frame aligns with your brand's strategic goals.
          </p>
        </div>
        <div className="max-w-container-max mx-auto px-mobile-margin">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
            {/* Dotted line decoration (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-botanical-green/30 -z-10"></div>
            
            {/* Steps */}
            <div className="bg-surface p-8 border border-border-muted text-center relative group rounded-xl workflow-step">
              <div className="w-12 h-12 bg-botanical-green text-surface rounded-full flex items-center justify-center mx-auto mb-6 font-bold group-hover:scale-110 transition-transform">
                1
              </div>
              <h4 className="font-bold text-ink-black mb-2">Discovery</h4>
              <p className="text-body-md text-secondary font-body text-sm">
                Defining the hook, the narrative arc, and the target platform specs.
              </p>
            </div>

            <div className="bg-surface p-8 border border-border-muted text-center relative group rounded-xl workflow-step">
              <div className="w-12 h-12 bg-botanical-green text-surface rounded-full flex items-center justify-center mx-auto mb-6 font-bold group-hover:scale-110 transition-transform">
                2
              </div>
              <h4 className="font-bold text-ink-black mb-2">The Cut</h4>
              <p className="text-body-md text-secondary font-body text-sm">
                Assembly and rough cut focusing on pacing, rhythm, and story logic.
              </p>
            </div>

            <div className="bg-surface p-8 border border-border-muted text-center relative group rounded-xl workflow-step">
              <div className="w-12 h-12 bg-botanical-green text-surface rounded-full flex items-center justify-center mx-auto mb-6 font-bold group-hover:scale-110 transition-transform">
                3
              </div>
              <h4 className="font-bold text-ink-black mb-2">Polish</h4>
              <p className="text-body-md text-secondary font-body text-sm">
                Color grading, sound design, and integrated motion graphics.
              </p>
            </div>

            <div className="bg-surface p-8 border border-border-muted text-center relative group rounded-xl workflow-step">
              <div className="w-12 h-12 bg-botanical-green text-surface rounded-full flex items-center justify-center mx-auto mb-6 font-bold group-hover:scale-110 transition-transform">
                4
              </div>
              <h4 className="font-bold text-ink-black mb-2">Mastering</h4>
              <p className="text-body-md text-secondary font-body text-sm">
                Exporting optimized versions for web, mobile, and social channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="max-w-[1000px] mx-auto px-mobile-margin">
          <div className="bg-botanical-green text-surface p-12 md:p-20 text-center relative overflow-hidden group rounded-2xl shadow-md border border-botanical-green">
            <div className="relative z-10 space-y-8">
              <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl mb-8 text-surface font-extrabold">
                Ready to bring your story <br className="hidden md:block" /> to life?
              </h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-surface text-botanical-green px-10 py-4 font-bold rounded-lg text-lg hover:scale-105 transition-transform cursor-pointer">
                  Start Your Project
                </button>
                <button className="border border-surface/30 text-surface px-10 py-4 font-bold rounded-lg text-lg hover:bg-surface/10 transition-colors cursor-pointer bg-transparent">
                  Book a Consultation
                </button>
              </div>
            </div>
            {/* Scribble Accent */}
            <div className="absolute -bottom-10 -right-10 opacity-30 transform -rotate-12 group-hover:rotate-0 transition-transform duration-1000 text-surface select-none pointer-events-none">
              <svg fill="none" height="200" stroke="currentColor" strokeWidth="2" viewBox="0 0 200 200" width="200">
                <circle cx="100" cy="100" r="80" strokeDasharray="10 10" />
                <path d="M60 100 L 140 100 M 100 60 L 100 140" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
