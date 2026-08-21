import "../../components/specialty/specialty.css";
import "./neuro.css";

export const metadata = {
  title:       "Neurosurgery Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Expert neurosurgery billing services by Medbilling RCM. Accurate CPT coding for craniotomy, spinal fusion, neurostimulator implantation & radiosurgery. Reduce denials & accelerate reimbursements.",
  keywords:    "neurosurgery billing services, neurosurgery medical billing, craniotomy billing, spinal fusion billing, neurostimulator billing, neurosurgery RCM, neurosurgery coding services, spinal decompression billing, brain surgery billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/neurosurgery-billing-service/" },
  openGraph: {
    title:       "Neurosurgery Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Expert neurosurgery billing: accurate CPT coding for cranial, spinal, and neurostimulator procedures — reduce denials and accelerate reimbursements.",
    url:         "https://medbillingrcm.com/specialties/neurosurgery-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Neurosurgery Billing Services",
  "name":"Neurosurgery Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/neurosurgery-billing-service/",
  "description":"Medbilling RCM provides specialized neurosurgery billing services covering craniotomy, spinal decompression, spinal fusion, neurostimulator implantation, stereotactic radiosurgery, and peripheral nerve procedures — ensuring accurate claims, complete add-on code capture, and maximum reimbursements for neurosurgery practices."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you handle spinal surgery bundling and add-on code capture?","acceptedAnswer":{"@type":"Answer","text":"Spinal procedures often involve multiple distinct billable components — decompression, instrumentation, fusion at multiple levels, and intraoperative neuromonitoring. Each level and approach may have its own primary or add-on CPT code. We review every operative report to identify all separately billable services, apply correct add-on codes (e.g., +22614 for additional fusion levels), and ensure bundling edits are applied correctly to prevent systematic undercoding."}},
    {"@type":"Question","name":"How do you code robotic-assisted and navigation-guided neurosurgery?","acceptedAnswer":{"@type":"Answer","text":"Navigation-guided and robotic-assisted neurosurgery require specific CPT codes and documentation to be separately reimbursable. CPT 61781 (surgical navigation without MRI) and 61782 (with MRI guidance) are billable when navigation is documented in the operative report. Modifier -22 may be appropriate for unusually complex procedures. We verify payer-specific rules for navigation add-ons before every submission."}},
    {"@type":"Question","name":"How do you manage prior authorizations for high-cost neurosurgery procedures?","acceptedAnswer":{"@type":"Answer","text":"We proactively manage prior authorizations for craniotomies, spinal fusions, neurostimulator implantations, and radiosurgery. Our team submits authorization requests with operative planning documents, imaging studies, failed conservative treatment records, and neurological deficit documentation — the exact package payers require for high-cost neurosurgical procedures. We track approvals and follow up proactively to prevent procedure-day authorization failures."}},
    {"@type":"Question","name":"What neurosurgery ICD-10 codes do you use and how do you ensure specificity?","acceptedAnswer":{"@type":"Answer","text":"Neurosurgery ICD-10 coding requires high specificity — M48.06 (lumbar spinal stenosis with neurogenic claudication) vs M48.02 (cervical), G35 (multiple sclerosis), C71.9 (brain tumor), S06.0 (concussion), M50.121 (cervical disc displacement with radiculopathy, right). We select the most specific available ICD-10 code for every encounter and link procedure codes to diagnoses that satisfy medical necessity requirements for each payer."}},
    {"@type":"Question","name":"How do you handle assistant surgeon billing for complex neurosurgery?","acceptedAnswer":{"@type":"Answer","text":"Complex cranial and spinal neurosurgery frequently requires assistant surgeons. Modifiers -80 (assistant surgeon), -81 (minimum assistant), and -82 (assistant when qualified resident unavailable) each carry different reimbursement rules — typically 16–20% of the primary surgeon's allowed amount under Medicare. We apply the correct modifier for each case based on the operative documentation, payer rules, and teaching hospital status."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Neurosurgery Billing Services","item":"https://medbillingrcm.com/specialties/neurosurgery-billing-service/"}
  ]
};
export default function NeurosurgeryLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
