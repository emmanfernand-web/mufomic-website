import React from 'react';
import Link from 'next/link';
import { mainNavItems, socialLinks } from '../../data/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1C1C1C] border-t border-white/10 text-slate-300 pt-12 pb-4 overflow-hidden">
      {/* Accent glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#C90A20]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main 3-Column Header Bar: Left (Big Logotype), Center (Horizontal Nav), Right (Social Media) */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: Extra Large Logotype placed to the left */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/images/logo/footer-logotype.png"
            alt="MUFOMIC UMN"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Center: Horizontal Navigation Menu */}
        <div className="flex-1 flex justify-center">
          <nav className="flex items-center gap-6 sm:gap-8 text-sm font-semibold text-[#F8F7F2]/80">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[#F36416] transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F36416] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Social Media Buttons placed to the right */}
        <div className="flex-1 flex justify-center md:justify-end items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 hover:text-white border border-white/10 hover:border-white/30 text-xs text-[#F8F7F2] transition-all group"
            >
              <img
                src={social.iconName}
                alt={social.platform}
                className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="font-semibold">{social.platform}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Full-width Divider Line (Spans full left-to-right) */}
      <div className="w-full border-t border-white/10 mt-10" />

      {/* Centered Copyright Notice with compact bottom padding */}
      <div className="w-full text-center pt-3 pb-1 relative z-10">
        <p className="text-xs text-[#F8F7F2]/50">
          © {new Date().getFullYear()} MUFOMIC UMN. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
