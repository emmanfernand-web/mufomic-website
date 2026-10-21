'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavItems, socialLinks } from '../../data/navigation';
import Button from '../ui/Button';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  /* ── Solid background once scrolled; hide on scroll down, reveal on scroll up ── */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        setScrolled(y > 24);
        if (Math.abs(y - lastY.current) > 6) {
          setHidden(y > lastY.current && y > 160);
          lastY.current = y;
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  /* ── Mobile menu: lock page scroll and close on Escape ── */
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const solid = scrolled || isOpen;

  return (
    <>
      <header
        className={`nav-bar fixed top-0 inset-x-0 z-50 ${hidden && !isOpen ? '-translate-y-full' : 'translate-y-0'} ${solid ? 'is-solid' : ''}`}
      >
        <nav className="relative z-10 max-w-6xl mx-auto h-16 sm:h-20 px-4 sm:px-6 md:px-8 flex items-center justify-between gap-6">
          {/* Brand */}
          <Link href="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-3" aria-label="MUFOMIC — Beranda">
            <img
              src="/images/logo/logo-mufomic-navbar.webp"
              alt=""
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-500 group-hover:rotate-[360deg]"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display uppercase text-xl sm:text-2xl tracking-wide text-[#F8F7F2]">Mufomic</span>
              <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.25em] text-[#F8F7F2]/45 mt-1">Est. 2013 — UMN</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item, i) => {
              const active = isActive(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`nav-link group relative flex items-baseline gap-1.5 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors ${active ? 'is-active text-[#F8F7F2]' : 'text-[#F8F7F2]/65 hover:text-[#F8F7F2]'}`}
                  >
                    <span className={`text-[9px] ${active ? 'text-[#F8F7F2]/80' : 'text-[#F36416]'}`}>0{i + 1}</span>
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href="/rsvp" size="sm">
                <span className="relative flex w-2 h-2" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-[#F8F7F2] animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-[#F8F7F2]" />
                </span>
                Mufogigs Vol. 10
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className={`nav-burger md:hidden relative w-11 h-11 flex items-center justify-center border transition-colors ${isOpen ? 'is-open bg-[#C90A20] border-[#C90A20]' : 'border-[#F8F7F2]/25 hover:border-[#F8F7F2]/60'}`}
            >
              <span className="nav-burger-line" />
              <span className="nav-burger-line" />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile menu (full-screen panel, sibling of the header so the
          header's slide transform doesn't become its containing block) ── */}
      <div
        id="mobile-menu"
        className={`nav-menu md:hidden fixed inset-0 z-40 bg-[#141414] flex flex-col pt-20 pb-8 px-4 sm:px-6 ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="grain-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />

        <p className="nav-menu-item relative font-mono text-[10px] uppercase tracking-[0.25em] text-[#F36416] mt-4" style={{ '--i': 0 } as React.CSSProperties}>
          {'//'} Menu
        </p>

        <ul className="relative mt-4 border-t border-[#F8F7F2]/15">
          {mainNavItems.map((item, i) => {
            const active = isActive(item.href);
            return (
              <li key={item.label} className="nav-menu-item" style={{ '--i': i + 1 } as React.CSSProperties}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`event-setlist-row group flex items-center gap-4 border-b border-[#F8F7F2]/15 py-4 px-2 ${active ? 'is-active' : ''}`}
                >
                  <span className={`font-mono text-xs w-6 ${active ? 'text-[#F8F7F2]' : 'text-[#F36416]'}`}>0{i + 1}</span>
                  <span className="flex-1 font-display uppercase text-5xl leading-none text-[#F8F7F2]">{item.label}</span>
                  <span className="font-mono text-lg text-[#F8F7F2]" aria-hidden="true">{active ? '●' : '→'}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Button
          href="/rsvp"
          arrow
          onClick={() => setIsOpen(false)}
          className="nav-menu-item mt-8 w-full justify-between!"
          style={{ '--i': mainNavItems.length + 1 } as React.CSSProperties}
        >
          Mufogigs Vol. 10
        </Button>

        <div className="nav-menu-item relative mt-auto pt-8" style={{ '--i': mainNavItems.length + 2 } as React.CSSProperties}>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#F8F7F2]/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#F8F7F2]/80"
              >
                <img src={social.iconName} alt="" className="w-3.5 h-3.5" />
                {social.platform}
              </a>
            ))}
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[#F8F7F2]/35">
            Multimedia Face of Music — Est. 2013
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
