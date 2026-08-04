export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center"
      style={{ minHeight: "100vh", background: "var(--color-primary)" }}>
      <div className="text-center px-6">
        <h1
          style={{
            fontFamily: "var(--font-poppins)",
            fontWeight: 700,
            fontSize: "clamp(2rem,5vw,3.5rem)",
            color: "#fff",
            lineHeight: 1.1,
          }}
        >
          Medbilling RCM
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", marginTop: 16, fontSize: "1.0625rem" }}>
          Next.js + Tailwind v4 · Ready for development.
        </p>
      </div>
    </main>
  );
}
