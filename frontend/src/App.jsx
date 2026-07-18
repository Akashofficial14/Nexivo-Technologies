import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ScrollToTop component ensures that routes render from top of page on change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />

      {/* ── Transparent frosted-glass scroll blur ────────────────────────
          Covers from viewport top (0) down past the navbar pill.
          backdrop-filter blurs content scrolling behind it.
          Gradient mask: full blur at top → fades to nothing below pill.
          Slight rgba tint gives frosted-glass depth without solid color.  */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100px",
          zIndex: 44,
          pointerEvents: "none",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background: "linear-gradient(to bottom, rgba(251,249,242,0.85) 0%, rgba(251,249,242,0.4) 60%, rgba(251,249,242,0.0) 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      />

      {/* ── Mobile bottom frosted-glass scroll blur ──────────────────────── */}
      <div
        aria-hidden="true"
        className="md:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          zIndex: 44,
          pointerEvents: "none",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background: "linear-gradient(to top, rgba(251,249,242,0.9) 0%, rgba(251,249,242,0.5) 60%, rgba(251,249,242,0.0) 100%)",
          maskImage: "linear-gradient(to top, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, black 60%, transparent 100%)",
        }}
      />

      <div className="min-h-screen flex flex-col bg-[#fbf9f2] text-[#1A1A1A] overflow-x-hidden font-body selection:bg-botanical-green/30">
        <Navbar />
        <main className="flex-grow pb-24 md:pb-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
