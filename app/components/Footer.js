import Link from "next/link";
import { siteConfig } from "@/app/lib/metadata";

const footerLinks = [
  { label: "Hospital Billing",  href: "/services/hospital-medical-billing/" },
  { label: "Client Outcomes",   href: "/#outcomes"    },
  { label: "About Us",          href: "/#standard"    },
  { label: "Get an Assessment", href: "/#assessment"  },
];

export default function Footer() {
  return (
    <footer>
      <div className="shell foot">
        <Link className="brand" href="/" aria-label="Medbilling RCM home">
          Medbilling RCM
        </Link>
        <nav aria-label="Footer navigation" style={{ display:"flex", gap:"20px", flexWrap:"wrap", fontSize:".8rem" }}>
          {footerLinks.map(({ label, href }) => (
            <Link key={href} href={href} style={{ color:"#bfc2cc" }}>{label}</Link>
          ))}
        </nav>
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
      </div>
    </footer>
  );
}
