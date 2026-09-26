import { QuickLinkItem, AuditionRule, MufomicEvent } from '../types/event';

export const quickLinkData: QuickLinkItem[] = [
  {
    id: 'audisi-gen13',
    title: 'Regulasi Audisi Online Gen 13',
    description: 'Panduan lengkap, syarat ketentuan, dan mekanisme submit video audisi anggota baru Gen 13.',
    href: '#audisi',
    tag: 'HOT',
    highlight: true,
    ctaText: 'Baca Regulasi',
  },
  {
    id: 'rsvp-mufogigs',
    title: 'RSVP Mufogigs Showcase',
    description: 'Pesan tiket gratis untuk menyaksikan panggung kreasi & gigs perdana Gen 13 Mufomic.',
    href: '/rsvp',
    tag: 'OPEN',
    highlight: false,
    ctaText: 'Ambil Slot',
  },
  {
    id: 'form-pendaftaran',
    title: 'Form Pendaftaran Anggota',
    description: 'Isi formulir resmi untuk mendaftar sebagai divisi Musisi, Crew, atau Pengurus Mufomic Gen 13.',
    href: 'https://forms.gle/mufomic-gen13',
    tag: 'NEW',
    highlight: false,
    ctaText: 'Isi Form',
  },
  {
    id: 'instagram-official',
    title: 'Instagram @mufomic',
    description: 'Dapatkan update harian, pengumuman kelulusan audisi, dan dokumentasi kegiatan terbaru.',
    href: 'https://instagram.com/mufomic',
    tag: 'SOCIAL',
    highlight: false,
    ctaText: 'Follow IG',
  },
];

export const auditionRulesData: AuditionRule[] = [
  {
    id: 1,
    number: '01',
    title: 'Status Mahasiswa Aktif UMN',
    description: 'Peserta audisi merupakan mahasiswa aktif Universitas Multimedia Nusantara (Angkatan 2024 & 2025).',
    important: true,
  },
  {
    id: 2,
    number: '02',
    title: 'Format Video Performance',
    description: 'Video dimainkan secara live (tanpa lip sync / autotune berlebih). Menampilkan ekspresi dan wajah peserta dengan jelas.',
    details: [
      'Durasi video 2-4 menit',
      'Format landscape HD (1080p)',
      'Suara instrumen/vokal terdengar jernih'
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'Pilihan Lagu Audisi',
    description: 'Membawakan 1 lagu wajib Mufomic Gen 13 atau 1 lagu bebas yang menunjukkan keahlian instrumen/vokal terbaikmu.',
  },
  {
    id: 4,
    number: '04',
    title: 'Upload & Pengumpulan',
    description: 'Upload video ke Google Drive / YouTube (Unlisted) dan cantumkan link pada formulir pendaftaran sebelum batas waktu.',
    important: true,
  }
];

export const upcomingEventsData: MufomicEvent[] = [
  {
    id: 'gig-1',
    title: 'Mufogigs: Gen 13 Soundburst Showcase',
    subtitle: 'Malam Penyambutan Anggota Baru',
    date: '15 Oktober 2026',
    time: '18.30 - 22.00 WIB',
    location: 'Kantin Gedung C, Universitas Multimedia Nusantara',
    description: 'Panggung perkenalan musik lintas genre dari musisi mufomic gen 13 dengan kejutan bintang tamu kampus.',
    category: 'Mufogigs',
    isRegistrationOpen: true,
    maxSeats: 250,
    registeredCount: 184,
    badgeText: 'OPEN RSVP'
  },
  {
    id: 'audition-1',
    title: 'Audisi Online Mufomic Gen 13',
    subtitle: 'Perekrutan Musisi & Crew',
    date: '01 - 20 Oktober 2026',
    time: '24 Jam Online',
    location: 'Submit via Website / Form Online',
    description: 'Kesempatan bergabung bersama keluarga besar Orkes & Band Mufomic UMN angkatan ke-13.',
    category: 'Audisi',
    isRegistrationOpen: true,
    badgeText: 'SEGERA BERAKHIR'
  }
];
