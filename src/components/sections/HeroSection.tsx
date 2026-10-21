'use client';

import React, { useRef, useEffect, useState, useCallback, useSyncExternalStore } from 'react';
import Button from '../ui/Button';

const STATS = [
  { value: '10+', label: 'Tahun Berkarya' },
  { value: '11', label: 'Divisi Band & Kreatif' },
  { value: '100+', label: 'Band Terbentuk' },
];

const MARQUEE_ITEMS = ['Mufogigs', 'Live Music', 'UMN', 'Est. 2013', 'Multimedia Face of Music'];

/* Base spin speed of the record, in degrees per millisecond (~33⅓ rpm feel) */
const BASE_SPEED = 0.12;

/* ─── prefers-reduced-motion as an external store (false on the server) ── */
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const subscribeReducedMotion = (cb: () => void) => {
  const mql = window.matchMedia(REDUCED_MOTION);
  mql.addEventListener('change', cb);
  return () => mql.removeEventListener('change', cb);
};
const getReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;

/* ─── Animated equalizer bars (paused when the record stops) ── */
const EqBars: React.FC<{ playing: boolean }> = ({ playing }) => (
  <span className={`hero-eq flex items-end gap-[3px] h-4 ${playing ? '' : 'is-paused'}`} aria-hidden="true">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className="hero-eq-bar block w-[3px] rounded-full bg-[#F36416]" />
    ))}
  </span>
);

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const recordRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLSpanElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const parallaxFrame = useRef(0);

  /* Auto-spin unless the user prefers reduced motion; the toggle overrides it */
  const prefersReduced = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const [userPlaying, setUserPlaying] = useState<boolean | null>(null);
  const playing = userPlaying ?? !prefersReduced;
  const playingRef = useRef(playing);

  /* Record physics state, kept in refs so the RAF loop never re-renders */
  const angle = useRef(0);
  const velocity = useRef(BASE_SPEED);
  const drag = useRef<{ active: boolean; lastAngle: number; lastTime: number }>({
    active: false,
    lastAngle: 0,
    lastTime: 0,
  });

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  /* ── Spin loop: eases velocity toward target speed, runs only while visible ── */
  useEffect(() => {
    const section = sectionRef.current;
    const record = recordRef.current;
    if (!section || !record) return;

    let raf = 0;
    let last = performance.now();
    let visible = true;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      if (!drag.current.active) {
        const target = playingRef.current ? BASE_SPEED : 0;
        velocity.current += (target - velocity.current) * Math.min(dt * 0.004, 1);
        angle.current += velocity.current * dt;
      }
      if (drag.current.active || Math.abs(velocity.current) > 0.0005) {
        record.style.transform = `rotate(${angle.current}deg)`;
      }
      if (visible) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        last = performance.now();
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(tick);
      }
    });
    io.observe(section);
    raf = requestAnimationFrame(tick);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  /* ── Drag-to-scratch ── */
  const pointerAngle = (e: React.PointerEvent) => {
    const rect = recordRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI;
  };

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { active: true, lastAngle: pointerAngle(e), lastTime: performance.now() };
    velocity.current = 0;
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const now = performance.now();
    const a = pointerAngle(e);
    let delta = a - drag.current.lastAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    angle.current += delta;
    velocity.current = delta / Math.max(now - drag.current.lastTime, 1);
    drag.current.lastAngle = a;
    drag.current.lastTime = now;
  }, []);

  const onPointerUp = useCallback(() => {
    drag.current.active = false;
  }, []);

  /* ── Mouse parallax: writes --px / --py (-1…1) once per frame, only on the
     two elements that use them, so the rest of the section never restyles ── */
  const onSectionMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse' || parallaxFrame.current) return;
    const { clientX, clientY } = e;
    parallaxFrame.current = requestAnimationFrame(() => {
      parallaxFrame.current = 0;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const px = (((clientX - rect.left) / rect.width) * 2 - 1).toFixed(3);
      const py = (((clientY - rect.top) / rect.height) * 2 - 1).toFixed(3);
      for (const el of [ghostRef.current, deckRef.current]) {
        el?.style.setProperty('--px', px);
        el?.style.setProperty('--py', py);
      }
    });
  }, []);

  useEffect(() => () => cancelAnimationFrame(parallaxFrame.current), []);

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={onSectionMove}
      className="hero-section relative min-h-[100svh] flex flex-col pt-28 sm:pt-32 pb-28 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* ── Background: halftone photo, red wash, grain ── */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/background/home-bg.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="hero-bg-img w-full h-full object-cover object-center scale-[1.08] grayscale contrast-125 brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C90A20]/25 via-transparent to-[#5278A2]/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/70 via-[#1C1C1C]/30 to-[#1C1C1C]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_30%_50%,transparent_30%,rgba(28,28,28,0.75)_100%)]" />
      </div>
      <div className="grain-overlay absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />

      {/* ── Giant ghost type drifting behind content ── */}
      <span
        ref={ghostRef}
        aria-hidden="true"
        className="hero-ghost absolute -right-[4vw] top-[18%] -z-10 font-display uppercase leading-none text-[34vw] lg:text-[24vw] text-transparent select-none pointer-events-none"
      >
        Mfm
      </span>

      <div className="relative w-full max-w-6xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* ── Left: poster typography ── */}
        <div className="lg:col-span-7">
          <div className="hero-in hero-in-1 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#F8F7F2]/60">
            <span className="text-[#F36416]">[ MUFOMIC ]</span>
            <span>UKM Musik Universitas Multimedia Nusantara</span>
          </div>

          <h1 className="mt-5 font-display uppercase text-[#F8F7F2] leading-[0.9] tracking-[-0.01em] text-[clamp(3.6rem,13vw,8.75rem)]">
            <span className="sr-only">MUFOMIC — </span>
            <span className="hero-in hero-in-2 block">Multimedia</span>
            <span className="hero-in hero-in-3 flex items-center gap-4 sm:gap-6">
              <span className="text-outline">Face of</span>
              <span className="hero-sticker hidden sm:inline-flex flex-col font-mono normal-case text-[11px] leading-tight tracking-normal px-3 py-2 bg-[#F8F7F2] text-[#1C1C1C] font-bold">
                <span>since</span>
                <span className="text-lg font-display tracking-wide">2013</span>
              </span>
            </span>
            <span className="hero-in hero-in-4 block">
              <span className="hero-tape relative inline-block px-3 sm:px-4 -ml-1 text-[#F8F7F2]">
                <span className="relative z-10">Music</span>
              </span>
            </span>
          </h1>

          <p className="hero-in hero-in-5 mt-7 max-w-lg text-[#F8F7F2]/75 text-sm sm:text-base leading-relaxed">
            Wadah kreativitas, harmoni, dan kebersamaan bagi para musisi Universitas Multimedia Nusantara. Menyatukan berbagai instrumen dan suara dalam satu panggung kreasi yang solid.
          </p>

          <div className="hero-in hero-in-6 mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Button href="/rsvp" arrow>Mufogigs Vol. 10</Button>
            <Button href="/about" variant="link">Tentang Mufomic</Button>
          </div>

          <dl className="hero-in hero-in-7 mt-10 grid grid-cols-3 max-w-lg border-t border-[#F8F7F2]/15">
            {STATS.map(({ value, label }, i) => (
              <div key={label} className={`pt-4 ${i > 0 ? 'pl-4 sm:pl-6 border-l border-[#F8F7F2]/15' : ''}`}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl sm:text-4xl text-[#F8F7F2] leading-none">{value}</dd>
                <dd className="mt-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#F8F7F2]/50 leading-snug">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Right: interactive turntable ── */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div ref={deckRef} className="hero-deck relative w-[min(78vw,22rem)] sm:w-[24rem] lg:w-full lg:max-w-[28rem] aspect-square">
            {/* Platter shadow */}
            <div className="absolute inset-[-4%] rounded-full bg-black/60 blur-2xl" aria-hidden="true" />

            {/* Record (drag to scratch) */}
            <div
              ref={recordRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              role="img"
              aria-label="Piringan hitam berlogo MUFOMIC. Seret untuk memutar."
              className="hero-record absolute inset-0 rounded-full cursor-grab active:cursor-grabbing touch-none select-none"
            >
              <div className="absolute inset-[29%] rounded-full bg-[#C90A20] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.35)]" />
              <img
                src="/images/logo/logo-mufomic-hero.webp"
                alt=""
                draggable={false}
                className="absolute inset-[32%] w-[36%] h-[36%] rounded-full object-contain pointer-events-none"
              />
              <div className="absolute left-1/2 top-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1C1C1C] ring-2 ring-[#F8F7F2]/40" />
            </div>

            {/* Static light sheen (does not rotate with the record) */}
            <div className="hero-record-sheen absolute inset-0 rounded-full pointer-events-none" aria-hidden="true" />

            {/* Tonearm */}
            <svg
              className={`hero-tonearm absolute -top-[6%] -right-[8%] w-[46%] h-auto pointer-events-none ${playing ? 'is-playing' : ''}`}
              viewBox="0 0 120 200"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="96" cy="22" r="18" fill="#2a2a2a" stroke="#F8F7F2" strokeOpacity="0.25" strokeWidth="2" />
              <circle cx="96" cy="22" r="7" fill="#F8F7F2" fillOpacity="0.8" />
              <path d="M96 22 L96 130 L70 172" stroke="#d9d6cc" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="56" y="166" width="26" height="16" rx="2" transform="rotate(32 69 174)" fill="#C90A20" />
            </svg>
          </div>

          {/* Player controls */}
          <button
            type="button"
            onClick={() => setUserPlaying(!playing)}
            aria-pressed={playing}
            className="hero-in hero-in-3 mt-8 inline-flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#F8F7F2]/70 hover:text-[#F8F7F2] border border-[#F8F7F2]/20 hover:border-[#F8F7F2]/50 px-4 py-2.5 transition-colors"
          >
            <span className="w-3 h-3 flex items-center justify-center" aria-hidden="true">
              {playing ? (
                <svg viewBox="0 0 12 12" className="w-3 h-3" fill="currentColor"><rect x="1" y="1" width="3.5" height="10" /><rect x="7.5" y="1" width="3.5" height="10" /></svg>
              ) : (
                <svg viewBox="0 0 12 12" className="w-3 h-3" fill="currentColor"><path d="M2 1l9 5-9 5z" /></svg>
              )}
            </span>
            <span>{playing ? 'Now spinning' : 'Paused'}</span>
            <EqBars playing={playing} />
          </button>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F8F7F2]/35">Drag the record to scratch</p>
        </div>
      </div>

      {/* ── Tape marquee ── */}
      <div className="hero-marquee absolute left-[-5%] right-[-5%] bottom-8 sm:bottom-10 -rotate-[1.5deg] bg-[#F8F7F2] text-[#1C1C1C] py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden" aria-hidden="true">
        <div className="animate-marquee-left" style={{ animationDuration: '30s' }}>
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <span key={i} className="flex items-center font-display uppercase text-lg sm:text-xl tracking-wide whitespace-nowrap">
                  <span className="px-5">{item}</span>
                  <span className="text-[#C90A20]">✱</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
