import "../../components/specialty/specialty.css";
import "./pain.css";

export const metadata = {
  title:       "Pain Management Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Expert pain management billing services by Medbilling RCM. Accurate CPT coding for epidurals, nerve blocks, RFA, SCS, fluoroscopy & drug testing. Reduce denials & accelerate reimbursements.",
  keywords:    "pain management billing services, pain management medical billing, epidural billing, nerve block billing, RFA billing, spinal cord stimulator billing, fluoroscopy billing, drug testing billing, interventional pain billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/pain-management-billing-services/" },
  openGraph: {
    title:       "Pain Management Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Expert pain management billing: epidurals, nerve blocks, RFA, SCS, fluoroscopy capture & drug testing — reduce denials and accelerate reimbursements.",
    url:         "https://medbillingrcm.com/specialties/pain-management-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Pain Management Billing Services",
  "name":"Pain Management Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/pain-management-billing-services/",
  "description":"Medbilling RCM provides specialized pain management billing services covering interventional procedure coding, fluoroscopic guidance capture (CPT 77003), radiofrequency ablation billing, urine drug testing codes, spinal cord stimulator billing, and prior authorization management — ensuring accurate claims and maximum reimbursements for pain management practices."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you bill fluoroscopic guidance (CPT 77003) for pain management procedures?","acceptedAnswer":{"@type":"Answer","text":"CPT 77003 (fluoroscopic guidance for needle placement) is separately billable when performed and documented during spinal injection procedures. We verify that fluoroscopy is documented in the procedure note with imaging confirmation and bill it separately from the injection code. Critical compliance point: CPT 77003 must not be billed alongside CPT 62321, 62323, or transforaminal ESI codes (64479–64484) due to NCCI bundling edits — bundling errors on fluoroscopy are among the most common pain management billing mistakes."}},
    {"@type":"Question","name":"How do you code presumptive vs. definitive urine drug testing in pain management?","acceptedAnswer":{"@type":"Answer","text":"Presumptive drug testing (G0477–G0483, CPT 80300–80304) screens for drug classes and is point-of-care or immunoassay based. Definitive testing (CPT 80320–80377) provides exact drug identification and quantification requiring lab analysis. These are among the most frequently audited billing categories in pain management. We apply the correct code set based on the testing method performed, maintain LCD compliance for your DME MAC jurisdiction, and ensure documentation supports the medical necessity for the frequency of testing ordered."}},
    {"@type":"Question","name":"How do you manage prior authorizations for interventional pain procedures?","acceptedAnswer":{"@type":"Answer","text":"We initiate prior authorization requests before scheduling epidural steroid injections, radiofrequency ablation, spinal cord stimulator trials, and other high-cost interventional procedures. Our team submits clinical documentation including imaging, failed conservative treatment records, and functional assessment scores. We track authorization timelines, follow up proactively with payers, and maintain payer-specific authorization requirements to prevent procedure-day authorization failures."}},
    {"@type":"Question","name":"How do you apply modifier 25 in pain management billing?","acceptedAnswer":{"@type":"Answer","text":"Modifier 25 is required when a significant, separately identifiable E/M service is performed on the same date as an interventional pain procedure. Without modifier 25, payers bundle the E/M into the procedure fee. We apply modifier 25 on every qualifying same-day E/M encounter, monitor capture rates per provider, and prevent the systematic revenue loss that occurs when modifier 25 is consistently omitted."}},
    {"@type":"Question","name":"How do you handle radiofrequency ablation (RFA) billing and prior authorization?","acceptedAnswer":{"@type":"Answer","text":"RFA billing requires accurate CPT code selection based on nerve location and technique — facet joint RFA (CPT 64633–64636) vs. peripheral nerve RFA — with correct documentation of medial branch blocks and pain relief criteria. Prior authorization for RFA typically requires documentation of at least two diagnostic medial branch blocks with a specific percentage of pain relief. We manage RFA authorization requests, track pain relief documentation requirements, and ensure all medial branch block billing is compliant."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Pain Management Billing Services","item":"https://medbillingrcm.com/specialties/pain-management-billing-services/"}
  ]
};
export default function PainManagementLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
