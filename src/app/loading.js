export default function Loading() {
  return (
    <div
      className="flex-1 flex items-center justify-center"
      style={{ minHeight: "60vh" }}
    >
      <div
        className="w-10 h-10 border-3 rounded-full animate-spin"
        style={{
          borderColor: "var(--color-ivory)",
          borderTopColor: "var(--color-primary)",
        }}
      />
    </div>
  );
}
