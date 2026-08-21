import "../../components/specialty/specialty.css";
import "./pt.css";

export const metadata = {
  title:       "Physical Therapy Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Expert physical therapy billing services by Medbilling RCM. Accurate CPT coding for 97110, 97140, 97530, 8-minute rule compliance, KX modifier, and Medicare threshold management. Reduce denials.",
  keywords:    "physical therapy billing services, PT billing services, physical therapy medical billing, 97110 billing, 97140 billing, 8-minute rule billing, physical therapy RCM, therapy billing company, KX modifier billing, Medicare therapy threshold",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/physical-therapy-billing-services/" },
  openGraph: {
    title:       "Physical Therapy Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Expert PT billing: accurate CPT coding for 97110, 97140, 97530, 8-minute rule, KX modifier, and Medicare threshold compliance. Reduce denials.",
    url:         "https://medbillingrcm.com/specialties/physical-therapy-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Physical Therapy Billing Services",
  "name":"Physical Therapy Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/physical-therapy-billing-services/",
  "description":"Medbilling RCM provides specialized physical therapy billing services covering timed CPT code unit calculation (97110, 97112, 97116, 97140, 97530), the 8-minute rule, Medicare KX modifier, therapy cap management, and NCCI compliance — ensuring accurate claims and maximum reimbursements for physical therapy practices and outpatient rehab facilities."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you apply the 8-minute rule in physical therapy billing?","acceptedAnswer":{"@type":"Answer","text":"The 8-minute rule determines how many units of a timed CPT code can be billed. For a timed service to be billable, it must be performed for at least 8 minutes. Each unit represents 15 minutes of direct contact. For multiple timed services in a single session, total time is combined and units are calculated based on the aggregate — using standard rounding rules (8-22 minutes = 1 unit, 23-37 minutes = 2 units, etc.). We apply the 8-minute rule correctly on every PT claim to prevent under-billing and over-billing compliance issues."}},
    {"@type":"Question","name":"When is the KX modifier required in physical therapy billing?","acceptedAnswer":{"@type":"Answer","text":"The KX modifier is required on Medicare claims when billed charges exceed the Medicare Therapy Threshold (formerly known as the therapy cap). By appending KX to the claim, the provider attests that the services are medically necessary and that documentation in the patient's medical record supports the continued need for skilled therapy beyond the threshold amount. Without KX, Medicare will automatically deny any claims above the threshold. We track each patient's cumulative therapy charges and apply KX on every qualifying claim."}},
    {"@type":"Question","name":"What is the difference between CPT 97110 and CPT 97530?","acceptedAnswer":{"@type":"Answer","text":"CPT 97110 (therapeutic exercise) is used for exercises targeting impairment-level goals — improving strength, endurance, range of motion, and flexibility. CPT 97530 (therapeutic activities) is used for functional movement training where the goal is task performance — activities like sit-to-stand, lifting techniques, and functional mobility drills. Both are timed codes billed in 15-minute units. Billing 97530 when 97110 is the correct code, or vice versa, triggers claim denials and audit risk. We review clinical documentation before selecting between these two commonly confused codes."}},
    {"@type":"Question","name":"How do you bill electrical stimulation for Medicare patients?","acceptedAnswer":{"@type":"Answer","text":"Medicare does not recognize CPT 97014 (unattended electrical stimulation) for reimbursement — instead Medicare uses HCPCS code G0283. Billing 97014 on a Medicare claim generates an automatic denial. We maintain separate billing rules for Medicare vs. commercial payers and map G0283 on all Medicare electrical stimulation claims while continuing to use 97014 for non-Medicare payers."}},
    {"@type":"Question","name":"How do you handle therapy modifier GP in physical therapy billing?","acceptedAnswer":{"@type":"Answer","text":"Modifier GP is required on all Medicare claims to indicate that services were performed under a physical therapy plan of care. Without GP, Medicare cannot identify the service as PT and will deny the claim. For practices that also provide occupational therapy (GO modifier) or speech therapy (GN modifier), we ensure the correct discipline modifier is applied to every claim based on the supervising therapist's credential and the patient's plan of care."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Physical Therapy Billing Services","item":"https://medbillingrcm.com/specialties/physical-therapy-billing-services/"}
  ]
};
export default function PTLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
