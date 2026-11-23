/**
 * Restrict external portal links & CTA links strictly to safe protocols
 * to block javascript:/data:/vbscript: URI injection from remote config.
 */
export function sanitizeSafeUrl(rawUrl: unknown, fallback = "#"): string {
  if (typeof rawUrl !== "string") return fallback;
  const trimmed = rawUrl.trim();
  if (!trimmed) return fallback;
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) {
    return trimmed;
  }
  try {
    const parsed = new URL(trimmed);
    if (["https:", "http:", "mailto:", "tel:"].includes(parsed.protocol)) {
      return trimmed;
    }
  } catch {
    return fallback;
  }
  return fallback;
}

/**
 * Normalize API base URL and automatically upgrade insecure http:// endpoints to https://
 * when the portal itself is loaded over HTTPS (prevents Mixed Content blocks).
 */
export function normalizeApiBaseUrl(
  rawUrl?: string,
  pageProtocol = typeof window !== "undefined" ? window.location?.protocol : "",
): string {
  const trimmed = rawUrl?.trim().replace(/\/+$/, "") || "";
  if (!trimmed) return "";
  if (
    pageProtocol === "https:" &&
    /^http:\/\//i.test(trimmed) &&
    !/^http:\/\/(localhost|127\.0\.0\.1)(:|\/|$)/i.test(trimmed)
  ) {
    return trimmed.replace(/^http:\/\//i, "https://");
  }
  return trimmed;
}
