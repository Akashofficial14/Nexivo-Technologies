import React, { useState, useLayoutEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technology = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Custom Software",
  });
  const [submitted, setSubmitted] = useState(false);

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

      // ── Core services cards — per element ────────────────────────────
      containerRef.current.querySelectorAll(".card-hover").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });

      // ── Case study rows — per element ────────────────────────────────
      containerRef.current.querySelectorAll(".case-row").forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });

      // ── Booking/contact panel ────────────────────────────────────────
      const bookingPanel = containerRef.current.querySelector(".booking-panel");
      if (bookingPanel) {
        gsap.from(bookingPanel, {
          opacity: 0,
          y: 40,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bookingPanel,
            start: "top 90%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", service: "Custom Software" });
    }, 2000);
  };

  return (
    <div ref={containerRef} className="pt-20 bg-warm-bg min-h-screen text-left">
      {/* Hero Section */}
      <header className="pt-10 pb-10 md:py-20 px-mobile-margin relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10 hero-content">
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-botanical-green/5 border border-botanical-green/10 rounded-full">
            <Sparkles className="w-4 h-4 text-botanical-green" />
            <span className="font-headline text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-botanical-green">
              SERVICES
            </span>
          </div>

          <h1 className="font-headline mb-8 leading-[1.05] tracking-tight text-ink-black max-w-4xl mx-auto font-extrabold" style={{ fontSize: "clamp(2.6rem, 9.5vw, 4.25rem)" }}>
            Technology That
            <br />
            <span className="text-botanical-green relative inline-block mt-2">
              Moves Your Business Forward.
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
            We design and develop scalable digital solutions that help businesses automate operations, improve customer experiences, and create new opportunities for growth.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex -space-x-3">
              <div
                className="w-12 h-12 rounded-full border-2 border-surface bg-surface-container overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDF-z13cvPAI370sCrXoe1SHnm8UxxhnmT8utI0LxtQDiPR9I6wYsEjzj-g96eOhP3o88_frUE164Huk_2PZYxDmp2Utalv0N02R3HGPokWn1w8dxW_qyMeHYJ6qd5CdPZzevM_y5J8gLTQ3l0Q0sLY09kgHr_CSPhLap0360AC6jmujfXW5wbyTH2quhcaSOZjB6yirCjpO_NEqrklRuRgAoTQt71LJRLFmoEs-xRcsJR_NYzD4z8')",
                }}
              />
              <div
                className="w-12 h-12 rounded-full border-2 border-surface bg-surface-container overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCo4NLY19UC4X7Eb-tizXo2igq6i4BII-LfpJjHyrHqYElwQsGbloziWVjNHPFsOkn5mHdUJsO1os6Oycf6pNA8wgUdhRO8N5jiOP4ToL--6WlYF8fQRR-jAezdJBbZ34wrzUvbmlpGs936Oif-mYpPv7i3wwA4gEEpzKbjiLmrtivrO-5lowCl8YWyHiV9mI7vcj-pEWO9ew7gCa7z7b7uHhtyHuwNh5Uk5riWeZzE9Dl19UffiNs')",
                }}
              />
              <div
                className="w-12 h-12 rounded-full border-2 border-surface bg-surface-container overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUMCQvtyWP7Dy9EO0MOSXQSDCCn0EEVny1jFfsf9R5NNW7iPceitDBVMi9ElfKzttuhnN4NfcBcWhdo35uAScCMokPm8sHBf4jTL5IM6oP9DEoWqDHJik6HtPNEfH1gVhzN5oK7zrUwc-ER2--LQzPJBSlD4HfCaVQzmDa7f6JILjvniZS6_Z1VWED0wK6iMJdTEC-zpisOaYUgeFhX1hdHbdIdm3meIX3eckWD8p6Ear26OIAs_A')",
                }}
              />
            </div>
            <span className="text-secondary font-body text-sm italic">Trusted by 200+ high-growth tech companies</span>
          </div>
        </div>
        {/* Abstract Scribble Accent */}
        <div className="absolute top-1/2 left-1/4 scribble-accent opacity-20 pointer-events-none">
          <svg fill="none" height="200" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 100C30 80 50 120 70 100C90 80 110 120 130 100C150 80 170 120 190 100" stroke="#C9922A" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </header>

      {/* Core Services Grid */}
      <section id="tech-services" className="py-10 md:py-20 bg-white/50 border-t border-border-muted text-left">
        <div className="max-w-container-max mx-auto px-mobile-margin">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline text-headline-lg mb-4 text-ink-black font-bold">Specialized Engineering Services</h2>
              <p className="text-secondary font-body text-body-lg">
                Fourteen core disciplines designed to cover the entire software lifecycle, ensuring your product is performant, secure, and future-proof.
              </p>
            </div>
            <div className="font-headline text-[12px] font-bold text-botanical-green border-b-2 border-botanical-green pb-2 tracking-widest uppercase">
              01 — 14 SERVICES
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* 1. Custom Software */}
            <div className="md:col-span-8 group p-8 bg-surface border border-border-muted card-hover rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-4xl text-botanical-green">terminal</span>
                  <span className="font-headline text-xs font-bold text-secondary">01</span>
                </div>
                <h3 className="font-headline text-headline-md mb-4 text-ink-black">Custom Software Development</h3>
                <p className="text-secondary mb-6 max-w-lg font-body">
                  Bespoke solutions engineered from the ground up to solve your unique business challenges. We build robust, secure, and highly-leveraged enterprise tools.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-ink-black/5 rounded font-headline text-[10px] font-bold uppercase tracking-widest text-secondary">
                  ENTERPRISE ARCHITECTURE
                </span>
                <span className="px-3 py-1 bg-ink-black/5 rounded font-headline text-[10px] font-bold uppercase tracking-widest text-secondary">
                  CUSTOM ENGINE
                </span>
              </div>
            </div>

            {/* 2. SaaS Platforms */}
            <div className="md:col-span-4 group p-8 bg-surface border border-border-muted card-hover rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-4xl text-botanical-green">cloud_done</span>
                  <span className="font-headline text-xs font-bold text-secondary">02</span>
                </div>
                <h3 className="font-headline text-headline-md mb-4 text-ink-black">SaaS Product Development</h3>
                <p className="text-secondary mb-6 font-body">Scalable multi-tenant cloud platforms built to expand customer value.</p>
              </div>
              <div
                className="w-full h-32 rounded-lg bg-surface-container-high bg-cover bg-center border border-border-muted"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAS07NfmWNE7QUNOZwGgLnuUP56QXyxIhXicFGaTZtByhTIKlO_WmmzjHkjJv2e3CaRvi7PSHt1XMMXdfsgMIxf-UtqliFBjb6uqC_f5JhjzjRwBjta5DYlAuT_d_4WD_8ZjL44_qVVTU6mQHCNIhgvQpIGkHWcDuhjAKmYSRXOzBdK8lqy-lRZDbqWQu_ImPLlEfmqeD6x4zhX16MXxd5FB1_rVMmqiW5m_zL3xuslcbUKNJP1E_c')",
                }}
              />
            </div>

            {/* 3. Web Design */}
            <div className="md:col-span-4 group p-8 bg-surface border border-border-muted card-hover rounded-xl text-left flex flex-col justify-between">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-botanical-green">web_asset</span>
                <span className="font-headline text-xs font-bold text-secondary">03</span>
              </div>
              <h3 className="font-headline text-headline-md mb-4 text-ink-black">Web Design &amp; Development</h3>
              <p className="text-secondary font-body">Cohesive, high-converting digital storefronts and marketing assets.</p>
            </div>

            {/* 4. Mobile Apps */}
            <div className="md:col-span-4 group p-8 bg-surface border border-border-muted card-hover rounded-xl text-left flex flex-col justify-between">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-botanical-green">smartphone</span>
                <span className="font-headline text-xs font-bold text-secondary">04</span>
              </div>
              <h3 className="font-headline text-headline-md mb-4 text-ink-black">Mobile App Development</h3>
              <p className="text-secondary font-body">Cross-platform mobile apps targeting seamless iOS &amp; Android utility.</p>
            </div>

            {/* 5. AI/ML Integration */}
            <div className="md:col-span-4 group p-8 bg-primary text-surface border border-transparent card-hover rounded-xl text-left flex flex-col justify-between">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-white">psychology</span>
                <span className="font-headline text-xs font-bold text-white/60">05</span>
              </div>
              <h3 className="font-headline text-headline-md mb-4 text-white">Artificial Intelligence &amp; ML</h3>
              <p className="text-surface/80 font-body">Integrating machine learning to automate complex data processing.</p>
            </div>

            {/* Quick grid for 6-14 */}
            <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter mt-8">
              {/* 6. Cloud */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">storage</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">Cloud &amp; DevOps Services</h4>
                  <p className="text-sm text-secondary font-body">AWS &amp; GCP cloud automation pipelines.</p>
                </div>
              </div>
              {/* 7. API */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">api</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">API &amp; System Integration</h4>
                  <p className="text-sm text-secondary font-body">Robust RESTful and GraphQL endpoints.</p>
                </div>
              </div>
              {/* 8. UI/UX */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">palette</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">UI/UX Design Services</h4>
                  <p className="text-sm text-secondary font-body">Interface designs driven by user psychology.</p>
                </div>
              </div>
              {/* 9. CMS */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">shopping_cart</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">CMS &amp; E-Commerce Solutions</h4>
                  <p className="text-sm text-secondary font-body">Custom setup of high-conversion frameworks.</p>
                </div>
              </div>
              {/* 10. Shopify */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">storefront</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">Shopify Development</h4>
                  <p className="text-sm text-secondary font-body">Tailored stores, logic flow, and checkout optimization.</p>
                </div>
              </div>
              {/* 11. WordPress */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">language</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">WordPress Development</h4>
                  <p className="text-sm text-secondary font-body">Custom themes, plugins, and scalable setups.</p>
                </div>
              </div>
              {/* 12. Consulting */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">question_answer</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">Digital Transformation</h4>
                  <p className="text-sm text-secondary font-body">Modern technology audits and roadmap alignment.</p>
                </div>
              </div>
              {/* 13. Teams */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">groups</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">Dedicated Development Teams</h4>
                  <p className="text-sm text-secondary font-body">On-demand technical experts to boost velocity.</p>
                </div>
              </div>
              {/* 14. Support */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">support_agent</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">24/7 Support</h4>
                  <p className="text-sm text-secondary font-body">Ongoing maintenance and monitoring.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Consultation Section */}
      <section className="py-10 md:py-20 bg-surface-container">
        <div className="max-w-container-max mx-auto px-mobile-margin text-center">
          <h2 className="font-headline text-headline-lg mb-6 text-ink-black font-bold">Ready to Build Something Amazing?</h2>
          <p className="text-secondary font-body text-body-lg max-w-2xl mx-auto mb-12">
            From websites and branding to AI-powered solutions, DM us on Instagram to start your next project.
          </p>
          <div className="max-w-xl mx-auto bg-surface p-6 md:p-12 relative border border-border-muted rounded-xl shadow-sm booking-panel">
            <div className="absolute -top-6 -right-6 scribble-accent">
              <svg fill="none" height="80" viewBox="0 0 80 80" width="80">
                <path d="M10,70 C20,40 60,40 70,10" stroke="#C9922A" strokeDasharray="4 4" strokeWidth="2" />
              </svg>
            </div>

            {submitted ? (
              <div className="py-8 space-y-3">
                <div className="text-botanical-green text-5xl font-bold">✓</div>
                <h4 className="text-lg font-bold text-ink-black">Inquiry Submitted!</h4>
                <p className="text-sm text-secondary">We will be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="font-headline text-xl font-bold text-ink-black mb-8 border-b border-border-muted pb-4">
                  Start Your Project
                </h3>
                <Input
                  placeholder="Full Name"
                  id="tech-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  placeholder="Email Address"
                  id="tech-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <div className="text-left">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-transparent border-b border-ink-black/20 text-ink-black py-3 px-1 font-body text-body-md focus:outline-none focus:border-botanical-green transition-colors duration-300"
                  >
                    <option value="Custom Software">Custom Software</option>
                    <option value="AI/ML Integration">AI/ML Integration</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="Web Development">Web Development</option>
                  </select>
                </div>
                <Button type="submit" variant="primary" className="w-full py-4 text-base">
                  Discuss Your Technology Project →
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
