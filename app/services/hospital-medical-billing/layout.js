import "./hospital.css";

export const metadata = {
  title:       "Hospital Medical Billing Services | Inpatient & Outpatient | Medbilling RCM",
  description: "Hospital medical billing services for inpatient and outpatient care. MS-DRG, APC, UB-04, 340B split billing, and TEAM model. 97% clean claim rate measured at the payer.",
  alternates:  { canonical: "https://medbillingrcm.com/services/hospital-medical-billing/" },
};

export default function HospitalLayout({ children }) {
  return children;
}
