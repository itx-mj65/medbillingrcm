import "../../components/specialty/specialty.css";
import "./immuno.css";

export const metadata = {
  title:       "Immunology Billing Services: Allergy & Immunotherapy Revenue | Medbilling RCM",
  description: "Expert immunology billing services by Medbilling RCM. Accurate CPT/HCPCS coding for allergy testing, immunotherapy, biologic infusions & J-codes. Reduce denials & accelerate reimbursements.",
  keywords:    "immunology billing services, allergy billing services, allergy and immunology billing, immunotherapy billing, biologic infusion billing, IVIG billing, allergy testing billing, J-code billing immunology, immunology RCM, allergy coding services",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/immunology-billing-services/" },
  openGraph: {
    title:       "Immunology Billing Services: Allergy & Immunotherapy Revenue | Medbilling RCM",
    description: "Expert immunology billing: accurate CPT/HCPCS coding for allergy testing, immunotherapy, biologics & J-codes — reduce denials and accelerate reimbursements.",
    url:         "https://medbillingrcm.com/specialties/immunology-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Immunology Billing Services",
  "name":"Immunology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/immunology-billing-services/",
  "description":"Medbilling RCM provides specialized immunology billing services covering allergy testing (CPT 95004–95078), allergen immunotherapy administration (CPT 95115–95199), biologic infusion therapy (HCPCS J-codes), IVIG billing, and prior authorization management — ensuring accurate claims and maximum reimbursements for allergy and immunology practices."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you bill allergy testing and immunotherapy on the same date?","acceptedAnswer":{"@type":"Answer","text":"CPT codes for allergy testing (95004–95078) and immunotherapy (95115–95199) are generally not reported on the same date of service unless the physician provides allergy immunotherapy and testing for additional allergens on the same day. Allergen potency testing prior to immunotherapy administration is an inherent component of immunotherapy and is not separately reportable. We verify CCI edits and payer-specific rules before billing both services on the same date to prevent bundling denials."}},
    {"@type":"Question","name":"How do you handle J-code billing for biologic infusions (dupilumab, omalizumab, mepolizumab)?","acceptedAnswer":{"@type":"Answer","text":"Biologic drugs administered in-office require HCPCS J-codes for the drug (J2357 for omalizumab, J3385 for dupilumab) plus infusion administration CPT codes (96365–96368 for IV infusion, 96401 for subcutaneous injection). Prior authorization is required for most biologics with clinical documentation of failed step therapy. We manage the complete biologic billing cycle — prior authorization, J-code selection, administration coding, and copay assistance program coordination."}},
    {"@type":"Question","name":"How do you apply Modifier 25 in allergy and immunology billing?","acceptedAnswer":{"@type":"Answer","text":"Modifier 25 is required when a significant, separately identifiable E/M service is performed on the same date as allergy testing or immunotherapy injection. Without Modifier 25, payers bundle the E/M into the procedure fee. We apply Modifier 25 only when documentation supports a distinct, separately identifiable evaluation — protecting compliance while capturing earned revenue on every qualifying encounter."}},
    {"@type":"Question","name":"How do you manage prior authorization for immunotherapy and biologic treatments?","acceptedAnswer":{"@type":"Answer","text":"Allergen immunotherapy plans require documentation of positive skin test results, failed avoidance measures, and physician-documented treatment rationale. Biologic therapies require failed step therapy documentation (typically failed antihistamines and inhaled corticosteroids), diagnostic test results, and severity scoring. We submit complete authorization packages, track renewal timelines, manage peer-to-peer coordination, and maintain payer-specific authorization requirements for all immunotherapy and biologic treatments."}},
    {"@type":"Question","name":"What ICD-10 codes do you use for allergy and immunology billing?","acceptedAnswer":{"@type":"Answer","text":"Common immunology ICD-10 codes include J30.1 (allergic rhinitis due to pollen), J30.9 (unspecified allergic rhinitis), J45.909 (unspecified asthma uncomplicated), L20.9 (atopic dermatitis unspecified), D83.9 (common variable immunodeficiency), L50.0 (allergic urticaria), and T78.40XA (allergy, unspecified, initial encounter). We select the most specific ICD-10 code for every encounter and link testing and treatment codes to diagnoses that satisfy payer medical necessity criteria."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Immunology Billing Services","item":"https://medbillingrcm.com/specialties/immunology-billing-services/"}
  ]
};
export default function ImmunologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
