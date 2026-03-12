import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const Card = ({ children, className = '', onClick, ...rest }: CardProps) => (
  <div onClick={onClick} {...rest} className={`bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden ${className} ${onClick ? 'cursor-pointer' : ''}`}>
    {children}
  </div>
);
