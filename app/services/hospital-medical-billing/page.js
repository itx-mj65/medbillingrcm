import HospitalHero from "./components/HospitalHero";
import HospitalProofStrip from "./components/HospitalProofStrip";
import HospitalRevGap from "./components/HospitalRevGap";
import HospitalTwoSystems from "./components/HospitalTwoSystems";
import HospitalRCMFramework from "./components/HospitalRCMFramework";
import HospitalFacilityTypes from "./components/HospitalFacilityTypes";
import HospitalRevenueSlips from "./components/HospitalRevenueSlips";
import HospitalDRGPayment from "./components/HospitalDRGPayment";
import Hospital340B from "./components/Hospital340B";
import HospitalTEAM from "./components/HospitalTEAM";
import HospitalCleanClaim from "./components/HospitalCleanClaim";
import HospitalInHouseCost from "./components/HospitalInHouseCost";
import HospitalOutcomes from "./components/HospitalOutcomes";
import HospitalCompliance from "./components/HospitalCompliance";
import HospitalSystems from "./components/HospitalSystems";
import HospitalProcess from "./components/HospitalProcess";
import HospitalFit from "./components/HospitalFit";
import HospitalFAQ from "./components/HospitalFAQ";
import HospitalCTA from "./components/HospitalCTA";

export const metadata = {
  title: "Hospital Medical Billing Services | Inpatient & Outpatient | Medbilling RCM",
  description: "Hospital medical billing services for inpatient and outpatient care. MS-DRG, APC, UB-04, 340B split billing, and TEAM model. 97% clean claim rate measured at the payer.",
};

export default function HospitalMedicalBillingPage() {
  return (
    <main id="main">
      <HospitalHero />
      <HospitalProofStrip />
      <HospitalRevGap />
      <HospitalTwoSystems />
      <HospitalRCMFramework />
      <HospitalFacilityTypes />
      <HospitalRevenueSlips />
      <HospitalDRGPayment />
      <Hospital340B />
      <HospitalTEAM />
      <HospitalCleanClaim />
      <HospitalInHouseCost />
      <HospitalOutcomes />
      <HospitalCompliance />
      <HospitalSystems />
      <HospitalProcess />
      <HospitalFit />
      <HospitalFAQ />
      <HospitalCTA />
    </main>
  );
}
