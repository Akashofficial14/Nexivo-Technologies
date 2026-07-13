import React from "react";

const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded bg-ink-black/5 text-secondary font-label-caps text-[10px] font-bold uppercase tracking-widest select-none font-headline ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
