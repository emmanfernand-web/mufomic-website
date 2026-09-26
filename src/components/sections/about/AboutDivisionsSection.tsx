'use client';

import React, { useState } from 'react';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

interface DivisionRole {
  id: string;
  category: 'band' | 'creative';
  categoryLabel: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  photoSrc: string;
  logoSrc: string;
  skills: string[];
  tools: string[];
  tags: string[];
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
      number: '#01',
      title: 'Vocalist',
      shortDesc: 'Membawa melodi utama, karakter vokal, harmoni suara, dan energi panggung pertunjukan.',
      fullDesc: 'Vocalist bertanggung jawab sebagai ujung tombak pertunjukan panggung MUFOMIC, membawakan lirik, melodi, ekspresi emosional lagu, serta menjaga harmoni ensemble vokal.',
      photoSrc: '/images/divisi-photos/vocalist.jpg',
      logoSrc: '/images/logo-divisi/vocalist.png',
      skills: ['Pitch Control & Accuracy', 'Stage Presence & Charisma', 'Harmoni Vokal & Improvisasi', 'Vocal Warming Up'],
      tools: ['Dynamic / Condenser Mic (Shure SM58 / Beta 58A)', 'In-Ear Monitors (IEM)', 'Vocal Effects Processor'],
      tags: ['#LeadVocal', '#EnsembleHarmonies', '#StagePresence'],
      gradient: 'from-[#5278A2] via-[#C90A20] to-[#F36416]',
      accentColor: '#5278A2',
      sealColor: 'border-[#5278A2] bg-[#1e293b]',
    },
    {
      id: 'guitarist',
      category: 'band',
      categoryLabel: 'Band Division',
      number: '#02',
      title: 'Guitarist',
      shortDesc: 'Mengisi ritem, melodi gitar, lead riff, chord progression, dan karakter sound akustik/elektrik.',
      fullDesc: 'Guitarist memainkan peran krusial dalam menciptakan chord progression, dinamika lagu, lead riff yang ikonik, serta fleksibilitas antar genre dari pop, rock, hingga jazz fusion.',
      photoSrc: '/images/divisi-photos/guitarist.jpg',
      logoSrc: '/images/logo-divisi/guitarist.png',
      skills: ['Rhythm & Groove Timing', 'Lead Solo & Improvisation', 'Tone Shaping & Pedals', 'Acoustic & Electric Versatility'],
      tools: ['Electric & Acoustic Guitars', 'Pedalboard (Overdrive, Delay, Reverb)', 'Guitar Amplifiers / Modeler'],
      tags: ['#LeadGuitar', '#RhythmSection', '#ToneCrafting'],
      gradient: 'from-[#5278A2] to-[#C90A20]',
      accentColor: '#5278A2',
      sealColor: 'border-[#5278A2] bg-[#1e293b]',
    },
    {
      id: 'bassist',
      category: 'band',
      categoryLabel: 'Band Division',
      number: '#03',
      title: 'Bassist',
      shortDesc: 'Membangun fondasi bassline, groove ritmis, frekuensi low-end, dan dinamika musik ensemble.',
      fullDesc: 'Bassist adalah jembatan antara harmoni chord dan ritme drum, memberikan bobot low-end dan fondasi groove yang membuat musik terdengar solid dan bertenaga.',
      photoSrc: '/images/divisi-photos/bassist.jpg',
      logoSrc: '/images/logo-divisi/bassist.png',
      skills: ['Locking in with Drummer (Pocket)', 'Walking Bass & Slap Technique', 'Dynamic Low-End Control', 'Chord Root Navigation'],
      tools: ['4-String / 5-String Bass', 'Bass Preamp / DI Box', 'Compressor & EQ Pedals'],
      tags: ['#BassGroove', '#LowEndPower', '#PocketPlaying'],
      gradient: 'from-[#5278A2] to-[#C90A20]',
      accentColor: '#5278A2',
      sealColor: 'border-[#5278A2] bg-[#1e293b]',
    },
    {
      id: 'keyboardist',
      category: 'band',
      categoryLabel: 'Band Division',
      number: '#04',
      title: 'Keyboardist',
      shortDesc: 'Mengatur sound piano, synthesizer, ambient pad, string ensemble, dan atmosfer aransemen.',
      fullDesc: 'Keyboardist memperkaya aransemen lagu dengan berbagai layer suara: grand piano klasik, pad atmosferik, synth leads energik, hingga brass dan string virtual.',
      photoSrc: '/images/divisi-photos/keyboardist.jpg',
      logoSrc: '/images/logo-divisi/keyboardist.png',
      skills: ['Voicing & Chord Inversions', 'Patch / Synthesizer Programming', 'Multi-layer Sequencing', 'Ear Training & Modulations'],
      tools: ['Stage Piano (Nord / Roland / Yamaha)', 'MIDI Keyboard & DAW Plugins', 'Sustain & Expression Pedals'],
      tags: ['#PianoKeys', '#SynthWave', '#AtmosphereCraft'],
      gradient: 'from-[#5278A2] to-[#F36416]',
      accentColor: '#5278A2',
      sealColor: 'border-[#5278A2] bg-[#1e293b]',
    },
    {
      id: 'drummer',
      category: 'band',
      categoryLabel: 'Band Division',
      number: '#05',
      title: 'Drummer',
      shortDesc: 'Penjaga tempo, dinamika ritmik, beat utama, ketukan perkusif, dan energi pertunjukan.',
      fullDesc: 'Drummer adalah motor penggerak musik yang menentukan tempo, dinamika crescendo-decrescendo, ketukan groove, dan transisi antar bagian lagu.',
      photoSrc: '/images/divisi-photos/drummer.jpg',
      logoSrc: '/images/logo-divisi/drummer.png',
      skills: ['Metronome & Tempo Precision', 'Dynamic Articulation & Fills', 'Genre Groove Flexibility', 'Polyrhythmic Awareness'],
      tools: ['Acoustic Drum Kit & Cymbals', 'Drumsticks & Brushes', 'In-Ear Click Track'],
      tags: ['#BeatKeeper', '#TempoMaster', '#GrooveEngine'],
      gradient: 'from-[#5278A2] via-[#C90A20] to-[#F36416]',
      accentColor: '#5278A2',
      sealColor: 'border-[#5278A2] bg-[#1e293b]',
    },

    // 6 Creative Division Roles
    {
      id: 'pr',
      category: 'creative',
      categoryLabel: 'Creative Division',
      number: '#06',
      title: 'PR (Public Relations)',
      shortDesc: 'Mengelola komunikasi, membangun citra, dan berinteraksi dengan audiens melalui media sosial MUFOMIC.',
      fullDesc: 'Divisi PR menjadi corong utama komunikasi MUFOMIC ke publik kampus, media partner, serta penonton melalui media sosial, press release, dan kemitraan kolaboratif.',
      photoSrc: '/images/divisi-photos/pr.jpg',
      logoSrc: '/images/logo-divisi/pr.png',
      skills: ['Social Media Strategy & Copywriting', 'Public Speaking & Media Relations', 'Community Engagement & Outreach', 'Brand Messaging'],
      tools: ['Instagram & TikTok Business Suite', 'Content Scheduling Tools', 'Analytics & Engagement Insights'],
      tags: ['#PublicRelations', '#SocialMedia', '#Branding'],
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
      sealColor: 'border-[#F36416] bg-[#3b1912]',
    },
    {
      id: 'visual',
      category: 'creative',
      categoryLabel: 'Creative Division',
      number: '#07',
      title: 'Visual',
      shortDesc: 'Membuat seluruh desain grafis, poster acara, feed promosi, dan menjaga identitas visual MUFOMIC.',
      fullDesc: 'Divisi Visual merancang identitas grafis yang estetis dan berkarakter untuk poster konser, feed Instagram, banner panggung, hingga merchandise resmi MUFOMIC.',
      photoSrc: '/images/divisi-photos/visual.jpg',
      logoSrc: '/images/logo-divisi/visual.png',
      skills: ['Graphic Design & Layouting', 'Typography & Visual Hierarchy', 'Illustration & Poster Aesthetics', 'Branding Guidelines'],
      tools: ['Adobe Photoshop & Illustrator', 'Figma', 'Procreate & Drawing Tablet'],
      tags: ['#GraphicDesign', '#VisualIdentity', '#PosterArt'],
      gradient: 'from-[#C90A20] via-[#F36416] to-[#5278A2]',
      accentColor: '#F36416',
      sealColor: 'border-[#F36416] bg-[#3b1912]',
    },
    {
      id: 'documentation',
      category: 'creative',
      categoryLabel: 'Creative Division',
      number: '#08',
      title: 'Documentation',
      shortDesc: 'Mendokumentasikan setiap kegiatan dan panggung MUFOMIC dalam bentuk foto dan video berkualitas.',
      fullDesc: 'Divisi Documentation mengabadikan setiap momen emas MUFOMIC dari latihan di studio, keseruan backstage, hingga performa panggung live berkilau melalui fotografi dan sinematografi.',
      photoSrc: '/images/divisi-photos/documentation.jpg',
      logoSrc: '/images/logo-divisi/documentation.png',
      skills: ['Live Concert Photography', 'Cinematic Videography & Grading', 'Audio-Visual Sync & Editing', 'Lighting Composition'],
      tools: ['Mirrorless Cameras (Sony / Canon / Fujifilm)', 'Prime & Zoom Lenses', 'Adobe Premiere Pro & DaVinci Resolve'],
      tags: ['#ConcertPhotography', '#CinematicVideo', '#StageMoments'],
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
      sealColor: 'border-[#F36416] bg-[#3b1912]',
    },
    {
      id: 'band-manager',
      category: 'creative',
      categoryLabel: 'Creative Division',
      number: '#09',
      title: 'Band Manager',
      shortDesc: 'Berperan dalam tugas administrasi, jadwal latihan, kurasi setlist, dan manajerial band MUFOMIC.',
      fullDesc: 'Band Manager memastikan kelancaran operasional setiap personil band, mulai dari penyusunan jadwal latihan, rider panggung, setlist lagu, hingga koordinasi dengan panitia event.',
      photoSrc: '/images/divisi-photos/band-manager.jpg',
      logoSrc: '/images/logo-divisi/band-manager.png',
      skills: ['Project & Schedule Management', 'Band Coordination & Negotiation', 'Rider & Stage Planning', 'Leadership & Problem Solving'],
      tools: ['Google Workspace & Notion', 'Spreadsheets & Setlist Planners', 'Stage Plot Design Tools'],
      tags: ['#BandManager', '#StageCoordination', '#Leadership'],
      gradient: 'from-[#C90A20] to-[#F36416]',
      accentColor: '#F36416',
      sealColor: 'border-[#F36416] bg-[#3b1912]',
    },
    {
      id: 'event',
      category: 'creative',
      categoryLabel: 'Creative Division',
      number: '#10',
      title: 'Acara / Event',
      shortDesc: 'Merancang konsep kreatif, rundown panggung, dan mengeksekusi rangkaian acara yang diselenggarakan MUFOMIC.',
      fullDesc: 'Divisi Acara bertanggung jawab penuh atas konsep acara (Mufogigs, Showcase, Audisi), penyusunan rundown panggung yang dinamis, serta flow kenyamanan penonton selama event berlangsung.',
      photoSrc: '/images/divisi-photos/event.jpg',
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
      number: '#11',
      title: 'Sound Engineer',
      shortDesc: 'Bertanggung jawab atas pengelolaan, mixing FOH/Monitor, dan operasional teknis seluruh sistem audio MUFOMIC.',
      fullDesc: 'Sound Engineer meramu suara instrumen dan vokal menjadi satu paduan audio yang seimbang, jernih, dan bertenaga di panggung FOH (Front of House) maupun monitor musisi.',
      photoSrc: '/images/divisi-photos/sound-engineer.jpg',
      logoSrc: '/images/logo-divisi/sound-engineer.png',
      skills: ['Live Audio Mixing (FOH & Monitor)', 'Microphone Placement & Frequency EQ', 'Audio Cable Patching & Stage Routing', 'Feedback Prevention'],
      tools: ['Digital Audio Console (Behringer X32 / Midas)', 'Stage Snakes & D.I. Boxes', 'RTA & Frequency Analyzers'],
      tags: ['#SoundEngineer', '#LiveAudioMixing', '#AudioTechnical'],
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

  // Fallback placeholder icon for division logo
  const renderLogoPlaceholder = (id: string, title: string) => {
    switch (id) {
      case 'vocalist': return '🎙️';
      case 'guitarist': return '🎸';
      case 'bassist': return '🎸';
      case 'keyboardist': return '🎹';
      case 'drummer': return '🥁';
      case 'pr': return '📣';
      case 'visual': return '🎨';
      case 'documentation': return '📸';
      case 'band-manager': return '👔';
      case 'event': return '🎪';
      case 'sound-engineer': return '🎛️';
      default: return '🎵';
    }
  };

  return (
    <section id="about-divisions" className="relative py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Layer: about-division-bg.webp */}
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
                <span className="text-sm font-mono font-black text-[#5278A2]">{currentRole.number}</span>
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
                  // Fallback SVG Graphic when photo hasn't been uploaded yet
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="%231a1015"/><circle cx="400" cy="200" r="90" fill="%23c90a20" opacity="0.25"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="%23f8f7f2" font-family="sans-serif" font-size="28" font-weight="bold">FOTO DIVISI ${encodeURIComponent(currentRole.title.toUpperCase())}</text><text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="%23f36416" font-family="sans-serif" font-size="16">mufomic-website/public/images/divisi-photos/${currentRole.id}.jpg</text></svg>`;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Logo / Seal Overlay in center of photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {currentRole.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-full bg-black/60 text-[#F8F7F2] border border-white/20 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Click to Open Details Action Button */}
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

      {/* BOTTOM PART: Horizontal Division Logo Grid / Selector Box (Mentoring UMN Inspo) */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="glass-inspo-card-subtle p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6">
          
          {/* Row 1: Band Division (5 icons sejajar horizontal) */}
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
                      {/* Division Logo image with SVG fallback */}
                      <img
                        src={role.logoSrc}
                        alt={role.title}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.removeAttribute('style');
                        }}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                      <span className="text-lg sm:text-2xl" style={{ display: 'none' }}>
                        {renderLogoPlaceholder(role.id, role.title)}
                      </span>
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

          {/* Row 2: Creative Division (6 icons sejajar horizontal tepat di bawah band) */}
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
                      {/* Division Logo image with SVG fallback */}
                      <img
                        src={role.logoSrc}
                        alt={role.title}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.removeAttribute('style');
                        }}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                      <span className="text-lg sm:text-2xl" style={{ display: 'none' }}>
                        {renderLogoPlaceholder(role.id, role.title)}
                      </span>
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

      {/* DETAIL MODAL (Opens on "Detail Lengkap" button click) */}
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
                  <span className="text-xs font-mono font-black text-[#5278A2]">{currentRole.number}</span>
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
