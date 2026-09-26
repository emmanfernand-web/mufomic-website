'use client';

import React from 'react';

export const AboutIntroSection: React.FC = () => {
  return (
    <section id="about-intro" className="relative min-h-[750px] flex items-center justify-center pt-32 sm:pt-36 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Full-bleed Section Background Layer */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/background/home-about-bg.webp"
          alt="Mufomic Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-110"
        />
        {/* Dark Gradient Overlay for the entire section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/70 via-[#1C1C1C]/60 to-[#1C1C1C] -z-10" />
      </div>

      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C90A20]/25 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5278A2]/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Aesthetic Blurry Frosted Glass Card (Heya Inspo Layout) */}
      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="glass-inspo-card p-8 sm:p-12 md:p-14 overflow-hidden border border-white/20 shadow-2xl backdrop-blur-3xl bg-white/[0.08]">
          
          {/* Grid Layout: Left (Logotype + Explanation), Right (Logo) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Logotype Image & Explanation Text */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Logotype Image Header */}
              <div>
                <img
                  src="/images/logo/logo-mufomic-about.png"
                  alt="Apa itu MUFOMIC"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('about-logotype.webp')) {
                      target.src = '/images/logo/about-logotype.webp';
                    }
                  }}
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain max-w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* Explanation Text (Heya Inspo with bold highlights) */}
              <div className="space-y-4 text-[#F8F7F2]/90 text-sm sm:text-base leading-relaxed">
                <p>
                  Multimedia Face of Music (Mufomic) merupakan salah satu UKM yang bergerak di bidang seni dan budaya dan memiliki format band. 
                  Salah satu visi Mufomic adalah untuk menjadi wadah bagi mahasiswa UMN yang senang bermusik, terutama di dalam band, dan menjadi wadah untuk berekspresi dan saling mengapresiasi karya satu sama lain.
                </p>
                <p>
                  MUFOMIC sendiri berdiri pada tahun 2013. Sejak tahun 2013, Mufomic telah membentuk lebih dari 100 band untuk bermusik baik di dalam maupun di luar kampus.
                </p>
              </div>
            </div>

            {/* Right Column: Mufomic Logo Asset standing on the right */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <img
                src="/images/logo/logo-mufomic-hero.webp"
                alt="MUFOMIC Logo"
                className="w-3/4 sm:w-2/3 lg:w-full max-w-xs sm:max-w-sm h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
