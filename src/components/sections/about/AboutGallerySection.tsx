'use client';

import React, { useState } from 'react';
import Badge from '../../ui/Badge';

interface PhotoItem {
  id: string;
  src: string;
  title: string;
  category: string;
}

export const AboutGallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Photos dataset pointing to /images/about-photos/
  const photoList: PhotoItem[] = [
    { id: '1', src: '/images/about-photos/photo1.jpg', title: 'Mufogigs Performance 1', category: 'Live Gig' },
    { id: '2', src: '/images/about-photos/photo2.jpg', title: 'Mufomic Gathering', category: 'Community' },
    { id: '3', src: '/images/about-photos/photo3.jpg', title: 'Band Practice Session', category: 'Rehearsal' },
    { id: '4', src: '/images/about-photos/photo4.jpg', title: 'Acoustic Stage Showcase', category: 'Acoustic' },
    { id: '5', src: '/images/about-photos/photo5.jpg', title: 'Crew & Sound Ops', category: 'Technical' },
    { id: '6', src: '/images/about-photos/photo6.jpg', title: 'Gen 13 Welcoming', category: 'Event' },
    { id: '7', src: '/images/about-photos/photo7.jpg', title: 'Vocal Ensemble Jam', category: 'Vocal' },
    { id: '8', src: '/images/about-photos/photo8.jpg', title: 'Outdoor Music Fest', category: 'Festival' },
    { id: '9', src: '/images/about-photos/photo9.jpg', title: 'Brass & Rhythm Stage', category: 'Orchestra' },
  ];

  // Divide into 3 rows for marquee animation
  const row1 = [...photoList.slice(0, 3), ...photoList.slice(0, 3), ...photoList.slice(0, 3)];
  const row2 = [...photoList.slice(3, 6), ...photoList.slice(3, 6), ...photoList.slice(3, 6)];
  const row3 = [...photoList.slice(6, 9), ...photoList.slice(6, 9), ...photoList.slice(6, 9)];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, title: string) => {
    // Graceful fallback SVG generator when exact photo file doesn't exist yet
    const target = e.target as HTMLImageElement;
    target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200"><rect width="320" height="200" fill="%2326161f"/><circle cx="160" cy="100" r="50" fill="%23c90a20" opacity="0.3"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="%23f8f7f2" font-family="sans-serif" font-size="14" font-weight="bold">MUFOMIC PHOTO</text><text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="%23f36416" font-family="sans-serif" font-size="11">${encodeURIComponent(title)}</text></svg>`;
  };

  return (
    <section id="about-gallery" className="py-16 space-y-8 overflow-hidden">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
        <Badge variant="inspo">DOKUMENTASI & GALERI</Badge>
        <h2 className="text-3xl sm:text-4xl font-black text-[#F8F7F2] tracking-tight">
          Dokumentasi <span className="text-[#C90A20]">MUFOMIC</span>
        </h2>
        <p className="text-[#F8F7F2]/70 text-xs sm:text-sm">
          Aktivitas, pertunjukan live, latihan, dan momen kebersamaan anggota MUFOMIC.
        </p>
      </div>

      {/* Marquee Photo Rows */}
      <div className="space-y-4 pt-2">
        {/* Row 1: Moves Right */}
        <div className="relative overflow-hidden py-1">
          <div className="animate-marquee-right gap-4 px-2">
            {row1.map((photo, idx) => (
              <div
                key={`r1-${idx}`}
                onClick={() => setSelectedPhoto(photo)}
                className="w-72 sm:w-80 h-44 sm:h-48 flex-shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-black/40 backdrop-blur-md cursor-pointer hover:scale-105 hover:border-[#F36416] transition-all duration-300 shadow-xl group relative"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  onError={(e) => handleImageError(e, photo.title)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-[#F36416] uppercase font-bold">{photo.category}</span>
                  <span className="text-xs font-bold text-[#F8F7F2]">{photo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves Left */}
        <div className="relative overflow-hidden py-1">
          <div className="animate-marquee-left gap-4 px-2">
            {row2.map((photo, idx) => (
              <div
                key={`r2-${idx}`}
                onClick={() => setSelectedPhoto(photo)}
                className="w-72 sm:w-80 h-44 sm:h-48 flex-shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-black/40 backdrop-blur-md cursor-pointer hover:scale-105 hover:border-[#5278A2] transition-all duration-300 shadow-xl group relative"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  onError={(e) => handleImageError(e, photo.title)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-[#5278A2] uppercase font-bold">{photo.category}</span>
                  <span className="text-xs font-bold text-[#F8F7F2]">{photo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Moves Right */}
        <div className="relative overflow-hidden py-1">
          <div className="animate-marquee-right gap-4 px-2">
            {row3.map((photo, idx) => (
              <div
                key={`r3-${idx}`}
                onClick={() => setSelectedPhoto(photo)}
                className="w-72 sm:w-80 h-44 sm:h-48 flex-shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-black/40 backdrop-blur-md cursor-pointer hover:scale-105 hover:border-[#C90A20] transition-all duration-300 shadow-xl group relative"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  onError={(e) => handleImageError(e, photo.title)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-[#C90A20] uppercase font-bold">{photo.category}</span>
                  <span className="text-xs font-bold text-[#F8F7F2]">{photo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal on Image Click */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 transition-all"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#1C1C1C] border border-white/20 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-xs font-mono text-[#F36416] font-bold">{selectedPhoto.category}</span>
                <h3 className="text-lg font-bold text-[#F8F7F2]">{selectedPhoto.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F7F2] flex items-center justify-center font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="w-full max-h-[70vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                onError={(e) => handleImageError(e, selectedPhoto.title)}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutGallerySection;
