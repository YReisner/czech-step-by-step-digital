import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  disabled?: boolean;
}

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
  secondary: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  outline: "border-2 border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600",
  ghost: "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
};

export const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
