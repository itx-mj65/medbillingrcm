import "../../components/specialty/specialty.css";
import "./rad.css";

export const metadata = {
  title:       "Radiology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Irvine, CA radiology billing: Medbilling RCM reduces denials & maximizes revenue with expert coding. Get faster claims. Contact us!",
  keywords:    "radiology medical billing, radiology billing services, radiology RCM, medical billing for radiologists, radiology practice billing, radiology revenue cycle management, radiology claim denial management, radiology coding services",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/radiology-billing-service/" },
  openGraph: {
    title:       "Radiology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Radiology medical billing services specialize in coding, submitting, and managing insurance claims for radiology practices ensuring accurate documentation, compliance, and faster reimbursements.",
    url:         "https://medbillingrcm.com/specialties/radiology-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Radiology Billing Services",
  "name":"Radiology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/radiology-billing-service/",
  "description":"Radiology medical billing services specialize in coding, submitting, and managing insurance claims for radiology practices ensuring accurate documentation, compliance, and faster reimbursements."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you handle billing for the technical, professional, and global components?","acceptedAnswer":{"@type":"Answer","text":"We accurately bill for all three components of radiology services technical, professional, and global ensuring proper modifier usage and payer-specific billing rules are applied for each scenario."}},
    {"@type":"Question","name":"How does MPPR (Multiple Procedure Payment Reduction) affect radiology billing?","acceptedAnswer":{"@type":"Answer","text":"MPPR rules reduce reimbursement for multiple imaging procedures performed on the same patient on the same day. Our software automatically identifies and applies MPPR rules to ensure accurate claim submission."}},
    {"@type":"Question","name":"Can you integrate with our PACS and RIS systems?","acceptedAnswer":{"@type":"Answer","text":"Yes. Our radiology EHR/EMR/PMS software integrates with PACS for image storage and retrieval and includes a built-in Radiology Information System (RIS) for effective imaging management."}},
    {"@type":"Question","name":"How do you manage prior authorization for imaging procedures?","acceptedAnswer":{"@type":"Answer","text":"We handle pre-authorization for MRIs, CT scans, and other imaging procedures with efficient workflows, proactive insurer follow-ups, and documentation management to prevent authorization-related denials."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Radiology Billing Services","item":"https://medbillingrcm.com/specialties/radiology-billing-service/"}
  ]
};

export default function RadiologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
