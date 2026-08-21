import "../../components/specialty/specialty.css";
import "./rehab.css";

export const metadata = {
  title:       "Rehab Billing Services: Inpatient & Outpatient Rehabilitation Revenue | Medbilling RCM",
  description: "Expert rehab billing services by Medbilling RCM. IRF-PAI, PPS billing, functional outcome reporting, PT/OT/ST coding, and Medicare compliance for inpatient and outpatient rehabilitation.",
  keywords:    "rehab billing services, rehabilitation billing, IRF billing, inpatient rehabilitation billing, outpatient rehab billing, PT OT ST billing, PPS billing rehab, functional outcome billing, rehab RCM, rehabilitation coding services",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/rehab-billing-service/" },
  openGraph: {
    title:       "Rehab Billing Services: Inpatient & Outpatient Rehabilitation Revenue | Medbilling RCM",
    description: "Expert rehab billing: IRF-PAI, PPS, functional outcomes, PT/OT/ST coding, and Medicare compliance for inpatient and outpatient rehabilitation.",
    url:         "https://medbillingrcm.com/specialties/rehab-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema3 = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Rehabilitation Billing Services",
  "name":"Rehab Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/rehab-billing-service/",
  "description":"Medbilling RCM provides specialized rehabilitation billing services covering inpatient rehabilitation facility (IRF) billing, IRF-PAI assessment accuracy, Prospective Payment System (PPS) compliance, functional outcome reporting, outpatient PT/OT/ST therapy coding, and Medicare rehabilitation compliance — ensuring accurate claims and maximum reimbursements for rehabilitation hospitals, IRFs, and outpatient rehab facilities."
};
const faqSchema3 = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How does IRF billing differ from SNF billing?","acceptedAnswer":{"@type":"Answer","text":"Inpatient Rehabilitation Facility (IRF) billing uses the IRF Prospective Payment System (PPS) based on Case-Mix Groups (CMGs) derived from the IRF-PAI assessment. IRFs require patients to participate in at least 3 hours of therapy per day (the 60% Rule) and have a qualifying condition. SNF billing uses PDPM case-mix components derived from MDS assessment data. IRF payment rates are generally higher than SNF rates, but the qualifying criteria and admission requirements are stricter. We manage both IRF and SNF billing with condition-specific expertise."}},
    {"@type":"Question","name":"What is the IRF-PAI and how does it affect reimbursement?","acceptedAnswer":{"@type":"Answer","text":"The IRF Patient Assessment Instrument (IRF-PAI) is the standardized assessment tool that drives Medicare payment for IRF stays. IRF-PAI data determines the Case-Mix Group (CMG) assignment, which sets the base payment rate for the admission. Inaccurate IRF-PAI coding — particularly functional independence measure (FIM) scores and primary diagnosis — can significantly underpay or create compliance risk. We review IRF-PAI data for accuracy, verify FIM scoring documentation, and confirm primary diagnosis assignment before each Medicare IRF claim."}},
    {"@type":"Question","name":"How do you handle functional outcome reporting for outpatient rehab?","acceptedAnswer":{"@type":"Answer","text":"CMS requires functional outcome reporting for outpatient therapy under Medicare. G-codes and severity modifiers must be reported at initial evaluation, every 10 treatment visits, and at discharge. The G-code reports the functional limitation being treated; the modifier reports the current and projected severity. We implement functional outcome reporting workflows, track the 10-visit reporting intervals, and ensure all required G-codes and modifiers are applied on every qualifying outpatient therapy claim."}},
    {"@type":"Question","name":"How do you manage the 60% Rule compliance for IRFs?","acceptedAnswer":{"@type":"Answer","text":"The 60% Rule requires that at least 60% of an IRF's Medicare patient population have one of 13 qualifying conditions (stroke, spinal cord injury, brain injury, etc.) as their primary reason for the IRF admission. Failure to maintain the 60% threshold can result in loss of IRF status and reclassification to acute care billing rates. We track qualifying condition documentation, verify that primary diagnosis supports IRF admission criteria, and help IRFs maintain compliance with CMS 60% Rule reporting requirements."}},
    {"@type":"Question","name":"How do you code PT, OT, and ST services in outpatient rehabilitation?","acceptedAnswer":{"@type":"Answer","text":"Outpatient PT, OT, and ST services use the same timed CPT code families (97xxx) but require distinct Medicare discipline modifiers: GP for physical therapy, GO for occupational therapy, and GN for speech-language pathology. The KX modifier is required above the Medicare Therapy Threshold. Services must be billed under the supervising therapist's NPI with correct discipline modifier applied. We maintain separate billing rules for each therapy discipline and apply correct modifiers on every Medicare outpatient rehab claim."}}
  ]
};
const breadcrumbSchema3 = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Rehab Billing Services","item":"https://medbillingrcm.com/specialties/rehab-billing-service/"}
  ]
};
export default function RehabLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema3) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema3) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema3) }} />
      {children}
    </>
  );
}
