import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Increment progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment by a dynamic step to simulate organic loading
        const step = Math.floor(Math.random() * 4) + 1;
        const next = prev + step;
        return next > 100 ? 100 : next;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Create GSAP timeline for exit animation
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) {
            onComplete();
          }
        },
      });

      // 1. Fade and slide up the inner elements slightly
      tl.to([logoRef.current, counterRef.current, progressBarRef.current], {
        opacity: 0,
        y: -40,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.in",
      });

      // 2. Slide the entire container from bottom to top (yPercent: -100)
      tl.to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 1.0,
          ease: "power4.inOut",
        },
        "-=0.2"
      );
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fbf9f2] select-none overflow-hidden"
      style={{
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* Premium Content Wrapper */}
      <div className="flex flex-col items-center max-w-md w-full px-6">
        {/* Golden Logo */}
        <h1
          ref={logoRef}
          className="font-headline text-5xl md:text-7xl font-extrabold tracking-[0.25em] mb-6 translate-x-[0.125em]"
          style={{
            background: "linear-gradient(135deg, #BF953F 0%, #FCF6BA 30%, #B38728 70%, #FBF5B7 85%, #AA771C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.06))",
          }}
        >
          NEXIVO
        </h1>

        {/* Elegant Thin Progress Bar */}
        <div
          ref={progressBarRef}
          className="w-48 h-[2px] bg-amber-900/10 rounded-full overflow-hidden mb-3 relative"
        >
          <div
            className="h-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Counter Text */}
        <div
          ref={counterRef}
          className="font-body text-sm font-semibold tracking-[0.2em] text-[#B38728] opacity-90 pl-1"
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
