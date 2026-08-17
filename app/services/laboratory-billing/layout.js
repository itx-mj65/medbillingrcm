import "./lab.css";

export const metadata = {
  title:       "Laboratory Medical Billing Services | Medbilling RCM",
  description: "Laboratory billing services for clinical labs, pathology, molecular diagnostics, and toxicology. PAMA-compliant. 48hr denial turnaround. Free revenue assessment.",
  alternates:  { canonical: "https://medbillingrcm.com/services/laboratory-billing/" },
  openGraph: {
    title:       "Laboratory Billing Services | Lab Billing Company | Medbilling RCM",
    description: "Lab billing for high-volume, low-margin claims. Pathology billing, diagnostic billing, PAMA compliance, and denial management for every lab type.",
    url:         "https://medbillingrcm.com/services/laboratory-billing/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  keywords: "laboratory billing services, lab billing company, pathology billing, diagnostic billing services, clinical laboratory billing, molecular diagnostics billing, toxicology billing, PAMA laboratory, laboratory CPT codes",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://medbillingrcm.com/services/laboratory-billing/#service",
      "serviceType": "Laboratory Medical Billing Services",
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
      "description": "Laboratory medical billing services for independent clinical labs, hospital outreach programs, reference labs, molecular diagnostics, toxicology, and pathology practices. PAMA-compliant billing with CLFS data reporting support.",
      "url": "https://medbillingrcm.com/services/laboratory-billing/"
    },
    {
      "@type": "FAQPage",
      "@id": "https://medbillingrcm.com/services/laboratory-billing/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What makes laboratory billing different from physician billing?", "acceptedAnswer": { "@type": "Answer", "text": "Labs process high volumes of low-dollar claims where the cost of reworking a denial often exceeds the claim value. Lab coding involves CPT, HCPCS, and PLA codes that update quarterly, payer-specific medical necessity rules, CLIA tier requirements, MUE unit caps, and technical-versus-professional component splits that physician billing does not deal with." } },
        { "@type": "Question", "name": "What is PAMA and how does it affect my lab?", "acceptedAnswer": { "@type": "Answer", "text": "PAMA is the Protecting Access to Medicare Act. It restructured Medicare lab payments based on private payer rate data. Since 2018, PAMA has cut over $4 billion in Medicare lab payments. The next round of 15% annual reductions begins in 2027 based on data labs are reporting to CMS during the May through July 2026 window." } },
        { "@type": "Question", "name": "What types of laboratories do you work with?", "acceptedAnswer": { "@type": "Answer", "text": "Independent clinical labs, hospital outreach programs, reference labs, molecular diagnostics and genetic testing labs, toxicology labs, and pathology practices. Each lab type has distinct coding, compliance, payer, and regulatory requirements that we manage as part of the billing engagement, not as a generic add-on." } },
        { "@type": "Question", "name": "How do you handle pathology billing specifically?", "acceptedAnswer": { "@type": "Answer", "text": "Pathology billing uses dual coding systems: anatomic pathology (CPT 88000 through 88399) and clinical pathology (80047 through 85999). We code surgical pathology levels, immunohistochemistry, and cytopathology by complexity, and manage the technical component (TC) and professional component (modifier 26) split on every interpretation to prevent modifier-related denials." } },
        { "@type": "Question", "name": "How do you handle lab claim denials?", "acceptedAnswer": { "@type": "Answer", "text": "We analyze each denial by root cause, whether that is a coding error, missing modifier, eligibility gap, or medical necessity rejection. We correct the issue and resubmit or appeal within 48 hours. We also track denial patterns across your claim volume to fix recurring problems at the workflow level, not one claim at a time." } },
        { "@type": "Question", "name": "Do you handle PAMA data reporting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We help labs determine whether they meet the applicable laboratory threshold, collect the required HCPCS codes, private payer rates, and test volumes, and submit within the CMS reporting window. The current period runs May 1 through July 31, 2026, using data collected from January through June 2025." } },
        { "@type": "Question", "name": "What coding systems do you use for laboratory and diagnostic billing?", "acceptedAnswer": { "@type": "Answer", "text": "CPT codes for standard lab and diagnostic tests, HCPCS for supplies and certain services, and PLA codes for proprietary tests. PLA codes update quarterly through the AMA. For molecular assays, we also manage MolDX Z-code registration where required by Medicare Administrative Contractors and commercial payers." } },
        { "@type": "Question", "name": "How do I get started?", "acceptedAnswer": { "@type": "Answer", "text": "Request a free revenue assessment. We review your current denial rate, coding accuracy, payer mix, and PAMA exposure, then deliver a written report with your findings, estimated recoverable revenue, and specific recommendations for your lab type. No obligation, no upfront cost, and you keep the report whether or not you work with us." } }
      ]
    }
  ]
};

export default function LabBillingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
