import "../../components/specialty/specialty.css";
import "./gi.css";

export const metadata = {
  title:       "Gastroenterology Billing Services: Maximize Revenue & Ensure Compliance | Medbilling RCM",
  description: "Irvine, CA: Medbilling RCM offers expert gastroenterology billing services to reduce denials and maximize revenue. Contact us for optimized RCM.",
  keywords:    "gastroenterology billing services, GI billing company, medical billing for gastroenterologists, gastroenterology RCM, GI coding services, gastroenterology practice billing, digestive health billing, endoscopy billing, colonoscopy billing, GI revenue cycle management",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/gastroenterology-billing-service/" },
  openGraph: {
    title:       "Gastroenterology Billing Services: Maximize Revenue & Ensure Compliance | Medbilling RCM",
    description: "Optimize your gastroenterology practice with expert billing services to reduce denials and increase collections.",
    url:         "https://medbillingrcm.com/specialties/gastroenterology-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Gastroenterology Billing Services",
  "name":"Gastroenterology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/gastroenterology-billing-service/",
  "description":"Medbilling RCM's gastroenterology billing services help reduce errors, speed up reimbursements, and keep your practice compliant. While you focus on patient care, we ensure accurate claim processing and hassle-free revenue management."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you handle the difference between screening and diagnostic colonoscopy billing?","acceptedAnswer":{"@type":"Answer","text":"We code screening colonoscopies with the appropriate HCPCS codes (G0121, G0105) and apply correct modifiers when unexpected findings convert a screening to diagnostic. This prevents denials for the additional work performed and ensures accurate reimbursement in both scenarios."}},
    {"@type":"Question","name":"How do you manage anesthesia billing for GI procedures?","acceptedAnswer":{"@type":"Answer","text":"We ensure anesthesia services (CPT 00731, 00732) are properly documented with correct time units, ASA codes, and provider credentials. We handle both separate anesthesia billing and monitored anesthesia care (MAC) for all GI procedures, maximizing total reimbursement per case."}},
    {"@type":"Question","name":"What is your approach to global period billing for GI procedures?","acceptedAnswer":{"@type":"Answer","text":"We track global periods for all GI procedures and ensure post-operative services are correctly classified as within-global (not separately billable) vs. separately billable with appropriate modifiers, preventing audits while maximizing legitimate revenue."}},
    {"@type":"Question","name":"How do you handle multi-location GI billing across hospitals and ASCs?","acceptedAnswer":{"@type":"Answer","text":"We maintain separate billing workflows for each facility setting, applying correct place-of-service codes, facility vs. professional fee rules, and ASC vs. HOPD billing requirements to ensure compliance and maximum reimbursement at each location."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Gastroenterology Billing Services","item":"https://medbillingrcm.com/specialties/gastroenterology-billing-service/"}
  ]
};

export default function GastroenterologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
