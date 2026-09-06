import { cn } from "@/lib/utils";

export function ProgressMeter({
  value,
  label,
  tone = "accent",
}: {
  value: number;
  label?: string;
  tone?: "accent" | "ok" | "warn";
}) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div>
      {label && (
        <div className="mb-1 flex justify-between text-xs text-fg-muted">
          <span>{label}</span>
          <span className="tabular-nums">{v}%</span>
        </div>
      )}
      <div
        className="h-2 overflow-hidden rounded-full bg-surface-2"
        role="progressbar"
        aria-valuenow={v}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-300 ease-[var(--ease-out)]",
            tone === "ok" && "bg-ok",
            tone === "warn" && "bg-warn",
            tone === "accent" && "bg-accent",
          )}
          style={{ width: `${v}%` }}
        />
      </div>
    </div>
  );
}
