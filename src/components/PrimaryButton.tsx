import React from "react";

const baseClasses =
  "p-5 rounded-full backdrop-blur-lg border border-white/30 bg-gradient-to-tr from-black/50 to-black/40 shadow-lg lg:text-base text-sm " +
  "hover:shadow-2xl hover:shadow-white/20 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer " +
  "hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden";

const PrimaryButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className = "", ...props }, ref) => (
    <button ref={ref} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  )
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
