'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

interface DivisionRole {
  id: string;
  category: 'band' | 'creative';
  categoryLabel: string;
  buttonLabel: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  photoSrc: string;
  gradient: string;
  accentColor: string;
}

export const AboutDivisionsSection: React.FC = () => {
  const rolesData: DivisionRole[] = [
    // 5 Band Division Roles
    {
      id: 'vocalist',
      category: 'band',
      categoryLabel: 'Band Division',
      buttonLabel: 'VOKALIS',
      title: 'Vocalist',
      shortDesc: 'Membawa melodi utama, karakter vokal, harmoni suara, dan energi panggung pertunjukan.',
      fullDesc: 'Vocalist bertanggung jawab sebagai ujung tombak pertunjukan panggung MUFOMIC, membawakan lirik, melodi, ekspresi emosional lagu, serta menjaga harmoni ensemble vokal.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#5278A2] via-[#C90A20] to-[#F36416]',
      accentColor: '#5278A2',
    },
    {
      id: 'guitarist',
      category: 'band',
      categoryLabel: 'Band Division',
      buttonLabel: 'GITARIS',
      title: 'Guitarist',
      shortDesc: 'Mengisi ritem, melodi gitar, lead riff, chord progression, dan karakter sound akustik/elektrik.',
      fullDesc: 'Guitarist memainkan peran krusial dalam menciptakan chord progression, dinamika lagu, lead riff yang ikonik, serta fleksibilitas antar genre dari pop, rock, hingga jazz fusion.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#5278A2] to-[#C90A20]',
      accentColor: '#5278A2',
    },
    {
      id: 'bassist',
      category: 'band',
      categoryLabel: 'Band Division',
      buttonLabel: 'BASSIST',
      title: 'Bassist',
      shortDesc: 'Membangun fondasi bassline, groove ritmis, frekuensi low-end, dan dinamika musik ensemble.',
      fullDesc: 'Bassist adalah jembatan antara harmoni chord dan ritme drum, memberikan bobot low-end dan fondasi groove yang membuat musik terdengar solid dan bertenaga.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#5278A2] to-[#C90A20]',
      accentColor: '#5278A2',
    },
    {
      id: 'keyboardist',
      category: 'band',
      categoryLabel: 'Band Division',
      buttonLabel: 'KEYBOARDIST',
      title: 'Keyboardist',
      shortDesc: 'Mengatur sound piano, synthesizer, ambient pad, string ensemble, dan atmosfer aransemen.',
      fullDesc: 'Keyboardist memperkaya aransemen lagu dengan berbagai layer suara: grand piano klasik, pad atmosferik, synth leads energik, hingga brass dan string virtual.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#5278A2] to-[#F36416]',
      accentColor: '#5278A2',
    },
    {
      id: 'drummer',
      category: 'band',
      categoryLabel: 'Band Division',
      buttonLabel: 'DRUMMER',
      title: 'Drummer',
      shortDesc: 'Penjaga tempo, dinamika ritmik, beat utama, ketukan perkusif, dan energi pertunjukan.',
      fullDesc: 'Drummer adalah motor penggerak musik yang menentukan tempo, dinamika crescendo-decrescendo, ketukan groove, dan transisi antar bagian lagu.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#5278A2] via-[#C90A20] to-[#F36416]',
      accentColor: '#5278A2',
    },

    // 6 Creative Division Roles
    {
      id: 'pr',
      category: 'creative',
      categoryLabel: 'Creative Division',
      buttonLabel: 'PR',
      title: 'Public Relations (PR)',
      shortDesc: 'Mengelola komunikasi, membangun citra, dan berinteraksi dengan audiens melalui media sosial MUFOMIC.',
      fullDesc: 'Divisi PR menjadi corong utama komunikasi MUFOMIC ke publik kampus, media partner, serta penonton melalui media sosial, press release, dan kemitraan kolaboratif.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
    },
    {
      id: 'visual',
      category: 'creative',
      categoryLabel: 'Creative Division',
      buttonLabel: 'VISUAL',
      title: 'Visual Design',
      shortDesc: 'Membuat seluruh desain grafis, poster acara, feed promosi, dan menjaga identitas visual MUFOMIC.',
      fullDesc: 'Divisi Visual merancang identitas grafis yang estetis dan berkarakter untuk poster konser, feed Instagram, banner panggung, hingga merchandise resmi MUFOMIC.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#C90A20] via-[#F36416] to-[#5278A2]',
      accentColor: '#F36416',
    },
    {
      id: 'documentation',
      category: 'creative',
      categoryLabel: 'Creative Division',
      buttonLabel: 'DOKUMENTASI',
      title: 'Documentation',
      shortDesc: 'Mendokumentasikan setiap kegiatan dan panggung MUFOMIC dalam bentuk foto dan video berkualitas.',
      fullDesc: 'Divisi Documentation mengabadikan setiap momen emas MUFOMIC dari latihan di studio, keseruan backstage, hingga performa panggung live berkilau melalui fotografi dan sinematografi.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
    },
    {
      id: 'band-manager',
      category: 'creative',
      categoryLabel: 'Creative Division',
      buttonLabel: 'BAND MANAGER',
      title: 'Band Manager',
      shortDesc: 'Berperan dalam tugas administrasi, jadwal latihan, kurasi setlist, dan manajerial band MUFOMIC.',
      fullDesc: 'Band Manager memastikan kelancaran operasional setiap personil band, mulai dari penyusunan jadwal latihan, rider panggung, setlist lagu, hingga koordinasi dengan panitia event.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
    },
    {
      id: 'event',
      category: 'creative',
      categoryLabel: 'Creative Division',
      buttonLabel: 'ACARA',
      title: 'Acara / Event',
      shortDesc: 'Merancang konsep kreatif, rundown panggung, dan mengeksekusi rangkaian acara yang diselenggarakan MUFOMIC.',
      fullDesc: 'Divisi Acara bertanggung jawab penuh atas konsep acara (Mufogigs, Showcase, Audisi), penyusunan rundown panggung yang dinamis, serta flow kenyamanan penonton selama event berlangsung.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#C90A20] via-[#F36416] to-[#5278A2]',
      accentColor: '#F36416',
    },
    {
      id: 'sound-engineer',
      category: 'creative',
      categoryLabel: 'Creative Division',
      buttonLabel: 'SOUND ENGINEER',
      title: 'Sound Engineer',
      shortDesc: 'Bertanggung jawab atas pengelolaan, mixing FOH/Monitor, dan operasional teknis seluruh sistem audio MUFOMIC.',
      fullDesc: 'Sound Engineer meramu suara instrumen dan vokal menjadi satu paduan audio yang seimbang, jernih, dan bertenaga di panggung FOH (Front of House) maupun monitor musisi.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const currentRole = rolesData[currentIndex];
  const sides = [
    { side: 'A', label: 'Band Division', category: 'band' as const, accent: '#5278A2' },
    { side: 'B', label: 'Creative Division', category: 'creative' as const, accent: '#F36416' },
  ];

  /* Track code like "A3" / "B1" for a role */
  const codeFor = (role: DivisionRole) => {
    const side = role.category === 'band' ? 'A' : 'B';
    return `${side}${rolesData.filter((r) => r.category === role.category).indexOf(role) + 1}`;
  };
  const accentFor = (role: DivisionRole) => (role.category === 'band' ? '#5278A2' : '#F36416');

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? rolesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === rolesData.length - 1 ? 0 : prev + 1));
  };

  const handleSelectRole = (index: number) => {
    setCurrentIndex(index);
    // On small screens the panel sits above the list; bring it back into view
    const panel = panelRef.current;
    if (panel && window.matchMedia('(max-width: 1023px)').matches && panel.getBoundingClientRect().top < 0) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about-divisions" className="relative py-24 sm:py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/background/about-division-bg.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] via-[#1C1C1C]/60 to-[#1C1C1C]" />
      </div>
      <div className="grain-overlay absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <header className="event-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#F8F7F2]/15">
          <div>
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F36416]">
              {'//'} Sektor & Divisi
            </p>
            <h2 className="mt-3 font-display uppercase leading-[0.85] text-[#F8F7F2] text-[clamp(3rem,10vw,6.5rem)]">
              Divisi <span className="text-outline">Mufomic</span>
            </h2>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ── Tracklist (Side A / Side B) ── */}
          <div className="event-reveal lg:col-span-5 order-2 lg:order-1 space-y-10">
            {sides.map(({ side, label, category, accent }) => (
              <div key={side}>
                <h3 className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F8F7F2]/50 mb-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[#1C1C1C]"
                    style={{ backgroundColor: accent }}
                  >
                    {side}
                  </span>
                  Side {side} — {label}
                </h3>
                <ol className="border-t border-[#F8F7F2]/15">
                  {rolesData.map((role, index) => {
                    if (role.category !== category) return null;
                    const isActive = index === currentIndex;
                    return (
                      <li key={role.id}>
                        <button
                          type="button"
                          onClick={() => handleSelectRole(index)}
                          aria-pressed={isActive}
                          className={`event-setlist-row group w-full flex items-center gap-4 border-b border-[#F8F7F2]/15 py-3 px-2 text-left cursor-pointer ${isActive ? 'is-active' : ''}`}
                        >
                          <span
                            className={`font-mono text-xs w-6 transition-colors ${isActive ? 'text-[#F8F7F2]' : 'group-hover:text-[#F8F7F2]'}`}
                            style={isActive ? undefined : { color: accent }}
                          >
                            {codeFor(role)}
                          </span>
                          <span className={`flex-1 font-display uppercase text-2xl sm:text-3xl text-[#F8F7F2] leading-none transition-transform duration-300 ${isActive ? 'translate-x-2' : 'group-hover:translate-x-2'}`}>
                            {role.buttonLabel}
                          </span>
                          <span className={`font-mono text-xs text-[#F8F7F2] transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} aria-hidden="true">
                            {isActive ? '▶' : '→'}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>

          {/* ── Now playing panel ── */}
          <div ref={panelRef} className="event-reveal lg:col-span-7 order-1 lg:order-2 lg:sticky lg:top-28 scroll-mt-28">
            <div className="relative border border-[#F8F7F2]/15 bg-[#141414]/90 shadow-[12px_12px_0_rgba(201,10,32,0.85)]">
              {/* Control bar */}
              <div className="flex items-center justify-between gap-3 border-b border-[#F8F7F2]/15 px-5 sm:px-6 py-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2 text-[#F8F7F2]/60">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentFor(currentRole) }} />
                  <span style={{ color: accentFor(currentRole) }}>{codeFor(currentRole)}</span>
                  <span className="hidden sm:inline">/ {currentRole.categoryLabel}</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Divisi Sebelumnya"
                    className="w-8 h-8 flex items-center justify-center border border-[#F8F7F2]/25 text-[#F8F7F2] hover:bg-[#F8F7F2] hover:text-[#1C1C1C] transition-colors cursor-pointer"
                  >
                    ←
                  </button>
                  <span className="text-[#F8F7F2]/60 px-1 tabular-nums">
                    {String(currentIndex + 1).padStart(2, '0')} / {rolesData.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Divisi Berikutnya"
                    className="w-8 h-8 flex items-center justify-center border border-[#F8F7F2]/25 text-[#F8F7F2] hover:bg-[#F8F7F2] hover:text-[#1C1C1C] transition-colors cursor-pointer"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Content (re-keyed so it animates on every change) */}
              <div key={currentRole.id} className="division-swap p-5 sm:p-7 space-y-6" aria-live="polite">
                <h3 className="font-display uppercase text-[#F8F7F2] leading-[0.9] text-[clamp(2.5rem,7vw,4.5rem)]">
                  {currentRole.title}
                </h3>

                <div className="relative aspect-[16/10] bg-black overflow-hidden">
                  <Image
                    src={currentRole.photoSrc}
                    alt={currentRole.title}
                    fill
                    sizes="(min-width: 1024px) 600px, 92vw"
                    className="object-cover"
                  />
                  <span className="tape-strip absolute -top-2 left-6 w-20 h-6 -rotate-[6deg]" aria-hidden="true" />
                </div>

                <div className="space-y-3">
                  <p className="text-[#F8F7F2] text-base sm:text-lg font-semibold leading-snug">
                    {currentRole.shortDesc}
                  </p>
                  <p className="text-[#F8F7F2]/65 text-sm sm:text-base leading-relaxed">
                    {currentRole.fullDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDivisionsSection;
