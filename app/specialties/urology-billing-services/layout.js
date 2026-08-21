import "../../components/specialty/specialty.css";
import "./urology.css";

export const metadata = {
  title:       "Urology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Expert urology billing services by Medbilling RCM. Accurate CPT coding for cystoscopy, TURP, prostate biopsy, lithotripsy & robotic procedures. Reduce denials & accelerate reimbursements.",
  keywords:    "urology billing services, urology medical billing, cystoscopy billing, prostate billing, TURP billing, urologic surgery billing, urology RCM, urology coding services, robotic urology billing, lithotripsy billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/urology-billing-services/" },
  openGraph: {
    title:       "Urology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Expert urology billing: accurate CPT/ICD-10 coding for cystoscopy, TURP, prostate, robotic surgery — reduce denials and accelerate reimbursements.",
    url:         "https://medbillingrcm.com/specialties/urology-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Urology Billing Services",
  "name":"Urology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/urology-billing-services/",
  "description":"Medbilling RCM provides specialized urology billing services covering cystoscopy, TURP, prostate biopsy, lithotripsy, robotic urologic surgery, and urodynamics — ensuring accurate claims, correct modifier application, and maximum reimbursements for urology practices."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you handle robotic vs. laparoscopic vs. open urology procedure coding?","acceptedAnswer":{"@type":"Answer","text":"Robotic-assisted urologic surgery uses distinct CPT codes from laparoscopic and open approaches. Robotic prostatectomy (55866) differs from open prostatectomy (55840). Robotic nephrectomy (50543) differs from laparoscopic nephrectomy (50545). We review every operative report for surgical approach before code selection, verify prior authorization for robotic approaches, and never default to laparoscopic codes when robotic documentation is present — one of the most common and costly urology billing errors."}},
    {"@type":"Question","name":"How do you apply modifier 25 in urology billing?","acceptedAnswer":{"@type":"Answer","text":"Modifier 25 is required when a significant, separately identifiable E/M service is performed at the same encounter as an in-office procedure such as cystoscopy, prostate biopsy, or urodynamics. Without modifier 25, payers bundle the visit into the procedure fee. We apply modifier 25 on every qualifying E/M, monitor capture rates per provider monthly, and audit encounters proactively to prevent systematic modifier omission."}},
    {"@type":"Question","name":"How do you manage prior authorizations for urology procedures?","acceptedAnswer":{"@type":"Answer","text":"We manage prior authorizations for cystoscopy, lithotripsy, TURP, robotic prostatectomy, vasectomy, and other high-cost urology procedures. Our team initiates authorization requests before scheduling, tracks payer approvals, documents medical necessity, and follows up proactively to prevent procedure-day authorization failures that result in non-covered claims."}},
    {"@type":"Question","name":"How do you handle global surgical period billing in urology?","acceptedAnswer":{"@type":"Answer","text":"We track the global surgical period for every urology procedure — 10 days for minor procedures and 90 days for major surgeries. Post-operative visits within the global period are not separately billable unless a significant new problem arises. We flag all post-op encounters for global period status, apply correct modifiers (24, 57, 79) when services fall outside or after the global period, and prevent accidental bundling of legitimately separately billable services."}},
    {"@type":"Question","name":"What urology-specific ICD-10 codes do you use?","acceptedAnswer":{"@type":"Answer","text":"Common urology ICD-10 codes include N40.0 (benign prostatic hyperplasia without LUTS), N40.1 (BPH with LUTS), N20.0 (kidney stone), N30.00 (acute cystitis), N39.0 (UTI), C61 (malignant neoplasm of prostate), N18.3 (CKD stage 3), and N43.3 (hydrocele). We verify correct ICD-10 code selection for every encounter and link procedure codes to supporting diagnoses that meet payer medical necessity criteria."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Urology Billing Services","item":"https://medbillingrcm.com/specialties/urology-billing-services/"}
  ]
};

export default function UrologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
