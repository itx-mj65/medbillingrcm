import "./mc.css";

export const metadata = {
  title:       "Medical Coding Outsourcing Services | Medbilling RCM",
  description: "Medical coding company offering ICD-10, CPT, and HCPCS coding for physician practices, ASCs, and hospitals. AAPC/AHIMA certified. Free coding assessment.",
  alternates:  { canonical: "https://medbillingrcm.com/services/medical-coding/" },
  openGraph: {
    title:       "Medical Coding Services | Medical Coding Company | Medbilling RCM",
    description: "Outsource medical coding to AAPC and AHIMA certified coders. NCCI compliance, specialty-specific coding, 48hr turnaround. Free assessment.",
    url:         "https://medbillingrcm.com/services/medical-coding/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://medbillingrcm.com/services/medical-coding/#service",
      "serviceType": "Medical Coding Services",
      "provider": {
        "@type": "Organization",
        "name": "Medbilling RCM",
        "url": "https://medbillingrcm.com",
        "telephone": "+1-888-551-2526",
        "address": [
          { "@type": "PostalAddress", "streetAddress": "8907 Creeks Gate Ct", "addressLocality": "Richmond", "addressRegion": "TX", "postalCode": "77407", "addressCountry": "US" },
          { "@type": "PostalAddress", "streetAddress": "7 1st St", "addressLocality": "Rosedale", "addressRegion": "NY", "postalCode": "11422", "addressCountry": "US" }
        ]
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "description": "Medical coding outsourcing services including ICD-10-CM, CPT, and HCPCS Level II coding by AAPC and AHIMA certified coders. Specialty coding, NCCI compliance, HCC risk adjustment, and coding audits for physician practices, ASCs, and hospital outpatient departments.",
      "url": "https://medbillingrcm.com/services/medical-coding/"
    },
    {
      "@type": "FAQPage",
      "@id": "https://medbillingrcm.com/services/medical-coding/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is medical coding outsourcing?", "acceptedAnswer": { "@type": "Answer", "text": "Medical coding outsourcing is the practice of delegating ICD-10, CPT, and HCPCS code assignment to an external team of certified coders rather than handling it in-house. The practice or facility securely transmits clinical documentation to the coding vendor, receives coded records back within an agreed turnaround window, and uses those codes to generate and submit claims. Outsourcing eliminates the overhead of recruiting, training, and retaining in-house coders while maintaining compliance with annual code set updates." } },
        { "@type": "Question", "name": "How much does it cost to outsource medical coding?", "acceptedAnswer": { "@type": "Answer", "text": "Per-chart pricing typically runs $2.50 to $4.50 for outpatient work and $8.00 to $18.00 for inpatient work. Fully loaded in-house coder costs typically exceed $95,000 per coder annually when salary, benefits, encoder licensing, management, and training are included. For mid-size organizations, outsourcing can reduce total coding costs by 25 to 58 percent." } },
        { "@type": "Question", "name": "What are the benefits of outsourcing medical coding?", "acceptedAnswer": { "@type": "Answer", "text": "Professional medical coding services provide access to specialty-trained certified coders, eliminate recruitment and retention costs, keep coding current with quarterly NCCI updates and annual code set releases, and convert fixed staffing overhead into predictable per-chart costs. Coding accuracy improves when coders work only within their specialty rather than handling mixed-specialty queues." } },
        { "@type": "Question", "name": "What certifications should a medical coding company have?", "acceptedAnswer": { "@type": "Answer", "text": "Look for AAPC-certified coders holding CPC credentials for outpatient and physician work, and AHIMA-certified coders holding CCS credentials for inpatient and hospital coding. Coders working in specialty areas should hold the corresponding specialty credential (CRC, CIC, or COC). HIPAA compliance and a signed Business Associate Agreement are non-negotiable baseline requirements." } },
        { "@type": "Question", "name": "What is the difference between medical coding and medical billing?", "acceptedAnswer": { "@type": "Answer", "text": "Medical coding translates clinical documentation into standardized alphanumeric codes: ICD-10-CM for diagnoses, CPT for procedures, and HCPCS for supplies and certain services. Medical billing uses those codes to construct claims and submit them to payers for reimbursement. Coding errors create billing problems. A wrong code or missing modifier results in a denied claim that the billing team then has to work." } },
        { "@type": "Question", "name": "What types of medical coding exist?", "acceptedAnswer": { "@type": "Answer", "text": "The three primary code sets are ICD-10-CM, CPT, and HCPCS Level II. Within those, distinct coding disciplines exist: outpatient facility coding (APC/OPPS), inpatient facility coding (MS-DRG/IPPS), professional fee coding (profee), HCC and risk adjustment coding for Medicare Advantage, and specialty-specific coding for radiology, oncology, behavioral health, and surgical specialties." } },
        { "@type": "Question", "name": "Is outsourcing medical coding HIPAA-compliant?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when the vendor operates under a signed Business Associate Agreement and maintains HIPAA-compliant data handling protocols including encrypted transmission, role-based access controls, and secure coding environments. A Business Associate Agreement is a legal requirement under HIPAA for any third party that handles protected health information on your behalf." } },
        { "@type": "Question", "name": "How do I get started?", "acceptedAnswer": { "@type": "Answer", "text": "Request a free coding assessment. We review a sample of your current claims for coding accuracy, modifier compliance, and NCCI edit exposure, then deliver a written report identifying the error patterns costing you the most revenue. No obligation. You keep the report whether or not you work with us." } }
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
