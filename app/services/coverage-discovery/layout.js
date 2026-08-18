import "./cd.css";

export const metadata = {
  title:       "Coverage Discovery Services | Medbilling RCM",
  description: "Coverage discovery that finds billable insurance on self-pay accounts. 1,000+ payer network. Pre-service and post-service discovery. Free coverage audit.",
  alternates:  { canonical: "https://medbillingrcm.com/services/coverage-discovery/" },
  openGraph: {
    title:       "Coverage Discovery Services | Find Hidden Insurance | Medbilling RCM",
    description: "Up to 30% of self-pay accounts carry billable insurance. Our coverage discovery finds it, across Medicare, Medicaid, and 1,000+ commercial payers. Free coverage audit.",
    url:         "https://medbillingrcm.com/services/coverage-discovery/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://medbillingrcm.com/services/coverage-discovery/#service",
      "serviceType": "Coverage Discovery Services",
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
      "description": "Coverage discovery services that identify hidden Medicare, Medicaid, and commercial insurance on self-pay accounts. Pre-service, point-of-service, and post-service discovery across 1,000+ payers.",
      "url": "https://medbillingrcm.com/services/coverage-discovery/"
    },
    {
      "@type": "FAQPage",
      "@id": "https://medbillingrcm.com/services/coverage-discovery/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is coverage discovery in medical billing?", "acceptedAnswer": { "@type": "Answer", "text": "Coverage discovery is the process of finding active insurance that a patient has but the provider has not captured. It identifies billable Medicare, Medicaid, and commercial coverage on accounts that would otherwise be classified as self-pay and written off as bad debt. It differs from eligibility verification, which confirms benefits on a plan the patient already provided." } },
        { "@type": "Question", "name": "How much revenue can coverage discovery recover?", "acceptedAnswer": { "@type": "Answer", "text": "Results depend on patient population and payer mix. Industry data shows that 10 to 30 percent of accounts classified as self-pay have active, billable insurance at the time of service. For providers with high self-pay volume, including emergency departments, FQHCs, and behavioral health practices, the recovery is typically material." } },
        { "@type": "Question", "name": "When should coverage discovery run in the revenue cycle?", "acceptedAnswer": { "@type": "Answer", "text": "At three points: before the appointment for pre-service eligibility and discovery, at registration for coordination of benefits verification, and after service as a batch sweep of self-pay accounts before they reach collections or write-off. Most providers only check at scheduling. Running at all three points catches coverage the others miss." } },
        { "@type": "Question", "name": "What is coordination of benefits and why does it cause denials?", "acceptedAnswer": { "@type": "Answer", "text": "Coordination of benefits determines which insurance pays first when a patient has multiple plans. COB errors, including billing the wrong primary payer, missing a secondary plan, or incorrect payer sequencing, account for 15 to 17 percent of all claim denials. Each reworked denial costs $25 to $57 in administrative time, and many are never reworked at all." } },
        { "@type": "Question", "name": "How does coverage discovery reduce bad debt?", "acceptedAnswer": { "@type": "Answer", "text": "It identifies active insurance on accounts that were classified as self-pay, converting what would have been a patient collection or write-off into a payer-billed claim. This reduces bad debt and lowers patient financial burden. The provider collects from the payer instead of chasing the patient, and the patient avoids a bill their insurance should have covered." } },
        { "@type": "Question", "name": "Does coverage discovery work with our EHR system?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate with eClinicalWorks, Athenahealth, NextGen, Kareo, AdvancedMD, Epic, RXNT, Office Ally, and 30+ other EHR and practice management systems. Implementation requires no system replacement and no staff retraining. Integration is scoped during the free coverage audit at no extra charge." } },
        { "@type": "Question", "name": "What payers do you search?", "acceptedAnswer": { "@type": "Answer", "text": "We search across 1,000+ payers including Medicare Parts A through D, Medicaid in all states, TRICARE, VA benefits, workers' compensation, and commercial carriers such as BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Humana, and regional plans. All searches run from a single integrated platform." } },
        { "@type": "Question", "name": "Is patient data secure during coverage discovery?", "acceptedAnswer": { "@type": "Answer", "text": "All transmissions are encrypted and run through HIPAA-compliant channels. We execute a Business Associate Agreement with every client before any patient data is accessed. Patient demographic data is used solely for coverage identification and is never shared with third parties." } },
        { "@type": "Question", "name": "How long does it take to see results from coverage discovery?", "acceptedAnswer": { "@type": "Answer", "text": "Pre-service discovery produces results before the patient visit. Post-service batch sweeps typically return discoverable coverage within the first two weeks of engagement. Claims on discovered coverage are submitted immediately, and reimbursement follows the normal payer processing timeline, usually 14 to 30 days for clean claims." } },
        { "@type": "Question", "name": "How do I get started?", "acceptedAnswer": { "@type": "Answer", "text": "Request a free coverage audit. We analyze a sample of your self-pay accounts, identify recoverable coverage by payer type, and report back what we find, including your estimated recovery and coordination-of-benefits exposure. You keep the findings whether or not you work with us." } }
      ]
    }
  ]
};

export default function CoverageDiscoveryLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
