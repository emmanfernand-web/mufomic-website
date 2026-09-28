import { NavItem, SocialLink } from '../types/nav';

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Event', href: '/rsvp' },
  { label: 'About', href: '/about' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', href: 'https://instagram.com/mufomic', iconName: '/images/social/instagram.svg' },
  { platform: 'WhatsApp', href: 'https://wa.me/6287817816935', iconName: '/images/social/whatsapp.svg' },
];
