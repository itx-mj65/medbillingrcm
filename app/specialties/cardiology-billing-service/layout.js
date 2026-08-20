import "../../components/specialty/specialty.css";
import "./cardio.css";

export const metadata = {
  title:       "Cardiology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
  description: "Cardiology billing services in Irvine, CA by Medbilling RCM. Maximize revenue, reduce denials with expert coding & faster payments. Contact us.",
  keywords:    "cardiology billing services, cardiology RCM, medical billing for cardiologists, heart center billing, cardiovascular billing, cardiology practice billing, revenue cycle management cardiology, cardiology claim submission",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/cardiology-billing-service/" },
  openGraph: {
    title:       "Cardiology Billing Services: Maximize Revenue & Reduce Denials | Medbilling RCM",
    description: "Boost cardiology revenue with accurate coding, fewer claim denials, and faster payments for your practice.",
    url:         "https://medbillingrcm.com/specialties/cardiology-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Cardiology Billing Services",
  "name":"Cardiology Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/cardiology-billing-service/",
  "description":"Reliable cardiology billing services built on proven cardiovascular RCM expertise. Our AAPC-certified coders are well-versed in ICD-10, CPT, and HCPCS coding and adhere strictly to CMS, MACRA, and AMA guidelines, serving hospitals and physician practices across all 50 states."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How do you handle technical vs. professional component billing for cardiology diagnostics?","acceptedAnswer":{"@type":"Answer","text":"We correctly apply modifier -TC for the technical component (equipment, staff) and modifier -26 for the professional component (physician interpretation) for all applicable diagnostic cardiology services including echocardiograms, stress tests, and nuclear imaging. When a cardiologist provides the global service, no modifier is used, and we bill accordingly for maximum reimbursement."}},
    {"@type":"Question","name":"How do you handle pacemaker and ICD device implantation billing?","acceptedAnswer":{"@type":"Answer","text":"Device implantation billing requires two distinct billing components: the HCPCS device code for the implanted hardware and the CPT implantation procedure code. We ensure both are captured, correctly linked with diagnosis codes, and submitted with appropriate documentation to prevent denials related to medical necessity or device coverage."}},
    {"@type":"Question","name":"How do you support MACRA/MIPS reporting for cardiology practices?","acceptedAnswer":{"@type":"Answer","text":"We assist with measure selection, performance tracking, and year-end MIPS data submission. Our team monitors your performance category scores throughout the year, flags measures at risk of low performance, and ensures data is submitted accurately to maximize your MIPS final score and avoid payment penalties."}},
    {"@type":"Question","name":"How do you identify and recover underpayments from payers?","acceptedAnswer":{"@type":"Answer","text":"Every payment posting is compared against contracted rates. When a payer remits below the contracted amount, we systematically identify the discrepancy, document the underpayment, and pursue recovery through formal dispute or appeal processes recovering revenue that most in-house billing teams miss entirely."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Cardiology Billing Services","item":"https://medbillingrcm.com/specialties/cardiology-billing-service/"}
  ]
};

export default function CardiologyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
