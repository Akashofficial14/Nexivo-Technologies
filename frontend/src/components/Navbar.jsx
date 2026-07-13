import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { X, Calendar } from "lucide-react";
import Button from "./Button";
import Input from "./Input";

/* ─── Mobile bottom-tab icon SVGs ─────────────────────────────────────── */

const TechIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const EcomIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const MarketingIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);
const CreativeIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);
const VideoIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vertical: "technology",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const navLinks = [
    { label: "Technology", mobileLabel: "Tech", path: "/technology", Icon: TechIcon },
    { label: "E-commerce", mobileLabel: "E-comm", path: "/ecommerce", Icon: EcomIcon },
    { label: "Marketing", mobileLabel: "Marketing", path: "/marketing", Icon: MarketingIcon },
    { label: "Creative", mobileLabel: "Creative", path: "/creative", Icon: CreativeIcon },
    { label: "Video", mobileLabel: "Video", path: "/video", Icon: VideoIcon },
  ];

  // Desktop nav = all service links (same as navLinks)
  const desktopLinks = navLinks;
  // Mobile bottom tab = same service links, logo handles Home
  const mobileLinks = navLinks;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", vertical: "technology", message: "" });
    }, 2000);
  };

  return (
    <>
      {/* ── Top floating pill (shared desktop + mobile) ──────────────────── */}
      <div className="fixed top-0 left-0 w-full z-45 px-4 md:px-6 pt-3 md:pt-4 pointer-events-none">
        <header
          className="pointer-events-auto w-full max-w-container-max mx-auto bg-surface/90 backdrop-blur-md border border-border-muted rounded-xl shadow-sm h-14 md:h-16"
          style={{ boxShadow: "0 2px 16px rgba(26,26,26,0.08)" }}
        >
          <div className="flex justify-between items-center px-5 md:px-8 h-full">

            {/* Logo */}
            <Link
              to="/"
              className="font-headline text-[15px] md:text-headline-md font-bold text-ink-black hover:opacity-80 transition-opacity shrink-0"
            >
              Nexivo Solutions
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-8">
              {desktopLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-body text-body-md tracking-wide transition-all py-1 ${isActive
                      ? "text-botanical-green font-bold border-b-2 border-botanical-green pb-1"
                      : "text-secondary hover:text-ink-black"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Start Your Project
              </Button>
            </div>

            {/* Mobile CTA — compact pill button */}
            <button
              onClick={() => setShowModal(true)}
              className="md:hidden inline-flex items-center gap-1.5 bg-botanical-green text-white text-[12px] font-bold font-headline px-3.5 py-2 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
            >
              Get Started
            </button>

          </div>
        </header>
      </div>

      {/* ── Mobile bottom tab bar ─────────────────────────────────────────── */}
      <nav
        className="md:hidden fixed bottom-4 left-4 right-4 z-45 pointer-events-auto"
        aria-label="Mobile navigation"
      >
        <div
          className="bg-surface/95 backdrop-blur-xl border border-border-muted rounded-2xl shadow-xl flex items-center justify-around px-2 py-2"
          style={{ boxShadow: "0 8px 40px rgba(26,26,26,0.13)" }}
        >
          {mobileLinks.map(({ label, mobileLabel, path, Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all duration-200 min-w-[44px] ${isActive
                  ? "text-botanical-green"
                  : "text-secondary hover:text-ink-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Active tab gets a green pill background */}
                  <span
                    className={`flex items-center justify-center w-10 h-8 rounded-xl transition-all duration-200 ${isActive
                      ? "bg-botanical-green text-white shadow-sm"
                      : "text-secondary"
                      }`}
                  >
                    <Icon active={isActive} />
                  </span>
                  <span
                    className={`text-[10px] font-headline font-semibold tracking-wide transition-colors duration-200 ${isActive ? "text-botanical-green" : "text-secondary"
                      }`}
                  >
                    {mobileLabel}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* ── Booking / Consultation Modal ──────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-black/65 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-surface border border-border-muted p-8 shadow-2xl animate-float-slow text-center rounded-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-secondary hover:text-ink-black cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-12 h-12 rounded-full bg-botanical-green/10 flex items-center justify-center mx-auto mb-6 border border-botanical-green/20">
              <Calendar className="w-6 h-6 text-botanical-green" />
            </div>

            <h3 className="font-headline text-2xl font-bold text-ink-black mb-2">
              Start Your Project
            </h3>
            <p className="font-body text-secondary text-sm mb-8 max-w-md mx-auto">
              Tell us about your objectives and let's turn it into something exceptional with modern, organic design.
            </p>

            {submitted ? (
              <div className="py-8 space-y-3">
                <div className="text-botanical-green text-5xl font-bold">✓</div>
                <h4 className="text-lg font-bold text-ink-black">Inquiry Sent!</h4>
                <p className="text-sm text-secondary">Our specialists will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Full Name"
                  id="modal-name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />

                <Input
                  label="Email Address"
                  id="modal-email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <div className="text-left">
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-secondary mb-2 font-headline">
                    Service Interest
                  </label>
                  <select
                    value={formData.vertical}
                    onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                    className="w-full bg-transparent border-b border-ink-black/20 text-ink-black py-3 px-1 font-body text-body-md focus:outline-none focus:border-botanical-green transition-colors duration-300"
                  >
                    <option value="technology">Technology &amp; SaaS</option>
                    <option value="ecommerce">E-commerce Marketplace</option>
                    <option value="marketing">Digital Marketing &amp; Growth</option>
                    <option value="creative">Graphic Design &amp; Creative</option>
                    <option value="video">Video Editing &amp; Production</option>
                  </select>
                </div>

                <Input
                  label="Tell us about your project"
                  id="modal-message"
                  type="textarea"
                  rows={2}
                  placeholder="Project details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <div className="pt-2">
                  <Button type="submit" variant="primary" className="w-full py-4">
                    Send Project Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
