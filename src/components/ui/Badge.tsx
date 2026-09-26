import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'inspo' | 'red' | 'blue' | 'orange' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'inspo',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200';

  const variants = {
    inspo: 'bg-white/12 border border-white/30 text-[#F8F7F2] backdrop-blur-md px-4 py-1.5',
    red: 'bg-[#C90A20]/80 text-[#F8F7F2] border border-[#C90A20] backdrop-blur-md px-3.5 py-1',
    blue: 'bg-[#5278A2]/80 text-[#F8F7F2] border border-[#5278A2] backdrop-blur-md px-3.5 py-1',
    orange: 'bg-[#F36416]/80 text-[#F8F7F2] border border-[#F36416] backdrop-blur-md px-3.5 py-1',
    outline: 'bg-transparent text-[#F8F7F2] border border-white/25 px-3.5 py-1',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
