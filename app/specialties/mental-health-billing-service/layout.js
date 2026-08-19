import "../../components/specialty/specialty.css";
import "./mh.css";

export const metadata = {
  title:       "Mental Health Billing Services: Maximize Reimbursement | Medbilling RCM",
  description: "Irvine, CA: MedBilling RCM offers mental health billing services to boost reimbursement & reduce denials. Streamline claims & cash flow. Contact us!",
  keywords:    "mental health billing services, behavioral health billing, mental health RCM, psychiatric billing, therapy billing services, addiction treatment billing, counseling practice billing, mental health revenue cycle management",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/mental-health-billing-service/" },
  openGraph: {
    title:       "Mental Health Billing Services: Maximize Reimbursement | Medbilling RCM",
    description: "Since 2024, Medbilling RCM provides complete medical billing solutions for mental health and behavioral health providers improving collections so you can prioritize care.",
    url:         "https://medbillingrcm.com/specialties/mental-health-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Mental Health Billing Services",
  "name":"Mental Health Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/mental-health-billing-service/",
  "description":"Since 2024, Medbilling RCM has been committed to providing complete medical billing solutions for mental health and behavioral health providers improving your insurance and patient collections so you can prioritize care and scale your practice."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do mental health billing requirements differ from other specialties?","acceptedAnswer":{"@type":"Answer","text":"Mental health billing involves unique CPT codes, time-based billing, and specific payer policies for therapy, psychiatry, and telehealth services. Unlike procedure-based specialties, mental health billing is driven by session length, provider type, and the nature of the intervention requiring specialized knowledge that generalist billing teams often lack."}},
    {"@type":"Question","name":"What are the most common reasons for claim denials in mental health billing?","acceptedAnswer":{"@type":"Answer","text":"Denials in mental health billing most often result from missing documentation (especially progress notes and timesheets), incorrect time-based coding, lack of prior authorization, or exceeding session limits set by payers. Our proactive approach addresses each of these root causes before claims are submitted."}},
    {"@type":"Question","name":"Can you help with insurance credentialing for mental health providers?","acceptedAnswer":{"@type":"Answer","text":"Yes, our mental health billing services handle credentialing with commercial and government payers to ensure timely reimbursements and network participation. We manage the full credentialing process applications, payer enrollment, re-credentialing, and maintenance so your providers can see patients from day one."}},
    {"@type":"Question","name":"Does your mental health billing company handle billing for teletherapy and remote mental health services?","acceptedAnswer":{"@type":"Answer","text":"Yes, we ensure compliance with telehealth billing rules, including correct place-of-service codes and payer-specific teletherapy reimbursement policies. As telehealth for mental health has expanded significantly, our team stays current with all CMS and commercial payer updates affecting virtual behavioral health services."}},
    {"@type":"Question","name":"How do 2025 CPT code updates affect mental health billing?","acceptedAnswer":{"@type":"Answer","text":"The latest updates include new codes for extended therapy sessions, remote behavioral health monitoring, and crisis intervention. Using outdated codes leads to claim denials and our mental health billing services ensure your billing is always aligned with the latest CPT and payer requirements, updated as changes take effect."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Mental Health Billing Services","item":"https://medbillingrcm.com/specialties/mental-health-billing-service/"}
  ]
};

export default function MentalHealthLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
