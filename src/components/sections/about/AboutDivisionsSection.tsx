'use client';

import React, { useState } from 'react';
import Badge from '../../ui/Badge';

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

  const bandRoles = rolesData.filter((r) => r.category === 'band');
  const creativeRoles = rolesData.filter((r) => r.category === 'creative');

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const currentRole = rolesData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? rolesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === rolesData.length - 1 ? 0 : prev + 1));
  };

  const handleSelectRole = (roleId: string) => {
    const index = rolesData.findIndex((r) => r.id === roleId);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  return (
    <section id="about-divisions" className="relative py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/background/about-division-bg.webp"
          alt="About Division Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/75 via-[#1C1C1C]/65 to-[#1C1C1C] -z-10" />
      </div>

      {/* Dynamic Ambient Glow matching active division */}
      <div
        className="absolute top-1/3 left-1/3 w-[550px] h-[350px] rounded-full blur-[160px] pointer-events-none -z-10 transition-colors duration-700 opacity-25"
        style={{
          backgroundColor: currentRole.category === 'band' ? '#5278A2' : '#F36416',
        }}
      />

      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="inspo">SEKTOR & DIVISI</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F8F7F2] tracking-tight">
            Divisi <span className="text-[#F36416]">MUFOMIC</span>
          </h2>
          <p className="text-[#F8F7F2]/80 text-sm sm:text-base leading-relaxed">
            Eksplorasi peran musisi dan tim kreatif di balik panggung pertunjukan MUFOMIC.
          </p>
        </div>

        {/* 2-COLUMN MODERN LAYOUT (Kiri: Konten Utama, Kanan: Pilihan Divisi - Tinggi Sama / Konsisten) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* LEFT: MAIN SHOWCASE CARD (Clickable to open modal popup, stretches to full height) */}
          <div className="lg:col-span-7 h-full flex flex-col">
            <div
              onClick={() => setIsModalOpen(true)}
              className="glass-inspo-card p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden transition-all duration-300 cursor-pointer group hover:border-white/40 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] h-full flex flex-col justify-between space-y-5"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${currentRole.gradient}`} />

              {/* Header of Showcase Card */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <span
                  className={`text-xs px-3.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                    currentRole.category === 'band'
                      ? 'bg-[#5278A2]/25 text-[#5278A2] border border-[#5278A2]/40'
                      : 'bg-[#F36416]/25 text-[#F36416] border border-[#F36416]/40'
                  }`}
                >
                  {currentRole.categoryLabel}
                </span>

                {/* Navigation Arrows + Index Counter */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Divisi Sebelumnya"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F36416] text-white flex items-center justify-center font-bold text-sm transition-all hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    ❮
                  </button>
                  <span className="text-xs text-[#F8F7F2]/60 font-mono font-semibold px-1">
                    {currentIndex + 1} / {rolesData.length}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Divisi Berikutnya"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F36416] text-white flex items-center justify-center font-bold text-sm transition-all hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    ❯
                  </button>
                </div>
              </div>

              {/* Title & Short Description */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F8F7F2] tracking-tight group-hover:text-white transition-colors">
                    {currentRole.title}
                  </h3>
                  <span className="text-xs text-white/40 group-hover:text-[#F36416] transition-colors font-semibold flex items-center gap-1">
                    Detail ↗
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#F8F7F2]/80 leading-relaxed">
                  {currentRole.shortDesc}
                </p>
              </div>

              {/* Photo Card Container with Hover Indicator */}
              <div className="relative w-full flex-1 min-h-[250px] sm:min-h-[280px] rounded-2xl overflow-hidden bg-black/60 border border-white/15 shadow-inner">
                <img
                  src={currentRole.photoSrc}
                  alt={currentRole.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Overlay Hint */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold shadow-xl flex items-center gap-2">
                    <span>Lihat Detail Lengkap</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: DIVISION BUTTONS SELECTOR (Equal height to left card, consistent grid) */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <div className="glass-inspo-card-subtle p-5 sm:p-6 md:p-7 rounded-3xl border border-white/15 shadow-2xl h-full flex flex-col justify-between space-y-4 sm:space-y-5">
              
              {/* Band Division Buttons */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#5278A2] tracking-wider uppercase">
                    🎵 BAND DIVISION
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {bandRoles.map((role, idx) => {
                    const isSelected = currentRole.id === role.id;
                    // Drummer is the 5th item -> span 2 columns to keep neat symmetry
                    const isLastOdd = idx === bandRoles.length - 1 && bandRoles.length % 2 !== 0;
                    return (
                      <button
                        key={role.id}
                        onClick={() => handleSelectRole(role.id)}
                        className={`w-full h-11 sm:h-12 md:h-[50px] flex items-center justify-center text-center px-3 rounded-xl text-xs sm:text-[13px] font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                          isLastOdd ? 'col-span-2' : ''
                        } ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#5278A2] to-[#C90A20] text-white shadow-[0_0_20px_rgba(82,120,162,0.6)] border border-white/30 scale-[1.02]'
                            : 'bg-white/5 hover:bg-white/12 text-[#F8F7F2]/75 hover:text-white border border-white/15 backdrop-blur-md hover:scale-[1.01]'
                        }`}
                      >
                        {role.buttonLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-t border-white/10 my-1" />

              {/* Creative Division Buttons */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#F36416] tracking-wider uppercase">
                    🎨 CREATIVE DIVISION
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {creativeRoles.map((role) => {
                    const isSelected = currentRole.id === role.id;
                    return (
                      <button
                        key={role.id}
                        onClick={() => handleSelectRole(role.id)}
                        className={`w-full h-11 sm:h-12 md:h-[50px] flex items-center justify-center text-center px-3 rounded-xl text-xs sm:text-[13px] font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#C90A20] to-[#F36416] text-white shadow-[0_0_20px_rgba(243,100,22,0.6)] border border-white/30 scale-[1.02]'
                            : 'bg-white/5 hover:bg-white/12 text-[#F8F7F2]/75 hover:text-white border border-white/15 backdrop-blur-md hover:scale-[1.01]'
                        }`}
                      >
                        {role.buttonLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* DETAIL MODAL - Semi-transparent background, Photo First, then Description */}
        {isModalOpen && (
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/45 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full glass-inspo-card p-6 sm:p-8 border border-white/20 rounded-3xl shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="space-y-1">
                  <span
                    className={`text-[10px] sm:text-xs px-3 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      currentRole.category === 'band'
                        ? 'bg-[#5278A2]/30 text-[#5278A2] border border-[#5278A2]/50'
                        : 'bg-[#F36416]/30 text-[#F36416] border border-[#F36416]/50'
                    }`}
                  >
                    {currentRole.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#F8F7F2]">
                    {currentRole.title}
                  </h3>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Tutup"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F7F2] flex items-center justify-center font-bold text-base transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* 1. Photo First (Visible for all divisions) */}
              <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-black/40">
                <img
                  src={currentRole.photoSrc}
                  alt={currentRole.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 2. Description Underneath */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-[#F8F7F2]/90 leading-relaxed font-normal">
                  {currentRole.fullDesc}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F7F2] text-sm font-bold transition-all cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default AboutDivisionsSection;