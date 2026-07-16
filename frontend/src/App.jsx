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
          height: "130px",
          zIndex: 44,
          pointerEvents: "none",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          background: "linear-gradient(to bottom, rgba(251,249,242,0.35) 0%, rgba(251,249,242,0.0) 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
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
