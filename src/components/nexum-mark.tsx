import { cn } from "@/lib/utils";

/** Shared N mark — same geometry as favicon.svg / PWA icons. */
export function NexumMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("text-accent", className)}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="32" height="32" rx="6" fill="currentColor" />
      <path fill="var(--color-bg)" d="M8 6h5v20H8zm11 0h5v20h-5zM12 6h5L24 26h-5z" />
    </svg>
  );
}
