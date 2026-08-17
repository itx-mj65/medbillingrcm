import "./mc.css";

export const metadata = {
  title:       "Medical Coding Services: Revenue Cycle Optimization | Medbilling RCM",
  description: "Expert medical coding services by MedBilling RCM: ICD-10, CPT, HCPCS for claim accuracy & revenue optimization. HIPAA compliant. Contact us.",
  alternates:  { canonical: "https://medbillingrcm.com/services/medical-coding/" },
  openGraph: {
    title:       "Medical Coding Services - Accurate Coding & RCM Experts",
    description: "Improve claim accuracy with expert medical coding services including ICD-10, CPT, HCPCS coding, compliance support, and revenue cycle optimization.",
    url:         "https://medbillingrcm.com/services/medical-coding/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  keywords: "medical coding services, outsourced medical coding, certified medical coders, CPC coders, CCS coders, COC coders, ICD-10 coding, CPT coding, HCPCS coding, revenue cycle management",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Medical Coding Services",
      "serviceType": "Medical Coding",
      "provider": {
        "@type": "Organization",
        "@id": "https://medbillingrcm.com/#organization",
        "name": "Medbilling RCM",
        "url": "https://medbillingrcm.com",
        "telephone": "+18885512526",
        "email": "info@medbillingrcm.com",
        "address": [
          { "@type": "PostalAddress", "streetAddress": "8907 Creeks Gate Ct", "addressLocality": "Richmond", "addressRegion": "TX", "postalCode": "77407", "addressCountry": "US" },
          { "@type": "PostalAddress", "streetAddress": "7 1st St", "addressLocality": "Rosedale", "addressRegion": "NY", "postalCode": "11422", "addressCountry": "US" }
        ]
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "description": "Expert medical coding services including ICD-10, CPT, HCPCS, DRG, and HCC coding by CPC, CCS, and COC certified coders. HIPAA compliant. All 50 states.",
      "url": "https://medbillingrcm.com/services/medical-coding/",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Medical Coding Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ICD-10 Coding" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CPT Coding" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HCPCS Coding" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DRG Coding" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HCC Risk Adjustment Coding" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the process for outsourcing medical coding services?", "acceptedAnswer": { "@type": "Answer", "text": "Our process begins with a comprehensive needs assessment to understand your practice's unique requirements. Once defined, we assign experienced coders who work closely with your team, providing regular updates and transparent reporting to maintain alignment with your goals." } },
        { "@type": "Question", "name": "How do you ensure compliance with coding standards?", "acceptedAnswer": { "@type": "Answer", "text": "Our medical coders are certified and regularly trained in ICD-10, CPT, and HCPCS updates. We conduct compliance audits and align with HIPAA, CMS, and OIG guidelines to safeguard your practice against penalties and audit exposure." } },
        { "@type": "Question", "name": "What specialties do you cover?", "acceptedAnswer": { "@type": "Answer", "text": "We cover a broad spectrum including cardiology, family medicine, radiology, urgent care, OBGYN, orthopaedics, dermatology, internal medicine, and many others. Our team includes specialists for each field, ensuring coding precision for highly specialized medical services." } },
        { "@type": "Question", "name": "How do you handle claim denials related to coding?", "acceptedAnswer": { "@type": "Answer", "text": "Our denial management approach focuses on root-cause analysis we identify whether the denial was due to a coding error, documentation gap, or payer policy issue. We correct, resubmit, and provide transparent reporting on denial trends to address issues proactively and prevent recurrence." } },
        { "@type": "Question", "name": "How quickly do you turn around coding after receiving documentation?", "acceptedAnswer": { "@type": "Answer", "text": "Standard turnaround is 24–48 hours from receipt of complete documentation. For high-volume practices, we scale our team to maintain consistent turnaround times. Rush processing is available for time-sensitive claims with same-day coding when needed." } }
      ]
    }
  ]
};

export default function MedicalCodingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
