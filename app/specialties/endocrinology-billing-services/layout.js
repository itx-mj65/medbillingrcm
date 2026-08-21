import "../../components/specialty/specialty.css";
import "./endo.css";

export const metadata = {
  title:       "Endocrinology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Expert endocrinology billing services by Medbilling RCM. Accurate CPT/ICD-10 coding for diabetes, thyroid disorders, CGM, insulin pumps, and hormone therapy. Reduce denials & accelerate reimbursements.",
  keywords:    "endocrinology billing services, diabetes billing, thyroid billing, endocrinology medical billing, CGM billing, insulin pump billing, endocrinology RCM, hormone therapy billing, endocrinology coding services, DSMT billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/endocrinology-billing-services/" },
  openGraph: {
    title:       "Endocrinology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Expert endocrinology billing: precise CPT/ICD-10 coding for diabetes, thyroid, CGM, and hormone therapy — reduce denials and accelerate reimbursements.",
    url:         "https://medbillingrcm.com/specialties/endocrinology-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Endocrinology Billing Services",
  "name":"Endocrinology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/endocrinology-billing-services/",
  "description":"Medbilling RCM provides specialized endocrinology billing services covering diabetes management, thyroid disorder billing, CGM and insulin pump coding, hormone therapy reimbursement, and DSMT billing — ensuring accurate claims and maximum reimbursements for endocrinology practices."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you handle CGM and insulin pump billing for diabetes patients?","acceptedAnswer":{"@type":"Answer","text":"CGM devices are billed using specific HCPCS codes (K0553, A4239) with proper physician interpretation billed separately under CPT 95251. Insulin pump supplies require accurate HCPCS Level II coding with supporting documentation of medical necessity. We manage the full CGM billing cycle including supplier enrollment, PDAC validation, device codes, and professional interpretation claims to maximize reimbursement from Medicare and commercial payers."}},
    {"@type":"Question","name":"What documentation is required for DSMT billing?","acceptedAnswer":{"@type":"Answer","text":"Diabetes Self-Management Training (DSMT) requires an accredited DSMT program, a physician referral, and session-specific documentation. Individual sessions are billed under G0108 and group sessions under G0109. We ensure program accreditation requirements are tracked, all sessions are documented with required elements, and claims are submitted with correct G-codes and supporting physician orders."}},
    {"@type":"Question","name":"How do you manage prior authorizations for high-cost endocrinology treatments?","acceptedAnswer":{"@type":"Answer","text":"We proactively manage prior authorizations for CGMs, insulin pumps, specialty biologics, and growth hormone therapies. Our team submits authorization requests with complete medical necessity documentation, tracks approval timelines, and follows up with payers proactively to prevent delays in patient care and revenue loss from authorization-related denials."}},
    {"@type":"Question","name":"How do you handle thyroid and parathyroid procedure billing?","acceptedAnswer":{"@type":"Answer","text":"Thyroid and parathyroid procedures require precise CPT coding — thyroid biopsy (CPT 60100), thyroid ultrasound (CPT 76536), TSH assay (CPT 84443), and T4 testing (CPT 84436) each have specific documentation and medical necessity requirements. We verify payer coverage, apply correct modifiers, and ensure lab and imaging claims are linked to supporting diagnoses to prevent coverage-related denials."}},
    {"@type":"Question","name":"How do you bill for Chronic Care Management (CCM) in endocrinology practices?","acceptedAnswer":{"@type":"Answer","text":"Chronic Care Management (CPT 99490, 99491) is billable for endocrinology patients with two or more chronic conditions including diabetes, thyroid disorders, and metabolic diseases. We implement CCM documentation workflows, track required monthly contact minutes, and bill all eligible patients — a significant revenue stream that most endocrinology practices are not fully capturing."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Endocrinology Billing Services","item":"https://medbillingrcm.com/specialties/endocrinology-billing-services/"}
  ]
};

export default function EndocrinologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
