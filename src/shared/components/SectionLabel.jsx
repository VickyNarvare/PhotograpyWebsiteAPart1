export default function SectionLabel({ children, className = "", tone = "light" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px w-10 bg-terracotta" aria-hidden="true" />
      <span className={`label ${tone === "dark" ? "text-clay" : "text-terracotta"}`}>{children}</span>
    </div>
  );
}
