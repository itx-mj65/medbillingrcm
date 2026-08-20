import "../../components/specialty/specialty.css";
import "./psych.css";

export const metadata = {
  title:       "Psychiatric Billing Services for Mental Health Practices | Medbilling RCM",
  description: "Irvine psychiatric billing experts: Medbilling RCM ensures compliant coding, faster reimbursements, and denial management.",
  keywords:    "psychiatric billing services, mental health billing, psychiatry medical billing, behavioral health billing, psych billing company, mental health revenue cycle management, psychiatric practice billing, medical billing for therapists",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/psychiatric-billing-service/" },
  openGraph: {
    title:       "Psychiatric Billing Services for Mental Health Practices | Medbilling RCM",
    description: "Boost psychiatric revenue with compliant coding, faster reimbursements, and expert denial management for your practice.",
    url:         "https://medbillingrcm.com/specialties/psychiatric-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Psychiatric Billing Services",
  "name":"Psychiatric Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/psychiatric-billing-service/",
  "description":"Medbilling RCM has been a leading medical billing company in the USA for over a decade. We focus on efficiently integrating our psychiatry billing services with your current EMR/EHR systems ensuring accurate, timely reimbursement for every mental health encounter."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"What are psychiatry billing services, and why does my practice need them?","acceptedAnswer":{"@type":"Answer","text":"Psychiatry billing services help psychiatric practices manage the complexities of coding, claim submission, and reimbursement for mental health services. These services ensure that claims are filed correctly, referrals are managed, and payment is received on time. By outsourcing your billing needs, you can focus on patient care while professionals handle the financial side of your practice."}},
    {"@type":"Question","name":"What types of insurance do your billing services cover?","acceptedAnswer":{"@type":"Answer","text":"Our services cover a wide range of insurance providers, including private health plans, government payers like Medicare and Medicaid, and marketplace plans. We ensure that your practice is credentialed with various insurers including government plans so that all your patients' coverage is verified and billing is handled correctly across every payer."}},
    {"@type":"Question","name":"What happens if a claim gets denied, and how do you help?","acceptedAnswer":{"@type":"Answer","text":"If a claim is denied, our billing experts quickly identify the cause whether it's due to incorrect coding, missing information, or issues with payer requirements. We follow up with the payer, correct the errors, and resubmit the claim within 72 hours to secure payment. Root-cause analysis also prevents the same denial from recurring."}},
    {"@type":"Question","name":"Can psychiatry billing services reduce the administrative burden on my practice?","acceptedAnswer":{"@type":"Answer","text":"Yes. Psychiatry billing services take over the time-consuming tasks of coding, claim filing, and follow-up, allowing your practice to focus on patient care. By outsourcing billing, you can reduce administrative overhead, minimize human error, and improve operational efficiency leading to better financial outcomes and a less stressed in-house team."}},
    {"@type":"Question","name":"How do psychiatry billing services ensure compliance with industry regulations?","acceptedAnswer":{"@type":"Answer","text":"Our psychiatric billing services stay updated with the latest regulations, including HIPAA, ACA, and other compliance standards, ensuring your practice meets all necessary requirements. We also ensure that your claims follow all payer-specific guidelines reducing the risk of audits, fines, and penalties that can significantly impact practice revenue."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Psychiatric Billing Services","item":"https://medbillingrcm.com/specialties/psychiatric-billing-service/"}
  ]
};

export default function PsychiatricLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
