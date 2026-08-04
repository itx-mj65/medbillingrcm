import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main
      className="flex-1 flex items-center justify-center px-6"
      style={{ minHeight: "70vh" }}
    >
      <div className="text-center max-w-md">
        <p
          className="font-[var(--font-poppins)] font-bold"
          style={{
            fontSize: "5rem",
            lineHeight: 1,
            color: "var(--color-primary)",
          }}
        >
          404
        </p>
        <h1
          className="mt-4 font-[var(--font-poppins)] font-semibold"
          style={{
            fontSize: "1.5rem",
            color: "var(--color-primary)",
          }}
        >
          Page not found
        </h1>
        <p
          className="mt-3"
          style={{
            color: "var(--color-muted)",
            fontSize: "1rem",
            lineHeight: 1.6,
          }}
        >
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-8 py-3 text-white font-semibold rounded-full transition-colors"
          style={{
            backgroundColor: "var(--color-action)",
            fontSize: "0.9375rem",
          }}
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
