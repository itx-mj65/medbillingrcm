import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Logos from "./components/Logos";
import Problem from "./components/Problem";
import Measure from "./components/Measure";
import Tech from "./components/Tech";
import Services from "./components/Services";
import Framework from "./components/Framework";
import Benchmark from "./components/Benchmark";
import Cost from "./components/Cost";
import Systems from "./components/Systems";
import Specialties from "./components/Specialties";
import Outcomes from "./components/Outcomes";
import Standard from "./components/Standard";
import Fit from "./components/Fit";
import Faq from "./components/Faq";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Scripts from "./components/Scripts";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Trust />
        <Logos />
        <Problem />
        <Measure />
        <Tech />
        <Services />
        <Framework />
        <Benchmark />
        <Cost />
        <Systems />
        <Specialties />
        <Outcomes />
        <Standard />
        <Fit />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <Scripts />
    </>
  );
}
