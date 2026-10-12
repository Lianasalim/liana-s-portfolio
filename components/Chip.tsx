export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
