export interface NexusClubProject {
  id: string;
  name: string;
  shortName: string;
  category: string;
  url: string;
  logoUrl?: string;
  tagline: string;
  description: string;
  priceRange: string;
  accentColor: string;
  badge: string;
  highlights: string[];
  isActive: boolean;
  order: number;
}

export interface NexusPortalConfig {
  brandName: string;
  ecosystemBadge: string;
  slogan: string;
  heroTitle: string;
  heroSubtitle: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  ctaLink: string;
  projects: NexusClubProject[];
}

export interface ServicePackageItem {
  id: string;
  title: string;
  badge: string;
  price: string;
  description: string;
  deliverables: string[];
  suitableFor: string;
}

export interface ComparisonRow {
  criterion: string;
  nexus: string;
  agency: string;
  freelancer: string;
  directClub: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
