import "../../components/specialty/specialty.css";
import "./obgyn.css";

export const metadata = {
  title:       "OB-GYN Billing Services: Maximize Revenue & Ensure Compliance | Medbilling RCM",
  description: "Expert OB-GYN billing services by Medbilling RCM. Reduce denials, maximize revenue with accurate obstetrics & gynecology coding. Contact us.",
  keywords:    "OB-GYN billing services, obstetrics billing, gynecology billing, obstetrics and gynecology medical billing, OB global package billing, delivery coding, maternity billing, women's health billing, OBGYN revenue cycle management",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/ob-gyn-billing-service/" },
  openGraph: {
    title:       "OB-GYN Billing Services: Maximize Revenue & Ensure Compliance | Medbilling RCM",
    description: "Expert OB-GYN billing services to reduce denials, maximize revenue with accurate obstetrics and gynecology coding.",
    url:         "https://medbillingrcm.com/specialties/ob-gyn-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"OB-GYN Billing Services",
  "name":"OB-GYN Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/ob-gyn-billing-service/",
  "description":"Medbilling RCM provides specialized OB-GYN billing services covering obstetric global packages, gynecological surgical coding, delivery billing, and women's health compliance ensuring accurate claims and maximum reimbursements for OB-GYN practices."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"What is the OB global package and how do you handle it?","acceptedAnswer":{"@type":"Answer","text":"The OB global package (CPT 59400, 59510, 59610, 59618) bundles all antepartum visits, delivery, and postpartum care into a single code. We track each component, ensure the correct global or split-care codes are applied, and handle unbundling when care is shared between providers or transferred mid-pregnancy."}},
    {"@type":"Question","name":"How do you bill for gynecological surgical procedures?","acceptedAnswer":{"@type":"Answer","text":"GYN surgical billing requires precise CPT coding for hysterectomies, laparoscopies, hysteroscopies, and colposcopies with correct approach modifiers and medical necessity documentation. We apply NCCI edits, track global surgical periods, and ensure all separately billable services are captured."}},
    {"@type":"Question","name":"How do you handle split or shared OB care billing?","acceptedAnswer":{"@type":"Answer","text":"When antepartum care is shared between providers or a patient transfers mid-pregnancy, we apply the correct split-care CPT codes (59425, 59426) for antepartum-only services. We coordinate between delivering and non-delivering providers to ensure each physician receives accurate reimbursement for their contribution to care."}},
    {"@type":"Question","name":"How do you manage prior authorizations for OB-GYN procedures?","acceptedAnswer":{"@type":"Answer","text":"We proactively manage prior authorizations for high-cost GYN procedures including robotic hysterectomies, endometrial ablations, and fertility-related services. Our team tracks authorization timelines, documents medical necessity, and follows up with payers to prevent revenue-impacting delays."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"OB-GYN Billing Services","item":"https://medbillingrcm.com/specialties/ob-gyn-billing-service/"}
  ]
};

export default function OBGYNLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
