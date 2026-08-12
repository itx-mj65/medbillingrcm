import Link from "next/link";

export const metadata = { title: "Page Not Found | Medbilling RCM" };

export default function NotFound() {
  return (
    <main id="main" style={{ minHeight:"60vh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", padding:"80px 24px", textAlign:"center" }}>
      <p className="eyebrow" style={{ justifyContent:"center" }}>404 — page not found</p>
      <h1 style={{ maxWidth:"560px", marginBottom:"20px" }}>This page doesn&apos;t exist</h1>
      <p style={{ color:"var(--color-muted)", maxWidth:"400px", marginBottom:"32px" }}>
        It may have moved or been removed. Return to the homepage or request an assessment.
      </p>
      <div style={{ display:"flex", gap:"16px", flexWrap:"wrap", justifyContent:"center" }}>
        <Link className="btn" href="/">Back to Homepage</Link>
        <Link className="btn" href="/#assessment" style={{ background:"var(--navy)" }}>Get an Assessment</Link>
      </div>
    </main>
  );
}
