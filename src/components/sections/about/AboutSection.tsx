import React from 'react';
import AboutIntroSection from './AboutIntroSection';
import AboutGallerySection from './AboutGallerySection';
import AboutDivisionsSection from './AboutDivisionsSection';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Section 1: Apa itu Mufomic (Tanpa Tombol) */}
      <AboutIntroSection 
        showButton={false} 
        bgImage="/images/background/about-division-bg.webp" 
      />

      {/* Section 2: Foto-foto Mufomic */}
      <AboutGallerySection />

      {/* Section 3: Divisi (Band dan Kreatif) */}
      <AboutDivisionsSection />
    </div>
  );
};

export default AboutSection;