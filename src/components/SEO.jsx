import { useEffect } from 'react';

/**
 * Route-aware SEO component for title, meta tags, and structured data injection.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://sahasradityaphysio.in/images/sahasraditya-logo.png",
  ogType = "website",
  schemaJson = null
}) {
  useEffect(() => {
    // 1. Update Document Title
    const siteTitle = "Sahasraditya Physiotherapy & In Patient Rehabilitation Centre";
    const fullTitle = title ? `${title} | Sahasraditya` : `${siteTitle} | Rajamahendravaram`;
    document.title = fullTitle;

    // Helper to create or update meta tags
    const setMetaTag = (selector, attributeName, attributeValue, contentValue) => {
      if (!contentValue) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attributeName, attributeValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentValue);
    };

    // 2. Set Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    if (keywords) {
      const kwString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', kwString);
    }

    // 3. Set Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    if (canonicalUrl) {
      setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
      
      // Update Canonical Link
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', canonicalUrl);
    }

    // 4. Set Twitter Tags
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 5. Injected JSON-LD Structured Data
    let schemaScript = document.getElementById('route-schema-jsonld');
    if (schemaJson) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'route-schema-jsonld';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaJson);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Optional cleanup on unmount
      const existingSchema = document.getElementById('route-schema-jsonld');
      if (existingSchema) existingSchema.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaJson]);

  return null;
}
