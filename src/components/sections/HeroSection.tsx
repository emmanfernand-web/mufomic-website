'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

/* ─── Floating music-note particle ─────────────────────────── */
const PARTICLES = [
  { icon: '♩', top: '18%', left: '8%',  delay: '0s',   duration: '7s',  size: 'text-xl',  opacity: 'opacity-20' },
  { icon: '♪', top: '65%', left: '5%',  delay: '1.4s', duration: '9s',  size: 'text-lg',  opacity: 'opacity-15' },
  { icon: '♫', top: '30%', right: '6%', delay: '0.7s', duration: '8s',  size: 'text-2xl', opacity: 'opacity-20' },
  { icon: '♬', top: '70%', right: '8%', delay: '2.1s', duration: '10s', size: 'text-xl',  opacity: 'opacity-15' },
  { icon: '♩', top: '50%', left: '3%',  delay: '3s',   duration: '6s',  size: 'text-sm',  opacity: 'opacity-10' },
  { icon: '♪', top: '12%', right: '12%',delay: '1.8s', duration: '11s', size: 'text-lg',  opacity: 'opacity-15' },
];

/* ─── Animated waveform bars ────────────────────────────────── */
const WaveformBars: React.FC = () => (
  <div className="hero-waveform flex items-end gap-[3px] h-7" aria-hidden="true">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <span
        key={i}
        className="hero-wave-bar block w-[3px] rounded-full"
      />
    ))}
  </div>
);

export const HeroSection: React.FC = () => {
  const cardRef   = useRef<HTMLDivElement>(null);
  const bgRef     = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Mouse-tracking card tilt + spotlight ── */
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const rotX =  ((y - cy) / cy) * -8;   // max ±8 deg
    const rotY =  ((x - cx) / cx) *  8;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.01,1.01,1.01)`;
    card.style.setProperty('--mx', `${(x / rect.width)  * 100}%`);
    card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  }, []);

  /* ── Parallax background on scroll ── */
  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    // Progressive enhancement — skip if scroll-driven animations are supported natively via CSS
    if (CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const ratio = scrollY / (section.offsetHeight + window.innerHeight);
      bg.style.transform = `scale(1.08) translateY(${ratio * 80}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-section relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* ── Background image with CSS scroll-driven parallax ── */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          ref={bgRef}
          src="/images/background/home-bg.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="hero-bg-img w-full h-full object-cover object-center scale-[1.08] filter brightness-75 contrast-110"
        />
        {/* Multi-stop gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/80 via-[#1C1C1C]/55 to-[#1C1C1C] -z-10" />
        {/* Vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(28,28,28,0.6)_100%)] -z-10" />
      </div>

      {/* ── Ambient color orbs ── */}
      <div className="hero-orb-red   absolute top-1/4  left-1/4  w-[500px] h-[500px] bg-[#C90A20]/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="hero-orb-blue  absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#5278A2]/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="hero-orb-orange absolute top-3/4 left-1/2  w-[300px] h-[300px] bg-[#F36416]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* ── Floating music notes ── */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`hero-particle-${i + 1} pointer-events-none select-none absolute ${p.size} ${p.opacity} text-[#F8F7F2]`}
          style={{
            top: p.top,
            left: 'left' in p ? (p as typeof p & { left?: string }).left : undefined,
            right: 'right' in p ? (p as typeof p & { right?: string }).right : undefined,
          }}
        >
          {p.icon}
        </span>
      ))}

      {/* ── Horizontal scan line accent ── */}
      <div className="hero-scan-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none -z-10" />

      {/* ── Main grid ── */}
      <div className="hero-content w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

        {/* Left: logo with floating ring decoration */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
          {/* Outer glow ring */}
          <div className="hero-logo-ring absolute inset-0 rounded-full pointer-events-none" aria-hidden="true" />
          <img
            src="/images/logo/logo-mufomic-hero.webp"
            alt="MUFOMIC Logo Hero"
            className="hero-logo relative w-4/5 sm:w-3/4 lg:w-full max-w-md h-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Right: interactive glass card */}
        <div className="lg:col-span-7">
          <div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="hero-glass-card glass-inspo-card relative p-7 sm:p-10 md:p-12 space-y-6 sm:space-y-8 shadow-2xl overflow-hidden"
            style={{ transition: 'transform 0.25s ease, box-shadow 0.25s ease', willChange: 'transform' }}
          >
            {/* Spotlight layer (follows mouse via CSS vars) */}
            <div
              className="hero-spotlight pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
              aria-hidden="true"
            />

            {/* Top edge highlight shimmer */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" aria-hidden="true" />

            {/* Badge row with waveform */}
            <div className="hero-badge-row flex items-center gap-3">
              <Badge variant="inspo">MUFOMIC UMN</Badge>
              <WaveformBars />
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#F8F7F2] leading-[1.15]">
                Multimedia
                <br />
                <span className="hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-[#5278A2] via-[#C90A20] to-[#F36416]">
                  Face of Music
                </span>
              </h1>
              <p className="hero-desc text-[#F8F7F2]/80 text-sm sm:text-base leading-relaxed max-w-prose">
                Wadah kreativitas, harmoni, dan kebersamaan bagi para musisi Universitas Multimedia Nusantara. Menyatukan berbagai instrumen dan suara dalam satu panggung kreasi yang solid.
              </p>
            </div>

            {/* Stats strip */}
            <div className="hero-stats flex gap-6 py-3 border-y border-white/10">
              {[
                { value: '10+', label: 'Tahun Berkarya' },
                { value: '11', label: 'Divisi Band & Kreatif' },
                { value: '100+', label: 'Alumni' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-lg sm:text-xl font-black text-[#F36416]">{value}</span>
                  <span className="text-[10px] sm:text-xs text-[#F8F7F2]/55 uppercase tracking-widest">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="hero-ctas pt-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="gradient-1"
                size="lg"
                href="/rsvp"
                className="w-full relative overflow-hidden group shadow-[0_0_28px_rgba(243,100,22,0.55)] hover:shadow-[0_0_42px_rgba(243,100,22,0.85)] hover:scale-105 transition-all duration-300"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer pointer-events-none" />
                <span className="relative z-10 font-bold">Mufogigs Vol. 10</span>
              </Button>
              <Button
                variant="glass-pill"
                size="lg"
                href="/about"
                className="w-full hover:scale-105 transition-all duration-300"
              >
                Tentang Mufomic
              </Button>
            </div>

            {/* Bottom corner accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#C90A20]/20 via-[#F36416]/10 to-transparent rounded-tl-[4rem] pointer-events-none" aria-hidden="true" />
          </div>
        </div>

      </div>

      {/* ── Scroll-cue chevron ── */}
      <div className="hero-scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">scroll</span>
        <svg className="hero-chevron w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
