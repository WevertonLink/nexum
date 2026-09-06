// Nexum minimal service worker.
// Presence is required so the browser exposes the "install PWA" prompt.
// Actual runtime caching is intentionally omitted — the app already works
// offline via localStorage; asset caching can be added later without
// changing this file's registration contract.

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Pass-through. No cache interception yet.
});
