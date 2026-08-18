import "./asc.css";

export const metadata = {
  title:       "Ambulatory Surgery Center Billing Services | Medbilling RCM",
  description: "ASC billing services for freestanding and multi-specialty surgery centers. APC coding, implant charge capture, denial management. Free revenue assessment.",
  alternates:  { canonical: "https://medbillingrcm.com/services/asc-billing/" },
  openGraph: {
    title:       "ASC Billing Services | Ambulatory Surgery Center Billing | Medbilling RCM",
    description: "Surgery center billing built for APC payment rules, implant pass-through, and NCCI compliance. 48hr denial turnaround. Free assessment.",
    url:         "https://medbillingrcm.com/services/asc-billing/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://medbillingrcm.com/services/asc-billing/#service",
      "serviceType": "Ambulatory Surgery Center Billing Services",
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
      "description": "Ambulatory surgery center billing services for freestanding ASCs, hospital-affiliated centers, and multi-specialty surgery centers. APC coding, implant charge capture, NCCI compliance, and denial management.",
      "url": "https://medbillingrcm.com/services/asc-billing/"
    },
    {
      "@type": "FAQPage",
      "@id": "https://medbillingrcm.com/services/asc-billing/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is ASC in billing?", "acceptedAnswer": { "@type": "Answer", "text": "ASC stands for Ambulatory Surgery Center. In billing, an ASC is a facility that performs outpatient surgical procedures and bills a facility fee separately from the surgeon's professional fee. The facility fee covers the operating room, nursing, equipment, and supplies. ASCs are reimbursed under the Ambulatory Payment Classification system for Medicare and under individual contracts for commercial payers." } },
        { "@type": "Question", "name": "What is the difference between ASC billing and hospital outpatient billing?", "acceptedAnswer": { "@type": "Answer", "text": "Both handle outpatient surgical procedures, but the payment systems differ. Hospital outpatient departments bill under the Outpatient Prospective Payment System (OPPS) at higher rates. ASCs bill under the ASC payment system, where rates are set at approximately 54.5% of OPPS. ASCs use the CMS-1500 form with Place of Service 24, while hospital outpatient uses the UB-04 with POS 22. Modifier rules, covered procedure lists, and implant billing also differ between the two settings." } },
        { "@type": "Question", "name": "How is ASC billing different from physician billing?", "acceptedAnswer": { "@type": "Answer", "text": "ASCs bill facility fees under the APC system, separate from the surgeon's professional fee. The facility claim covers the operating room, nursing, supplies, and equipment. Physician billing covers the surgeon's work. ASCs also deal with implant pass-through billing, the ASC Covered Procedures List, and the multiple procedure reduction rule, none of which apply to physician billing." } },
        { "@type": "Question", "name": "Can an ASC bill on a UB-04 form?", "acceptedAnswer": { "@type": "Answer", "text": "Most freestanding ASCs bill on the CMS-1500 (837P) form using Place of Service code 24. Some state Medicaid programs and certain commercial contracts require the UB-04 (837I) format. Hospital-based ASCs typically use the UB-04. We configure claim format rules per payer to prevent form-related rejections." } },
        { "@type": "Question", "name": "What is the ASC Covered Procedures List?", "acceptedAnswer": { "@type": "Answer", "text": "The ASC Covered Procedures List is the CMS list of surgical procedures eligible for Medicare facility fee payment in an ASC. If a procedure is not on the CPL, Medicare will not pay a facility fee for it. CMS updates the CPL annually. For CY 2026, 573 new procedure codes were added. Charge masters must be updated each year." } },
        { "@type": "Question", "name": "How do you handle implant and supply billing?", "acceptedAnswer": { "@type": "Answer", "text": "We reconcile operative reports and supply logs against the billing record for every case. Pass-through implants are billed separately using HCPCS C-codes. Packaged implants are included in the APC rate and cannot be billed as separate line items. We verify every implant classification to prevent missed revenue and CARC 96 denials." } },
        { "@type": "Question", "name": "What causes the most ASC claim denials?", "acceptedAnswer": { "@type": "Answer", "text": "Missing or expired prior authorizations, CPT coding errors, modifier misuse, NCCI bundling violations, documentation gaps, and eligibility issues. ASCs experience first-pass denial rates of 16 to 22%, driven by billing complexity that general platforms do not handle well." } },
        { "@type": "Question", "name": "How do I get started?", "acceptedAnswer": { "@type": "Answer", "text": "Request a free revenue assessment. We review your denial rate by root cause, implant charge capture accuracy, APC coding patterns, and payer contract performance. You receive a written report with findings and recommendations. No obligation, no upfront cost, and you keep the report whether or not you work with us." } }
      ]
    }
  ]
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://medbillingrcm.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://medbillingrcm.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "ASC Billing Services",
      "item": "https://medbillingrcm.com/services/asc-billing/"
    }
  ]
};

export default function ASCBillingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
