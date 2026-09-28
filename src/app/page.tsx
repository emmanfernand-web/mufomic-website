import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutIntroSection from '../components/sections/about/AboutIntroSection';
import RsvpSection from '../components/sections/RsvpSection';

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      {/* On Homepage: Display ONLY Section 1 (Apa itu Mufomic) */}
      <RsvpSection />
      <AboutIntroSection
        showButton
      />
    </div>
  );
}