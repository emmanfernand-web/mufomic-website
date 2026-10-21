import React from 'react';
import Link from 'next/link';
import { mainNavItems, socialLinks } from '../../data/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#141414] text-[#F8F7F2] overflow-hidden">
      <div className="grain-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* ── Red tape edge ── */}
      <div className="relative h-2 bg-[#C90A20]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <img
              src="/images/logo/footer-logotype.png"
              alt="MUFOMIC — Multimedia Face of Music"
              loading="lazy"
              className="h-24 sm:h-28 w-auto object-contain"
            />
            <p className="mt-6 max-w-sm text-sm text-[#F8F7F2]/60 leading-relaxed">
              UKM musik Universitas Multimedia Nusantara. Wadah bagi mahasiswa UMN untuk bermusik, berekspresi, dan saling mengapresiasi karya.
            </p>
            <Link
              href="/rsvp"
              className="hero-cta group mt-8 inline-flex items-center gap-3 bg-[#C90A20] text-[#F8F7F2] font-mono font-bold uppercase text-xs tracking-[0.15em] px-5 py-3.5 transition-transform duration-300 hover:-translate-y-1"
            >
              Mufogigs Vol. 10
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-3" aria-label="Footer">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F36416] mb-4">{'//'} Navigasi</h2>
            <ul className="border-t border-[#F8F7F2]/15">
              {mainNavItems.map((item, i) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="event-setlist-row group flex items-center gap-4 border-b border-[#F8F7F2]/15 py-3 px-2"
                  >
                    <span className="font-mono text-[10px] text-[#F36416] group-hover:text-[#F8F7F2] transition-colors">0{i + 1}</span>
                    <span className="flex-1 font-display uppercase text-2xl leading-none">{item.label}</span>
                    <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="lg:col-span-4">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F36416] mb-4">{'//'} Ikuti Kami</h2>
            <ul className="border-t border-[#F8F7F2]/15">
              {socialLinks.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-setlist-row group flex items-center gap-4 border-b border-[#F8F7F2]/15 py-3 px-2"
                  >
                    <img src={social.iconName} alt="" loading="lazy" className="w-5 h-5 object-contain" />
                    <span className="flex-1 font-display uppercase text-2xl leading-none">{social.platform}</span>
                    <span className="font-mono text-sm text-[#F8F7F2]/50 group-hover:text-[#F8F7F2] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Giant outline signature ── */}
      <p
        className="footer-signature relative mt-16 font-display uppercase leading-[0.8] text-center text-transparent select-none whitespace-nowrap text-[23vw] lg:text-[17rem] -mb-[2vw]"
        aria-hidden="true"
      >
        Mufomic
      </p>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-[#F8F7F2]/15 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-5 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F8F7F2]/45">
          <p>© {new Date().getFullYear()} MUFOMIC UMN. All rights reserved.</p>
          <a href="#" className="group inline-flex items-center gap-2 hover:text-[#F8F7F2] transition-colors">
            Kembali ke atas
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
