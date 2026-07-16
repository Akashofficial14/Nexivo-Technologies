import React from "react";
import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center font-body font-bold rounded-lg transition-all duration-300 cursor-pointer overflow-hidden relative z-10 group";

  let variantStyle = "";

  if (variant === "primary") {
    variantStyle = "bg-botanical-green text-surface px-6 py-3 shadow-[0_4px_14px_rgba(97,143,112,0.15)] hover:shadow-[0_6px_20px_rgba(97,143,112,0.3)] active:scale-95 hover:translate-y-[-1px]";
  } else if (variant === "secondary") {
    variantStyle = "bg-transparent border border-ink-black/30 text-ink-black px-6 py-3 active:scale-95";
  } else if (variant === "tertiary") {
    variantStyle = "bg-transparent text-ink-black px-0 py-1 border-b-2 border-transparent hover:border-botanical-green hover:text-botanical-green rounded-none active:scale-100";
  }

  if (variant === "tertiary") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyle} ${variantStyle} ${className}`}
        {...props}
      >
        <span className="relative z-10 flex items-center">
          {children}
          <ArrowRight className="ml-2 w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
    );
  }

  if (variant === "primary") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyle} ${variantStyle} ${className}`}
        {...props}
      >
        {/* Slide-up gradient-shifting overlay background */}
        <span className="absolute inset-x-0 bottom-0 h-0 gradient-shifting-overlay transition-all duration-500 ease-out group-hover:h-full -z-10" />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyle} ${variantStyle} ${className}`}
        {...props}
      >
        {/* Slide-up overlay background */}
        <span className="absolute inset-x-0 bottom-0 h-0 bg-ink-black/5 transition-all duration-300 ease-out group-hover:h-full -z-10" />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
