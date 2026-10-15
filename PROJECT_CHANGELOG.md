# Project Changelog - Sahasraditya Physiotherapy & In Patient Rehabilitation Centre

## [2026-10-15] - Technical SEO & Google Search Console Certification Rollout

### Summary of Changes
- Aligned primary domain across all technical SEO surfaces from development/unregistered domain (`sahasradityaphysio.in`) to approved live production domain: `https://www.sahasradityarehab.com`.
- Updated `index.html`: corrected canonical URL `<link rel="canonical" href="https://www.sahasradityarehab.com/" />`, OpenGraph URLs, and MedicalBusiness JSON-LD structured data.
- Updated `src/components/SEO.jsx`: bound default ogImage and canonical URLs to `siteSeo.baseUrl`, added explicit `noIndex` support for setting `<meta name="robots" content="noindex, nofollow" />`.
- Updated `src/pages/NotFound.jsx`: passed `noIndex={true}` to prevent soft-404 indexation.
- Created `src/siteSeo.js`: centralized project metadata and baseUrl.
- Updated `public/robots.txt`: pointed sitemap directive to `https://www.sahasradityarehab.com/sitemap.xml`.
- Updated `public/sitemap.xml`: replaced all 20 URLs with live HTTPS production addresses.
- Updated `vercel.json`: excluded static assets from SPA rewrites to ensure direct robots.txt and sitemap.xml delivery.

### Files Created / Modified
- `index.html` (modified - updated canonical, OpenGraph, JSON-LD domain)
- `src/siteSeo.js` (created - centralized metadata manifest)
- `src/components/SEO.jsx` (modified - updated default domains and added noIndex handling)
- `src/pages/NotFound.jsx` (modified - added noIndex flag to 404 page)
- `public/robots.txt` (modified - updated sitemap location)
- `public/sitemap.xml` (modified - all 20 URLs updated to www.sahasradityarehab.com)
- `vercel.json` (modified - static asset exclusion on SPA rewrites)
- `PROJECT_CHANGELOG.md` (created - persistent changelog)
