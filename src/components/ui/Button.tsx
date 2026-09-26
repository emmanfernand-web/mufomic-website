import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient-1' | 'gradient-2' | 'gradient-red' | 'glass-pill' | 'outline-pill';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'gradient-1',
  size = 'md',
  href,
  isExternal = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500/50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] shadow-lg';

  const sizes = {
    sm: 'px-5 py-2.5 text-xs gap-2',
    md: 'px-7 py-3 text-sm gap-2.5',
    lg: 'px-9 py-4 text-base sm:text-lg gap-3',
  };

  const variants = {
    'gradient-1': 'btn-gradient-inspo-1',
    'gradient-2': 'btn-gradient-inspo-2',
    'gradient-red': 'btn-gradient-inspo-red',
    'glass-pill': 'bg-white/15 hover:bg-white/25 text-[#F8F7F2] backdrop-blur-xl border border-white/25 shadow-xl',
    'outline-pill': 'bg-transparent border border-white/30 hover:border-white text-[#F8F7F2] hover:bg-white/10',
  };

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
