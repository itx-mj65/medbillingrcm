import "../../components/specialty/specialty.css";
import "./gyn.css";

export const metadata = {
  title:       "Gynecology Billing Services: Surgical & E/M Revenue | Medbilling RCM",
  description: "Expert gynecology billing by Medbilling RCM. Hysteroscopy, laparoscopy, colposcopy, E/M coding, global period management, and preventive care billing for OB-GYN and gynecology practices.",
  keywords:    "gynecology billing services, gynecology medical billing, hysteroscopy billing, laparoscopy billing, colposcopy billing, OB-GYN billing, gynecological surgery billing, gynecology RCM, global period gynecology, preventive gynecology billing",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/gynecology-billing-services/" },
  openGraph: {
    title:       "Gynecology Billing Services: Surgical & E/M Revenue | Medbilling RCM",
    description: "Expert gynecology billing: hysteroscopy, laparoscopy, colposcopy, E/M coding, global period management, and preventive care.",
    url:         "https://medbillingrcm.com/specialties/gynecology-billing-services/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Gynecology Billing Services",
  "name":"Gynecology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/gynecology-billing-services/",
  "description":"Medbilling RCM provides specialized gynecology billing services covering hysteroscopy CPT coding, laparoscopic gynecological surgery, colposcopy billing, endometrial ablation, IUD insertion and removal, preventive gynecology E/M coding, global period management, and prior authorization for gynecological procedures — ensuring accurate claims and maximum reimbursements for gynecology and OB-GYN practices."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you handle gynecological surgical procedure coding?","acceptedAnswer":{"@type":"Answer","text":"Gynecological surgical procedures require correct selection between diagnostic and operative approaches. For example, diagnostic hysteroscopy (CPT 58555) has a different code from operative hysteroscopy with biopsy (CPT 58558), polypectomy (CPT 58558), or lysis of intrauterine adhesions (CPT 58559). When a diagnostic procedure is converted to an operative procedure during the same session, only the operative code is billed. We review every operative report to select the correct approach-specific code."}},
    {"@type":"Question","name":"How do you manage the global period for gynecological surgeries?","acceptedAnswer":{"@type":"Answer","text":"Most gynecological surgical procedures carry a 90-day global period during which post-operative visits are included in the surgical fee and cannot be billed separately. Unrelated E/M visits during the global period require modifier 24; an unrelated surgical procedure requires modifier 79; staged procedures use modifier 58. We track global period start and end dates for every gynecological surgery and apply correct modifiers on all encounters during the global period."}},
    {"@type":"Question","name":"How do you bill preventive gynecology visits and Pap smears?","acceptedAnswer":{"@type":"Answer","text":"Preventive gynecology visits use age-appropriate E/M codes (99381–99397 for new/established patients). Pap smear collection is billed using CPT 99000 (specimen handling) or as part of the preventive visit code depending on payer rules. Cervical cytology interpretation uses separate lab codes (88142–88155). When a significant problem is addressed during a preventive visit, modifier 25 applies to the E/M for the problem-focused service. We navigate payer-specific preventive billing rules on every gynecology claim."}},
    {"@type":"Question","name":"How do you handle IUD insertion and removal billing?","acceptedAnswer":{"@type":"Answer","text":"IUD insertion is billed using CPT 58300 for insertion plus a separate HCPCS code for the device itself (J7298 for Mirena, J7301 for Kyleena, J7302 for Liletta, J7304 for Paragard). IUD removal uses CPT 58301 (removal of IUD) — with a separate code for removal and reinsertion (CPT 58300) on the same date if applicable. The device code requires prior authorization from most payers. We manage the complete IUD billing cycle including device code, insertion code, and prior authorization for contraceptive coverage."}},
    {"@type":"Question","name":"How do you code laparoscopic vs. open gynecological procedures?","acceptedAnswer":{"@type":"Answer","text":"Laparoscopic and open approaches for the same gynecological procedure have distinct CPT codes — laparoscopic hysterectomy (58541–58544) vs. abdominal hysterectomy (58150–58240) vs. vaginal hysterectomy (58260–58294). The approach must match the operative report. When a laparoscopic procedure is converted to open during the same session, modifier 22 or the open procedure code applies depending on circumstances. We verify the documented surgical approach in every operative report before code selection."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Gynecology Billing Services","item":"https://medbillingrcm.com/specialties/gynecology-billing-services/"}
  ]
};
export default function GynecologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
