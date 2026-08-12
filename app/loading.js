export default function Loading() {
  return (
    <div style={{ position:"fixed", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:"var(--color-paper)", zIndex:999 }}>
      <div style={{ width:"40px", height:"40px", border:"3px solid var(--color-line)", borderTopColor:"var(--color-accent)", borderRadius:"50%", animation:"spin .7s linear infinite" }}></div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
