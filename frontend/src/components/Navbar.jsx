import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { X, Calendar, ChevronDown, Home as HomeIcon, Briefcase, Users, FolderOpen, Mail, BookOpen } from "lucide-react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";

const RollingNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-body text-body-md tracking-wide py-1 relative overflow-hidden inline-flex flex-col group h-[26px] ${
          isActive
            ? "text-botanical-green font-bold border-b-2 border-botanical-green pb-1"
            : "text-secondary"
        }`
      }
    >
      <span className="relative inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-full inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full text-botanical-green font-bold whitespace-nowrap">
        {children}
      </span>
    </NavLink>
  );
};

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOpen = () => {
      if (window.innerWidth < 768) {
        setShowMobileServices(true);
      } else {
        setShowMegaMenu(true);
      }
    };
    window.addEventListener("open-services-modal", handleOpen);
    return () => {
      window.removeEventListener("open-services-modal", handleOpen);
    };
  }, []);

  const handleOpenServices = (e) => {
    if (e) e.preventDefault();
    if (window.innerWidth < 768) {
      setShowMobileServices((prev) => !prev);
    } else {
      setShowMegaMenu((prev) => !prev);
    }
  };

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      vertical: "Technology & Software Development",
      message: "",
    }
  });
  const [submitted, setSubmitted] = useState(false);

  // 5 Main Services Categories with descriptions and key children styled as cards
  const servicesData = [
    {
      title: "Technology & Software Development",
      description: "Custom software, SaaS platforms, web apps, and AI/ML integrations.",
      path: "/services/technology",
      children: [
        "Custom Software Development",
        "SaaS Product Development",
        "Web Design & Development",
        "Mobile App Development",
        "Artificial Intelligence & ML"
      ]
    },
    {
      title: "E-Commerce Marketplace Management",
      description: "Storefront setups, product catalog listings, PPC marketing, and inventory ops.",
      path: "/services/ecommerce",
      children: [
        "Marketplace & Account Setup",
        "Seller Account & Store Mgmt",
        "Amazon & Shopify Mgmt",
        "Product Listing & Catalog",
        "E-Commerce PPC & Sales Growth"
      ]
    },
    {
      title: "Digital Marketing & Growth",
      description: "Data-driven SEO optimization, performance marketing, and lead generation.",
      path: "/services/marketing",
      children: [
        "Digital Marketing Strategy",
        "Social Media Management",
        "Performance Marketing",
        "Search Engine Optimization (SEO)",
        "Paid Advertising & Campaigns"
      ]
    },
    {
      title: "Graphic Design & Creative",
      description: "Visual branding systems, UI/UX designs, and marketing creative assets.",
      path: "/services/creative",
      children: [
        "Graphic Design & Art",
        "Branding & Visual Identity",
        "Social Media Creatives",
        "Product Images & Infographics",
        "E-Commerce Storefront Design"
      ]
    },
    {
      title: "Video Editing & Production",
      description: "High-impact short-form reels, corporate explainers, and motion effects.",
      path: "/services/video",
      children: [
        "Professional Video Editing",
        "Reels & Short-Form Content",
        "Product & E-Commerce Videos",
        "Promotional Videos",
        "Motion Graphics & Effects"
      ]
    }
  ];

  const mobileLinks = [
    { label: "Home", mobileLabel: "Home", path: "/", Icon: HomeIcon },
    { label: "About", mobileLabel: "About", path: "/about", Icon: Users },
    { label: "Blogs", mobileLabel: "Blogs", path: "/blogs", Icon: BookOpen },
    { label: "Services", mobileLabel: "Services", path: "#services", Icon: Briefcase, isAction: true },
    { label: "Contact", mobileLabel: "Contact", path: "/contact", Icon: Mail },
  ];

  const onModalSubmit = (data) => {
    const existing = JSON.parse(localStorage.getItem("nexivo_registrations") || "[]");
    const newRecord = {
      id: Date.now().toString(),
      fullName: data.name,
      companyName: "N/A (Modal Quick Inquiry)",
      email: data.email,
      phone: "N/A",
      service: data.vertical,
      budget: "Not Sure",
      description: data.message || "No project message provided",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      timestamp: Date.now(),
    };
    existing.push(newRecord);
    localStorage.setItem("nexivo_registrations", JSON.stringify(existing));

    setSubmitted(true);
    reset();

    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <>
      {/* ── Top floating pill (shared desktop + mobile) ──────────────────── */}
      <div className="fixed top-0 left-0 w-full z-45 px-4 md:px-6 pt-3 md:pt-4 pointer-events-none">
        <header
          className="pointer-events-auto w-full max-w-container-max mx-auto bg-surface/90 backdrop-blur-md border border-border-muted rounded-xl shadow-sm h-14 md:h-16 relative"
          style={{ boxShadow: "0 2px 16px rgba(26,26,26,0.08)" }}
        >
          <div className="flex justify-between items-center px-5 md:px-8 h-full">
            {/* Logo */}
            <Link
              to="/"
              className="flex gap-1 justify-center items-center font-headline text-[15px] md:text-headline-md font-bold text-ink-black hover:opacity-80 transition-opacity shrink-0"
            >
              <img width="50px" src="/nexigo-logo.png" alt="Nexivo Logo" className="rounded-md" />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <RollingNavLink to="/">Home</RollingNavLink>

              <RollingNavLink to="/about">About Us</RollingNavLink>

              <RollingNavLink to="/blogs">Blogs</RollingNavLink>

              {/* Services hover dropdown container */}
              <div
                className="relative py-4"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <button
                  onClick={handleOpenServices}
                  className={`flex items-center gap-1 font-body text-body-md tracking-wide transition-all cursor-pointer py-1 relative overflow-hidden inline-flex flex-col group h-[26px] border-none bg-transparent ${location.pathname.startsWith("/services") || showMegaMenu
                      ? "text-botanical-green font-bold border-b-2 border-botanical-green pb-1"
                      : "text-secondary hover:text-ink-black"
                    }`}
                >
                  <span className="flex items-center gap-1 transition-transform duration-500 ease-out group-hover:-translate-y-full">
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMegaMenu ? "rotate-180" : ""}`} />
                  </span>
                  <span className="absolute left-0 top-full flex items-center gap-1 transition-transform duration-500 ease-out group-hover:-translate-y-full text-botanical-green font-bold">
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMegaMenu ? "rotate-180" : ""}`} />
                  </span>
                </button>

                {/* Mega Menu Dropdown styled as Cards */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl bg-[#fbf9f2] border border-border-muted rounded-2xl shadow-xl p-6 transition-all duration-300 z-50 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 ${showMegaMenu
                      ? "opacity-100 translate-y-2 pointer-events-auto"
                      : "opacity-0 translate-y-0 pointer-events-none"
                    }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {servicesData.map((service, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-between p-4 bg-surface-container-low border border-border-muted/50 rounded-xl hover:border-botanical-green hover:shadow-sm transition-all duration-300 h-full text-left group animate-fade-in"
                      >
                        <div>
                          <Link
                            to={service.path}
                            onClick={() => setShowMegaMenu(false)}
                            className="font-headline font-bold text-xs text-ink-black group-hover:text-botanical-green transition-colors mb-1.5 block leading-tight min-h-[36px]"
                          >
                            {service.title}
                          </Link>
                          <p className="font-body text-[10px] text-secondary mb-3 leading-normal">
                            {service.description}
                          </p>
                          <ul className="space-y-1 border-t border-border-muted/30 pt-3">
                            {service.children.map((child, idx) => (
                              <li key={idx} className="font-body text-[10px] text-secondary/80 hover:text-botanical-green transition-colors leading-relaxed">
                                • {child}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link
                          to={service.path}
                          onClick={() => setShowMegaMenu(false)}
                          className="inline-flex items-center gap-0.5 text-[9px] font-bold uppercase tracking-wider text-botanical-green hover:text-ink-black transition-colors pt-2.5 mt-3 border-t border-border-muted/20"
                        >
                          Explore Services →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <RollingNavLink to="/contact">Contact Us</RollingNavLink>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link to="/contact">
                <Button variant="primary">
                  Start Your Project
                </Button>
              </Link>
            </div>

            {/* Mobile CTA */}
            <Link to="/contact" className="md:hidden">
              <button
                className="inline-flex items-center gap-1.5 bg-botanical-green text-white text-[12px] font-bold font-headline px-3.5 py-2 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
              >
                Get Started
              </button>
            </Link>
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
          {mobileLinks.map(({ label, mobileLabel, path, Icon, isAction }) => {
            if (isAction) {
              return (
                <button
                  key={label}
                  onClick={handleOpenServices}
                  className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all duration-200 min-w-[44px] border-none bg-transparent cursor-pointer ${location.pathname.startsWith("/services")
                      ? "text-botanical-green animate-pulse"
                      : "text-secondary hover:text-ink-black"
                    }`}
                >
                  <span
                    className={`flex items-center justify-center w-10 h-8 rounded-xl transition-all duration-200 ${location.pathname.startsWith("/services")
                        ? "bg-botanical-green text-white shadow-sm"
                        : "text-secondary"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-headline font-semibold tracking-wide">
                    {mobileLabel}
                  </span>
                </button>
              );
            }

            return (
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
                    <span
                      className={`flex items-center justify-center w-10 h-8 rounded-xl transition-all duration-200 ${isActive
                          ? "bg-botanical-green text-white shadow-sm"
                          : "text-secondary"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
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
            );
          })}
        </div>
      </nav>

      {/* ── Mobile Services Sheet/Drawer ─────────────────────────────────── */}
      {showMobileServices && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink-black/60 backdrop-blur-sm md:hidden">
          <div className="w-full bg-[#fbf9f2] border-t border-border-muted rounded-t-2xl p-5 max-h-[75vh] overflow-y-auto shadow-2xl relative text-left">
            <div className="flex justify-between items-center mb-5 border-b border-border-muted/50 pb-3">
              <h3 className="font-headline text-md font-bold text-ink-black">
                Our Services
              </h3>
              <button
                onClick={() => setShowMobileServices(false)}
                className="text-secondary hover:text-ink-black cursor-pointer bg-transparent border-none p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="p-4 bg-surface-container-low border border-border-muted/50 rounded-xl flex flex-col text-left group"
                >
                  <Link
                    to={service.path}
                    onClick={() => setShowMobileServices(false)}
                    className="font-headline font-bold text-sm text-ink-black hover:text-botanical-green transition-colors block mb-1"
                  >
                    {service.title}
                  </Link>
                  <p className="font-body text-[11px] text-secondary mb-2.5">
                    {service.description}
                  </p>
                  <p className="font-body text-[10px] text-secondary/70 leading-relaxed">
                    {service.children.slice(0, 4).join("  •  ")} {service.children.length > 4 ? `• & ${service.children.length - 4} more` : ""}
                  </p>
                  <Link
                    to={service.path}
                    onClick={() => setShowMobileServices(false)}
                    className="text-[10px] font-bold text-botanical-green mt-3.5 flex items-center gap-0.5"
                  >
                    Explore Services →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}


    </>
  );
};

export default Navbar;
