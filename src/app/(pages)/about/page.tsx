import React from 'react';
import type { Metadata } from 'next';
import AboutSection from '../../../components/sections/about/AboutSection';

const description =
  'Tentang MUFOMIC (Multimedia Face of Music), UKM musik berformat band di Universitas Multimedia Nusantara sejak 2013: sejarah, dokumentasi kegiatan, serta divisi band dan kreatif.';

export const metadata: Metadata = {
  title: 'Tentang Kami — UKM Musik UMN',
  description,
  alternates: { canonical: '/about' },
  openGraph: { url: '/about', title: 'Tentang MUFOMIC — Multimedia Face of Music', description },
  twitter: { title: 'Tentang MUFOMIC — Multimedia Face of Music', description },
};

export default function AboutPage() {
  return (
    <div className="pb-0">
      <AboutSection />
    </div>
  );
}
