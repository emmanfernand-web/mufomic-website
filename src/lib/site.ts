import { socialLinks } from '../data/navigation';

/* Single source of truth for SEO: metadata, sitemap, robots, and JSON-LD all read from here */

export const SITE_URL = 'https://www.mufomic.my.id';

export const SITE_NAME = 'MUFOMIC';

export const SITE_TITLE = 'MUFOMIC — Multimedia Face of Music | UKM Musik UMN';

export const SITE_DESCRIPTION =
  'MUFOMIC (Multimedia Face of Music) adalah UKM musik berformat band di Universitas Multimedia Nusantara (UMN) sejak 2013. Info event Mufogigs, divisi, dan dokumentasi MUFOMIC.';

export const SITE_KEYWORDS = [
  'MUFOMIC',
  'Mufomic',
  'Mufomic UMN',
  'Multimedia Face of Music',
  'UKM musik UMN',
  'UKM band UMN',
  'Universitas Multimedia Nusantara',
  'Mufogigs',
];

export const SOCIAL_URLS = socialLinks.map((s) => s.href);

/* Build JSON-LD safely (escape "<" so the payload can't close the script tag) */
export const jsonLdScript = (data: object) => ({
  __html: JSON.stringify(data).replace(/</g, '\\u003c'),
});
