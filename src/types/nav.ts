export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  iconName: string;
}
