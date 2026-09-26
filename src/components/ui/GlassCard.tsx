import React from 'react';

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  subtle?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  subtle = false,
}) => {
  return (
    <div
      className={`${
        subtle ? 'glass-inspo-card-subtle' : 'glass-inspo-card'
      } p-6 sm:p-8 md:p-10 transition-all duration-300 relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
