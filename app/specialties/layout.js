import "./specs.css";
export const metadata = {
  title:       "Specialty Medical Billing Services | Medbilling RCM",
  description: "Medbilling RCM: Expert medical billing for 50+ specialties. Improve accuracy, cut denials, boost reimbursements. Contact us for revenue optimization.",
  keywords:    "medical billing services, healthcare specialties billing, specialty medical coding, revenue cycle management, medical billing for doctors, practice management billing, RCM services, claims processing specialties",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/" },
  openGraph: {
    title:       "Specialty Medical Billing Services | Medbilling RCM",
    description: "Expert medical billing for 50+ specialties. Improve accuracy, cut denials, boost reimbursements.",
    url:         "https://medbillingrcm.com/specialties/",
    siteName:    "Medbilling RCM",
    type:        "website",
  },
  twitter: { card: "summary_large_image" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Specialty Medical Billing Services",
  "description": "Medbilling RCM specializes in providing comprehensive medical billing services to practices of all sizes in more than 50 specialties.",
  "url": "https://medbillingrcm.com/specialties/",
  "provider": {
    "@type": "Organization",
    "@id": "https://medbillingrcm.com/#organization",
    "name": "Medbilling RCM",
    "url": "https://medbillingrcm.com"
  }
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",        "item": "https://medbillingrcm.com" },
    { "@type": "ListItem", "position": 2, "name": "Specialties", "item": "https://medbillingrcm.com/specialties/" }
  ]
};

export default function SpecialtiesLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
