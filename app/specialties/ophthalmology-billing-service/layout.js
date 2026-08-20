import "../../components/specialty/specialty.css";
import "./ophtho.css";

export const metadata = {
  title:       "Ophthalmology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Irvine, CA: Medbilling RCM offers expert ophthalmology billing. Maximize reimbursements with specialty coding & RCM solutions. Call us!",
  keywords:    "ophthalmology billing services, eye care billing, optometry billing, retina billing, glaucoma billing, ophthalmology RCM, medical billing for ophthalmologists, eye surgery billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/ophthalmology-billing-service/" },
  openGraph: {
    title:       "Ophthalmology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Boost ophthalmology revenue with precise coding, faster claims, and expert denial management solutions.",
    url:         "https://medbillingrcm.com/specialties/ophthalmology-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Ophthalmology Billing Services",
  "name":"Ophthalmology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/ophthalmology-billing-service/",
  "description":"Medical billing for ophthalmology is complex due to payer-specific guidelines, frequent coding changes, and strict documentation requirements. MedBilling RCM utilizes the latest CMS regulations and CPT, ICD-10, and HCPCS coding updates to ensure accurate claim submissions and faster reimbursements."
};

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you differentiate between medical and vision insurance billing for ophthalmology?","acceptedAnswer":{"@type":"Answer","text":"We assess each encounter to determine whether the condition is medical (e.g., cataracts, glaucoma, diabetic retinopathy) or routine (refractions, exams). Medical conditions are billed to medical insurance with appropriate ICD-10 codes, while vision-specific services are routed to vision plans."}},
    {"@type":"Question","name":"How do you handle bilateral procedure billing to avoid payment reductions?","acceptedAnswer":{"@type":"Answer","text":"We apply modifier -50 for bilateral procedures, or -LT/-RT for unilateral services, following CMS and payer-specific rules for each situation. Our coders understand which modifiers trigger reductions vs. full payment and structure claims accordingly to maximize reimbursement."}},
    {"@type":"Question","name":"How do you manage prior authorizations for intravitreal injections?","acceptedAnswer":{"@type":"Answer","text":"We initiate authorization requests before treatment, track approval timelines, document medical necessity using clinical records, and follow up proactively with payers to ensure no injection is delayed or denied due to authorization issues."}},
    {"@type":"Question","name":"What ophthalmology sub-specialties do you cover?","acceptedAnswer":{"@type":"Answer","text":"We cover all ophthalmology sub-specialties including cataract and refractive surgery, retina, glaucoma, cornea, oculoplastics, pediatric ophthalmology, and neuro-ophthalmology with dedicated billing expertise for each."}}
  ]
};

const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Ophthalmology Billing Services","item":"https://medbillingrcm.com/specialties/ophthalmology-billing-service/"}
  ]
};

export default function OphthalmologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
