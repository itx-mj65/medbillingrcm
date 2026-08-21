import "../../components/specialty/specialty.css";
import "./id.css";

export const metadata = {
  title:       "Infectious Disease Billing Services: Maximize Revenue & Ensure Compliance | Medbilling RCM",
  description: "Expert infectious disease billing services by Medbilling RCM. HIV/AIDS billing, antibiotic infusion coding, complex E/M, hospital consult billing & ICD-10 specificity. Reduce denials.",
  keywords:    "infectious disease billing services, infectious disease medical billing, HIV billing, antibiotic infusion billing, ID billing services, infectious disease RCM, hospital consult billing, infectious disease coding, MRSA billing, sepsis billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/infectious-disease-billing-service/" },
  openGraph: {
    title:       "Infectious Disease Billing Services: Maximize Revenue & Ensure Compliance | Medbilling RCM",
    description: "Expert ID billing: HIV/AIDS coding, antibiotic infusion, complex E/M, hospital consults & ICD-10 specificity — reduce denials and accelerate reimbursements.",
    url:         "https://medbillingrcm.com/specialties/infectious-disease-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Infectious Disease Billing Services",
  "name":"Infectious Disease Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/infectious-disease-billing-service/",
  "description":"Medbilling RCM provides specialized infectious disease billing services covering HIV/AIDS care, antibiotic infusion therapy billing (CPT 96365–96368), complex hospital consult coding, sepsis and MRSA ICD-10 specificity, and prior authorization management — ensuring accurate claims and maximum reimbursements for infectious disease practices and hospital-based ID consultants."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you handle HIV/AIDS billing in infectious disease practices?","acceptedAnswer":{"@type":"Answer","text":"HIV care requires specific ICD-10 coding — B20 for confirmed HIV disease (not the exposure code Z21), with additional codes for associated conditions and opportunistic infections. HIV management visits typically qualify for higher-complexity E/M codes due to multi-system involvement, complex medication management, and chronic disease monitoring. We verify ICD-10 specificity, ensure correct HIV staging codes, and capture the appropriate E/M level on every HIV management encounter."}},
    {"@type":"Question","name":"How do you bill for antibiotic infusion therapy in infectious disease?","acceptedAnswer":{"@type":"Answer","text":"Antibiotic infusion therapy uses CPT 96365 for the first hour of IV push or infusion, 96366 for each additional hour, and 96367 for additional sequential infusion. Subcutaneous antibiotic administration uses CPT 96401. Each infusion encounter requires documentation of drug, dose, route, start and stop time, and clinical indication. We track infusion time, apply correct sequential and concurrent infusion rules, and bill all infusion drugs separately using appropriate HCPCS J-codes."}},
    {"@type":"Question","name":"How do you code hospital consults and inpatient infectious disease care?","acceptedAnswer":{"@type":"Answer","text":"Infectious disease specialists frequently provide inpatient consultations and ongoing hospital management. Initial hospital consultations are billed under 99221–99223 (initial hospital care) or 99241–99245 (outpatient consultations). Subsequent hospital visits use 99231–99233. Complex ID cases often qualify for prolonged services and critical care coding. We ensure correct E/M level selection based on medical decision-making complexity and document all ID-specific complexity factors."}},
    {"@type":"Question","name":"How do you ensure ICD-10 specificity for infectious disease conditions?","acceptedAnswer":{"@type":"Answer","text":"Infectious disease ICD-10 coding requires high specificity — sepsis requires the specific organism code (A41.01 for MRSA sepsis vs A41.9 for unspecified sepsis), Clostridioides difficile requires A04.71 (without megacolon) or A04.72 (with toxic megacolon), HIV requires B20 for confirmed disease. We verify ICD-10 specificity on every claim and ensure the coding reflects the definitive diagnosis, not unspecified codes that trigger payer denials."}},
    {"@type":"Question","name":"How do you handle prior authorization for complex antibiotic regimens?","acceptedAnswer":{"@type":"Answer","text":"Complex antibiotic regimens — including IV vancomycin, daptomycin, and antifungal therapy — require prior authorization with documentation of culture and sensitivity results, failed oral antibiotic therapy, and specific organism confirmation. We manage the complete authorization cycle, including submission of microbiology results, clinical notes, and prescriber attestation required by payers for high-cost antibiotic and antifungal approvals."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Infectious Disease Billing Services","item":"https://medbillingrcm.com/specialties/infectious-disease-billing-service/"}
  ]
};
export default function IDLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
