import "../../components/specialty/specialty.css";
import "./fqhc.css";

export const metadata = {
  title:       "FQHC Billing Services: Tailored Prospective Payment System Revenue | Medbilling RCM",
  description: "Expert FQHC billing by Medbilling RCM. FQHC prospective payment (PPS), encounter-based billing, sliding fee scale compliance, UDS reporting, and HRSA grant billing for federally qualified health centers.",
  keywords:    "FQHC billing services, federally qualified health center billing, FQHC PPS billing, FQHC prospective payment, FQHC encounter billing, sliding fee scale billing, HRSA billing, UDS reporting, community health center billing, FQHC RCM",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/tailored-fqhc-billing-service/" },
  openGraph: {
    title:       "FQHC Billing Services: Tailored Prospective Payment System Revenue | Medbilling RCM",
    description: "Expert FQHC billing: PPS encounter billing, sliding fee compliance, UDS reporting, and HRSA grant billing for FQHCs.",
    url:         "https://medbillingrcm.com/specialties/tailored-fqhc-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"FQHC Billing Services",
  "name":"Tailored FQHC Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/tailored-fqhc-billing-service/",
  "description":"Medbilling RCM provides tailored FQHC billing services covering Medicare and Medicaid FQHC Prospective Payment System (PPS) encounter billing, sliding fee scale compliance documentation, UDS reporting support, HRSA grant billing, same-day visit billing, behavioral health add-on billing, and encounter-based revenue optimization — ensuring accurate claims and maximum reimbursements for federally qualified health centers and FQHC look-alikes."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How does FQHC Prospective Payment System (PPS) billing work?","acceptedAnswer":{"@type":"Answer","text":"Under the FQHC Prospective Payment System, Medicare and Medicaid reimburse FQHCs a fixed All-Inclusive Rate (AIR) per qualifying encounter rather than per individual service. The rate covers all qualifying FQHC services in a single encounter. For Medicare, the rate is geographically adjusted and updated annually. For Medicaid, each state sets its own FQHC PPS rate. Billing must correctly identify qualifying encounters, document all services provided, and use FQHC-specific revenue codes (0521-0522) and CPT/HCPCS codes that satisfy the encounter definition."}},
    {"@type":"Question","name":"What qualifies as an FQHC encounter for billing purposes?","acceptedAnswer":{"@type":"Answer","text":"A qualifying FQHC encounter requires a face-to-face visit between the patient and a qualifying healthcare professional (physician, NP, PA, CNM, or clinical psychologist/LCSW for mental health), with a medically necessary service documented in the medical record. A single patient visit may include multiple qualifying encounters if the patient receives both a medical and a mental health service on the same day, each of which can be billed as a separate encounter under the mental health add-on billing rules."}},
    {"@type":"Question","name":"How do you handle sliding fee scale compliance in FQHC billing?","acceptedAnswer":{"@type":"Answer","text":"FQHCs are required by HRSA to provide services on a sliding fee scale based on patient income as a percentage of the Federal Poverty Level (FPL). Sliding fee scale discounts are applied to the patient's share of the cost — not to the payer reimbursement. Patients at or below 100% FPL receive free care; patients from 101-200% FPL pay a reduced fee on a graduated scale. We manage sliding fee documentation, ensure fee adjustment audit trails, and maintain compliance with HRSA sliding fee schedule requirements."}},
    {"@type":"Question","name":"How do you bill same-day visits and behavioral health add-ons at FQHCs?","acceptedAnswer":{"@type":"Answer","text":"Same-day visits at FQHCs can qualify for separate encounter billing when both a medical and behavioral health service are provided. Medicare allows a separate mental health add-on encounter (using the G0469 or G0470 codes) when a qualifying mental health professional provides a separately documented mental health service on the same day as a medical encounter. Correct billing requires separate documentation for each encounter, distinct qualifying practitioners for each service type, and proper revenue code assignment. We manage same-day add-on billing to maximize encounter-based revenue."}},
    {"@type":"Question","name":"How do you support UDS reporting for FQHCs?","acceptedAnswer":{"@type":"Answer","text":"The Uniform Data System (UDS) report is required annually by HRSA for all FQHCs. UDS data includes patient demographics, clinical quality measures, and financial performance indicators derived from billing and clinical records. We maintain billing data in formats that support UDS extraction, verify encounter counts by patient type, and ensure billing data aligns with clinical documentation for accurate UDS submission. We support your UDS reporting team with data validation, encounter reconciliation, and financial reporting requirements."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Tailored FQHC Billing Services","item":"https://medbillingrcm.com/specialties/tailored-fqhc-billing-service/"}
  ]
};
export default function FQHCLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
