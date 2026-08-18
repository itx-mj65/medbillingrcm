import "./hospital.css";

export const metadata = {
  title:       "Hospital Medical Billing Services | Inpatient & Outpatient RCM",
  description: "Hospital billing for inpatient and outpatient care: DRG and APC coding, 340B, denial and AR recovery, 14-day onboarding. Get a free revenue assessment.",
  alternates:  { canonical: "https://medbillingrcm.com/services/hospital-medical-billing/" },
  openGraph: {
    title:       "Hospital Medical Billing Services | Inpatient & Outpatient RCM",
    description: "Hospital billing for inpatient and outpatient care: DRG and APC coding, 340B, denial and AR recovery, 14-day onboarding. Get a free revenue assessment.",
    url:         "https://medbillingrcm.com/services/hospital-medical-billing/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

/* ── JSON-LD schema: Service + FAQPage + BreadcrumbList ── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Hospital Medical Billing Services",
  "name": "Hospital Medical Billing Services",
  "provider": {
    "@type": "Organization",
    "@id": "https://medbillingrcm.com/#organization",
    "name": "Medbilling RCM",
    "url": "https://medbillingrcm.com",
    "telephone": "+1-888-551-2526",
    "email": "info@medbillingrcm.com",
    "address": [
      { "@type": "PostalAddress", "streetAddress": "8907 Creeks Gate Ct", "addressLocality": "Richmond", "addressRegion": "TX", "postalCode": "77407", "addressCountry": "US" },
      { "@type": "PostalAddress", "streetAddress": "7 1st St", "addressLocality": "Rosedale", "addressRegion": "NY", "postalCode": "11422", "addressCountry": "US" }
    ]
  },
  "areaServed": { "@type": "Country", "name": "United States" },
  "url": "https://medbillingrcm.com/services/hospital-medical-billing/",
  "description": "Hospital billing for inpatient and outpatient care: MS-DRG and APC coding, clinical documentation, 340B split billing, denial management, and AR recovery, measured at the payer.",
  "offers": { "@type": "Offer", "description": "Free revenue assessment. Pricing scoped by facility type, specialty mix, and claim volume. No published rate card, no setup fee, no long-term contract." }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How is hospital billing different from physician billing?", "acceptedAnswer": { "@type": "Answer", "text": "Hospital billing covers the facility side of care and runs on two systems: MS-DRG for inpatient stays and APC for outpatient visits, usually on a UB-04 claim form. Physician billing covers the professional side on a CMS-1500. We handle both and keep the facility and professional claims from colliding." } },
    { "@type": "Question", "name": "What is the difference between inpatient and outpatient hospital billing?", "acceptedAnswer": { "@type": "Answer", "text": "Inpatient billing pays a single bundled amount per admission under MS-DRG and uses ICD-10-PCS procedure codes. Outpatient billing pays per service line under APC and uses CPT and HCPCS codes. The status of the patient, admitted versus observation, decides which one applies, and getting it wrong is one of the most common hospital billing errors." } },
    { "@type": "Question", "name": "Do you handle DRG optimization and clinical documentation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We review every inpatient chart for the complications and comorbidities the record supports before the claim is coded, so the DRG matches the care actually delivered. This is where most underpayment on inpatient claims hides." } },
    { "@type": "Question", "name": "Can you manage 340B split billing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We set up split billing that separates 340B inventory from non-340B inventory, applies Medicaid exclusion logic to avoid duplicate discounts, and keeps the documentation HRSA audits look for." } },
    { "@type": "Question", "name": "How do you handle hospital-based telehealth billing?", "acceptedAnswer": { "@type": "Answer", "text": "We bill the originating-site facility fee (Q3014) separately from the professional claim, apply the correct place-of-service codes and modifiers, and confirm state parity rules for commercial payers." } },
    { "@type": "Question", "name": "How quickly can you onboard a hospital?", "acceptedAnswer": { "@type": "Answer", "text": "Most engagements go live within about 14 days, depending on EHR access and payer enrollment status. The revenue assessment and BAA come first, then integration, then go-live." } },
    { "@type": "Question", "name": "What does it cost?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing is scoped during the revenue assessment based on facility type, specialty mix, and claim volume. There is no published rate card, no setup fee, and no long-term contract." } },
    { "@type": "Question", "name": "Are you HIPAA compliant?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We sign a Business Associate Agreement before accessing any patient data, encrypt protected health information in transit and at rest, restrict access by role, and train staff on HIPAA every year." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://medbillingrcm.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://medbillingrcm.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Hospital Medical Billing Services", "item": "https://medbillingrcm.com/services/hospital-medical-billing/" }
  ]
};

export default function HospitalLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
