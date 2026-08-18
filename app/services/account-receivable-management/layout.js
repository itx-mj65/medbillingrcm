import "./ar.css";

export const metadata = {
  title:       "Account Receivable AR Recovery Services | Medbilling RCM",
  description: "Recover aging AR, denied claims, and unpaid balances across 800+ payers. Performance-based, you pay when we collect. Free AR analysis. All 50 states.",
  alternates:  { canonical: "https://medbillingrcm.com/services/account-receivable-management/" },
  openGraph: {
    title:       "Account Receivable AR Recovery Services | Medbilling RCM",
    description: "Recover aging AR, denied claims, and unpaid balances across 800+ payers. Performance-based, you pay when we collect. Free AR analysis. All 50 states.",
    url:         "https://medbillingrcm.com/services/account-receivable-management/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Accounts Receivable Recovery Services",
      "serviceType": "Accounts Receivable Management",
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AR Recovery Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Insurance AR Recovery" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aged AR Cleanup and Backlog Resolution" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Patient AR Recovery" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Write-Off Recovery Review" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Denial and Healthcare AR Services Outsourcing" } }
        ]
      },
      "description": "Standalone accounts receivable recovery services for physician practices, hospitals, and ambulatory surgery centers across all 50 states. Recovers aging 120-plus day claims across Medicare, Medicaid, and 800+ commercial payers. Performance-based pricing, no upfront fee.",
      "url": "https://medbillingrcm.com/services/account-receivable-management/"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does accounts receivable management mean in a healthcare practice?", "acceptedAnswer": { "@type": "Answer", "text": "Accounts receivable management is the ongoing process of tracking, following up on, and collecting payments for services already rendered, from both insurance payers and patients. AR recovery services specifically target accounts that have aged past normal payment timelines and require active intervention: resubmission, appeal, or direct payer contact before the filing window expires." } },
        { "@type": "Question", "name": "At what point should a practice bring in outside AR recovery?", "acceptedAnswer": { "@type": "Answer", "text": "HFMA sets the benchmark at no more than 10% of total AR sitting beyond 90 days. When a practice climbs above 50 days in AR, or when the aged bucket has drifted past that line, those numbers reflect a structural capacity gap, not a temporary backlog. External AR recovery is designed to close that gap while your internal team continues working current claims without interruption." } },
        { "@type": "Question", "name": "Why does recovery probability fall so sharply after 90 days?", "acceptedAnswer": { "@type": "Answer", "text": "Because payer contracts set hard filing deadlines that cannot be extended. UnitedHealthcare and Aetna enforce 90-day windows for most commercial plans. BCBS varies by state, with many plans at 90 to 180 days. Medicare Part A and Part B allow one full calendar year, but Medicare Advantage plans follow their own timelines, often 90 to 120 days. Once those windows close, a claim denied for timely filing cannot be appealed and the revenue cannot be recovered. That hard cutoff is what makes aged AR a time-sensitive operation." } },
        { "@type": "Question", "name": "How do you handle a rejection versus a denial?", "acceptedAnswer": { "@type": "Answer", "text": "A rejection is returned before the payer ever reviews the claim, usually because of a formatting error, incorrect payer ID, or demographic mismatch. The claim never entered adjudication. Rejections require a technical correction and fast resubmission, because the timely filing clock is still running. A denial is a post-adjudication refusal tied to a specific CARC reason code. Denials require a clinical or administrative appeal that directly addresses the stated reason for refusal. We route rejections and denials through separate workflows because the fix and the timeline are entirely different for each." } },
        { "@type": "Question", "name": "Can you recover revenue from balances we have already written off?", "acceptedAnswer": { "@type": "Answer", "text": "In many cases, yes. Write-off recovery applies when the payer filing window is still open, the clinical documentation supports the original billing position, and the payer has not issued a final coverage determination. We audit 12 months of write-off history to identify every account where those three conditions hold. Recoverable write-offs represent 8 to 15% of annual write-off volume. For a practice writing off $500,000 per year, the recoverable pool typically runs $40,000 to $75,000." } },
        { "@type": "Question", "name": "How quickly will we see recovered revenue?", "acceptedAnswer": { "@type": "Answer", "text": "Most practices see initial recovered payments post within the first 30 days of engagement. Rejected claims that require a technical correction and resubmission resolve within one to two payer processing cycles. Complex denied claims that require clinical appeals go through a longer timeline set by the payer's appeal review period. We have first resubmissions and appeals in motion within two weeks of the engagement start." } },
        { "@type": "Question", "name": "Are your healthcare AR services adapted to each specialty?", "acceptedAnswer": { "@type": "Answer", "text": "Recovery protocols are built per specialty, not applied generically. An orthopedic modifier appeal requires different documentation and a different CARC code response than a behavioral health authorization appeal. Oncology J-code underpayments are a different problem from laboratory LCD coverage disputes. We configure the workflow for the denial patterns specific to your specialty." } },
        { "@type": "Question", "name": "Do you work patient balances as well as insurance AR?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. After insurance adjudicates, we handle the patient balance side through itemized CMS-compliant statements, coordination-of-benefits verification, No Surprises Act compliance review, and direct patient communication when your practice opts in. We are not a collections agency." } },
        { "@type": "Question", "name": "What EHR and practice management systems do you work with?", "acceptedAnswer": { "@type": "Answer", "text": "You keep your existing systems. We work inside your setup, including Epic, Athenahealth, eClinicalWorks, NextGen, Kareo, and AdvancedMD, among others, with integrations scoped during the free AR analysis." } },
        { "@type": "Question", "name": "How does your pricing work?", "acceptedAnswer": { "@type": "Answer", "text": "We work on a percentage of what we recover. There is no setup fee, no retainer, and no fee on accounts where recovery is unsuccessful. If we do not collect, you do not pay. The specific percentage is set based on the volume, age distribution, and complexity of your AR portfolio, assessed during the initial free analysis." } }
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
      "name": "Account Receivable Management",
      "item": "https://medbillingrcm.com/services/account-receivable-management/"
    }
  ]
};

export default function ARLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
      {children}
    </>
  );
}
