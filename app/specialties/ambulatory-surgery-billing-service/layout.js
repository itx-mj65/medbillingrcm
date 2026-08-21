import "../../components/specialty/specialty.css";
import "./amb.css";

export const metadata = {
  title:       "Ambulatory Surgery Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Expert ambulatory surgery center billing services by Medbilling RCM. APC/ASC coding, NCCI compliance, device capture & denial management. Contact us.",
  keywords:    "ambulatory surgery center billing, ASC billing services, ambulatory surgery billing, ASC revenue cycle management, APC coding, surgical center billing, same-day surgery billing, outpatient surgery billing, ASC billing company",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/ambulatory-surgery-billing-service/" },
  openGraph: {
    title:       "Ambulatory Surgery Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Expert ASC billing: APC/APC coding, NCCI compliance, device capture, and proactive denial management to grow your surgery center revenue by up to 30%.",
    url:         "https://medbillingrcm.com/specialties/ambulatory-surgery-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Ambulatory Surgery Center Billing Services",
  "name":"Ambulatory Surgery Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/ambulatory-surgery-billing-service/",
  "description":"Medbilling RCM understands that billing for ambulatory surgery centers is quite different and often more challenging than billing for solo healthcare providers. Our revenue cycle management services for ASCs address all aspects of the billing process, from pre-authorization and eligibility verification to claims submission, payment posting, and denial management."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How does ASC billing differ from physician practice billing?","acceptedAnswer":{"@type":"Answer","text":"ASC billing uses facility fee structures under the CMS ASC payment system rather than the physician fee schedule. Claims are submitted on the UB-04 for facility fees while the operating surgeon bills separately on the CMS-1500. ASC payment rates are based on APC (Ambulatory Payment Classification) groupings, and correct coding requires knowledge of device pass-throughs, implant billing, and ASC-specific NCCI edits that differ from the physician setting."}},
    {"@type":"Question","name":"How do you handle device and implant billing for ASC procedures?","acceptedAnswer":{"@type":"Answer","text":"Device and implant billing in the ASC setting requires separate HCPCS codes for the implanted hardware plus the surgical CPT code. We track device costs, identify pass-through eligibility, apply correct HCPCS Level II codes, and ensure all implant documentation meets payer requirements. Missed device billing is one of the most common sources of revenue loss in ASC environments."}},
    {"@type":"Question","name":"How do you manage prior authorizations for ASC procedures?","acceptedAnswer":{"@type":"Answer","text":"We initiate pre-authorization requests before scheduled procedures, track approval timelines, document medical necessity, and follow up with payers proactively. Our team maintains payer-specific authorization requirements for all high-volume ASC procedure categories, preventing same-day cancellations and post-procedure authorization denials."}},
    {"@type":"Question","name":"What compliance standards do your ASC billing services meet?","acceptedAnswer":{"@type":"Answer","text":"Our ASC billing services comply with Medicare Conditions for Coverage (CFCs), HIPAA data security requirements, and CMS ASC Quality Reporting (ASCQR) Program requirements. We monitor CMS and commercial payer policy updates, apply NCCI edits and ASC-specific modifiers (CG, QX, QY, QZ), and conduct internal compliance audits to protect your center from audit risk."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Ambulatory Surgery Billing Services","item":"https://medbillingrcm.com/specialties/ambulatory-surgery-billing-service/"}
  ]
};

export default function AmbulatorySurgeryLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
