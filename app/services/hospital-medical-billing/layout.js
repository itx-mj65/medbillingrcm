import "./hospital.css";
import HospitalScripts from "./components/HospitalScripts";

export default function HospitalLayout({ children }) {
  return (
    <>
      {children}
      <HospitalScripts />
    </>
  );
}
