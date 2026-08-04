import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import RevenueGap from "@/components/home/RevenueGap";
import HowWeMeasure from "@/components/home/HowWeMeasure";
import TechAndSpecialists from "@/components/home/TechAndSpecialists";
import OperatingSystem from "@/components/home/OperatingSystem";
import RevenueControlFramework from "@/components/home/RevenueControlFramework";
import BenchmarkTable from "@/components/home/BenchmarkTable";
import OutsourcingDecision from "@/components/home/OutsourcingDecision";
import EhrIntegrations from "@/components/home/EhrIntegrations";
import SpecialtiesWeServe from "@/components/home/SpecialtiesWeServe";
import ClientOutcomes from "@/components/home/ClientOutcomes";
import Testimonials from "@/components/home/Testimonials";
import TheStandard from "@/components/home/TheStandard";
import FitQualification from "@/components/home/FitQualification";
import PrimaryCTA from "@/components/home/PrimaryCTA";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Medical Billing Services & RCM Company | Medbilling RCM",
  description:
    "Outsource medical billing to a partner measuring clean claim rate at the payer, not the clearinghouse. 97% first-pass. 14-day onboarding. Free assessment.",
  openGraph: {
    title: "Medical Billing Services That Engineer the Revenue System Behind Your Practice",
    description: "Revenue cycle infrastructure for physician practices, hospitals, and surgery centers across 50+ states.",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RevenueGap />
        <HowWeMeasure />
        <TechAndSpecialists />
        <OperatingSystem />
        <RevenueControlFramework />
        <BenchmarkTable />
        <OutsourcingDecision />
        <EhrIntegrations />
        <SpecialtiesWeServe />
        <ClientOutcomes />
        <Testimonials />
        <TheStandard />
        <FitQualification />
        <PrimaryCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
