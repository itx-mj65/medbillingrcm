import "../../components/specialty/specialty.css";
import "./mol.css";

export const metadata = {
  title:       "Molecular Lab Billing Services: NGS, PCR & Genomic Testing Revenue | Medbilling RCM",
  description: "Expert molecular lab billing by Medbilling RCM. NGS, PCR, and genomic testing billing with PAMA compliance, Medicare LCD mapping, prior auth, and Tier 1/Tier 2 code selection.",
  keywords:    "molecular lab billing services, NGS billing, PCR billing, genomic testing billing, molecular diagnostics billing, PAMA molecular billing, Tier 1 molecular codes, Tier 2 molecular billing, molecular pathology billing, hereditary gene testing billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/molecular-lab-biliing-services/" },
  openGraph: {
    title:       "Molecular Lab Billing Services: NGS, PCR & Genomic Testing Revenue | Medbilling RCM",
    description: "Expert molecular lab billing: NGS, PCR, genomic testing, PAMA compliance, LCD mapping, and Tier 1/Tier 2 code selection.",
    url:         "https://medbillingrcm.com/specialties/molecular-lab-biliing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Molecular Lab Billing Services",
  "name":"Molecular Lab Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/molecular-lab-biliing-services/",
  "description":"Medbilling RCM provides specialized molecular laboratory billing services covering NGS panel billing, PCR testing, Tier 1 and Tier 2 molecular pathology codes (81161–81408), PAMA-compliant CLFS billing, Medicare LCD coverage mapping, prior authorization management for high-cost genomic tests, and Multianalyte Assays with Algorithmic Analyses (MAAA) billing — ensuring accurate claims and maximum reimbursements for molecular labs and genomics testing facilities."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you select between Tier 1 and Tier 2 molecular pathology codes?","acceptedAnswer":{"@type":"Answer","text":"Tier 1 codes (81161–81383) are assigned to specific genes and specific analytical methods — each code identifies exactly which gene is being analyzed and by what molecular technique. Tier 2 codes (81400–81408) are used for genes not specifically listed in Tier 1, assigned based on methodology complexity level rather than specific gene identity. When a gene has both a Tier 1 code and could be billed as Tier 2, the Tier 1 code must be used. We maintain current CPT code mappings for every gene test performed and verify Tier assignment before every molecular pathology claim."}},
    {"@type":"Question","name":"How do you handle NGS panel billing?","acceptedAnswer":{"@type":"Answer","text":"Next Generation Sequencing (NGS) panels use either specific panel CPT codes (81445–81455 for solid tumor, 81450–81455 for hematolymphoid and other solid tumors) or individual gene codes when panels lack a specific CPT code. NGS panel billing requires documentation of the clinical indication, genes included in the panel, and reporting format. Prior authorization is required by most payers for NGS panels, particularly for hereditary cancer testing. We manage NGS panel code selection, prior authorization, and medical necessity documentation for every panel test."}},
    {"@type":"Question","name":"What are Medicare LCD requirements for molecular diagnostic testing?","acceptedAnswer":{"@type":"Answer","text":"Medicare Administrative Contractors (MACs) publish Local Coverage Determinations (LCDs) specifying which molecular tests are covered, which ICD-10 diagnosis codes qualify for coverage, and documentation requirements. Non-covered tests require an Advance Beneficiary Notice (ABN) before testing. We map every molecular test to the applicable LCD for the patient's MAC jurisdiction, verify covered diagnosis codes before ordering, and issue ABNs for tests lacking Medicare LCD coverage."}},
    {"@type":"Question","name":"How do you manage prior authorizations for high-cost genomic tests?","acceptedAnswer":{"@type":"Answer","text":"High-cost genomic tests — including comprehensive NGS panels, whole exome sequencing (WES), and pharmacogenomic panels — typically require prior authorization from commercial payers. Authorization requests require clinical documentation including diagnosis, prior treatment history, family history for hereditary panels, and medical necessity justification. We manage the complete prior authorization workflow, track approval timelines, and coordinate peer-to-peer reviews when initial authorizations are denied."}},
    {"@type":"Question","name":"How do you bill Multianalyte Assays with Algorithmic Analyses (MAAAs)?","acceptedAnswer":{"@type":"Answer","text":"MAAAs are proprietary multi-analyte tests that use algorithms to generate clinical results. They are billed using unique CPT or PLA (Proprietary Laboratory Analyses) codes — each MAAA has its own unique identifying code. MAAAs cannot be billed using standard molecular pathology codes. We maintain current MAAA and PLA code lists, verify that billed codes match the actual proprietary test performed, and manage prior authorization for high-cost MAAAs that require coverage determination before testing."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Molecular Lab Billing Services","item":"https://medbillingrcm.com/specialties/molecular-lab-biliing-services/"}
  ]
};
export default function MolecularLabLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
