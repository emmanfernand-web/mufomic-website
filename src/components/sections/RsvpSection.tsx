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
            <Badge variant="inspo">
              PREVIOUS EVENT
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

          {/* Action Button Section - Instagram Only */}
          <div className="pt-2 flex justify-center max-w-md mx-auto">
            <Button
              variant="gradient-2"
              size="lg"
              href="https://instagram.com/mufomic"
              isExternal
              className="w-full sm:w-auto sm:min-w-[280px] min-h-[56px] py-3.5 px-8 flex items-center justify-center gap-2.5 text-center leading-snug shadow-[0_0_25px_rgba(82,120,162,0.4)] hover:shadow-[0_0_35px_rgba(82,120,162,0.7)] hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-sm sm:text-base">Instagram @mufomic</span>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RsvpSection;