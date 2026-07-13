import React, { useState, useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Input from "./Input";
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
    <div ref={containerRef} className="pt-20">
      {/* Hero Section */}
      <header className="pt-20 pb-20 px-mobile-margin relative overflow-hidden text-left">
        <div className="max-w-container-max mx-auto text-center relative z-10 hero-content">
          <div className="inline-block mb-6 px-4 py-1 bg-ink-black/5 rounded-full border border-ink-black/10">
            <span className="font-headline text-[12px] font-bold uppercase tracking-widest text-botanical-green">
              Engineering Excellence
            </span>
          </div>
          <h1 className="font-headline text-headline-xl md:text-7xl mb-6 max-w-4xl mx-auto text-ink-black font-extrabold">
            Technology &amp; Software <span className="text-botanical-green italic">Development</span>
          </h1>
          <p className="font-body text-body-lg text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            We build the digital foundations that power modern enterprises. From scalable SaaS architectures to intelligent AI integrations, we translate complex requirements into elegant code.
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
            <path d="M10 100C30 80 50 120 70 100C90 80 110 120 130 100C150 80 170 120 190 100" stroke="#618F70" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </header>

      {/* Core Services Grid */}
      <section id="tech-services" className="py-20 bg-white/50 border-t border-border-muted text-left">
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
                  Bespoke solutions engineered from the ground up to solve your unique business challenges. We don't believe in one-size-fits-all software.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-ink-black/5 rounded font-headline text-[10px] font-bold uppercase tracking-widest text-secondary">
                  C++ / PYTHON
                </span>
                <span className="px-3 py-1 bg-ink-black/5 rounded font-headline text-[10px] font-bold uppercase tracking-widest text-secondary">
                  ENTERPRISE ARCHITECTURE
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
                <h3 className="font-headline text-headline-md mb-4 text-ink-black">SaaS Platforms</h3>
                <p className="text-secondary mb-6 font-body">Scalable multi-tenant architectures built for the cloud.</p>
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
              <h3 className="font-headline text-headline-md mb-4 text-ink-black">UI/UX &amp; Web Design</h3>
              <p className="text-secondary font-body">Interface designs that balance aesthetic beauty with conversion-focused UX.</p>
            </div>

            {/* 4. AI/ML Integration */}
            <div className="md:col-span-4 group p-8 bg-primary text-surface border border-transparent card-hover rounded-xl text-left flex flex-col justify-between">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-white">psychology</span>
                <span className="font-headline text-xs font-bold text-white/60">04</span>
              </div>
              <h3 className="font-headline text-headline-md mb-4 text-white">AI &amp; Machine Learning</h3>
              <p className="text-surface/80 font-body">Leveraging LLMs and predictive analytics to automate complex workflows.</p>
            </div>

            {/* 5. Cloud Infrastructure */}
            <div className="md:col-span-4 group p-8 bg-surface border border-border-muted card-hover rounded-xl text-left flex flex-col justify-between">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-botanical-green">storage</span>
                <span className="font-headline text-xs font-bold text-secondary">05</span>
              </div>
              <h3 className="font-headline text-headline-md mb-4 text-ink-black">Cloud &amp; DevOps</h3>
              <p className="text-secondary font-body">AWS, GCP, and Azure management with automated CI/CD pipelines.</p>
            </div>

            {/* Quick grid for 6-14 */}
            <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter mt-8">
              {/* 6. API */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">api</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">API Development</h4>
                  <p className="text-sm text-secondary font-body">Robust RESTful and GraphQL interfaces.</p>
                </div>
              </div>
              {/* 7. Mobile */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">smartphone</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">Mobile Apps</h4>
                  <p className="text-sm text-secondary font-body">Cross-platform React Native &amp; Flutter.</p>
                </div>
              </div>
              {/* 8. QA */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">QA &amp; Testing</h4>
                  <p className="text-sm text-secondary font-body">Automated and manual rigorous testing.</p>
                </div>
              </div>
              {/* 9. Security */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">security</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">Cybersecurity</h4>
                  <p className="text-sm text-secondary font-body">End-to-end encryption and compliance audits.</p>
                </div>
              </div>
              {/* 10. Data */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">database</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">Data Engineering</h4>
                  <p className="text-sm text-secondary font-body">Pipelines and warehouse management.</p>
                </div>
              </div>
              {/* 11. Legacy */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">history</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">Modernization</h4>
                  <p className="text-sm text-secondary font-body">Upgrading legacy platforms to modern setups.</p>
                </div>
              </div>
              {/* 12. IoT */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">router</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">IoT Solutions</h4>
                  <p className="text-sm text-secondary font-body">Hardware-software ecosystem syncs.</p>
                </div>
              </div>
              {/* 13. Blockchain */}
              <div className="p-6 border border-border-muted rounded-xl flex gap-4 items-start card-hover bg-surface">
                <span className="material-symbols-outlined text-botanical-green text-2xl mt-1">link</span>
                <div>
                  <h4 className="font-bold text-ink-black mb-1">Web3 &amp; Blockchain</h4>
                  <p className="text-sm text-secondary font-body">Smart contracts and decentralized apps.</p>
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

      {/* Case Study Preview (Editorial Layout) */}
      <section className="py-24 bg-surface text-left">
        <div className="max-w-container-max mx-auto px-mobile-margin">
          <h2 className="font-headline text-headline-lg text-center mb-16 text-ink-black">Selected Technical Work</h2>
          <div className="space-y-32">
            {/* Case 01 */}
            <div className="case-row group flex flex-col md:flex-row gap-12 items-center cursor-pointer group-hover:bg-red-400">
              <div className="w-full md:w-1/2 order-2 md:order-1 transition-transform duration-500 ease-out group-hover:translate-x-6">
                <span className="font-headline text-headline-xl text-ink-black/10 block mb-2 font-bold transition-colors group-hover:text-botanical-green/20">01</span>
                <h3 className="font-headline text-headline-md mb-4 text-ink-black font-bold group-hover:text-botanical-green transition-colors duration-300">FinTech Neo-Bank Infrastructure</h3>
                <p className="text-secondary font-body text-body-lg mb-8">
                  Building a secure, low-latency transaction engine capable of processing 10,000+ operations per second with zero downtime.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8 border-t border-border-muted pt-8">
                  <div>
                    <h4 className="font-headline text-[12px] font-bold text-secondary mb-2 uppercase tracking-widest">Challenge</h4>
                    <p className="text-sm text-secondary">High-frequency trading with stringent security.</p>
                  </div>
                  <div>
                    <h4 className="font-headline text-[12px] font-bold text-secondary mb-2 uppercase tracking-widest">Outcome</h4>
                    <p className="text-sm text-secondary">99.999% uptime and SOC2 compliance.</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 font-bold hover:text-botanical-green transition-colors cursor-pointer">
                  View Case Study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 bg-surface-container h-[400px] overflow-hidden rounded-xl border border-border-muted shadow-sm">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAOSDXUv9h6M-oQljweW50oB0I23jsQzprp0ofTrUGW1iQn2gLlU1-5jxzss88D1SFXsOgE_S1xAvAqYfiVBcDFX7ySURIFBOhs42SsuN64t73FlallD7FiExa94u6JC-0Pe3Q7Itrdsl0GAnq7wmtIhUXNNTG570QOkuQTlB_EacuGevmV3ZmYidEcVV5VZOaVHKr0QyO_dEbMRW1PL2jwAzQBCkyuzQCnz2Ac7DcD9Kyf1sf-Zg"
                  alt="FinTech Neo-Bank Infrastructure Mockup"
                />
              </div>
            </div>

            {/* Case 02 */}
            <div className="case-row group flex flex-col md:flex-row gap-12 items-center cursor-pointer group-hover:bg-red-400">
              <div className="w-full md:w-1/2 bg-surface-container h-[400px] overflow-hidden rounded-xl border border-border-muted shadow-sm">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPRyeW7gvID2kfH9Ed1iY0Lo93Yn6xuDvAot-AavVq3COxDTV5qZPdyodxw6NrhlSjsEnRbyutKdUT5uv9BaiSv1uRdnUMuwrAucAyG_g45aTpAAxUtcPCxJs9J6hgKXoxY8z1xWnrBvk7hmZdfR-E3gnFsV1VSKUJCwbv0qOS6CKlm4e6ap8PxICPr-XxJtY2agMALgrR7Dx8CRGCjHivwgclg8REAec1UMJtREOmUDOzQe6KBI8"
                  alt="HealthTech AI Diagnostic Tool Mockup"
                />
              </div>
              <div className="w-full md:w-1/2 transition-transform duration-500 ease-out group-hover:translate-x-6">
                <span className="font-headline text-headline-xl text-ink-black/10 block mb-2 font-bold transition-colors group-hover:text-botanical-green/20">02</span>
                <h3 className="font-headline text-headline-md mb-4 text-ink-black font-bold group-hover:text-botanical-green transition-colors duration-300">HealthTech AI Diagnostic Tool</h3>
                <p className="text-secondary font-body text-body-lg mb-8">
                  An intelligent imaging platform using computer vision to assist radiologists in early-stage detection.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8 border-t border-border-muted pt-8">
                  <div>
                    <h4 className="font-headline text-[12px] font-bold text-secondary mb-2 uppercase tracking-widest">Challenge</h4>
                    <p className="text-sm text-secondary">Processing massive DICOM datasets in real-time.</p>
                  </div>
                  <div>
                    <h4 className="font-headline text-[12px] font-bold text-secondary mb-2 uppercase tracking-widest">Outcome</h4>
                    <p className="text-sm text-secondary">35% increase in diagnostic accuracy.</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 font-bold hover:text-botanical-green transition-colors cursor-pointer">
                  View Case Study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-surface-container">
        <div className="max-w-container-max mx-auto px-mobile-margin text-center">
          <h2 className="font-headline text-headline-lg mb-6 text-ink-black font-bold">Ready to Build Something Amazing?</h2>
          <p className="text-secondary font-body text-body-lg max-w-2xl mx-auto mb-12">
            From websites and branding to AI-powered solutions, DM us on Instagram to start your next project.
          </p>
          <div className="max-w-xl mx-auto bg-surface p-12 relative border border-border-muted rounded-xl shadow-sm booking-panel">
            <div className="absolute -top-6 -right-6 scribble-accent">
              <svg fill="none" height="80" viewBox="0 0 80 80" width="80">
                <path d="M10,70 C20,40 60,40 70,10" stroke="#618F70" strokeDasharray="4 4" strokeWidth="2" />
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
                  Send Project Inquiry
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
