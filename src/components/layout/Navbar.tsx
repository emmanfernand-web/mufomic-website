'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mainNavItems } from '../../data/navigation';
import Button from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-50 transition-all">
      <nav className="relative bg-[#1C1C1C]/80 backdrop-blur-2xl px-6 py-3 rounded-full flex items-center justify-between border border-white/15 shadow-2xl">
        {/* Brand Logo (Sisi Kiri) */}
        <Link href="/" className="flex items-center group z-10">
          <img
            src="/images/logo/logo-mufomic-navbar.webp"
            alt="MUFOMIC Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links (Presisi Tepat di Tengah Container) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#F8F7F2]/80 absolute left-1/2 -translate-x-1/2">
          {mainNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors py-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F36416] group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Toggle (Sisi Kanan) */}
        <div className="flex items-center gap-3 z-10">
          <Button
            variant="gradient-1"
            size="sm"
            href="/rsvp"
            className="hidden sm:inline-flex relative overflow-hidden group shadow-[0_0_15px_rgba(243,100,22,0.5)] hover:shadow-[0_0_25px_rgba(243,100,22,0.8)] transition-all"
          >
            {/* Light Sweep / Shimmer Overlay */}
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer pointer-events-none" />
            <span className="relative z-10 font-bold">Mufogigs Vol. 10</span>
          </Button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-full bg-white/10 border border-white/15 text-[#F8F7F2] hover:bg-white/20 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-[#1C1C1C]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-2xl space-y-3">
          {mainNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-[#F8F7F2] hover:bg-white/10 rounded-2xl text-sm font-semibold transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10">
            <Button
              variant="gradient-1"
              size="sm"
              href="/rsvp"
              className="w-full relative overflow-hidden group shadow-[0_0_15px_rgba(243,100,22,0.5)]"
              onClick={() => setIsOpen(false)}
            >
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer pointer-events-none" />
              <span className="relative z-10 font-bold">Mufogigs Vol. 10</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;