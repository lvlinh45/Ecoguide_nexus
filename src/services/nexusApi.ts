import { DEFAULT_NEXUS_CONFIG } from "@/data/nexusDefaults";
import type { NexusClubProject, NexusPortalConfig } from "@/types/nexus";
import { sanitizeSafeUrl } from "@/utils/safeUrl";

declare global {
  interface Window {
    __ENV__?: {
      VITE_API_URL?: string;
    };
  }
}

const getApiBaseUrl = (): string => {
  const runtimeUrl = window.__ENV__?.VITE_API_URL;
  if (runtimeUrl) return runtimeUrl.replace(/\/$/, "");
  const buildUrl = import.meta.env.VITE_API_URL;
  if (buildUrl) return buildUrl.replace(/\/$/, "");
  return "";
};

export { sanitizeSafeUrl };

const ENV_URL_FALLBACKS: Record<string, string | undefined> = {
  guide: import.meta.env.VITE_GUIDE_URL,
  ytc: import.meta.env.VITE_YTC_URL,
  music: import.meta.env.VITE_MUSIC_URL,
  english: import.meta.env.VITE_ENGLISH_URL,
};

function mergeProjects(rawProjects: unknown): NexusClubProject[] {
  const defaultsById = new Map(
    DEFAULT_NEXUS_CONFIG.projects.map((p) => [p.id, p]),
  );

  if (!Array.isArray(rawProjects) || rawProjects.length === 0) {
    return DEFAULT_NEXUS_CONFIG.projects;
  }

  return rawProjects
    .map((item, idx) => {
      const p = (item || {}) as Partial<NexusClubProject>;
      const fallback = (p.id ? defaultsById.get(p.id) : undefined) ||
        DEFAULT_NEXUS_CONFIG.projects[idx] || {
          id: `club-${idx}`,
          name: "CLB Thành Viên",
          shortName: "Club",
          category: "CLB Sinh viên",
          url: "https://clb.ecoguide.vn",
          tagline: "",
          description: "",
          priceRange: "Thỏa thuận",
          accentColor: "#10b981",
          badge: `CLB #${idx + 1}`,
          highlights: [],
          isActive: true,
          order: idx + 1,
        };

      const envOverride = p.id ? ENV_URL_FALLBACKS[p.id] : undefined;

      const rawLogoUrl = p.logoUrl || fallback.logoUrl;

      return {
        ...fallback,
        ...p,
        url: sanitizeSafeUrl(p.url || envOverride || fallback.url, fallback.url),
        logoUrl: rawLogoUrl
          ? sanitizeSafeUrl(rawLogoUrl, fallback.logoUrl || "")
          : undefined,
        highlights: Array.isArray(p.highlights)
          ? p.highlights
          : fallback.highlights,
        isActive: p.isActive !== undefined ? Boolean(p.isActive) : true,
        order: Number(p.order ?? fallback.order),
      };
    })
    .filter((p) => p.isActive)
    .sort((a, b) => a.order - b.order);
}

export async function fetchNexusPortalConfig(): Promise<{
  config: NexusPortalConfig;
  source: "backend" | "fallback";
}> {
  const apiBase = getApiBaseUrl();
  if (!apiBase) {
    return { config: DEFAULT_NEXUS_CONFIG, source: "fallback" };
  }

  try {
    const res = await fetch(`${apiBase}/system-settings/nexus_portal_config`, {
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      return { config: DEFAULT_NEXUS_CONFIG, source: "fallback" };
    }

    const json = await res.json();
    const rawValue = json?.data?.value ?? json?.data;
    if (!rawValue) {
      return { config: DEFAULT_NEXUS_CONFIG, source: "fallback" };
    }

    const parsed =
      typeof rawValue === "string" ? JSON.parse(rawValue) : rawValue;

    return {
      source: "backend",
      config: {
        ...DEFAULT_NEXUS_CONFIG,
        ...parsed,
        ctaLink: sanitizeSafeUrl(
          parsed?.ctaLink,
          DEFAULT_NEXUS_CONFIG.ctaLink,
        ),
        projects: mergeProjects(parsed?.projects),
      },
    };
  } catch {
    return { config: DEFAULT_NEXUS_CONFIG, source: "fallback" };
  }
}

export function formatDisplayDomain(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname + (parsed.pathname !== "/" ? parsed.pathname : "");
  } catch {
    return url.replace(/^https?:\/\//i, "");
  }
}
