import React from "react";
import { Link, useLocation } from "react-router";
import { Users, Target, Globe, Award, ArrowRight } from "lucide-react";

const stats = [
  { icon: <Globe className="w-3.5 h-3.5" />, label: "200+ Clients Worldwide" },
  { icon: <Target className="w-3.5 h-3.5" />, label: "5 Core Service Pillars" },
  { icon: <Award className="w-3.5 h-3.5" />, label: "From Ideas to Impact" },
  { icon: <Users className="w-3.5 h-3.5" />, label: "Multidisciplinary Team" },
  { icon: <Globe className="w-3.5 h-3.5" />, label: "Technology · E-Commerce · Marketing" },
  { icon: <Award className="w-3.5 h-3.5" />, label: "Trusted Digital Partner" },
];

const SecondaryBar = () => {
  const location = useLocation();

  // On the /about page, show section-jump links instead of ticker
  const isAboutPage = location.pathname === "/about";

  if (isAboutPage) {
    return (
      <div
        className="fixed left-0 right-0 z-40"
        style={{ top: "calc(3.5rem + 0.75rem + 0.25rem)" }}
      >
        <div className="max-w-container-max mx-auto px-4 md:px-6">
          <nav
            className="bg-ink-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-sm h-10 flex items-center px-5 gap-1 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Brand label */}
            <span className="font-headline text-[10px] font-bold text-botanical-green uppercase tracking-[0.2em] shrink-0 pr-4 border-r border-white/10 mr-3">
              About Us
            </span>

            {[
              { label: "Who We Are", href: "#who-we-are" },
              { label: "Mission", href: "#mission" },
              { label: "Vision", href: "#vision" },
              { label: "Philosophy", href: "#philosophy" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-[11px] font-semibold text-white/60 hover:text-botanical-green transition-colors px-3 py-1 rounded-md hover:bg-white/5 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}

            <div className="ml-auto shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 font-headline text-[10px] font-bold text-botanical-green uppercase tracking-wider hover:text-white transition-colors"
              >
                Work With Us
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  // All other pages — scrolling ticker with company highlights
  return (
    <div
      className="fixed left-0 right-0 z-40"
      style={{ top: "calc(3.5rem + 0.75rem + 0.25rem)" }}
    >
      <div className="max-w-container-max mx-auto px-4 md:px-6">
        <div
          className="bg-ink-black/90 backdrop-blur-md border border-white/10 rounded-xl shadow-sm h-9 flex items-center overflow-hidden"
          style={{ position: "relative" }}
        >
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-ink-black/90 to-transparent z-10 pointer-events-none rounded-l-xl" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-ink-black/90 to-transparent z-10 pointer-events-none rounded-r-xl" />

          {/* Left label */}
          <div className="shrink-0 px-4 border-r border-white/10 h-full flex items-center">
            <span className="font-headline text-[9px] font-bold text-botanical-green uppercase tracking-[0.25em] whitespace-nowrap">
              NEXIVO
            </span>
          </div>

          {/* Marquee ticker */}
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-0 animate-[ticker_28s_linear_infinite]">
              {[...stats, ...stats].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-5 whitespace-nowrap text-white/70 font-body text-[11px] font-medium shrink-0"
                >
                  <span className="text-botanical-green">{stat.icon}</span>
                  <span>{stat.label}</span>
                  <span className="ml-5 text-white/20">◆</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <div className="shrink-0 px-4 border-l border-white/10 h-full flex items-center">
            <Link
              to="/about"
              className="font-headline text-[9px] font-bold text-white/50 uppercase tracking-[0.15em] hover:text-botanical-green transition-colors whitespace-nowrap"
            >
              About Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBar;
