"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <main id="main" style={{ minHeight:"60vh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", padding:"80px 24px", textAlign:"center" }}>
      <p className="eyebrow" style={{ justifyContent:"center" }}>Something went wrong</p>
      <h1 style={{ maxWidth:"560px", marginBottom:"20px" }}>An unexpected error occurred</h1>
      <p style={{ color:"var(--color-muted)", maxWidth:"400px", marginBottom:"32px" }}>
        Our team has been notified. Please try again or contact us directly.
      </p>
      <button className="btn" onClick={reset}>Try Again</button>
    </main>
  );
}
