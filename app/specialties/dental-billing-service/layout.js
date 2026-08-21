import "../../components/specialty/specialty.css";
import "./dental.css";

export const metadata = {
  title:       "Dental Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Expert dental billing services by Medbilling RCM. Accurate CDT coding, medical-dental cross-coding, and denial management to maximize dental practice revenue.",
  keywords:    "dental billing services, dental medical billing, dental RCM, CDT coding services, dental revenue cycle management, dental practice billing, dental claim submission, dental billing company, dental insurance billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/dental-billing-service/" },
  openGraph: {
    title:       "Dental Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Expert dental billing: accurate CDT coding, medical-dental cross-coding, and denial management to maximize your practice revenue.",
    url:         "https://medbillingrcm.com/specialties/dental-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Dental Billing Services",
  "name":"Dental Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/dental-billing-service/",
  "description":"Medbilling RCM provides specialized dental billing services covering CDT coding, medical-dental cross-coding, dental implant billing, and oral surgery coding ensuring accurate claims and maximum reimbursements for dental practices of all sizes."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"What is medical-dental cross-coding and how does it benefit my practice?","acceptedAnswer":{"@type":"Answer","text":"Medical-dental cross-coding involves billing dental procedures to medical insurance when the service has a medical cause, such as tooth extractions related to a medical condition, oral surgery for trauma, or sleep apnea devices. This allows practices to capture additional reimbursement beyond dental insurance limits, significantly increasing total revenue per patient encounter."}},
    {"@type":"Question","name":"How do you handle CDT code updates and ensure coding accuracy?","acceptedAnswer":{"@type":"Answer","text":"Our billing specialists stay current with annual ADA CDT code updates, payer-specific coverage changes, and dental benefit plan variations. We conduct regular coding audits to ensure every procedure is billed with the correct CDT code, accurate tooth numbers, and proper documentation to prevent denials."}},
    {"@type":"Question","name":"Can you handle billing for both dental and oral surgery procedures?","acceptedAnswer":{"@type":"Answer","text":"Yes. We handle the full spectrum of dental billing including general dentistry, orthodontics, periodontics, endodontics, and oral and maxillofacial surgery. Oral surgery billing often crosses into medical insurance for procedures like wisdom tooth extractions, jaw surgery, and implants, and we manage this cross-billing process to maximize reimbursement from both payers."}},
    {"@type":"Question","name":"How do you manage prior authorizations for dental procedures?","acceptedAnswer":{"@type":"Answer","text":"We proactively manage prior authorizations for major dental procedures including implants, crowns, oral surgery, and orthodontic treatment. Our team submits pre-determination requests to insurance carriers, tracks approval timelines, and ensures all required documentation is in place before treatment begins to prevent denials."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Dental Billing Services","item":"https://medbillingrcm.com/specialties/dental-billing-service/"}
  ]
};

export default function DentalLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
