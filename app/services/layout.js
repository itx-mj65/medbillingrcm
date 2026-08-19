import "./svc-index.css";

export const metadata = {
  title:       "Medical Billing Services | Revenue Cycle Management | Medbilling RCM",
  description: "Comprehensive medical billing services including physician billing, hospital billing, AR management, medical coding, laboratory billing, credentialing, and more. All 50 states.",
  keywords:    "medical billing services, revenue cycle management, physician billing, hospital billing, AR management, medical coding, laboratory billing, credentialing, coverage discovery, ASC billing",
  alternates:  { canonical: "https://medbillingrcm.com/services/" },
  openGraph: {
    title:       "Medical Billing Services | Medbilling RCM",
    description: "End-to-end revenue cycle management for physician practices, hospitals, labs, and ASCs. 97% clean claim rate measured at the payer.",
    url:         "https://medbillingrcm.com/services/",
    siteName:    "Medbilling RCM",
    type:        "website",
  },
  twitter: { card: "summary_large_image" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Medical Billing Services",
    "description": "Comprehensive medical billing and revenue cycle management services for healthcare practices of all sizes and specialties.",
    "url": "https://medbillingrcm.com/services/",
    "provider": { "@type": "Organization", "@id": "https://medbillingrcm.com/#organization", "name": "Medbilling RCM" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://medbillingrcm.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://medbillingrcm.com/services/" }
    ]
  }
];

export default function ServicesLayout({ children }) {
  return (
    <>
      {schemas.map((s,i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      {children}
    </>
  );
}
