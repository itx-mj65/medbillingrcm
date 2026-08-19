import "../../components/specialty/specialty.css";
import "./fp.css";

export const metadata = {
  title:       "Family Practice Billing Services | Medbilling RCM",
  description: "Family Practice Billing Services in Irvine, CA: Medbilling RCM ensures accurate coding & reduced denials for optimized revenue. Contact us!",
  keywords:    "family practice billing, medical billing for family doctors, family medicine RCM, revenue cycle management family practice, primary care billing services, family practice medical billing company, physician billing family practice, healthcare billing family doctors",
  alternates:  { canonical: "https://medbillingrcm.com/specialties/family-practice-billing-service/" },
  openGraph: {
    title:       "Family Practice Billing Services | Medbilling RCM",
    description: "Medbilling RCM delivers efficient end-to-end revenue cycle management services to small and large family practice groups across multiple states.",
    url:         "https://medbillingrcm.com/specialties/family-practice-billing-service/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const serviceSchema = {
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Family Practice Billing Services",
  "name":"Family Practice Billing Services",
  "provider":{"@type":"Organization","@id":"https://medbillingrcm.com/#organization","name":"Medbilling RCM","url":"https://medbillingrcm.com","telephone":"+1-888-551-2526"},
  "areaServed":{"@type":"Country","name":"United States"},
  "url":"https://medbillingrcm.com/specialties/family-practice-billing-service/",
  "description":"Medbilling RCM delivers efficient end-to-end revenue cycle management services to small and large family practice groups across multiple states all billing needs managed in one place."
};
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How does your family medicine billing company handle high patient volumes without claim delays?","acceptedAnswer":{"@type":"Answer","text":"We streamline claim submissions with automated coding, batch processing, and real-time eligibility checks to ensure no backlog develops regardless of patient volume. Our dedicated account teams handle scaling transparently whether you have 100 or 1,000 encounters per week with consistent turnaround times and no disruption to your revenue cycle."}},
    {"@type":"Question","name":"Can you integrate with our existing EHR or practice management software?","acceptedAnswer":{"@type":"Answer","text":"Yes. We integrate seamlessly with all major EHR and practice management platforms including Epic, eClinicalWorks, Athena, Allscripts, Cerner, Practice Fusion, and more. Transitions are managed without disruption to your existing workflow or patient data, and our team handles the full onboarding process."}},
    {"@type":"Question","name":"How do you handle preventive services billing under ACA and Medicare rules?","acceptedAnswer":{"@type":"Answer","text":"We apply the correct preventive care codes and modifiers including modifier 33 for ACA-mandated preventive services and codes like G0438 and G0439 for Medicare Annual Wellness Visits to ensure your practice receives full reimbursement without patient cost-sharing being incorrectly applied. We track ACA and CMS updates annually to stay current."}},
    {"@type":"Question","name":"How do you support MIPS reporting for family medicine practices participating in value-based care?","acceptedAnswer":{"@type":"Answer","text":"We help you select the optimal MIPS quality measures for family medicine, collect and track performance data throughout the year, and submit your MIPS reporting on time. Our team monitors your scores against penalty thresholds and incentive targets, ensuring you avoid the 9% negative payment adjustment and position your practice for positive incentive payments."}},
    {"@type":"Question","name":"What is your approach to state-specific Medicaid billing for family practices with diverse patient populations?","acceptedAnswer":{"@type":"Answer","text":"Our team maintains active knowledge of each state's Medicaid billing rules, fee schedules, prior authorization requirements, and covered service policies. We apply state-specific codes and procedures for every Medicaid claim, ensuring compliance and timely payment regardless of which states your patients are enrolled in including Medicaid managed care plans."}}
  ]
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://medbillingrcm.com"},
    {"@type":"ListItem","position":2,"name":"Specialties","item":"https://medbillingrcm.com/specialties/"},
    {"@type":"ListItem","position":3,"name":"Family Practice Billing Services","item":"https://medbillingrcm.com/specialties/family-practice-billing-service/"}
  ]
};

export default function FamilyPracticeLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
