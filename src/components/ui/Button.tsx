import React from 'react';
import Link from 'next/link';

/**
 * Satu-satunya komponen tombol/CTA di website MUFOMIC.
 * Pakai komponen ini untuk SEMUA tombol supaya tampilannya seragam —
 * jangan menulis ulang class tombol manual di tiap section.
 * Panduan lengkap: lihat bagian "Tombol (Button)" di README.md.
 *
 *   <Button href="/rsvp" arrow>Mufogigs Vol. 10</Button>
 *   <Button href="https://instagram.com/mufomic" isExternal variant="outline">Instagram</Button>
 *   <Button variant="link" href="/about">Tentang Mufomic</Button>
 *   <Button onClick={...}>Kirim</Button>            // tanpa href → <button>
 */

type ButtonVariant = 'primary' | 'outline' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Tampilkan panah → yang bergeser saat hover */
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type LinkProps = BaseProps & {
  href: string;
  /** Buka di tab baru (untuk link ke luar website) */
  isExternal?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>;

type NativeButtonProps = BaseProps & {
  href?: undefined;
  isExternal?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export type ButtonProps = LinkProps | NativeButtonProps;

const BASE =
  'group relative inline-flex items-center justify-center gap-3 font-mono font-bold uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F36416] disabled:opacity-50 disabled:pointer-events-none';

const TEXT: Record<ButtonSize, string> = {
  sm: 'text-[11px]',
  md: 'text-xs sm:text-sm',
  lg: 'text-sm sm:text-base',
};

const PADDING: Record<ButtonSize, string> = {
  sm: 'px-4 py-2.5',
  md: 'px-6 py-4',
  lg: 'px-8 py-5',
};

const VARIANTS: Record<ButtonVariant, string> = {
  // Merah solid dengan bayangan keras krem → oranye saat hover
  primary:
    'bg-[#C90A20] text-[#F8F7F2] shadow-[5px_5px_0_#F8F7F2] hover:-translate-y-1 hover:shadow-[8px_9px_0_#F36416]',
  // Garis krem, terisi krem saat hover
  outline:
    'border border-[#F8F7F2]/40 text-[#F8F7F2] shadow-[5px_5px_0_rgba(248,247,242,0.15)] hover:-translate-y-1 hover:bg-[#F8F7F2] hover:text-[#1C1C1C] hover:shadow-[8px_9px_0_#C90A20]',
  // Teks bergaris bawah, garis oranye menyapu saat hover
  link:
    'text-[#F8F7F2] before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-[#F8F7F2]/40 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#F36416] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100',
};

const Arrow = () => (
  <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="square" />
  </svg>
);

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', size = 'md', arrow = false, className = '', children, href, isExternal, ...rest } = props;
  const classes = `${BASE} ${TEXT[size]} ${variant === 'link' ? 'py-2' : PADDING[size]} ${VARIANTS[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (href !== undefined) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...anchorProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
};

export default Button;
