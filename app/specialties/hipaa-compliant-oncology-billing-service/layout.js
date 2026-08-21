import "../../components/specialty/specialty.css";
import "./onco.css";

export const metadata = {
  title:       "HIPAA-Compliant Oncology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Expert oncology billing services by Medbilling RCM. HIPAA-compliant J-code billing, chemotherapy CPT coding, buy-and-bill reimbursement, JW modifier, and prior authorization management for oncology practices.",
  keywords:    "oncology billing services, HIPAA compliant oncology billing, chemotherapy billing, J-code billing, oncology medical billing, oncology RCM, buy and bill oncology, chemotherapy administration billing, cancer billing services, oncology coding",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/hipaa-compliant-oncology-billing-service/" },
  openGraph: {
    title:       "HIPAA-Compliant Oncology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Expert HIPAA-compliant oncology billing: J-code accuracy, chemo CPT coding, buy-and-bill, JW modifier, and prior authorization for oncology practices.",
    url:         "https://medbillingrcm.com/specialties/hipaa-compliant-oncology-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Oncology Billing Services",
  "name":"HIPAA-Compliant Oncology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/hipaa-compliant-oncology-billing-service/",
  "description":"Medbilling RCM provides HIPAA-compliant oncology billing services covering chemotherapy J-code accuracy, drug wastage billing (modifier JW), buy-and-bill reimbursement at ASP+6%, infusion administration CPT coding (96413–96417), prior authorization management, and radiation oncology billing — ensuring accurate claims and maximum reimbursements for oncology practices and cancer centers."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you ensure J-code accuracy for chemotherapy billing?","acceptedAnswer":{"@type":"Answer","text":"Every chemotherapy claim requires the exact HCPCS J-code matched to the drug name, dose, and administration route documented in the clinical record. J-code errors on high-cost oncology drugs can mean denials of $10,000–$150,000 per claim. We verify J-code selection against the drug administered, calculate units based on the dose administered (not the dose ordered), and apply modifier JW for drug wastage from single-use vials where payer rules allow."}},
    {"@type":"Question","name":"What is buy-and-bill reimbursement and how do you manage it?","acceptedAnswer":{"@type":"Answer","text":"Under the buy-and-bill model, oncology practices purchase chemotherapy drugs and seek reimbursement from payers after administration. Medicare reimburses at Average Sales Price (ASP) plus 6% for Part B drugs. Accurate J-code selection, correct unit calculation, timely claim submission, and effective denial management are critical — a denied claim for a $18,000-per-dose drug creates significant cash flow risk. We manage the complete buy-and-bill cycle from J-code to payment."}},
    {"@type":"Question","name":"How do you code chemotherapy infusion sequencing?","acceptedAnswer":{"@type":"Answer","text":"Chemotherapy infusion coding is sequence-dependent. The initial drug infusion is billed under CPT 96413 (first hour). Each additional hour of the same drug uses 96415. A second chemotherapy drug administered sequentially uses 96417. Concurrent infusions (two drugs running simultaneously) are coded differently from sequential infusions. We review infusion records, document start/stop times, and apply the correct initial/sequential/concurrent infusion hierarchy on every chemotherapy encounter."}},
    {"@type":"Question","name":"How do you handle prior authorizations for oncology treatments?","acceptedAnswer":{"@type":"Answer","text":"Oncology prior authorizations require diagnosis codes, staging information, treatment protocol documentation, NCCN guideline citations for off-label drug use, and in many cases pathology reports and genomic testing results. We manage the complete oncology authorization workflow — submission, tracking, peer-to-peer coordination, and appeals — for all chemotherapy drugs, biologics, immunotherapy agents, and targeted therapy medications."}},
    {"@type":"Question","name":"Is your oncology billing fully HIPAA-compliant?","acceptedAnswer":{"@type":"Answer","text":"Yes. All our oncology billing services operate under strict HIPAA compliance protocols including encrypted data transmission, secure EHR integration, Business Associate Agreement (BAA) execution before any data sharing, role-based access controls, and audit trail maintenance. Our team undergoes annual HIPAA training and we conduct regular compliance audits to ensure patient data protection meets all CMS and OCR requirements."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"HIPAA-Compliant Oncology Billing Services","item":"https://medbillingrcm.com/specialties/hipaa-compliant-oncology-billing-service/"}
  ]
};
export default function OncologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
