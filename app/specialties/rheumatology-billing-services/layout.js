import "../../components/specialty/specialty.css";
import "./rheum.css";

export const metadata = {
  title:       "Rheumatology Billing Services: Maximize Revenue & Ensure Compliance | Medbilling RCM",
  description: "Irvine rheumatology billing by Medbilling RCM: Maximize revenue with expert coding & denial management. Get accurate claims and optimized reimbursements.",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/rheumatology-billing-services/" },
  keywords:    "rheumatology billing services, medical billing for rheumatologists, rheumatology revenue cycle management, specialty rheumatology billing, arthritis billing services, autoimmune disease billing, biologic drug billing, DMARD billing, rheumatology practice management, rheumatology coding services",
  openGraph: {
    title:       "Rheumatology Billing Services: Maximize Revenue & Ensure Compliance | Medbilling RCM",
    description: "Specialty rheumatology billing: accurate claims, denial management, & optimized reimbursements.",
    url:         "https://medbillingrcm.com/specialties/rheumatology-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Rheumatology Billing Services",
  "name": "Rheumatology Billing Services",
  "provider": {
    "@type": "Organization",
    "@id": "https://medbillingrcm.com/#organization",
    "name": "Medbilling RCM",
    "url": "https://medbillingrcm.com",
    "telephone": "+1-888-551-2526"
  },
  "areaServed": { "@type": "Country", "name": "United States" },
  "url": "https://medbillingrcm.com/specialties/rheumatology-billing-services/",
  "description": "Rheumatology Billing Services handle coding, claims, and reimbursements for rheumatology practices ensuring accurate billing, faster payments, and expert management of biologics and specialty drug authorizations."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do biologic and infusion therapy reimbursements impact rheumatology billing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Biologic drugs and infusion therapies require specific J-codes, accurate NDC reporting, and prior authorizations to avoid claim denials. We ensure proper coding and documentation to maximize reimbursements." }
    },
    {
      "@type": "Question",
      "name": "What are the key 2025 CPT code updates affecting rheumatology billing?",
      "acceptedAnswer": { "@type": "Answer", "text": "New updates include revised E/M guidelines for prolonged visits, expanded remote patient monitoring codes, and changes to musculoskeletal ultrasound billing. Using outdated codes can delay payments significantly." }
    },
    {
      "@type": "Question",
      "name": "How do payer policies affect reimbursement for complex rheumatology cases?",
      "acceptedAnswer": { "@type": "Answer", "text": "Insurers often impose step therapy requirements, drug formulary restrictions, and stringent documentation rules for high-cost treatments. We track payer-specific policies to prevent denials proactively." }
    },
    {
      "@type": "Question",
      "name": "How do you handle modifier usage for rheumatology procedures?",
      "acceptedAnswer": { "@type": "Answer", "text": "Incorrect use of modifiers like -25 (separate E/M service) and -59 (distinct procedural service) can trigger audits. We apply the correct modifiers to ensure compliance and maximize reimbursement." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",       "item": "https://medbillingrcm.com" },
    { "@type": "ListItem", "position": 2, "name": "Specialties","item": "https://medbillingrcm.com/specialties/" },
    { "@type": "ListItem", "position": 3, "name": "Rheumatology Billing Services", "item": "https://medbillingrcm.com/specialties/rheumatology-billing-services/" }
  ]
};

export default function RheumatologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
