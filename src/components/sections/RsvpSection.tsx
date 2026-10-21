'use client';

import React, { useRef } from 'react';
import Button from '../ui/Button';
import { EVENT } from '../../data/event';

const InstagramIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.8 12 21 12 21z" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

interface RsvpSectionProps {
  /** Render the title as the page's <h1> (on /rsvp); defaults to <h2> */
  asPageHeading?: boolean;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ asPageHeading = false }) => {
  const Heading = asPageHeading ? 'h1' : 'h2';
  // Config for Google Form & Google Maps URL
  const gformUrl = "https://forms.gle/mufomic-rsvp";
  const googleMapsUrl = "https://maps.app.goo.gl/KXsWES47wX4h3KqL9";
  const isTicketAvailable = false; // Set to false for Coming Soon / True when RSVP opens
  const showMapsButton = false; // Event sudah selesai — set true lagi untuk event berikutnya

  const lightboxRef = useRef<HTMLDialogElement>(null);

  return (
    <section id="rsvp" className="relative pt-28 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/background/home-rsvp-bg.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-105 grayscale contrast-125 brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] via-[#1C1C1C]/60 to-[#1C1C1C]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_25%_55%,rgba(201,10,32,0.22),transparent_70%)]" />
      </div>
      <div className="grain-overlay absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />

      <div className="relative w-full max-w-6xl mx-auto">
        {/* ── Header ── */}
        <header className="event-reveal relative flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#F8F7F2]/15">
          <div>
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F36416]">
              {'//'} Event Archive — No. {EVENT.edition}
            </p>
            <Heading className="mt-3 font-display uppercase leading-[0.85] text-[#F8F7F2] text-[clamp(3.5rem,12vw,8rem)]">
              {EVENT.title}
              <span className="block text-outline text-[0.55em] mt-2">{EVENT.subtitle}</span>
            </Heading>
          </div>
          <span className="event-stamp self-start sm:self-end inline-block font-mono font-bold uppercase text-xs sm:text-sm tracking-[0.2em] text-[#C90A20] px-4 py-2">
            {EVENT.status}
          </span>
        </header>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* ── Flyer (click to enlarge) ── */}
          <div className="event-reveal lg:col-span-5 flex flex-col items-center lg:sticky lg:top-28">
            <button
              type="button"
              onClick={() => lightboxRef.current?.showModal()}
              className="event-flyer relative block w-full max-w-sm cursor-zoom-in focus:outline-none"
              aria-label="Perbesar flyer Mufogigs Vol. 10"
            >
              <img
                src={EVENT.flyer}
                alt="Flyer Mufogigs Vol. 10"
                className="block w-full h-auto"
              />
              <span className="tape-strip absolute -top-3 left-6 w-24 h-7 -rotate-[8deg]" aria-hidden="true" />
              <span className="tape-strip absolute -top-3 right-4 w-20 h-7 rotate-[10deg]" aria-hidden="true" />
              <span className="tape-strip absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-7 rotate-[3deg]" aria-hidden="true" />
            </button>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F8F7F2]/40">
              Klik flyer untuk perbesar
            </p>
          </div>

          {/* ── Details ── */}
          <div className="lg:col-span-7 space-y-12">
            <p className="event-reveal text-[#F8F7F2]/75 text-base sm:text-lg leading-relaxed max-w-xl">
              {EVENT.blurb}
            </p>

            {/* Setlist */}
            <div className="event-reveal">
              <h3 className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F8F7F2]/50 mb-4">
                Setlist / Line-up
              </h3>
              <ol className="border-t border-[#F8F7F2]/15">
                {EVENT.headliners.map((band, i) => (
                  <li
                    key={band}
                    className="event-setlist-row group flex items-baseline gap-5 border-b border-[#F8F7F2]/15 py-3 px-2 cursor-default"
                  >
                    <span className="font-mono text-xs text-[#F36416] group-hover:text-[#F8F7F2] transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display uppercase text-4xl sm:text-5xl text-[#F8F7F2] leading-none transition-transform duration-300 group-hover:translate-x-2">
                      {band}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#F8F7F2]/50">
                + Special performance
              </p>
              <ul className="flex flex-wrap gap-3">
                {EVENT.specials.map((band) => (
                  <li
                    key={band}
                    className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#F8F7F2] border border-[#F8F7F2]/25 px-4 py-2 transition-colors hover:bg-[#F8F7F2] hover:text-[#1C1C1C]"
                  >
                    {band}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ticket stub */}
            <div className="event-reveal flex flex-col sm:flex-row bg-[#F8F7F2] text-[#1C1C1C] shadow-[10px_10px_0_#5278A2] -rotate-[0.6deg] transition-transform duration-300 hover:rotate-0">
              <dl className="flex-1 grid grid-cols-2 gap-x-6 gap-y-5 p-6 sm:p-7">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C]/55">Tanggal</dt>
                  <dd className="mt-1 font-display uppercase text-xl sm:text-2xl leading-tight">{EVENT.date}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C]/55">Waktu</dt>
                  <dd className="mt-1 font-display uppercase text-xl sm:text-2xl leading-tight">{EVENT.time}</dd>
                </div>
                <div className="col-span-2 pt-4 border-t border-dashed border-[#1C1C1C]/25">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1C1C1C]/55">Lokasi</dt>
                  <dd className="mt-1 font-display uppercase text-2xl sm:text-3xl leading-tight">{EVENT.venue}</dd>
                  <dd className="font-mono text-xs text-[#1C1C1C]/60">{EVENT.area}</dd>
                </div>
              </dl>
              <div className="event-ticket-perf h-3 sm:h-auto sm:w-3 mx-6 sm:mx-0 sm:my-4" aria-hidden="true" />
              <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-2 px-6 py-5 sm:px-7 sm:w-36 bg-[#C90A20] text-[#F8F7F2]">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">Admit all</span>
                <span className="font-display uppercase text-3xl leading-none">Free</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">Entry</span>
              </div>
            </div>

            {/* Actions */}
            <div className="event-reveal flex flex-col sm:flex-row gap-5">
              {isTicketAvailable && (
                <Button href={gformUrl} isExternal arrow>
                  RSVP Sekarang
                </Button>
              )}
              <Button href="https://instagram.com/mufomic" isExternal variant={isTicketAvailable ? 'outline' : 'primary'}>
                <InstagramIcon />
                Instagram @mufomic
              </Button>
              {showMapsButton && (
                <Button href={googleMapsUrl} isExternal variant="outline">
                  <PinIcon />
                  Buka di Maps
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Flyer lightbox ── */}
      <dialog
        ref={lightboxRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="event-lightbox m-auto bg-transparent p-0 max-w-[min(92vw,40rem)] max-h-[92vh] overflow-visible"
      >
        <img src={EVENT.flyer} alt="Flyer Mufogigs Vol. 10" className="block w-full h-auto max-h-[88vh] object-contain" />
        <button
          type="button"
          onClick={() => lightboxRef.current?.close()}
          className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center bg-[#C90A20] text-[#F8F7F2] font-mono font-bold shadow-[3px_3px_0_#F8F7F2]"
          aria-label="Tutup"
        >
          ✕
        </button>
      </dialog>
    </section>
  );
};

export default RsvpSection;
