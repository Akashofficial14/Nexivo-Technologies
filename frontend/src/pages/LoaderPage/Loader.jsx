import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    let currentProgress = 0;
    let timerId = null;

    // Generate random pause points on mount (e.g. 3 to 4 random percentages between 15 and 90)
    const pausePoints = [];
    const numPauses = Math.floor(Math.random() * 2) + 3; // 3 or 4 random pauses
    while (pausePoints.length < numPauses) {
      const point = Math.floor(Math.random() * 75) + 15;
      if (!pausePoints.includes(point)) {
        pausePoints.push(point);
      }
    }
    // Sort pause points ascending
    pausePoints.sort((a, b) => a - b);
    // Add a classic high-percent stall right before completion (e.g. 98% or 99%)
    pausePoints.push(Math.random() > 0.5 ? 98 : 99);

    const tick = () => {
      if (currentProgress >= 100) {
        setProgress(100);
        return;
      }

      // Check if we hit one of our dynamic pause points
      if (pausePoints.includes(currentProgress)) {
        // Remove the pause point so we don't hit it again
        const index = pausePoints.indexOf(currentProgress);
        if (index > -1) {
          pausePoints.splice(index, 1);
        }

        // Stall/pause at this point for a random duration (e.g. 400ms to 900ms)
        const pauseDuration = Math.random() * 500 + 400;
        timerId = setTimeout(() => {
          currentProgress++;
          setProgress(currentProgress);
          tick();
        }, pauseDuration);
      } else {
        // Smoothly increment by 1
        // Random tick speed to keep it organic (e.g., 8ms to 25ms)
        const tickSpeed = Math.random() * 17 + 8;
        timerId = setTimeout(() => {
          currentProgress++;
          setProgress(currentProgress);
          tick();
        }, tickSpeed);
      }
    };

    tick();

    return () => {
      if (timerId) clearTimeout(timerId);
    };
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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a0f0a] select-none overflow-hidden"
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
          className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mb-3 relative"
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
