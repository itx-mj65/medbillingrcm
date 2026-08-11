import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HospitalScripts from "./components/HospitalScripts";

export default function HospitalLayout({ children }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      {children}
      <Footer />
      <HospitalScripts />
    </>
  );
}
