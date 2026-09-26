'use client';

import React from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export const RsvpSection: React.FC = () => {
  // Config for Google Form URL redirection
  const gformUrl = "https://forms.gle/mufomic-rsvp"; 
  const isTicketAvailable = false; // Set to false since tickets are Coming Soon

  return (
    <section id="rsvp" className="relative min-h-[620px] flex items-center justify-center pt-28 sm:pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Layer spanning full section */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/background/home-rsvp-bg.webp"
          alt="Mufomic Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-45 contrast-110"
        />
        {/* Dark Gradient Overlay for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/80 via-[#1C1C1C]/70 to-[#1C1C1C] -z-10" />
      </div>

      {/* Ambient glowing highlights */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#C90A20]/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#F36416]/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Aesthetic Glass Card Container */}
      <div className="w-full max-w-3xl mx-auto text-center relative z-10">
        <div className="glass-inspo-card p-8 sm:p-12 md:p-14 border border-white/20 rounded-3xl shadow-2xl space-y-6 backdrop-blur-3xl bg-white/[0.08]">
          
          {/* Status Badge */}
          <div className="flex justify-center">
            <Badge variant="orange">
              {isTicketAvailable ? 'RSVP OPEN' : 'COMING SOON'}
            </Badge>
          </div>

          {/* Title & Description */}
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F8F7F2] tracking-tight">
              RSVP Mufogigs Showcase
            </h2>
            <p className="text-[#F8F7F2]/80 text-sm sm:text-base leading-relaxed">
              {isTicketAvailable
                ? 'Pesan tiket masuk gratis kamu untuk menyaksikan panggung kreasi dan penampilan musik dari komunitas MUFOMIC UMN.'
                : 'Reservasi tiket Mufogigs Showcase belum dibuka. Dapatkan informasi terbaru mengenai tanggal rilis tiket melalui Instagram resmi kami.'}
            </p>
          </div>

          {/* Action Button Section (Direct to GForm when available, Coming Soon when not) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            {isTicketAvailable ? (
              <Button
                variant="gradient-1"
                size="lg"
                href={gformUrl}
                isExternal
                className="w-full sm:w-auto"
              >
                Isi Form RSVP (Google Form) ↗
              </Button>
            ) : (
              <>
                <Button
                  variant="glass-pill"
                  size="lg"
                  disabled
                  className="w-full sm:w-auto opacity-70 cursor-not-allowed"
                >
                  🔒 RSVP Coming Soon
                </Button>
                <Button
                  variant="gradient-2"
                  size="lg"
                  href="https://instagram.com/mufomic"
                  isExternal
                  className="w-full sm:w-auto"
                >
                  Update Instagram @mufomic
                </Button>
              </>
            )}
          </div>

          {/* Footer note */}
          <div className="pt-2 text-xs font-mono text-[#F8F7F2]/50">
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
