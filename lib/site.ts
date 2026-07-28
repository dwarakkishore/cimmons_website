// Central site config — single source of truth for SEO metadata & structured data.
// Production host is https://www.cimmons.in (confirmed). Canonicals always point
// here — even on staging (previews.cimmons.in) — so the staging copy never
// competes with production in search.
//
// STAGING: build with `NEXT_PUBLIC_STAGING=1 npm run build` for previews.cimmons.in.
// That flips robots to noindex + disallow so the staging site is never indexed.

export const SITE_URL = "https://www.cimmons.in";
export const IS_STAGING = process.env.NEXT_PUBLIC_STAGING === "1";
export const SITE_NAME = "Cimmons";
export const SITE_LEGAL_NAME = "Cimmons Integrated Services";
export const SITE_TAGLINE = "Building Experiences Together";

export const SITE_DESCRIPTION =
  "Cimmons delivers 24/7 multilingual inbound, outbound and non-voice BPO and call center services for healthcare, e-commerce, SaaS and finance. ISO-certified and based in Bengaluru, India.";

export const CONTACT = {
  phone: "+91 80 6926 1999",
  phoneHref: "+918069261999",
  email: "connect@cimmons.in",
  hrEmail: "hr@cimmons.in",
  streetAddress: "Gokul Towers, 86/3, 2nd Floor, MS Ramaiah Rd, HMR Layout, Gokula Extension",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560054",
  addressCountry: "IN",
};

// Public social profiles — `sameAs` powers the Knowledge Panel & entity linking.
// Also used for the social icons on the contact page.
export const SOCIAL_LINKS = {
  x: "https://x.com/cimmons_",
  facebook: "https://www.facebook.com/cimmons.in",
  linkedin: "https://in.linkedin.com/company/cimmons",
  instagram: "https://www.instagram.com/cimmons.in/",
  youtube: "https://www.youtube.com/@cimmons6405",
} as const;

export const SAME_AS: string[] = Object.values(SOCIAL_LINKS);

// Absolute URL helper — trailingSlash is on, so keep the trailing slash.
export function absUrl(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

// Organization + LocalBusiness graph, injected site-wide from the root layout.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_LEGAL_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: absUrl("/assets/img/cimmon-logo.png"),
  image: absUrl("/assets/img/og-default.png"),
  description: SITE_DESCRIPTION,
  slogan: SITE_TAGLINE,
  foundingDate: "2020",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  numberOfEmployees: { "@type": "QuantitativeValue", value: 356 },
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.streetAddress,
    addressLocality: CONTACT.addressLocality,
    addressRegion: CONTACT.addressRegion,
    postalCode: CONTACT.postalCode,
    addressCountry: CONTACT.addressCountry,
  },
  areaServed: ["IN", "Worldwide"],
  sameAs: SAME_AS,
  // Real, verifiable certifications only (shown on /services and /about-us).
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO 9001:2015 — Quality Management",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO/IEC 27001:2013 — Information Security Management (ISMS)",
    },
  ],
};

// Breadcrumb builder — pass ordered [name, path] pairs (path relative, trailing slash).
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

// FAQPage builder — pass the SAME Q&A shown visibly on the page (schema must match).
export function faqSchema(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
