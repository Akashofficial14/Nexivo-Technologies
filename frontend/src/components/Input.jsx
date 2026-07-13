import React from "react";

const Input = ({
  label,
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  className = "",
  rows = 4,
  ...props
}) => {
  const inputClasses = `w-full bg-transparent border-b border-ink-black/20 text-ink-black placeholder-secondary py-3 px-1 font-body text-body-md focus:outline-none focus:border-botanical-green transition-colors duration-300 ${className}`;

  return (
    <div className="w-full text-left">
      {label && (
        <label
          htmlFor={id}
          className="block text-[12px] font-bold uppercase tracking-wider text-secondary mb-2 font-headline"
        >
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={inputClasses}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
