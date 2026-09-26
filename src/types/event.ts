export type EventCategory = 'Audisi' | 'Mufogigs' | 'Workshop' | 'Gathering' | 'Main Event';

export interface MufomicEvent {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: EventCategory;
  isRegistrationOpen: boolean;
  maxSeats?: number;
  registeredCount?: number;
  posterUrl?: string;
  badgeText?: string;
}

export interface QuickLinkItem {
  id: string;
  title: string;
  description: string;
  href: string;
  tag?: string;
  highlight?: boolean;
  ctaText?: string;
}

export interface RsvpFormData {
  fullName: string;
  email: string;
  studentId: string;
  major: string;
  batch: string;
  instrumentOrRole: string;
  selectedEventId: string;
  notes?: string;
}

export interface AuditionRule {
  id: number;
  number: string;
  title: string;
  description: string;
  details?: string[];
  important?: boolean;
}
