import "../../components/specialty/specialty.css";
import "./dme.css";

export const metadata = {
  title:       "DME Billing Services: DMEPOS Revenue Cycle Management | Medbilling RCM",
  description: "Expert DME billing services by Medbilling RCM. HCPCS Level II coding, CMN documentation, LCD compliance, prior auth & denial management for DMEPOS suppliers.",
  keywords:    "DME billing services, durable medical equipment billing, DMEPOS billing, HCPCS Level II coding, DME revenue cycle management, medical equipment billing, HME billing, DME billing company, DME MAC billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/dme-billing-services/" },
  openGraph: {
    title:       "DME Billing Services: DMEPOS Revenue Cycle Management | Medbilling RCM",
    description: "Expert DMEPOS billing: HCPCS coding, CMN documentation, LCD compliance, prior auth & denial management. Maximize DME supplier revenue.",
    url:         "https://medbillingrcm.com/specialties/dme-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"DME Billing Services",
  "name":"DME Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/dme-billing-services/",
  "description":"Medbilling RCM provides specialized DME billing services for DMEPOS suppliers covering HCPCS Level II coding, CMN documentation, LCD compliance, prior authorization, capped rental billing, and denial management — ensuring accurate claims and maximum reimbursements across Medicare, Medicaid, and commercial payers."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"What HCPCS modifiers are required for DME billing?","acceptedAnswer":{"@type":"Answer","text":"DME billing requires specific modifiers that tell payers the rental or purchase status of equipment. Key modifiers include RR (rental), NU (new purchase), UE (used equipment), KX (medical necessity documented), KH/KI/KJ (first/second/third month of capped rental), and MS (maintenance/servicing). Incorrect modifier use is one of the most common causes of DME claim denials."}},
    {"@type":"Question","name":"What documentation is required for a payable DME claim?","acceptedAnswer":{"@type":"Answer","text":"A payable DME claim requires a Standard Written Order (SWO) signed by the treating practitioner, documented medical necessity in the patient's chart, and a Proof of Delivery (POD) confirming the patient received the equipment. Higher-cost items like oxygen therapy, power mobility devices, and hospital beds also require a face-to-face encounter note and in many cases a Written Order Prior to Delivery (WOPD) from the prescribing physician."}},
    {"@type":"Question","name":"How do you handle capped rental billing for DME?","acceptedAnswer":{"@type":"Answer","text":"Capped rental items (like hospital beds and standard wheelchairs) are billed monthly with month-specific modifiers (KH for month 1, KI for months 2-3, KJ for months 4-13) and switch to maintenance after the cap period. We track each rental unit's billing phase, apply the correct modifier for every monthly claim, and transition items to maintenance and/or ownership correctly to prevent overpayments and recoupment."}},
    {"@type":"Question","name":"How do you manage DME prior authorizations for high-cost equipment?","acceptedAnswer":{"@type":"Answer","text":"Power mobility devices, complex rehabilitation wheelchairs, and other high-cost DMEPOS items require prior authorization under the CMS DMEPOS Prior Authorization program. We submit authorization requests with full medical necessity documentation, track approval timelines, and coordinate with the prescribing physician to obtain required face-to-face examination notes before delivery."}},
    {"@type":"Question","name":"What is LCD compliance and why does it matter for DME billing?","acceptedAnswer":{"@type":"Answer","text":"Local Coverage Determinations (LCDs) are Medicare Administrative Contractor (MAC) policies that define coverage criteria for specific DMEPOS items in each jurisdiction. Each DME MAC (A2-3, A4-B) publishes LCDs specifying which ICD-10 diagnosis codes qualify each equipment type for coverage. Filing a claim without a covered diagnosis code linked to the correct HCPCS item is an immediate denial. We verify LCD compliance before every claim submission."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"DME Billing Services","item":"https://medbillingrcm.com/specialties/dme-billing-services/"}
  ]
};

export default function DMELayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
