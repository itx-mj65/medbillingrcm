import "../../components/specialty/specialty.css";
import "./path.css";

export const metadata = {
  title:       "Pathology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Expert pathology billing services by Medbilling RCM. Accurate CPT coding for surgical pathology, cytopathology, immunohistochemistry, molecular pathology, and 26/TC modifier compliance.",
  keywords:    "pathology billing services, surgical pathology billing, cytopathology billing, immunohistochemistry billing, molecular pathology billing, pathology RCM, technical component billing, professional component billing, CPT 88305 billing, pathology coding services",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/pathology-billing-services/" },
  openGraph: {
    title:       "Pathology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Expert pathology billing: CPT coding for surgical pathology, cytopathology, IHC, molecular pathology, and 26/TC modifier compliance.",
    url:         "https://medbillingrcm.com/specialties/pathology-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Pathology Billing Services",
  "name":"Pathology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/pathology-billing-services/",
  "description":"Medbilling RCM provides specialized pathology billing services covering surgical pathology CPT codes (88300–88309), cytopathology (88104–88160), immunohistochemistry (88342–88344), molecular pathology (81161–81408), technical and professional component split billing (modifier 26/TC), and FISH testing — ensuring accurate claims and maximum reimbursements for pathology practices and hospital labs."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you select the correct surgical pathology CPT code (88300–88309)?","acceptedAnswer":{"@type":"Answer","text":"Surgical pathology CPT codes 88300–88309 are selected based on the complexity of the pathologist's examination, not the specimen type. CPT 88300 covers gross examination only; 88305 covers most routine tissue examinations; 88307 is for more complex specimens; and 88309 is for the most complex cases. We review the pathologist's report to confirm examination complexity and select the appropriate level code, preventing downcoding from 88305 to 88300 and upcoding from 88305 to 88307 without supporting documentation."}},
    {"@type":"Question","name":"How do you handle technical vs. professional component billing in pathology?","acceptedAnswer":{"@type":"Answer","text":"When pathology services are split between a hospital or independent lab (technical component, modifier TC) and an independent pathologist (professional component, modifier 26), both must be billed separately. The pathologist bills with modifier 26 for the professional interpretation; the facility bills with modifier TC for the technical processing. When both are performed by the same entity, the global code (no modifier) is billed. We determine the correct billing structure based on employment arrangement and facility relationship before every claim."}},
    {"@type":"Question","name":"How do you bill immunohistochemistry (IHC) in pathology?","acceptedAnswer":{"@type":"Answer","text":"Immunohistochemistry is billed using CPT 88342 for the first antibody and 88344 for each additional antibody per specimen. Each antibody used must be documented separately. We verify that the number of antibodies billed matches the pathology report, ensure IHC codes are linked to supporting diagnoses, and prevent overbilling by confirming antibody count against staining records on every IHC claim."}},
    {"@type":"Question","name":"How do you handle molecular pathology billing (CPT 81161–81408)?","acceptedAnswer":{"@type":"Answer","text":"Molecular pathology CPT codes (81161–81408) are tiered by technical complexity of the test methodology. Code selection is determined by the gene analyzed and the type of molecular analysis performed. Many molecular tests require prior authorization with specific diagnosis codes. We maintain current molecular pathology code updates, verify prior auth requirements by payer, and ensure correct genetic marker codes are used on every molecular pathology claim."}},
    {"@type":"Question","name":"How do you manage billing for FISH testing in pathology?","acceptedAnswer":{"@type":"Answer","text":"Fluorescence in situ hybridization (FISH) testing uses CPT 88365 (single probe) and 88366 (each additional probe). FISH is commonly used for cancer diagnosis and chromosomal analysis. Documentation must identify the specific probe(s) used, the specimen analyzed, and the clinical indication. Prior authorization is frequently required for FISH testing, particularly in oncology contexts. We verify probe count, document all probes used, and manage prior authorization for FISH tests on every applicable claim."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Pathology Billing Services","item":"https://medbillingrcm.com/specialties/pathology-billing-services/"}
  ]
};
export default function PathologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
