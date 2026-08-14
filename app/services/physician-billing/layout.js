import "./physician.css";

export const metadata = {
  title:       "Physician Billing Services | Professional Billing & RCM | Medbilling RCM",
  description: "Physician billing services for CMS-1500 practices: E/M coding, prior auth, denials, and telehealth, measured at the payer. 97% first-pass. Free assessment.",
  alternates:  { canonical: "https://medbillingrcm.com/services/physician-billing/" },
  openGraph: {
    title:       "Physician Billing Services | Professional Billing & RCM | Medbilling RCM",
    description: "Physician billing services for CMS-1500 practices: E/M coding, prior auth, denials, and telehealth, measured at the payer. 97% first-pass. Free assessment.",
    url:         "https://medbillingrcm.com/services/physician-billing/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Physician billing services",
      "name": "Physician Billing Services",
      "provider": {
        "@type": "Organization",
        "@id": "https://medbillingrcm.com/#organization",
        "name": "Medbilling RCM",
        "url": "https://medbillingrcm.com/",
        "telephone": "+1-888-551-2526",
        "email": "info@medbillingrcm.com",
        "address": [
          { "@type": "PostalAddress", "streetAddress": "8907 Creeks Gate Ct", "addressLocality": "Richmond", "addressRegion": "TX", "postalCode": "77407", "addressCountry": "US" },
          { "@type": "PostalAddress", "streetAddress": "7 1st St", "addressLocality": "Rosedale", "addressRegion": "NY", "postalCode": "11422", "addressCountry": "US" }
        ]
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "url": "https://medbillingrcm.com/services/physician-billing/",
      "description": "Professional billing for CMS-1500 practices: E/M coding, prior authorization, denial management, telehealth billing, MIPS, and credentialing, with a first-pass clean claim rate measured at the payer.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Physician revenue cycle services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E/M level coding review" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prior authorization management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Claims submission and denial management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Telehealth billing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MIPS reporting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Provider credentialing and payer enrollment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accounts receivable follow-up" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the difference between physician billing and hospital billing?", "acceptedAnswer": { "@type": "Answer", "text": "The two get confused constantly, and billing them the same way is where money leaks. Physician, or professional, billing covers the provider's work on the CMS-1500 or 837-P, priced by RVUs under the fee schedule. Hospital, or facility, billing covers the building on the UB-04, priced by DRG or APC. One encounter can generate both, and they are coded and denied differently." } },
        { "@type": "Question", "name": "How do you improve E/M coding accuracy?", "acceptedAnswer": { "@type": "Answer", "text": "Most practices lose money to under-coding without ever seeing a denial. We review each encounter against the 2021 decision-making criteria and code the level the documentation supports, up or down. Where the record cannot support a level, the provider gets specific feedback, so the fix happens at the chart, not claim by claim." } },
        { "@type": "Question", "name": "Do you handle prior authorization?", "acceptedAnswer": { "@type": "Answer", "text": "Prior authorization is the biggest time sink most practices have, and the easiest to hand off. Yes, we submit and track authorizations per payer before the visit and appeal the denials that are wrong. Most appealed prior-auth denials are overturned, so the appeal is usually worth filing." } },
        { "@type": "Question", "name": "Can you bill telehealth correctly across states?", "acceptedAnswer": { "@type": "Answer", "text": "Telehealth denials tend to repeat across every claim, because one setup error hits them all. Yes, we apply the correct place-of-service code and modifier for each payer, then confirm state parity rules, so those claims stop getting rejected." } },
        { "@type": "Question", "name": "Do you support MIPS reporting?", "acceptedAnswer": { "@type": "Answer", "text": "The risk with MIPS is a penalty of up to 9 percent, and the upside is usually oversold. Yes, we report the categories that clear the 75-point threshold and keep you off the penalty, and we give you a realistic view of the upside, not the statutory maximum." } },
        { "@type": "Question", "name": "What EHR and practice management systems do you work with?", "acceptedAnswer": { "@type": "Answer", "text": "Switching billing usually raises the fear of ripping out your systems. You keep them. We work inside your existing setup, including Epic, Athenahealth, eClinicalWorks, NextGen, Kareo, and AdvancedMD, among others, with integrations scoped during the revenue assessment." } },
        { "@type": "Question", "name": "How fast can you onboard, and is there a contract?", "acceptedAnswer": { "@type": "Answer", "text": "The worry is a long, disruptive switch that locks you in. Neither happens here. Onboarding runs about 14 days with no gap in claim submission, no setup fee, and no long-term contract." } },
        { "@type": "Question", "name": "How do you measure your clean claim rate?", "acceptedAnswer": { "@type": "Answer", "text": "This is the number to pin any billing company on, because it is easy to inflate. We measure ours at the payer, on first submission, with zero rework, so a claim that needed a correction before it paid does not count. Many vendors quote clearinghouse acceptance instead, which reads higher." } }
      ]
    }
  ]
};

export default function PhysicianBillingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
      {children}
    </>
  );
}
