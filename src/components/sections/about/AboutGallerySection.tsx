'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
    { id: '1', src: '/images/about-photos/photo1.webp', title: '', category: '' },
    { id: '2', src: '/images/about-photos/photo2.webp', title: '', category: '' },
    { id: '3', src: '/images/about-photos/photo3.webp', title: '', category: '' },
    { id: '4', src: '/images/about-photos/photo4.webp', title: '', category: '' },
    { id: '5', src: '/images/about-photos/photo5.webp', title: '', category: '' },
    { id: '6', src: '/images/about-photos/photo6.webp', title: '', category: '' },
    { id: '7', src: '/images/about-photos/photo7.webp', title: '', category: '' },
    { id: '8', src: '/images/about-photos/photo8.webp', title: '', category: '' },
    { id: '9', src: '/images/about-photos/photo9.webp', title: '', category: '' },
    { id: '10', src: '/images/about-photos/photo10.webp', title: '', category: '' },
    { id: '11', src: '/images/about-photos/photo11.webp', title: '', category: '' },
    { id: '12', src: '/images/about-photos/photo12.webp', title: '', category: '' },
    { id: '13', src: '/images/about-photos/photo13.webp', title: '', category: '' },
    { id: '14', src: '/images/about-photos/photo14.webp', title: '', category: '' },
    { id: '15', src: '/images/about-photos/photo15.webp', title: '', category: '' },
    { id: '16', src: '/images/about-photos/photo16.webp', title: '', category: '' },
    { id: '17', src: '/images/about-photos/photo17.webp', title: '', category: '' },
    { id: '18', src: '/images/about-photos/photo18.webp', title: '', category: '' },
    { id: '19', src: '/images/about-photos/photo19.webp', title: '', category: '' },
    { id: '20', src: '/images/about-photos/photo20.webp', title: '', category: '' },
    { id: '21', src: '/images/about-photos/photo21.webp', title: '', category: '' },
    { id: '22', src: '/images/about-photos/photo22.webp', title: '', category: '' },
    { id: '23', src: '/images/about-photos/photo23.webp', title: '', category: '' },
    { id: '24', src: '/images/about-photos/photo24.webp', title: '', category: '' },
    { id: '25', src: '/images/about-photos/photo25.webp', title: '', category: '' },
    { id: '26', src: '/images/about-photos/photo26.webp', title: '', category: '' },
    { id: '27', src: '/images/about-photos/photo27.webp', title: '', category: '' },
    { id: '28', src: '/images/about-photos/photo28.webp', title: '', category: '' },
    { id: '29', src: '/images/about-photos/photo29.webp', title: '', category: '' },
    { id: '30', src: '/images/about-photos/photo30.webp', title: '', category: '' }
  ];

  const row1 = [...photoList.slice(0, 10), ...photoList.slice(0, 10)];
  const row2 = [...photoList.slice(10, 20), ...photoList.slice(10, 20)];
  const row3 = [...photoList.slice(20, 30), ...photoList.slice(20, 30)];

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
          <div className="animate-marquee-right gap-4 px-2 will-change-transform [transform:translateZ(0)]">
            {row1.map((photo, idx) => (
              <div
                key={`r1-${idx}`}
                onClick={() => setSelectedPhoto(photo)}
                className="w-72 sm:w-80 h-44 sm:h-48 flex-shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-[#181818] cursor-pointer hover:scale-105 hover:border-[#F36416] transition-all duration-300 shadow-xl group relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.title || 'Mufomic Photo'}
                  width={320}
                  height={200}
                  quality={75}
                  loading="lazy"
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
          <div className="animate-marquee-left gap-4 px-2 will-change-transform [transform:translateZ(0)]">
            {row2.map((photo, idx) => (
              <div
                key={`r2-${idx}`}
                onClick={() => setSelectedPhoto(photo)}
                className="w-72 sm:w-80 h-44 sm:h-48 flex-shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-[#181818] cursor-pointer hover:scale-105 hover:border-[#5278A2] transition-all duration-300 shadow-xl group relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.title || 'Mufomic Photo'}
                  width={320}
                  height={200}
                  quality={75}
                  loading="lazy"
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
          <div className="animate-marquee-right gap-4 px-2 will-change-transform [transform:translateZ(0)]">
            {row3.map((photo, idx) => (
              <div
                key={`r3-${idx}`}
                onClick={() => setSelectedPhoto(photo)}
                className="w-72 sm:w-80 h-44 sm:h-48 flex-shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-[#181818] cursor-pointer hover:scale-105 hover:border-[#C90A20] transition-all duration-300 shadow-xl group relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.title || 'Mufomic Photo'}
                  width={320}
                  height={200}
                  quality={75}
                  loading="lazy"
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 transition-all"
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

            <div className="w-full max-h-[70vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center relative h-[60vh]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title || 'Mufomic Photo Detail'}
                fill
                quality={90}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutGallerySection;