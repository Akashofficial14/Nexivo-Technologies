import React from "react";

const GlassCard = ({
  children,
  className = "",
  hoverColor = "green", // default hover styling uses botanical-green
  onClick,
  bgType = "surface", // "surface", "low", "high", "highest"
  ...props
}) => {
  let bgClass = "bg-surface";
  if (bgType === "low") bgClass = "bg-surface-container-low";
  if (bgType === "high") bgClass = "bg-surface-container-high";
  if (bgType === "highest") bgClass = "bg-surface-container-highest";

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl border border-border-muted p-6 transition-all duration-400 ease-out hover:-translate-y-1 hover:border-botanical-green group ${
        onClick ? "cursor-pointer" : ""
      } ${bgClass} ${className}`}
      {...props}
    >
      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
