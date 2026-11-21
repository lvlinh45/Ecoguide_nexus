import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { sanitizeSafeUrl } from "../src/utils/safeUrl.ts";

const nexusRoot = path.resolve(import.meta.dirname, "..");

// 1. Verify shadcn/ui setup & actively used UI primitives exist
const componentsJson = JSON.parse(
  fs.readFileSync(path.join(nexusRoot, "components.json"), "utf8"),
);
assert.equal(componentsJson.style, "new-york");
assert.equal(componentsJson.aliases.ui, "@/components/ui");

const requiredUiComponents = [
  "accordion.tsx",
  "badge.tsx",
  "button.tsx",
  "card.tsx",
  "dialog.tsx",
  "separator.tsx",
  "skeleton.tsx",
  "tabs.tsx",
];

for (const file of requiredUiComponents) {
  assert.ok(
    fs.existsSync(path.join(nexusRoot, "src/components/ui", file)),
    `Missing shadcn/ui component: ${file}`,
  );
}

// 2. Verify shared & section components exist
for (const relPath of [
  "src/components/shared/SectionHeading.tsx",
  "src/components/shared/FeatureChecklist.tsx",
  "src/components/sections/HeroSection.tsx",
  "src/components/sections/ClubProjectCard.tsx",
  "src/components/sections/ClubCapabilityDialog.tsx",
  "src/components/sections/ProjectsGridSection.tsx",
  "src/components/sections/ServicesSection.tsx",
  "src/components/sections/ProcessSection.tsx",
  "src/components/sections/ComparisonAndValuesSection.tsx",
  "src/components/sections/FaqAndFooterSection.tsx",
]) {
  assert.ok(
    fs.existsSync(path.join(nexusRoot, relPath)),
    `Missing refactored component: ${relPath}`,
  );
}

// 3. Verify all 4 clubs and default URLs exist in nexusDefaults.ts
const defaultsSrc = fs.readFileSync(
  path.join(nexusRoot, "src/data/nexusDefaults.ts"),
  "utf8",
);
for (const expected of [
  "clb.ecoguide.vn",
  "ytc.ecoguide.vn",
  "music.ecoguide.vn",
  "english.ecoguide.vn",
  "Kết nối đam mê – Khai phóng tài năng – Kiến tạo giá trị",
  "/logo_hdv.jpg",
]) {
  assert.ok(
    defaultsSrc.includes(expected),
    `Expected string not found in nexusDefaults.ts: ${expected}`,
  );
}

// 4. Verify API service queries nexus_portal_config
const apiSrc = fs.readFileSync(
  path.join(nexusRoot, "src/services/nexusApi.ts"),
  "utf8",
);
assert.ok(apiSrc.includes("/system-settings/nexus_portal_config"));
assert.ok(apiSrc.includes("sanitizeSafeUrl"));

// 5. Verify sanitizeSafeUrl blocks unsafe protocols and preserves safe URLs
assert.equal(sanitizeSafeUrl("https://music.ecoguide.vn/portal", "#"), "https://music.ecoguide.vn/portal");
assert.equal(sanitizeSafeUrl("http://localhost:5174", "#"), "http://localhost:5174");
assert.equal(sanitizeSafeUrl("mailto:linh@ecoguide.com", "#"), "mailto:linh@ecoguide.com");
assert.equal(sanitizeSafeUrl("/contact", "#"), "/contact");
assert.equal(sanitizeSafeUrl("javascript:alert(1)", "https://clb.ecoguide.vn"), "https://clb.ecoguide.vn");
assert.equal(sanitizeSafeUrl("  JAVASCRIPT:alert(1)", "#"), "#");
assert.equal(sanitizeSafeUrl("data:text/html,<script>alert(1)</script>", "#"), "#");
assert.equal(sanitizeSafeUrl("vbscript:msgbox(1)", "#"), "#");
assert.equal(sanitizeSafeUrl("//evil.example/phish", "#"), "#");

console.log("✅ All Ecoguide_nexus structural, config & URL sanitization tests passed!");
