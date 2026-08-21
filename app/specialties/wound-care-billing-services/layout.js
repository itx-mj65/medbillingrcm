import "../../components/specialty/specialty.css";
import "./wound.css";

export const metadata = {
  title:       "Wound Care Billing Services: Maximize Revenue & Ensure Compliance | Medbilling RCM",
  description: "Expert wound care billing services by Medbilling RCM. Accurate CPT coding for debridement, NPWT, skin substitutes, and wound supplies — reduce denials and accelerate reimbursements.",
  keywords:    "wound care billing services, wound care medical billing, debridement billing, NPWT billing, skin substitute billing, wound care RCM, wound care coding services, chronic wound billing, pressure ulcer billing, wound dressing billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/wound-care-billing-services/" },
  openGraph: {
    title:       "Wound Care Billing Services: Maximize Revenue & Ensure Compliance | Medbilling RCM",
    description: "Expert wound care billing: accurate CPT coding for debridement, NPWT, skin substitutes, and supplies — reduce denials and accelerate reimbursements.",
    url:         "https://medbillingrcm.com/specialties/wound-care-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Wound Care Billing Services",
  "name":"Wound Care Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/wound-care-billing-services/",
  "description":"Medbilling RCM provides specialized wound care billing services covering selective and surgical debridement coding (CPT 97597–97602, 11042–11047), negative pressure wound therapy billing, skin substitute application claims, wound supply HCPCS coding, and LCD compliance — ensuring accurate claims and maximum reimbursements for wound care practices and clinics."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"What is the difference between CPT 97597 and CPT 11042 for wound debridement?","acceptedAnswer":{"@type":"Answer","text":"CPT 97597 (selective debridement) is area-based — billed per 20 sq cm of wound surface treated, removing necrotic tissue above subcutaneous depth using instruments such as forceps, scalpels, or curettes. CPT 11042 (surgical debridement) is depth-based — billed when tissue is removed down to the subcutaneous layer or deeper. The wound depth debrided determines the appropriate code, not the wound grade or extent. We review documentation before every coding decision to ensure correct code selection and prevent audit exposure from depth/area code mismatches."}},
    {"@type":"Question","name":"Can wound dressings be billed separately from debridement codes?","acceptedAnswer":{"@type":"Answer","text":"Wound dressings applied as part of debridement services under CPT 97597, 97598, and 97602 are included in those codes and cannot be billed separately. Dressing supplies billed separately use HCPCS Level II codes (A4450–A4456 range for specific wound dressing materials) when they are not bundled into a procedure code. CPT 97602 must not be reported in addition to CPT 97597 or 97598 for the same wound on the same date of service. We verify bundling rules on every wound care claim submission."}},
    {"@type":"Question","name":"How do you bill for Negative Pressure Wound Therapy (NPWT)?","acceptedAnswer":{"@type":"Answer","text":"NPWT is billed using CPT 97605 for wound areas ≤50 sq cm and CPT 97606 for wound areas >50 sq cm. Code selection depends entirely on wound size measured at the time of application. Documentation must include wound measurements (length × width), NPWT device type, application duration, and clinical justification for ongoing therapy. We ensure correct size-based code selection on every NPWT claim and verify documentation completeness before submission."}},
    {"@type":"Question","name":"How do you handle skin substitute (bioengineered tissue) billing?","acceptedAnswer":{"@type":"Answer","text":"Skin substitute application is billed using Q codes (Q4100 series) for the product and CPT 15271–15278 for the application procedure. Many skin substitutes require prior authorization and detailed medical necessity documentation including wound type, size, duration, and failed conventional treatment records. We manage the complete skin substitute billing cycle including prior authorization, Q-code selection, application CPT coding, and payer-specific coverage verification."}},
    {"@type":"Question","name":"What LCD compliance requirements apply to wound care billing?","acceptedAnswer":{"@type":"Answer","text":"Local Coverage Determinations (LCDs) from Medicare Administrative Contractors specify which ICD-10 diagnosis codes qualify for coverage of debridement, NPWT, and skin substitutes in each jurisdiction. Wound care LCDs require documentation of wound type, measurement at each visit, wound progression or active treatment plan, and medical necessity for the frequency of services. We verify LCD compliance on every wound care claim and ensure documentation meets MAC-specific requirements before submission."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Wound Care Billing Services","item":"https://medbillingrcm.com/specialties/wound-care-billing-services/"}
  ]
};
export default function WoundCareLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
