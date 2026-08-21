import "../../components/specialty/specialty.css";
import "./rcm.css";

export const metadata = {
  title:       "Healthcare RCM Services: Full-Cycle Revenue Management | Medbilling RCM",
  description: "End-to-end healthcare revenue cycle management by Medbilling RCM. Eligibility verification, medical coding, claim submission, denial management, AR recovery, and payer contract negotiation for any specialty.",
  keywords:    "healthcare RCM services, revenue cycle management, medical billing RCM, denial management services, AR recovery, eligibility verification, claim submission services, healthcare revenue cycle, medical coding services, payer contract negotiation",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/rcm/" },
  openGraph: {
    title:       "Healthcare RCM Services: Full-Cycle Revenue Management | Medbilling RCM",
    description: "End-to-end healthcare RCM: eligibility, coding, claims, denial management, AR recovery, and payer negotiations for any specialty.",
    url:         "https://medbillingrcm.com/specialties/rcm/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Healthcare Revenue Cycle Management",
  "name":"Healthcare RCM Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/rcm/",
  "description":"Medbilling RCM provides end-to-end healthcare revenue cycle management covering patient eligibility verification, medical coding (CPT/ICD-10/HCPCS), electronic claim submission, denial management, accounts receivable recovery, payment posting and reconciliation, payer contract negotiation, and provider credentialing — for any specialty, any size practice, across all 50 states."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"What does end-to-end RCM include?","acceptedAnswer":{"@type":"Answer","text":"End-to-end RCM covers every step from patient registration through final payment: eligibility and benefit verification before the appointment, accurate CPT/ICD-10/HCPCS coding after the encounter, electronic claim submission within 24-48 hours, payment posting and ERA reconciliation, systematic denial management with root-cause analysis and appeal submission, aged AR recovery, and reporting that shows performance at every stage of the cycle."}},
    {"@type":"Question","name":"How do you handle denial management in your RCM service?","acceptedAnswer":{"@type":"Answer","text":"Every denial is categorized by root cause — coding error, missing authorization, eligibility issue, timely filing, or medical necessity. We resolve each category with the appropriate response: coding correction and resubmission, appeal with clinical documentation, authorization retroactive submission, or corrected claim. We track denial rates by payer, code, and reason to identify and eliminate patterns that cause systematic revenue loss."}},
    {"@type":"Question","name":"How quickly do you submit claims after service delivery?","acceptedAnswer":{"@type":"Answer","text":"We target electronic claim submission within 24-48 hours of charge capture or encounter documentation. Faster submission means faster payment and less exposure to timely filing denials. For high-volume practices, we implement daily submission cycles. For practices with complex coding requirements, claims are submitted within the same business day of coding completion and pre-submission scrubbing."}},
    {"@type":"Question","name":"What reporting do you provide for RCM performance?","acceptedAnswer":{"@type":"Answer","text":"We provide weekly and monthly reports covering: gross charges and net collections by provider and payer, days in accounts receivable by aging bucket (0-30, 31-60, 61-90, 91-120, 120+), denial rate by reason and payer, first-pass acceptance rate, clean claim rate, and collection rate vs. expected payment. Practices receive dashboards that show where revenue is being collected and where it is being lost."}},
    {"@type":"Question","name":"How do you manage payer contract negotiations?","acceptedAnswer":{"@type":"Answer","text":"Payer contract negotiation starts with benchmark data — comparing your current contracted rates against Medicare fee schedule percentages, regional market rates, and payer-specific fee schedules. We identify underpaid codes, prepare rate increase proposals with utilization data, and manage the negotiation process with commercial payers. Even modest rate increases across high-volume CPT codes represent significant annual revenue improvements for most practices."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Healthcare RCM Services","item":"https://medbillingrcm.com/specialties/rcm/"}
  ]
};
export default function RCMLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
