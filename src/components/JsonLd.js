/**
 * JSON-LD Structured Data Component
 * Injects Organization schema for rich search results.
 */
export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Medbilling RCM",
    description:
      "Medical billing services that engineer the revenue system behind healthcare organizations — combining experienced specialists, disciplined workflows, and practical automation.",
    url: "https://medbillingrcm.com",
    logo: "https://medbillingrcm.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: "English",
    },
    sameAs: [],
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Revenue Cycle Management",
      "Medical Billing",
      "Medical Coding",
      "Claim Management",
      "Denial Management",
      "Healthcare Billing",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
