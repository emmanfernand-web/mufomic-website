'use client';

import React from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export const RsvpSection: React.FC = () => {
  // Config for Google Form & Google Maps URL
  const gformUrl = "https://forms.gle/mufomic-rsvp"; 
  const googleMapsUrl = "https://maps.app.goo.gl/KXsWES47wX4h3KqL9"; // <-- Masukkan link Google Maps Bagi Kopi Jombang di sini
  const isTicketAvailable = false; // Set to false for Coming Soon / True when RSVP opens

  return (
    <section id="rsvp" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Layer spanning full section */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/background/home-rsvp-bg.webp"
          alt="Mufomic Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-45 contrast-110"
        />
        {/* Dark Gradient Overlay for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/80 via-[#1C1C1C]/60 to-[#1C1C1C]/80 -z-10" />
      </div>

      {/* Ambient glowing highlights */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#C90A20]/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#F36416]/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Aesthetic Glass Card Container */}
      <div className="w-full max-w-3xl mx-auto text-center relative z-10">
        <div className="glass-inspo-card p-6 sm:p-10 md:p-12 border border-white/20 rounded-3xl shadow-2xl space-y-6 backdrop-blur-3xl bg-white/[0.08]">
          
          {/* Status Badge / Eyebrow Header */}
          <div className="flex justify-center">
            <Badge variant="orange">
              {isTicketAvailable ? 'RSVP OPEN' : 'UPCOMING EVENT'}
            </Badge>
          </div>

          {/* Title & Description */}
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F8F7F2] tracking-tight">
              Mufogigs Vol. 10
            </h2>
            <p className="text-[#F8F7F2]/80 text-sm sm:text-base leading-relaxed">
              Get ready to warm up your night with an unforgettable music experience! 🎸✨
            </p>
            <p className="text-[#F8F7F2]/80 text-sm sm:text-base leading-relaxed">              
              Featuring J.O.Y!, INDIGOS, and ECHOVEIL, plus special performances from Nusa Surf Club, Tatlo, and The Sabili‼️
            </p>
          </div>

          {/* Flyer Image Container */}
          <div className="flex justify-center my-6">
            <div className="relative max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/images/mufogigs/vol10.webp"
                alt="Flyer Mufogigs Vol. 10"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Highlighted Event Detail Card (Ukuran diperbesar dan seragam) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/15 max-w-xl mx-auto space-y-3 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-bold text-base sm:text-lg text-[#F8F7F2]">
              <span className="flex items-center gap-2">
                <span>📅</span>
                <span>Sabtu, 3 Oktober 2026</span>
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="flex items-center gap-2">
                <span>⏰</span>
                <span>18.00 WIB – Selesai</span>
              </span>
            </div>
            
            <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-2 text-base sm:text-lg text-[#F8F7F2] font-semibold">
              <span className="text-[#F36416]">📍</span>
              <span>Lokasi: <strong className="text-white">Bagi Kopi Jombang</strong></span>
            </div>
          </div>

          {/* Action Button Section */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-xl mx-auto">
            {/* Button Direct to Google Maps */}
            <Button
              variant="glass-pill"
              size="lg"
              href={googleMapsUrl}
              isExternal
              className="flex-1 w-full sm:w-1/2 min-h-[56px] py-3.5 px-5 flex items-center justify-center gap-2.5 text-center leading-snug"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 text-[#F36416]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-bold text-sm sm:text-base">Petunjuk Lokasi (Maps)</span>
            </Button>

            {/* RSVP / Updates Button */}
            {isTicketAvailable ? (
              <Button
                variant="gradient-1"
                size="lg"
                href={gformUrl}
                isExternal
                className="flex-1 w-full sm:w-1/2 min-h-[56px] py-3.5 px-5 flex items-center justify-center text-center"
              >
                <span className="font-bold text-sm sm:text-base">Isi Form RSVP ↗</span>
              </Button>
            ) : (
              <Button
                variant="gradient-2"
                size="lg"
                href="https://instagram.com/mufomic"
                isExternal
                className="flex-1 w-full sm:w-1/2 min-h-[56px] py-3.5 px-5 flex items-center justify-center text-center leading-snug"
              >
                <span className="font-bold text-sm sm:text-base">Instagram @mufomic</span>
              </Button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RsvpSection;