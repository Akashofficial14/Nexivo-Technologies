import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete, onExitStart }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fade in the video when mounted for a premium entrance
    gsap.fromTo(
      videoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Fallback animation interval in case video fails to load or play
    let fallbackInterval = null;
    let fallbackProgress = 0;

    const startFallback = () => {
      if (fallbackInterval) return; // Prevent duplicate interval
      fallbackInterval = setInterval(() => {
        fallbackProgress += Math.floor(Math.random() * 3) + 1;
        if (fallbackProgress >= 100) {
          fallbackProgress = 100;
          clearInterval(fallbackInterval);
          handleComplete();
        }
        setProgress(fallbackProgress);
      }, 50);
    };

    // If video is loaded, we track progress via timeupdate.
    // However, if the video metadata doesn't load within 1.5s, trigger the fallback.
    const checkVideoLoaded = setTimeout(() => {
      if (videoRef.current && (!videoRef.current.duration || videoRef.current.paused)) {
        startFallback();
      }
    }, 1500);

    return () => {
      clearTimeout(checkVideoLoaded);
      if (fallbackInterval) clearInterval(fallbackInterval);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      if (duration) {
        const percent = Math.min(100, Math.floor((currentTime / duration) * 100));
        // We only increase progress to avoid stutter if timeupdate goes backwards slightly
        setProgress((prev) => Math.max(prev, percent));
      }
    }
  };

  const handleComplete = () => {
    setProgress(100);
    if (onExitStart) {
      onExitStart();
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      },
    });

    // Fade out and slide the container upwards smoothly
    tl.to(containerRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.inOut",
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060814] select-none overflow-hidden"
      style={{
        width: "100vw",
        height: "100dvh",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        src="/loader.mp4"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleComplete}
      />

      {/* Premium Minimal Progress Counter */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <div className="font-headline text-2xl font-bold tracking-[0.2em] text-[#FCF6BA]">
          {progress}%
        </div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9922A] to-transparent rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
