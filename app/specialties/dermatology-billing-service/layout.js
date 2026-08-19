import "../../components/specialty/specialty.css";
import "./derm.css";

export const metadata = {
  title:       "Dermatology Billing Services for Optimized Revenue | Medbilling RCM",
  description: "Irvine, CA dermatology billing by Medbilling RCM. Boost revenue, reduce denials with expert coding. Contact us for optimized practice management.",
  keywords:    "dermatology medical billing, dermatology billing services, dermatology revenue cycle management, medical billing for dermatologists, dermatology practice billing, dermatology coding services, dermatology claim submission, dermatology reimbursement services",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/dermatology-billing-service/" },
  openGraph: {
    title:       "Dermatology Billing Services for Optimized Revenue | Medbilling RCM",
    description: "Boost dermatology revenue! Improve coding, cut denials, and increase reimbursements with expert billing.",
    url:         "https://medbillingrcm.com/specialties/dermatology-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Dermatology Billing Services",
  "name":"Dermatology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/dermatology-billing-service/",
  "description":"Dermatology Medical Billing Services optimize billing for dermatology practices ensuring accurate claims, faster reimbursements, and streamlined revenue management so providers can focus on patient care."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you differentiate between cosmetic and medically necessary procedures for billing?","acceptedAnswer":{"@type":"Answer","text":"Our certified coders apply clinical documentation guidelines to distinguish between cosmetic and medically necessary dermatology procedures. We ensure proper ICD-10 coding with appropriate medical necessity documentation to maximize reimbursable claims."}},
    {"@type":"Question","name":"How do you handle billing for biologic therapies like Dupixent or Humira?","acceptedAnswer":{"@type":"Answer","text":"Biologic therapies require specific J-codes, NDC numbers, and prior authorization management. We handle the complete biologic billing cycle including authorization, J-code billing, infusion coding, and appeals if denied."}},
    {"@type":"Question","name":"What is your approach to Mohs surgery billing?","acceptedAnswer":{"@type":"Answer","text":"Mohs surgery billing requires precise CPT coding for each surgical stage, tissue examination, and repair. Our specialists track stage counts, tissue specimens, and repair complexity to ensure accurate, compliant Mohs billing."}},
    {"@type":"Question","name":"How do you manage prior authorizations for dermatology procedures?","acceptedAnswer":{"@type":"Answer","text":"We manage authorizations for biologic therapies, laser procedures, and other treatments requiring pre-approval. Our team tracks authorization timelines, documents medical necessity, and follows up with payers to prevent unnecessary delays."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Dermatology Billing Services","item":"https://medbillingrcm.com/specialties/dermatology-billing-service/"}
  ]
};

export default function DermatologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
