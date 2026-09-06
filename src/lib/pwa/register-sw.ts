export function registerServiceWorker(): void {
  if (typeof window === "undefined") return;
  if (import.meta.env.DEV) return;
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((err) => {
      if (typeof console !== "undefined") console.warn("[sw] register failed", err);
    });
  });
}
