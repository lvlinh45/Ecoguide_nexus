function upsertMetaTag(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  if (typeof document === "undefined" || !content) return;
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export interface NexusSeoParams {
  title: string;
  description: string;
}

export function syncDocumentSeo({ title, description }: NexusSeoParams) {
  if (typeof document === "undefined") return;
  if (title) {
    document.title = title;
    upsertMetaTag("name", "title", title);
    upsertMetaTag("property", "og:title", title);
    upsertMetaTag("name", "twitter:title", title);
  }
  if (description) {
    upsertMetaTag("name", "description", description);
    upsertMetaTag("property", "og:description", description);
    upsertMetaTag("name", "twitter:description", description);
  }
}
