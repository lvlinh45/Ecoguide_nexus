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
