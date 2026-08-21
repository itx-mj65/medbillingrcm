import "../../components/specialty/specialty.css";
import "./snf.css";

export const metadata = {
  title:       "Nursing Home Billing Services: SNF Revenue Cycle Management | Medbilling RCM",
  description: "Expert nursing home billing services by Medbilling RCM. PDPM classification, Medicare Part A/B billing, MDS accuracy, Medicaid billing & consolidated billing compliance for SNFs.",
  keywords:    "nursing home billing services, SNF billing services, skilled nursing facility billing, PDPM billing, Medicare Part A billing SNF, nursing home RCM, MDS billing, Medicaid SNF billing, nursing home coding services, consolidated billing SNF",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/nursing-home-billing-services/" },
  openGraph: {
    title:       "Nursing Home Billing Services: SNF Revenue Cycle Management | Medbilling RCM",
    description: "Expert SNF billing: PDPM classification, Medicare Part A/B, MDS accuracy, Medicaid billing & consolidated billing compliance for nursing homes.",
    url:         "https://medbillingrcm.com/specialties/nursing-home-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Nursing Home Billing Services",
  "name":"Nursing Home Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/nursing-home-billing-services/",
  "description":"Medbilling RCM provides specialized nursing home and skilled nursing facility billing services covering PDPM classification, Medicare Part A and Part B billing, MDS accuracy review, Medicaid state-specific billing, consolidated billing compliance, and Triple Check process support — ensuring accurate claims and maximum reimbursements for SNFs and long-term care facilities."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How does PDPM affect SNF Medicare Part A reimbursement?","acceptedAnswer":{"@type":"Answer","text":"Under the Patient-Driven Payment Model (PDPM), Medicare Part A per-diem rates are determined by clinical complexity across five case-mix components: Physical Therapy, Occupational Therapy, Speech-Language Pathology, Nursing, and Non-Therapy Ancillaries. Each component rate is derived from MDS assessment data. MDS accuracy is the most consequential billing variable — an incorrect MDS item can systematically reduce all five payment components throughout the patient's stay. We review MDS data and ICD-10 coding before every RAI submission."}},
    {"@type":"Question","name":"What is SNF consolidated billing and what services does it affect?","acceptedAnswer":{"@type":"Answer","text":"Under consolidated billing, Medicare requires that most services provided to beneficiaries during a covered Part A SNF stay be billed by the SNF in a single consolidated claim — not by the individual therapy, ancillary, or professional service provider. This means most outside providers (therapy companies, labs, DME suppliers) must look to the SNF for payment. Services that CAN be separately billed to Part B include certain physician services, specific lab tests, and ambulance transportation. We manage consolidated billing compliance and identify which services are separately billable from Part B."}},
    {"@type":"Question","name":"How do you handle Medicare Part A vs. Part B billing for SNF residents?","acceptedAnswer":{"@type":"Answer","text":"Medicare Part A covers the first 100 days of a qualifying SNF stay (100% for days 1–20, coinsurance for days 21–100) following a three-day inpatient hospital stay. Medicare Part B covers outpatient skilled services for residents not in a covered Part A stay. The two programs have different claim formats, documentation requirements, and fee schedule rates. We manage both billing tracks simultaneously, ensuring correct classification of services under Part A or Part B at every point in the resident's stay."}},
    {"@type":"Question","name":"How do you manage Medicaid billing for nursing home residents?","acceptedAnswer":{"@type":"Answer","text":"Medicaid nursing home billing varies significantly by state — each state sets its own rate methodology, eligibility criteria, and billing requirements. We maintain current knowledge of state-specific Medicaid rate structures, billing cycles, and documentation requirements. For residents transitioning from Medicare Part A to Medicaid coverage, we manage the billing crossover, ensure correct payer sequencing, and prevent revenue gaps during coverage transitions."}},
    {"@type":"Question","name":"What is the Triple Check process and why is it important?","acceptedAnswer":{"@type":"Answer","text":"The Triple Check process is a pre-billing quality review that verifies MDS data, therapy documentation, and billing data are all consistent and accurate before submitting Medicare Part A claims. It involves three separate review points: therapy verification against clinical documentation, MDS coding accuracy review, and billing data reconciliation. The Triple Check prevents the most common and costly SNF billing errors — PDPM miscalculations from MDS inaccuracies and inconsistencies between therapy minutes and billing data. We implement Triple Check protocols on every Medicare Part A claim cycle."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Nursing Home Billing Services","item":"https://medbillingrcm.com/specialties/nursing-home-billing-services/"}
  ]
};
export default function NursingHomeLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
