import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./hospital.css";

export default function HospitalLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
