import React from 'react';
import Image from 'next/image';

interface AboutIntroSectionProps {
  showButton?: boolean;
  bgImage?: string;
}

/* Three taped snapshots that fan out on hover */
const SNAPSHOTS = [
  { src: '/images/about-photos/photo20.webp', alt: 'Penonton Mufogigs', className: 'about-snap-1', caption: 'crowd' },
  { src: '/images/about-photos/photo14.webp', alt: 'Anggota MUFOMIC berfoto bersama', className: 'about-snap-2', caption: 'family' },
  { src: '/images/about-photos/photo3.webp', alt: 'Gitaris MUFOMIC tampil di panggung', className: 'about-snap-3', caption: 'live' },
];

const FACTS = [
  { value: '2013', label: 'Tahun berdiri' },
  { value: '100+', label: 'Band terbentuk' },
  { value: 'UKM', label: 'Seni & budaya, format band' },
];

export const AboutIntroSection: React.FC<AboutIntroSectionProps> = ({
  showButton = false,
  bgImage = '/images/background/home-about-bg.webp',
}) => {
  return (
    <section id="about-intro" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] via-[#1C1C1C]/55 to-[#1C1C1C]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_80%_50%,rgba(82,120,162,0.18),transparent_70%)]" />
      </div>
      <div className="grain-overlay absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        {/* ── Left: copy ── */}
        <div className="event-reveal lg:col-span-6">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F36416]">
            {'//'} Tentang Kami
          </p>
          <img
            src="/images/logo/logo-mufomic-about.png"
            alt="MUFOMIC — Multimedia Face of Music"
            loading="lazy"
            className="mt-5 h-16 sm:h-20 md:h-24 w-auto object-contain max-w-full"
          />

          <div className="mt-8 space-y-4 text-[#F8F7F2]/75 text-sm sm:text-base leading-relaxed max-w-xl">
            <p className="about-dropcap">
              Multimedia Face of Music (Mufomic) merupakan salah satu UKM yang bergerak di bidang seni dan budaya dan memiliki format band.
              Salah satu visi Mufomic adalah untuk menjadi wadah bagi mahasiswa UMN yang senang bermusik, terutama di dalam band, dan menjadi wadah untuk berekspresi dan saling mengapresiasi karya satu sama lain.
            </p>
            <p>
              MUFOMIC sendiri berdiri pada tahun 2013. Sejak tahun 2013, Mufomic telah membentuk lebih dari 100 band untuk bermusik baik di dalam maupun di luar kampus.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 max-w-xl border-y border-[#F8F7F2]/15">
            {FACTS.map(({ value, label }, i) => (
              <div key={label} className={`py-4 ${i > 0 ? 'pl-4 sm:pl-6 border-l border-[#F8F7F2]/15' : ''}`}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl sm:text-4xl text-[#F8F7F2] leading-none">{value}</dd>
                <dd className="mt-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#F8F7F2]/50 leading-snug">{label}</dd>
              </div>
            ))}
          </dl>

          {showButton && (
            <a
              href="/about"
              className="hero-cta group mt-10 inline-flex items-center gap-3 bg-[#C90A20] text-[#F8F7F2] font-mono font-bold uppercase text-xs sm:text-sm tracking-[0.15em] px-6 py-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <span>Selengkapnya</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="square" />
              </svg>
            </a>
          )}
        </div>

        {/* ── Right: snapshot pile ── */}
        <div className="event-reveal lg:col-span-6 flex justify-center">
          <div className="about-snaps group relative w-full max-w-[26rem] sm:max-w-[30rem] aspect-[5/4]">
            {SNAPSHOTS.map((snap) => (
              <figure
                key={snap.src}
                className={`about-snap ${snap.className} absolute w-[62%] bg-[#F8F7F2] p-2 pb-8 sm:p-3 sm:pb-10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1C1C1C]">
                  <Image
                    src={snap.src}
                    alt={snap.alt}
                    fill
                    sizes="(min-width: 1024px) 300px, 60vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="absolute bottom-2 sm:bottom-3 left-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1C1C1C]/70">
                  #{snap.caption}
                </figcaption>
                <span className="tape-strip absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 rotate-[4deg]" aria-hidden="true" />
              </figure>
            ))}
            <span className="event-stamp absolute -bottom-4 right-0 sm:-right-4 z-10 font-mono font-bold uppercase text-xs tracking-[0.2em] text-[#C90A20] bg-[#1C1C1C]/80 px-3 py-1.5">
              Est. 2013
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
