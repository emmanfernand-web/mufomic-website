import React from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Home Background Image Overlay */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/background/home-bg.webp"
          alt="Mufomic Home Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Dark Gradient Overlay for high readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/75 via-[#1C1C1C]/65 to-[#1C1C1C] -z-10" />
      </div>

      {/* Ambient glowing highlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C90A20]/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5278A2]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* OMB-Inspired Side-by-Side Hero Layout */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Mufomic Hero Logo Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <img
            src="/images/logo/logo-mufomic-hero.webp"
            alt="MUFOMIC Logo Hero"
            className="w-4/5 sm:w-3/4 lg:w-full max-w-md h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Column: Inspo Glassmorphism Card */}
        <div className="lg:col-span-7">
          <div className="glass-inspo-card p-7 sm:p-10 md:p-12 space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden">
            
            {/* Top Pill Badge */}
            <div>
              <Badge variant="inspo">
                MUFOMIC UMN
              </Badge>
            </div>

            {/* Headline & Description */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#F8F7F2] leading-[1.15]">
                Multimedia <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5278A2] via-[#C90A20] to-[#F36416]">
                  Face of Music
                </span>
              </h1>
              <p className="text-[#F8F7F2]/90 text-sm sm:text-base leading-relaxed">
                Wadah kreativitas, harmoni, dan kebersamaan bagi para musisi Universitas Multimedia Nusantara. Menyatukan berbagai instrumen dan suara dalam satu panggung kreasi yang solid.
              </p>
            </div>

            {/* Hero Action Buttons (RSVP & About) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="gradient-1"
                size="lg"
                href="/rsvp"
                className="w-full relative overflow-hidden group shadow-[0_0_25px_rgba(243,100,22,0.6)] hover:shadow-[0_0_35px_rgba(243,100,22,0.9)] hover:scale-105 transition-all duration-300"
              >
                {/* Light Sweep / Shimmer Overlay */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer pointer-events-none" />
                <span className="relative z-10 font-bold">Mufogigs Vol. 10</span>
              </Button>
              <Button
                variant="glass-pill"
                size="lg"
                href="/about"
                className="w-full"
              >
                Tentang Mufomic
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
