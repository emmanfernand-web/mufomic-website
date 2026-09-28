'use client';

import React, { useState } from 'react';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

interface DivisionRole {
  id: string;
  category: 'band' | 'creative';
  categoryLabel: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  photoSrc: string;
  logoSrc: string;
  skills: string[];
  tools: string[];
  tags?: string[];
  gradient: string;
  accentColor: string;
  sealColor: string;
}

export const AboutDivisionsSection: React.FC = () => {
  const rolesData: DivisionRole[] = [
    // 5 Band Division Roles
    {
      id: 'vocalist',
      category: 'band',
      categoryLabel: 'Band Division',
      title: 'Vocalist',
      shortDesc: 'Membawa melodi utama, karakter vokal, harmoni suara, dan energi panggung pertunjukan.',
      fullDesc: 'Vocalist bertanggung jawab sebagai ujung tombak pertunjukan panggung MUFOMIC, membawakan lirik, melodi, ekspresi emosional lagu, serta menjaga harmoni ensemble vokal.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/vocalist.png',
      skills: ['Pitch Control & Accuracy', 'Stage Presence & Charisma', 'Harmoni Vokal & Improvisasi', 'Vocal Warming Up'],
      tools: ['Dynamic / Condenser Mic (Shure SM58 / Beta 58A)', 'In-Ear Monitors (IEM)', 'Vocal Effects Processor'],
      gradient: 'from-[#5278A2] via-[#C90A20] to-[#F36416]',
      accentColor: '#5278A2',
      sealColor: 'border-[#5278A2] bg-[#1e293b]',
    },
    {
      id: 'guitarist',
      category: 'band',
      categoryLabel: 'Band Division',
      title: 'Guitarist',
      shortDesc: 'Mengisi ritem, melodi gitar, lead riff, chord progression, dan karakter sound akustik/elektrik.',
      fullDesc: 'Guitarist memainkan peran krusial dalam menciptakan chord progression, dinamika lagu, lead riff yang ikonik, serta fleksibilitas antar genre dari pop, rock, hingga jazz fusion.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/guitarist.png',
      skills: ['Rhythm & Groove Timing', 'Lead Solo & Improvisation', 'Tone Shaping & Pedals', 'Acoustic & Electric Versatility'],
      tools: ['Electric & Acoustic Guitars', 'Pedalboard (Overdrive, Delay, Reverb)', 'Guitar Amplifiers / Modeler'],
      gradient: 'from-[#5278A2] to-[#C90A20]',
      accentColor: '#5278A2',
      sealColor: 'border-[#5278A2] bg-[#1e293b]',
    },
    {
      id: 'bassist',
      category: 'band',
      categoryLabel: 'Band Division',
      title: 'Bassist',
      shortDesc: 'Membangun fondasi bassline, groove ritmis, frekuensi low-end, dan dinamika musik ensemble.',
      fullDesc: 'Bassist adalah jembatan antara harmoni chord dan ritme drum, memberikan bobot low-end dan fondasi groove yang membuat musik terdengar solid dan bertenaga.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/bassist.png',
      skills: ['Locking in with Drummer (Pocket)', 'Walking Bass & Slap Technique', 'Dynamic Low-End Control', 'Chord Root Navigation'],
      tools: ['4-String / 5-String Bass', 'Bass Preamp / DI Box', 'Compressor & EQ Pedals'],
      gradient: 'from-[#5278A2] to-[#C90A20]',
      accentColor: '#5278A2',
      sealColor: 'border-[#5278A2] bg-[#1e293b]',
    },
    {
      id: 'keyboardist',
      category: 'band',
      categoryLabel: 'Band Division',
      title: 'Keyboardist',
      shortDesc: 'Mengatur sound piano, synthesizer, ambient pad, string ensemble, dan atmosfer aransemen.',
      fullDesc: 'Keyboardist memperkaya aransemen lagu dengan berbagai layer suara: grand piano klasik, pad atmosferik, synth leads energik, hingga brass dan string virtual.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/keyboardist.png',
      skills: ['Voicing & Chord Inversions', 'Patch / Synthesizer Programming', 'Multi-layer Sequencing', 'Ear Training & Modulations'],
      tools: ['Stage Piano (Nord / Roland / Yamaha)', 'MIDI Keyboard & DAW Plugins', 'Sustain & Expression Pedals'],
      gradient: 'from-[#5278A2] to-[#F36416]',
      accentColor: '#5278A2',
      sealColor: 'border-[#5278A2] bg-[#1e293b]',
    },
    {
      id: 'drummer',
      category: 'band',
      categoryLabel: 'Band Division',
      title: 'Drummer',
      shortDesc: 'Penjaga tempo, dinamika ritmik, beat utama, ketukan perkusif, dan energi pertunjukan.',
      fullDesc: 'Drummer adalah motor penggerak musik yang menentukan tempo, dinamika crescendo-decrescendo, ketukan groove, dan transisi antar bagian lagu.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/drummer.png',
      skills: ['Metronome & Tempo Precision', 'Dynamic Articulation & Fills', 'Genre Groove Flexibility', 'Polyrhythmic Awareness'],
      tools: ['Acoustic Drum Kit & Cymbals', 'Drumsticks & Brushes', 'In-Ear Click Track'],
      gradient: 'from-[#5278A2] via-[#C90A20] to-[#F36416]',
      accentColor: '#5278A2',
      sealColor: 'border-[#5278A2] bg-[#1e293b]',
    },

    // 6 Creative Division Roles
    {
      id: 'pr',
      category: 'creative',
      categoryLabel: 'Creative Division',
      title: 'PR (Public Relations)',
      shortDesc: 'Mengelola komunikasi, membangun citra, dan berinteraksi dengan audiens melalui media sosial MUFOMIC.',
      fullDesc: 'Divisi PR menjadi corong utama komunikasi MUFOMIC ke publik kampus, media partner, serta penonton melalui media sosial, press release, dan kemitraan kolaboratif.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/pr.png',
      skills: ['Social Media Strategy & Copywriting', 'Public Speaking & Media Relations', 'Community Engagement & Outreach', 'Brand Messaging'],
      tools: ['Instagram & TikTok Business Suite', 'Content Scheduling Tools', 'Analytics & Engagement Insights'],
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
      sealColor: 'border-[#F36416] bg-[#3b1912]',
    },
    {
      id: 'visual',
      category: 'creative',
      categoryLabel: 'Creative Division',
      title: 'Visual',
      shortDesc: 'Membuat seluruh desain grafis, poster acara, feed promosi, dan menjaga identitas visual MUFOMIC.',
      fullDesc: 'Divisi Visual merancang identitas grafis yang estetis dan berkarakter untuk poster konser, feed Instagram, banner panggung, hingga merchandise resmi MUFOMIC.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/visual.png',
      skills: ['Graphic Design & Layouting', 'Typography & Visual Hierarchy', 'Illustration & Poster Aesthetics', 'Branding Guidelines'],
      tools: ['Adobe Photoshop & Illustrator', 'Figma', 'Procreate & Drawing Tablet'],
      gradient: 'from-[#C90A20] via-[#F36416] to-[#5278A2]',
      accentColor: '#F36416',
      sealColor: 'border-[#F36416] bg-[#3b1912]',
    },
    {
      id: 'documentation',
      category: 'creative',
      categoryLabel: 'Creative Division',
      title: 'Documentation',
      shortDesc: 'Mendokumentasikan setiap kegiatan dan panggung MUFOMIC dalam bentuk foto dan video berkualitas.',
      fullDesc: 'Divisi Documentation mengabadikan setiap momen emas MUFOMIC dari latihan di studio, keseruan backstage, hingga performa panggung live berkilau melalui fotografi dan sinematografi.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/documentation.png',
      skills: ['Live Concert Photography', 'Cinematic Videography & Grading', 'Audio-Visual Sync & Editing', 'Lighting Composition'],
      tools: ['Mirrorless Cameras (Sony / Canon / Fujifilm)', 'Prime & Zoom Lenses', 'Adobe Premiere Pro & DaVinci Resolve'],
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
      sealColor: 'border-[#F36416] bg-[#3b1912]',
    },
    {
      id: 'band-manager',
      category: 'creative',
      categoryLabel: 'Creative Division',
      title: 'Band Manager',
      shortDesc: 'Berperan dalam tugas administrasi, jadwal latihan, kurasi setlist, dan manajerial band MUFOMIC.',
      fullDesc: 'Band Manager memastikan kelancaran operasional setiap personil band, mulai dari penyusunan jadwal latihan, rider panggung, setlist lagu, hingga koordinasi dengan panitia event.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/band-manager.png',
      skills: ['Project & Schedule Management', 'Band Coordination & Negotiation', 'Rider & Stage Planning', 'Leadership & Problem Solving'],
      tools: ['Google Workspace & Notion', 'Spreadsheets & Setlist Planners', 'Stage Plot Design Tools'],
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
      sealColor: 'border-[#F36416] bg-[#3b1912]',
    },
    {
      id: 'event',
      category: 'creative',
      categoryLabel: 'Creative Division',
      title: 'Acara / Event',
      shortDesc: 'Merancang konsep kreatif, rundown panggung, dan mengeksekusi rangkaian acara yang diselenggarakan MUFOMIC.',
      fullDesc: 'Divisi Acara bertanggung jawab penuh atas konsep acara (Mufogigs, Showcase, Audisi), penyusunan rundown panggung yang dinamis, serta flow kenyamanan penonton selama event berlangsung.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/event.png',
      skills: ['Event Concepting & Theming', 'Rundown & Time Management', 'Stage Flow & Crowd Coordination', 'Crisis Handling'],
      tools: ['Rundown Master Sheets', 'Walkie-Talkie & Stage Comms', 'Event Management Checklists'],
      tags: ['#EventCreator', '#StageRundown', '#LiveEvent'],
      gradient: 'from-[#C90A20] via-[#F36416] to-[#5278A2]',
      accentColor: '#F36416',
      sealColor: 'border-[#F36416] bg-[#3b1912]',
    },
    {
      id: 'sound-engineer',
      category: 'creative',
      categoryLabel: 'Creative Division',
      title: 'Sound Engineer',
      shortDesc: 'Bertanggung jawab atas pengelolaan, mixing FOH/Monitor, dan operasional teknis seluruh sistem audio MUFOMIC.',
      fullDesc: 'Sound Engineer meramu suara instrumen dan vokal menjadi satu paduan audio yang seimbang, jernih, dan bertenaga di panggung FOH (Front of House) maupun monitor musisi.',
      photoSrc: '/images/divisi-photos/coming-soon.webp',
      logoSrc: '/images/logo-divisi/sound-engineer.png',
      skills: ['Live Audio Mixing (FOH & Monitor)', 'Microphone Placement & Frequency EQ', 'Audio Cable Patching & Stage Routing', 'Feedback Prevention'],
      tools: ['Digital Audio Console (Behringer X32 / Midas)', 'Stage Snakes & D.I. Boxes', 'RTA & Frequency Analyzers'],
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
      sealColor: 'border-[#F36416] bg-[#3b1912]',
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

  // Modern Vector SVG Icon Fallback for each Division
  const renderLogoPlaceholder = (id: string): React.ReactNode => {
    const iconClass = "w-6 h-6 sm:w-7 sm:h-7 stroke-current text-[#F8F7F2]";
    
    switch (id) {
      case 'vocalist':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
          </svg>
        );
      case 'guitarist':
      case 'bassist':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </svg>
        );
      case 'keyboardist':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M6 4v16M10 4v16M14 4v16M18 4v16"/>
            <path d="M8 4v7M12 4v7M16 4v7" fill="currentColor"/>
          </svg>
        );
      case 'drummer':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="8" rx="9" ry="4"/>
            <path d="M3 8v8c0 2.2 4 4 9 4s9-1.8 9-4V8"/>
            <path d="M3 12c0 2.2 4 4 9 4s9-1.8 9-4"/>
          </svg>
        );
      case 'pr':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 11 18-5v12L3 13v-2z"/>
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
          </svg>
        );
      case 'visual':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.72 1.7-1.65 0-.42-.16-.83-.44-1.15-.28-.33-.42-.74-.42-1.2 0-.93.75-1.68 1.68-1.68H17c2.76 0 5-2.24 5-5s-2.24-5-5-5h-5z"/>
          </svg>
        );
      case 'documentation':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
            <circle cx="12" cy="13" r="3"/>
          </svg>
        );
      case 'band-manager':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        );
      case 'event':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        );
      case 'sound-engineer':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14"/>
            <line x1="4" y1="10" x2="4" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12" y2="3"/>
            <line x1="20" y1="21" x2="20" y2="16"/>
            <line x1="20" y1="12" x2="20" y2="3"/>
            <line x1="1" y1="14" x2="7" y2="14"/>
            <line x1="9" y1="8" x2="15" y2="8"/>
            <line x1="17" y1="16" x2="23" y2="16"/>
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </svg>
        );
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/70 via-[#1C1C1C]/60 to-[#1C1C1C] -z-10" />
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="inspo">SEKTOR & DIVISI</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F8F7F2] tracking-tight">
            Divisi <span className="text-[#F36416]">MUFOMIC</span>
          </h2>
          <p className="text-[#F8F7F2]/80 text-sm sm:text-base">
            Pilih logo divisi di bawah untuk melihat foto, peran, dan detail kegiatan.
          </p>
        </div>

        {/* TOP PART: Photo Showcase Carousel with Arrow Buttons */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Division"
            className="absolute left-0 sm:left-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#1C1C1C]/80 hover:bg-[#F36416] text-white border border-white/20 backdrop-blur-xl flex items-center justify-center font-bold text-lg sm:text-xl shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            ❮
          </button>

          {/* Central Showcase Card */}
          <div className="w-full max-w-3xl mx-6 sm:mx-16">
            <div className="glass-inspo-card p-6 sm:p-8 md:p-10 border border-white/20 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden transition-all duration-500">
              
              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${currentRole.gradient}`} />

              {/* Header of Showcase Card */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-bold uppercase ${
                      currentRole.category === 'band'
                        ? 'bg-[#5278A2]/25 text-[#5278A2] border border-[#5278A2]/40'
                        : 'bg-[#F36416]/25 text-[#F36416] border border-[#F36416]/40'
                    }`}
                  >
                    {currentRole.categoryLabel}
                  </span>
                </div>
                <span className="text-xs text-[#F8F7F2]/50 font-mono">
                  {currentIndex + 1} / {rolesData.length}
                </span>
              </div>

              {/* Title & Short Description */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F8F7F2] tracking-tight">
                  {currentRole.title}
                </h3>
                <p className="text-sm sm:text-base text-[#F8F7F2]/80 leading-relaxed">
                  {currentRole.shortDesc}
                </p>
              </div>

              {/* Photo Card Container */}
              <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-black/60 border border-white/15 shadow-inner group">
                <img
                  src={currentRole.photoSrc}
                  alt={currentRole.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== '/images/divisi-photos/coming-soon.webp') {
                      target.src = '/images/divisi-photos/coming-soon.webp';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Action Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6">
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#5278A2] via-[#C90A20] to-[#F36416] text-[#F8F7F2] text-xs font-extrabold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                    >
                      <span>Detail Lengkap</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Division"
            className="absolute right-0 sm:right-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#1C1C1C]/80 hover:bg-[#F36416] text-white border border-white/20 backdrop-blur-xl flex items-center justify-center font-bold text-lg sm:text-xl shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            ❯
          </button>
        </div>

        {/* BOTTOM PART: Horizontal Division Logo Grid / Selector Box */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="glass-inspo-card-subtle p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6">
            
            {/* Row 1: Band Division */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#5278A2] tracking-wider uppercase">
                  🎵 BAND DIVISION (5 SEKTOR)
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2 sm:gap-4 items-center justify-items-center">
                {bandRoles.map((role) => {
                  const isSelected = currentRole.id === role.id;
                  return (
                    <button
                      key={role.id}
                      onClick={() => handleSelectRole(role.id)}
                      className="flex flex-col items-center gap-1.5 group focus:outline-none w-full"
                    >
                      <div
                        className={`w-13 h-13 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 relative overflow-hidden shadow-lg ${
                          isSelected
                            ? 'border-[#5278A2] ring-4 ring-[#5278A2]/60 scale-110 bg-[#5278A2]/30 shadow-[0_0_20px_rgba(82,120,162,0.6)]'
                            : 'border-white/20 bg-white/5 hover:border-[#5278A2]/60 hover:bg-white/10 hover:scale-105'
                        }`}
                      >
                        <img
                          src={role.logoSrc}
                          alt={role.title}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            if (target.nextElementSibling) {
                              (target.nextElementSibling as HTMLElement).style.display = 'flex';
                            }
                          }}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                        />
                        <div className="items-center justify-center" style={{ display: 'none' }}>
                          {renderLogoPlaceholder(role.id)}
                        </div>
                      </div>
                      <span
                        className={`text-[10px] sm:text-xs font-bold text-center transition-colors truncate max-w-[65px] sm:max-w-none ${
                          isSelected ? 'text-[#5278A2]' : 'text-[#F8F7F2]/60 group-hover:text-[#F8F7F2]'
                        }`}
                      >
                        {role.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-white/10" />

            {/* Row 2: Creative Division */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#F36416] tracking-wider uppercase">
                  🎨 CREATIVE DIVISION (6 SEKTOR)
                </span>
              </div>

              <div className="grid grid-cols-6 gap-2 sm:gap-4 items-center justify-items-center">
                {creativeRoles.map((role) => {
                  const isSelected = currentRole.id === role.id;
                  return (
                    <button
                      key={role.id}
                      onClick={() => handleSelectRole(role.id)}
                      className="flex flex-col items-center gap-1.5 group focus:outline-none w-full"
                    >
                      <div
                        className={`w-13 h-13 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 relative overflow-hidden shadow-lg ${
                          isSelected
                            ? 'border-[#F36416] ring-4 ring-[#F36416]/60 scale-110 bg-[#F36416]/30 shadow-[0_0_20px_rgba(243,100,22,0.6)]'
                            : 'border-white/20 bg-white/5 hover:border-[#F36416]/60 hover:bg-white/10 hover:scale-105'
                        }`}
                      >
                        <img
                          src={role.logoSrc}
                          alt={role.title}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            if (target.nextElementSibling) {
                              (target.nextElementSibling as HTMLElement).style.display = 'flex';
                            }
                          }}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                        />
                        <div className="items-center justify-center" style={{ display: 'none' }}>
                          {renderLogoPlaceholder(role.id)}
                        </div>
                      </div>
                      <span
                        className={`text-[9px] sm:text-xs font-bold text-center transition-colors truncate max-w-[55px] sm:max-w-none ${
                          isSelected ? 'text-[#F36416]' : 'text-[#F8F7F2]/60 group-hover:text-[#F8F7F2]'
                        }`}
                      >
                        {role.title.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* DETAIL MODAL */}
        {isModalOpen && (
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 transition-all"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full glass-inspo-card p-6 sm:p-8 md:p-10 border border-white/25 rounded-3xl shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-white/15 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-3 py-0.5 rounded-full font-bold uppercase ${
                        currentRole.category === 'band'
                          ? 'bg-[#5278A2]/30 text-[#5278A2] border border-[#5278A2]/50'
                          : 'bg-[#F36416]/30 text-[#F36416] border border-[#F36416]/50'
                      }`}
                    >
                      {currentRole.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#F8F7F2]">
                    {currentRole.title}
                  </h3>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F7F2] flex items-center justify-center font-bold text-lg transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body: Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F36416] font-bold">
                  // DESKRIPSI PERAN
                </h4>
                <p className="text-sm sm:text-base text-[#F8F7F2]/90 leading-relaxed">
                  {currentRole.fullDesc}
                </p>
              </div>

              {/* Skills & Focus */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#5278A2] font-bold">
                  // SKILLS & FOKUS KEGIATAN
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentRole.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#F8F7F2]/90 flex items-center gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#F36416]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools / Equipment */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8F7F2]/60 font-bold">
                  // GEAR & EQUIPMENT
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentRole.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-lg bg-black/40 border border-white/15 text-[#F8F7F2]/80"
                    >
                      🛠️ {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F7F2] text-sm font-bold transition-all"
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