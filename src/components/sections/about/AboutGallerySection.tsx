'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Photos dataset pointing to /images/about-photos/
const PHOTOS = Array.from({ length: 30 }, (_, i) => ({
  src: `/images/about-photos/photo${i + 1}.webp`,
  frame: String(i + 1).padStart(2, '0'),
}));

/* Each strip renders its photos twice so the marquee can loop seamlessly */
const STRIPS = [
  { photos: PHOTOS.slice(0, 15), offset: 0, direction: 'animate-marquee-left', tilt: '-rotate-[1.2deg]' },
  { photos: PHOTOS.slice(15), offset: 15, direction: 'animate-marquee-right', tilt: 'rotate-[1deg]' },
];

export const AboutGallerySection: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected !== null && !dialog.open) dialog.showModal();
    if (selected === null && dialog.open) dialog.close();
  }, [selected]);

  const step = (dir: 1 | -1) =>
    setSelected((i) => (i === null ? i : (i + dir + PHOTOS.length) % PHOTOS.length));

  return (
    <section id="about-gallery" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="grain-overlay absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="event-reveal max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F36416]">
            {'//'} Dokumentasi & Galeri
          </p>
          <h2 className="mt-3 font-display uppercase leading-[0.85] text-[#F8F7F2] text-[clamp(3rem,10vw,6.5rem)]">
            Dokumentasi
            <span className="block text-outline">Mufomic</span>
          </h2>
        </div>
      </header>

      {/* ── Film strips ── */}
      <div className="mt-14 space-y-10 sm:space-y-12">
        {STRIPS.map((strip, s) => (
          <div key={s} className={`film-strip ${strip.tilt} -mx-4`}>
            <div className="film-viewport overflow-hidden">
              <div className={`film-track ${strip.direction} gap-2 sm:gap-3`} style={{ animationDuration: '70s' }}>
                {[0, 1].map((dup) =>
                  strip.photos.map((photo, i) => (
                    <button
                      key={`${dup}-${photo.frame}`}
                      type="button"
                      tabIndex={dup ? -1 : 0}
                      aria-hidden={dup ? true : undefined}
                      onClick={() => setSelected(strip.offset + i)}
                      className="film-frame group relative flex-shrink-0 w-52 sm:w-72 aspect-[3/2] overflow-hidden bg-[#111] cursor-zoom-in focus:outline-none"
                      aria-label={`Buka foto ${photo.frame}`}
                    >
                      <Image
                        src={photo.src}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 288px, 208px"
                        className="object-cover"
                      />
                      <span className="film-frame-hl absolute inset-0 pointer-events-none" aria-hidden="true" />
                      <span className="absolute bottom-1.5 left-2 bg-black/70 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.2em] text-[#F36416]" aria-hidden="true">
                        MFM {photo.frame}A
                      </span>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1);
          if (e.key === 'ArrowLeft') step(-1);
        }}
        className="event-lightbox m-auto bg-transparent p-0 w-[min(94vw,72rem)] max-w-none overflow-visible"
      >
        {selected !== null && (
          <figure className="relative">
            <div className="relative w-full aspect-[3/2] max-h-[78vh] bg-[#111] shadow-[10px_10px_0_#C90A20]">
              <Image
                key={PHOTOS[selected].src}
                src={PHOTOS[selected].src}
                alt={`Dokumentasi MUFOMIC, foto ${PHOTOS[selected].frame}`}
                fill
                sizes="94vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-5 flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[#F8F7F2]/70">
              <button
                type="button"
                onClick={() => step(-1)}
                className="px-4 py-2 border border-[#F8F7F2]/25 hover:bg-[#F8F7F2] hover:text-[#1C1C1C] transition-colors"
                aria-label="Foto sebelumnya"
              >
                ← Prev
              </button>
              <span>
                <span className="text-[#F36416]">{PHOTOS[selected].frame}</span> / {PHOTOS.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                className="px-4 py-2 border border-[#F8F7F2]/25 hover:bg-[#F8F7F2] hover:text-[#1C1C1C] transition-colors"
                aria-label="Foto berikutnya"
              >
                Next →
              </button>
            </figcaption>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-2 sm:-right-4 w-10 h-10 flex items-center justify-center bg-[#C90A20] text-[#F8F7F2] font-mono font-bold shadow-[3px_3px_0_#F8F7F2]"
              aria-label="Tutup"
            >
              ✕
            </button>
          </figure>
        )}
      </dialog>
    </section>
  );
};

export default AboutGallerySection;
