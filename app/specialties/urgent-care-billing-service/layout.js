import "../../components/specialty/specialty.css";
import "./uc.css";

export const metadata = {
  title:       "Urgent care billing services | Urgent care billing company",
  description: "Specialized urgent care medical billing services. AAPC-certified coders, POS 20 compliance, S-code routing, denial management. 50 states. Free assessment.",
  keywords:    "urgent care billing services, urgent care medical billing, urgent care billing company, POS 20 billing, S9088 billing, S9083 billing, modifier 25 urgent care, urgent care RCM, walk-in clinic billing, urgent care coding",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/urgent-care-billing-service/" },
  openGraph: {
    title:       "Urgent care medical billing services and revenue cycle management | MedBilling RCM",
    description: "Specialized urgent care medical billing services. AAPC-certified coders, POS 20 compliance, S-code routing, denial management. 50 states. Free assessment.",
    url:         "https://medbillingrcm.com/specialties/urgent-care-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "@id":"https://medbillingrcm.com/specialties/urgent-care-billing-service/#service",
  "serviceType":"Urgent Care Revenue Cycle Management",
  "name":"Urgent Care Medical Billing Services",
  "provider":{
    "@type":"MedicalBusiness",
    "@id":"https://medbillingrcm.com/#organization",
    "name":"MedBilling RCM",
    "url":"https://medbillingrcm.com",
    "telephone":"+1-888-551-2526",
    "address":[
      {"@type":"PostalAddress","streetAddress":"8907 Creeks Gate Ct","addressLocality":"Richmond","addressRegion":"TX","postalCode":"77407","addressCountry":"US"},
      {"@type":"PostalAddress","streetAddress":"7 1st St","addressLocality":"Rosedale","addressRegion":"NY","postalCode":"11422","addressCountry":"US"}
    ]
  },
  "areaServed":{"@type":"Country","name":"United States"},
  "description":"Urgent care medical billing services including E/M coding optimization, S9088 and S9083 payer routing, Modifier 25 compliance, walk-in eligibility verification, denial management by CARC code, and AR recovery for urgent care centers across 50 states."
};

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "@id":"https://medbillingrcm.com/specialties/urgent-care-billing-service/#faq",
  "mainEntity":[
    {"@type":"Question","name":"What is the difference between POS 20 and POS 11 in urgent care billing?","acceptedAnswer":{"@type":"Answer","text":"POS 20 identifies an urgent care facility. POS 11 identifies a standard office. Some payer contracts require POS 11 even for urgent care locations. Submitting the wrong code triggers underpayments or denials because the payer applies the wrong fee schedule. Our team verifies POS rules per contract before any claim goes out."}},
    {"@type":"Question","name":"What are S9088 and S9083, and which payers accept them?","acceptedAnswer":{"@type":"Answer","text":"S9088 is a HCPCS add-on code for services in an urgent care center, billed alongside E/M codes. S9083 is a flat global per-visit fee that bundles all services. Many commercial and Medicaid payers require S-codes. Medicare does not recognize them. We maintain a payer routing grid mapping each contract to the correct format."}},
    {"@type":"Question","name":"Why does Modifier 25 matter so much in urgent care?","acceptedAnswer":{"@type":"Answer","text":"Modifier 25 signals that a separately identifiable E/M service occurred on the same day as a procedure. Without it, the payer bundles the visit into the procedure payment and the clinic loses that reimbursement. It is also the most frequent audit trigger in urgent care. Documentation must show the evaluation addressed issues distinct from the procedure itself."}},
    {"@type":"Question","name":"What denial rate should my urgent care center expect?","acceptedAnswer":{"@type":"Answer","text":"Change Healthcare's 2024 data puts urgent care denial rates at 9-12% nationally, driven by E/M level disputes, modifier errors, and eligibility failures. More than 30% of those denials trace to incorrect or mismatched codes. Pre-submission scrubbing and real-time eligibility verification are the two highest-impact interventions for reducing that number."}},
    {"@type":"Question","name":"How do you handle ancillary services that go unbilled?","acceptedAnswer":{"@type":"Answer","text":"UCA's 2025 benchmarking data estimates 15-25% of ancillary revenue goes uncaptured without dedicated charge capture. On a center billing $3 million annually, that is $135,000 to $225,000 in services performed but never billed. Our coding team captures every lab, imaging, injection, and supply charge in real time."}},
    {"@type":"Question","name":"Can you take over billing from our current vendor without a revenue gap?","acceptedAnswer":{"@type":"Answer","text":"We run a parallel processing period during transition. Your current billing continues while we onboard, validate data migration, test EHR integration, and build your payer routing grid. Once systems are verified, we assume full operations. No gap, no lost claims, no restart."}},
    {"@type":"Question","name":"How much does outsourced urgent care billing cost?","acceptedAnswer":{"@type":"Answer","text":"Engagements are custom-structured during the revenue assessment. Pricing is percentage-based, tied to collected revenue. There are no setup fees, no monthly minimums, and no long-term contracts. For most centers, the net result is higher collections at a lower total cost than in-house staff plus software."}}
  ]
};

const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Urgent Care Billing Services","item":"https://medbillingrcm.com/specialties/urgent-care-billing-service/"}
  ]
};

export default function UrgentCareLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
