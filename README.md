# Sahasraditya Physiotherapy & In Patient Rehabilitation Centre

**Official Healthcare Website for Sahasraditya Physiotherapy & In Patient Rehabilitation Centre**  
Located in Rajamahendravaram, Andhra Pradesh, India. Led by **Dr. D. V. Balaji N** (MS Sports & Health Sciences, BPT).

---

## 1. Project Overview

Sahasraditya Physiotherapy is a modern, responsive, healthcare-grade web application built to establish clinical trust, clearly communicate musculoskeletal and neuro-rehabilitation services, facilitate patient appointment enquiries via telephone and WhatsApp, and provide a strong foundation for local SEO in Rajamahendravaram.

### Brand Identity & Design System
- **Brand Tagline:** *"Restore Movement. Restore Life."*
- **Primary Navy:** `#17324D` (Authority, typography, structured sections)
- **Teal:** `#138A8A` (Primary interactive actions, rehabilitation highlights)
- **Warm White:** `#FFFFFF` (Card surfaces, clean reading canvas)
- **Soft Ivory:** `#F7F9F7` (Section backgrounds, natural warmth)
- **Charcoal Text:** `#24313D` (High-contrast, WCAG AA body text)
- **Muted Sage:** `#DDEBE4` (Restrained accent borders and pills)
- **Warm Accent:** `#E7A65A` (Subtle highlights and badges)
- **Typography:** Plus Jakarta Sans & Manrope (Headings), Inter (Body)
- **Icons:** Lucide React

---

## 2. Technology Stack

- **Framework:** React 19 + Vite 8
- **Routing:** React Router v7 (`/`, `/services/:slug`, `/privacy-policy`, `/terms-and-conditions`, `*`)
- **Styling:** Modular Vanilla CSS3 (`variables.css`, `global.css`, `responsive.css`)
- **Icons:** Lucide React (tree-shaken for minimal bundle size)
- **SEO & Structured Data:** Route-level dynamic metadata + JSON-LD (`MedicalBusiness`, `BreadcrumbList`, `MedicalProcedure`)
- **Deployment:** Vercel SPA configuration (`vercel.json`)

---

## 3. How to Run Locally

### Prerequisites
- Node.js (version 18+ recommended)
- npm (version 9+)

### Installation & Development
```bash
# 1. Clone or navigate to the project directory
cd sahasraditya-physiotherapy

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
The application will be live at `http://localhost:5173/`.

### Production Build & Preview
```bash
# Create optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 4. Architecture & Reusable Service Details Template

The website employs a data-driven architecture where **16 distinct service routes** are dynamically rendered using **one single reusable template** (`src/pages/ServiceDetails.jsx`) powered by structured data in `src/data/services.js`.

### Implemented Services Across 5 Categories:
1. **Orthopaedic & Musculoskeletal Care:**
   - `/services/orthopedic-physiotherapy`
   - `/services/joint-mobilization`
   - `/services/spinal-biomechanical-assessment`
   - `/services/extremity-biomechanical-assessment`
2. **Sports Rehabilitation:**
   - `/services/sports-injury-rehabilitation`
   - `/services/therapeutic-taping`
3. **Neurological Rehabilitation:**
   - `/services/neurological-rehabilitation`
   - `/services/spinal-cord-injury-rehabilitation`
   - `/services/neurodevelopmental-therapy`
4. **Manual Therapy:**
   - `/services/proprioceptive-neuromuscular-facilitation`
   - `/services/myofascial-release`
   - `/services/muscle-energy-technique`
   - `/services/positional-release-technique`
5. **Specialized Techniques:**
   - `/services/dry-needling`
   - `/services/cupping-therapy`
   - `/services/transcranial-direct-current-stimulation` *(Flagged for equipment confirmation)*

### Supporting Pages:
- `/privacy-policy` (Frontend-specific data privacy disclosure)
- `/terms-and-conditions` (Healthcare educational disclaimer and enquiry terms)
- Custom `404` page for invalid routes and unrecognized service slugs

---

## 5. Mobile & Viewport Optimization Highlights

- **Zero Horizontal Overflow:** All containers utilize fluid width `min(1200px, 100% - 2rem)`, grid items enforce `min-width: 0`, and media elements have `max-width: 100%`.
- **Zoom-Out Extra Space Fix:** Eliminated arbitrary `100vw` measurements and fixed height constraints.
- **Accessible Touch Targets:** Minimum 44×44px interactive controls across desktop and mobile.
- **Floating Action Stack:** Persistent Call (`tel:+919985881892`), WhatsApp enquiry, Appointment scroll, and Scroll-to-Top with mobile safe-area inset protection.

---

## 6. Technical & Local SEO Setup

- **Production Sitemap:** `public/sitemap.xml` contains all 19 canonical URLs.
- **Robots Directives:** `public/robots.txt` enables crawling of public pages.
- **Structured Data (JSON-LD):**
  - `MedicalBusiness` with verified address, phone numbers, and founder details in Rajamahendravaram.
  - `BreadcrumbList` on all service routes.
  - `MedicalProcedure` on service details pages.

### Post-Deployment Google Search Console Checklist:
1. Verify domain ownership in [Google Search Console](https://search.google.com/search-console).
2. Submit `https://sahasradityaphysio.in/sitemap.xml`.
3. Test URL Inspection on `https://sahasradityaphysio.in/` and top service URLs.
4. Verify mobile-friendly rendering and indexability.

### Google Business Profile Checklist for the Clinic:
- [ ] Claim and verify Google Business Profile for **Sahasraditya Physiotherapy & In Patient Rehabilitation Centre**.
- [ ] Set exact address: *Ground Floor, Suvishesapuram, opposite Central Jail Road, Bhaskar Nagar, Rajamahendravaram, AP 533106*.
- [ ] Verify primary telephone: `+91 99858 81892`.
- [ ] Select primary category: *Physical therapy clinic* or *Physiotherapist*.
- [ ] Add authentic clinic exterior and interior photos.
- [ ] Add direct link to `https://sahasradityaphysio.in`.
- [ ] Collect verified patient reviews ethically.

---

## 7. Pending Client Confirmations
- Exact daily opening and closing hours for outpatient consultations.
- Confirmation of on-site equipment availability for Transcranial Direct Current Stimulation (tDCS).
- Approved patient testimonial quotes and Google rating badges once gathered.
