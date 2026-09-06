/**
 * Custom client entry for the GitHub Pages / static SPA build.
 *
 * The default TanStack Start entry uses `hydrateRoot(document, ...)` and
 * assumes the server already produced a matching HTML tree. Under the
 * `github-pages` preset the SSR bundle build fails after the client bundle
 * lands, so we hand-write `.output/public/index.html` in `scripts/build-pages.mjs`
 * with only a shell head + empty body. `hydrateRoot` against that shell hangs
 * inside `StartClient`'s `<Await>` suspense.
 *
 * `createRoot(document, ...)` sidesteps the hydration handshake and just
 * client-renders the tree, which is exactly what a static SPA needs.
 */
import { StrictMode, startTransition } from "react";
import { createRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";

// The build-pages shell paints stylesheet + preload links directly into
// <head>. React's reconciler chokes ("Cannot set properties of undefined
// (setting 't')") when createRoot(document) tries to re-parent an existing
// <html> that it didn't originate. Strip document children first so React
// gets a blank canvas; __root.tsx re-renders the head links from JSX and
// the browser reuses the already-downloaded CSS from its cache.
while (document.firstChild) document.removeChild(document.firstChild);

startTransition(() => {
  createRoot(document).render(
    <StrictMode>
      <StartClient />
    </StrictMode>,
  );
});
