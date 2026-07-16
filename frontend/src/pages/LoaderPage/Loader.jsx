import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);
  const logoIconRef = useRef(null);
  const solutionsRef = useRef(null);
  const taglineRef = useRef(null);

  const letters = "NEXIVO".split("");

  useEffect(() => {
    let currentProgress = 0;
    let timerId = null;

    // Entrance timeline for all elements matching the logo layout
    const tlEntrance = gsap.timeline();
    
    // 1. Fade & slide down the circular N icon
    tlEntrance.to(".logo-icon", {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: "power3.out",
    });

    // 2. Stagger letters entry (slide left, scale, skew)
    tlEntrance.to(".logo-char", {
      opacity: 1,
      x: 0,
      scaleX: 1,
      skewX: 0,
      stagger: 0.08,
      duration: 1.0,
      ease: "power4.out",
    }, "-=0.6");

    // 3. Fade & slide up the SOLUTIONS subtitle
    tlEntrance.to(".subtitle-solutions", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5");

    // 4. Fade & slide up the TAGLINE
    tlEntrance.to(".tagline-impact", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5");

    // Generate random pause points on mount (e.g. 3 to 4 random percentages between 15 and 90)
    const pausePoints = [];
    const numPauses = Math.floor(Math.random() * 2) + 3; // 3 or 4 random pauses
    while (pausePoints.length < numPauses) {
      const point = Math.floor(Math.random() * 75) + 15;
      if (!pausePoints.includes(point)) {
        pausePoints.push(point);
      }
    }
    pausePoints.sort((a, b) => a - b);
    pausePoints.push(Math.random() > 0.5 ? 98 : 99);

    const tick = () => {
      if (currentProgress >= 100) {
        setProgress(100);
        return;
      }

      if (pausePoints.includes(currentProgress)) {
        const index = pausePoints.indexOf(currentProgress);
        if (index > -1) {
          pausePoints.splice(index, 1);
        }

        const pauseDuration = Math.random() * 500 + 400;
        timerId = setTimeout(() => {
          currentProgress++;
          setProgress(currentProgress);
          tick();
        }, pauseDuration);
      } else {
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
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) {
            onComplete();
          }
        },
      });

      // 1. Fade and slide up all layout blocks
      tl.to(
        [
          logoIconRef.current,
          logoRef.current,
          solutionsRef.current,
          taglineRef.current,
          counterRef.current,
          progressBarRef.current,
        ],
        {
          opacity: 0,
          y: -40,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.in",
        }
      );

      // 2. Slide the entire container upwards
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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0E1310] select-none overflow-hidden"
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
      <div className="flex flex-col items-center max-w-md w-full px-6 text-center">
        
        {/* Gold Circular N Icon */}
        <div ref={logoIconRef} className="logo-icon opacity-0 -translate-y-4 mb-4">
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="42" stroke="url(#gold-gradient-loader)" strokeWidth="4" />
            <path 
              d="M34 68V32H44L56 56V32H66V68H56L44 44V68H34Z" 
              fill="url(#gold-gradient-loader)" 
            />
            <defs>
              <linearGradient id="gold-gradient-loader" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#BF953F" />
                <stop offset="25%" stopColor="#FCF6BA" />
                <stop offset="50%" stopColor="#B38728" />
                <stop offset="75%" stopColor="#FBF5B7" />
                <stop offset="100%" stopColor="#AA771C" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated Letter Reveal Logo (NEXIVO with gold X) */}
        <h1
          ref={logoRef}
          className="font-headline text-5xl md:text-[60px] font-extrabold tracking-[0.25em] mb-3 translate-x-[0.125em] flex justify-center overflow-hidden"
          style={{
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.06))",
          }}
        >
          {letters.map((char, index) => (
            <span
              key={index}
              className="logo-char inline-block opacity-0 -translate-x-12 scale-x-50 -skew-x-[15deg] origin-left"
              style={
                index === 2
                  ? {
                      backgroundImage:
                        "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : { color: "#fbf9f2" }
              }
            >
              {char}
            </span>
          ))}
        </h1>

        {/* SOLUTIONS subtitle with gold dash lines */}
        <div 
          ref={solutionsRef} 
          className="subtitle-solutions opacity-0 translate-y-3 flex items-center gap-3 w-full justify-center mb-1.5"
        >
          <div className="h-[1.5px] w-6 bg-gradient-to-r from-transparent to-[#BF953F]"></div>
          <span className="font-headline text-[10px] md:text-xs font-bold tracking-[0.45em] text-[#fbf9f2] translate-x-[0.22em]">
            SOLUTIONS
          </span>
          <div className="h-[1.5px] w-6 bg-gradient-to-l from-transparent to-[#BF953F]"></div>
        </div>

        {/* Tagline FROM IDEAS TO IMPACT */}
        <div 
          ref={taglineRef} 
          className="tagline-impact opacity-0 translate-y-3 font-headline text-[8px] md:text-[9px] font-bold tracking-[0.3em] text-[#FCF6BA]/90 mb-12 translate-x-[0.15em]"
        >
          FROM IDEAS TO IMPACT
        </div>

        {/* Elegant Thin Progress Bar */}
        <div
          ref={progressBarRef}
          className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mb-3 relative"
        >
          <div
            className="h-full bg-[#fbf9f2] transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Counter Text */}
        <div
          ref={counterRef}
          className="font-body text-xs font-semibold tracking-[0.2em] text-[#fbf9f2] opacity-80 pl-1"
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
