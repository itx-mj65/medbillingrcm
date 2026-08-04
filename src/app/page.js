export default function Home() {
  return (
    <main className="flex-1">
      {/* Placeholder — sections will be built during conversion */}
      <section
        className="flex items-center justify-center"
        style={{
          minHeight: "100vh",
          background: "var(--color-primary)",
        }}
      >
        <div className="text-center px-6">
          <h1
            className="font-[var(--font-poppins)] font-bold text-white"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.12 }}
          >
            Medbilling RCM
          </h1>
          <p
            className="mt-4 text-white/80 max-w-xl mx-auto"
            style={{ fontSize: "1.125rem", lineHeight: 1.6 }}
          >
            Revenue cycle management engineered for your practice.
            <br />
            Site conversion in progress.
          </p>
        </div>
      </section>
    </main>
  );
}
