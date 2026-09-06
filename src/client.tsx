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

startTransition(() => {
  createRoot(document).render(
    <StrictMode>
      <StartClient />
    </StrictMode>,
  );
});
