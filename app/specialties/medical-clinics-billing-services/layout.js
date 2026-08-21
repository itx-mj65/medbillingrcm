import "../../components/specialty/specialty.css";
import "./clinic.css";

export const metadata = {
  title:       "Medical Clinics Billing Services: Multi-Specialty Revenue Cycle Management | Medbilling RCM",
  description: "Expert medical clinic billing by Medbilling RCM. Multi-specialty E/M coding, preventive care billing, provider credentialing, EHR integration, CCM, TCM, and chronic care management billing.",
  keywords:    "medical clinic billing services, multi-specialty billing, medical clinic RCM, E/M coding clinic, preventive care billing, chronic care management billing, provider credentialing, EHR billing integration, clinic revenue cycle management, CCM billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/medical-clinics-billing-services/" },
  openGraph: {
    title:       "Medical Clinics Billing Services: Multi-Specialty Revenue Cycle Management | Medbilling RCM",
    description: "Expert medical clinic billing: multi-specialty E/M coding, preventive care, CCM/TCM, provider credentialing, and EHR integration.",
    url:         "https://medbillingrcm.com/specialties/medical-clinics-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Medical Clinic Billing Services",
  "name":"Medical Clinics Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/medical-clinics-billing-services/",
  "description":"Medbilling RCM provides specialized medical clinic billing services covering multi-specialty E/M coding (99202–99215), preventive care billing (99381–99397), chronic care management (99490), transitional care management (99495–99496), provider credentialing, EHR-integrated revenue cycle management, and Annual Wellness Visit coding — ensuring accurate claims and maximum reimbursements for medical clinics, FQHCs, and multi-specialty practices."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you handle E/M coding for medical clinic visits?","acceptedAnswer":{"@type":"Answer","text":"Medical clinic E/M coding uses CPT codes 99202–99215 based on medical decision-making (MDM) complexity or total time. The 2021 AMA E/M guidelines eliminated history and physical exam as primary level determinants — MDM or time now drives code selection. We select E/M levels based on documented MDM complexity (problem complexity, data reviewed, and risk of complications) or documented total visit time, capturing the highest supportable level on every clinic encounter."}},
    {"@type":"Question","name":"How do you bill Chronic Care Management (CCM) for medical clinics?","acceptedAnswer":{"@type":"Answer","text":"CCM is billed using CPT 99490 for 20+ minutes of non-face-to-face chronic disease management per calendar month for patients with 2+ chronic conditions. Complex CCM uses 99487 (60+ minutes) and 99489 (each additional 30 minutes). CCM requires documented care plan, patient consent, 24/7 access provision, and monthly time tracking. We implement CCM billing workflows, track monthly time per patient, and ensure all documentation requirements are met before billing each monthly CCM claim."}},
    {"@type":"Question","name":"How do you handle preventive care and Annual Wellness Visit billing?","acceptedAnswer":{"@type":"Answer","text":"Preventive care uses CPT 99381–99397 based on age and visit type (new vs established). Annual Wellness Visit (AWV) is a Medicare benefit billed using G0438 (Initial AWV) or G0439 (Subsequent AWV) — not a standard E/M visit code. When a significant, separately identifiable E/M service is performed during an AWV, modifier 25 is required on the E/M code. We apply the correct preventive or AWV code and manage same-day E/M billing with modifier 25 on all qualifying encounters."}},
    {"@type":"Question","name":"How do you manage provider credentialing for medical clinics?","acceptedAnswer":{"@type":"Answer","text":"Provider credentialing requires enrollment with each payer separately — including Medicare (PECOS), Medicaid, and commercial insurers. Each provider needs an individual NPI (Type 1) linked to the clinic's organizational NPI (Type 2). Credentialing timelines range from 30–180 days depending on payer. We manage the complete credentialing cycle for new providers, track enrollment status, and prevent the revenue loss that occurs when providers see patients before credentialing is complete."}},
    {"@type":"Question","name":"How do you handle Transitional Care Management (TCM) billing?","acceptedAnswer":{"@type":"Answer","text":"TCM is billed after a patient is discharged from a facility. CPT 99495 covers moderate complexity TCM with a face-to-face visit within 14 days; CPT 99496 covers high complexity TCM with a visit within 7 days. TCM requires interactive contact with the patient within 2 business days of discharge and documentation of care coordination activities. We track discharge dates, manage the interactive contact timeline, and bill TCM on all qualifying post-discharge encounters."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Medical Clinics Billing Services","item":"https://medbillingrcm.com/specialties/medical-clinics-billing-services/"}
  ]
};
export default function ClinicLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
