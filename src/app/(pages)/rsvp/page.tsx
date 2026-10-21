import React from 'react';
import type { Metadata } from 'next';
import RsvpSection from '../../../components/sections/RsvpSection';
import { EVENT } from '../../../data/event';
import { SITE_URL, SITE_NAME, jsonLdScript } from '../../../lib/site';

const title = `${EVENT.title} ${EVENT.subtitle.split(':')[0].trim()} — Event Musik UMN`;
const description = `${EVENT.title} ${EVENT.subtitle} oleh MUFOMIC UMN di ${EVENT.venue}, ${EVENT.date}. Menampilkan ${[...EVENT.headliners, ...EVENT.specials].join(', ')}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/rsvp' },
  openGraph: { url: '/rsvp', title, description, images: [{ url: EVENT.flyer, alt: `Flyer ${EVENT.title} ${EVENT.subtitle}` }] },
  twitter: { title, description, images: [EVENT.flyer] },
};

/* Event structured data so the gig can appear in Google's event results */
const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicEvent',
  name: `${EVENT.title} ${EVENT.subtitle}`,
  description: EVENT.blurb,
  startDate: EVENT.startDate,
  endDate: EVENT.endDate,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  image: [`${SITE_URL}${EVENT.flyer}`],
  url: `${SITE_URL}/rsvp`,
  location: {
    '@type': 'Place',
    name: EVENT.venue,
    address: {
      '@type': 'PostalAddress',
      addressLocality: EVENT.addressLocality,
      addressRegion: EVENT.addressRegion,
      addressCountry: 'ID',
    },
  },
  performer: [...EVENT.headliners, ...EVENT.specials].map((name) => ({ '@type': 'MusicGroup', name })),
  organizer: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL },
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'IDR',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/rsvp`,
  },
};

export default function RsvpPage() {
  return (
    <div className="pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(eventJsonLd)} />
      <RsvpSection asPageHeading />
    </div>
  );
}
