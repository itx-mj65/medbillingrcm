"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const nav = [
  { label: "Solutions",           href: "/#services"    },
  { label: "Hospital Billing",    href: "/services/hospital-medical-billing/" },
  { label: "Who We Serve",        href: "/#specialties" },
  { label: "Client Outcomes",     href: "/#outcomes"    },
  { label: "Resources",           href: "/#faq"         },
  { label: "About Us",            href: "/#standard"    },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-head">
      <div className="shell head-inner">
        <Link className="brand" href="/" onClick={close} aria-label="Medbilling RCM home">
          Medbilling RCM <small>Revenue Cycle Management</small>
        </Link>

        <nav className={`nav${open ? " open" : ""}`} id="nav" aria-label="Primary navigation">
          {nav.map(({ label, href }) => (
            <Link key={href} href={href} onClick={close}>{label}</Link>
          ))}
          <Link className="head-cta" href="/#assessment" onClick={close}>
            Get a Free Revenue Assessment
          </Link>
        </nav>

        <button
          className="menu"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "Menu"}
        </button>
      </div>
    </header>
  );
}
