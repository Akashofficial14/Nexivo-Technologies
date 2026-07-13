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
  const baseStyle = "inline-flex items-center justify-center font-body font-bold rounded-lg transition-all duration-300 cursor-pointer";
  
  let variantStyle = "";
  
  if (variant === "primary") {
    variantStyle = "bg-botanical-green text-surface px-6 py-3 hover:opacity-90 active:scale-95";
  } else if (variant === "secondary") {
    variantStyle = "bg-transparent border border-ink-black/30 text-ink-black hover:bg-ink-black/5 px-6 py-3 active:scale-95";
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
        <span>{children}</span>
        <ArrowRight className="ml-2 w-4.5 h-4.5 transition-transform duration-300 hover:translate-x-1" />
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
      {children}
    </button>
  );
};

export default Button;
