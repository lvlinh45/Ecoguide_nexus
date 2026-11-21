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

export type NexusServiceCategory =
  | "video"
  | "design"
  | "media"
  | "music"
  | "guide"
  | "english"
  | "combo"
  | "other";

export type NexusClubModuleKey =
  | "guide"
  | "ytc"
  | "music"
  | "english"
  | "multi"
  | "other";

export interface NexusServiceSpecField {
  key: string;
  label: string;
  placeholder: string;
  type?: "text" | "textarea";
}

export interface NexusServiceItem {
  id: string;
  clubModule: NexusClubModuleKey;
  clubLabel: string;
  logoUrl?: string;
  category: NexusServiceCategory;
  categoryLabel: string;
  title: string;
  shortDesc: string;
  detailDescription: string;
  priceRange: string;
  typicalDuration: string;
  deliverables: string[];
  suitableFor: string;
  badge: string;
  accentColor: string;
  specFields: NexusServiceSpecField[];
}

export interface NexusServiceRequestPayload {
  clubModule: NexusClubModuleKey;
  selectedClubs: string[];
  serviceId: string;
  serviceCategory: string;
  serviceName: string;
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  workDescription: string;
  quantityOrScale: string;
  expectedTimeline: string;
  expectedBudget: string;
  customSpecs: Array<{ key: string; label: string; value: string }>;
}

export type NexusRequestStatus =
  | "new"
  | "consulting"
  | "connected"
  | "agreed"
  | "in_progress"
  | "delivered"
  | "completed"
  | "cancelled";

export interface NexusTrackedRequest {
  requestCode: string;
  clubModule: NexusClubModuleKey;
  selectedClubs: string[];
  assignedClubModules: string[];
  serviceId: string;
  serviceCategory: string;
  serviceName: string;
  companyName: string;
  contactName: string;
  workDescription: string;
  quantityOrScale: string;
  expectedTimeline: string;
  expectedBudget: string;
  customSpecs: Array<{ key: string; label: string; value: string }>;
  status: NexusRequestStatus;
  agreedScope: string;
  agreedCost: string;
  agreedTimeline: string;
  handoverNote: string;
  handoverUrl: string;
  statusHistory: Array<{
    status: NexusRequestStatus;
    note: string;
    updatedAt: string;
  }>;
  review: {
    isSubmitted: boolean;
    rating?: number;
    comment?: string;
    clubModule?: string;
    highlights?: string[];
    submittedAt?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface NexusPublicReview {
  id: string;
  requestCode: string;
  companyName: string;
  serviceName: string;
  clubModule: string;
  rating: number;
  comment: string;
  highlights: string[];
  submittedAt: string;
}

export interface NexusReviewsResponse {
  reviews: NexusPublicReview[];
  statsByClub: Record<string, { count: number; avgRating: number }>;
}
