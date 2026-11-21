# Ecoguide NEXUS Landing Portal

Standalone React + TypeScript + Tailwind CSS v4 + **shadcn/ui** landing page for the **NEXUS** ecosystem ("Kết nối đam mê – Khai phóng tài năng – Kiến tạo giá trị"), showcasing the 4 core clubs and routing visitors to their configured portal URLs.

## Dynamic URLs Managed from Admin
When `VITE_API_URL` is configured (either via build env or runtime `public/config.js`), NEXUS loads `GET /api/system-settings/nexus_portal_config` from `Ecoguide_BE` so the 4 club portal URLs (`clb.ecoguide.vn`, `ytc.ecoguide.vn`, `music.ecoguide.vn`, `english.ecoguide.vn`) can be edited anytime in `Ecoguide_admin` (`/club/nexus-portal`).

## Scripts
```bash
npm install
npm run dev      # http://localhost:5176
npm run lint
npm run build
```
