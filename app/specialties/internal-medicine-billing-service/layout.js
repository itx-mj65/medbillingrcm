import "../../components/specialty/specialty.css";
import "./intmed.css";

export const metadata = {
  title:       "Internal Medicine Billing Services: Maximize Revenue | Medbilling RCM",
  description: "Internal Medicine Billing Services: Medbilling RCM in Irvine, CA reduces denials & speeds reimbursements. Contact us!",
  keywords:    "internal medicine billing services, internal medicine medical billing, internal medicine RCM, internal medicine revenue cycle management, medical billing for internists, internal medicine practice billing, physician billing internal medicine, internal medicine coding services",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/internal-medicine-billing-service/" },
  openGraph: {
    title:       "Internal Medicine Billing Services: Maximize Revenue | Medbilling RCM",
    description: "Boost internal medicine revenue! Reduce denials, improve coding & accelerate reimbursements.",
    url:         "https://medbillingrcm.com/specialties/internal-medicine-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Internal Medicine Billing Services",
  "name":"Internal Medicine Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/internal-medicine-billing-service/",
  "description":"Medbilling RCM is a dedicated internal medicine medical billing company that simplifies revenue cycle management for physicians reducing administrative burdens, minimizing claim denials, and accelerating reimbursements."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you handle the 2026 E/M coding changes for internal medicine?","acceptedAnswer":{"@type":"Answer","text":"Our certified coders stay current with all E/M documentation and coding changes. We conduct regular audits of your E/M code selection to ensure compliance with the latest CMS guidelines and prevent undercoding or overcoding."}},
    {"@type":"Question","name":"Can you manage billing for both Medicare and commercial payers?","acceptedAnswer":{"@type":"Answer","text":"Yes. We have extensive experience with Medicare, Medicare Advantage, Medicaid, and all major commercial payers. We track payer-specific rules to ensure claims are submitted correctly for each insurer."}},
    {"@type":"Question","name":"How do you support MIPS reporting for internal medicine practices?","acceptedAnswer":{"@type":"Answer","text":"We assist with quality measure selection, data collection, and MIPS submission to maximize your performance category scores. Our team monitors your progress throughout the performance year to ensure optimal outcomes."}},
    {"@type":"Question","name":"What is your process for managing high-volume practices?","acceptedAnswer":{"@type":"Answer","text":"We scale our team and workflows to match your practice volume. Our automated claim scrubbing and dedicated account managers ensure consistent turnaround times regardless of patient volume fluctuations."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Internal Medicine Billing Services","item":"https://medbillingrcm.com/specialties/internal-medicine-billing-service/"}
  ]
};

export default function InternalMedicineLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
