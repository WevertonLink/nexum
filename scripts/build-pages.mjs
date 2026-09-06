#!/usr/bin/env node
/**
 * GitHub Pages build orchestrator.
 *
 * TanStack Start + Nitro `github-pages` preset almost works: the client bundle
 * builds correctly (into `.output/public/assets/`) and Nitro copies the public
 * assets — but the framework then insists on compiling a *server* bundle for a
 * runtime GH Pages does not have, and errors out. We treat that error as
 * expected: after `vite build` returns, if the client assets exist, we
 * synthesize `index.html`/`404.html` referencing them and add `.nojekyll`.
 *
 * The synthesized HTML matches `src/routes/__root.tsx` head + body so
 * TanStack Router's client bootstrap hydrates cleanly.
 */
import { spawn } from "node:child_process";
import { readdirSync, writeFileSync, existsSync, statSync, unlinkSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);
const BASE = "/nexum/";
const OUTPUT = join(ROOT, ".output", "public");
const ASSETS = join(OUTPUT, "assets");

function runVite() {
  return new Promise((resolve) => {
    const child = spawn(
      process.execPath,
      [join(ROOT, "scripts/with-app-env.mjs"), "node_modules/vite/bin/vite.js", "build"],
      { stdio: "inherit", cwd: ROOT, env: process.env },
    );
    child.on("exit", (code) => resolve(code ?? 1));
  });
}

function findAsset(pattern) {
  if (!existsSync(ASSETS)) return null;
  const names = readdirSync(ASSETS).filter((n) => pattern.test(n));
  if (!names.length) return null;
  return names.sort((a, b) => statSync(join(ASSETS, b)).mtimeMs - statSync(join(ASSETS, a)).mtimeMs)[0];
}

function shellHtml({ jsEntry, cssEntry }) {
  const base = BASE.endsWith("/") ? BASE : `${BASE}/`;
  const css = cssEntry ? `\n    <link rel="stylesheet" href="${base}assets/${cssEntry}">` : "";
  return `<!doctype html>
<html lang="pt-BR" class="antialiased">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <base href="${base}">
    <title>Nexum</title>
    <meta name="theme-color" content="#245A4A">
    <meta name="description" content="Trilha progressiva de neurociência: do neurônio à compreensão do comportamento.">
    <meta name="apple-mobile-web-app-title" content="Nexum">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="application-name" content="Nexum">
    <link rel="icon" type="image/svg+xml" href="${base}favicon.svg">
    <link rel="icon" type="image/png" sizes="192x192" href="${base}icon-192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="${base}icon-512.png">
    <link rel="apple-touch-icon" href="${base}icon-180.png" sizes="180x180">
    <link rel="manifest" href="${base}manifest.webmanifest" type="application/manifest+json">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap">${css}
    <script type="module" src="${base}assets/${jsEntry}"></script>
  </head>
  <body></body>
</html>
`;
}

async function main() {
  const code = await runVite();
  // The SSR build step is expected to fail under github-pages preset — we only
  // need the client bundle. Judge success by presence of the assets, not code.
  const jsEntry = findAsset(/^index-.*\.js$/);
  const cssEntry = findAsset(/^styles-.*\.css$/) ?? findAsset(/\.css$/);

  if (!jsEntry) {
    console.error(`[build-pages] no client entry in ${ASSETS} (vite exit=${code})`);
    process.exit(code || 1);
  }

  const html = shellHtml({ jsEntry, cssEntry });
  writeFileSync(join(OUTPUT, "index.html"), html);
  writeFileSync(join(OUTPUT, "404.html"), html);
  writeFileSync(join(OUTPUT, ".nojekyll"), "");

  // The empty `index` sentinel Nitro writes confuses static hosts; remove.
  const emptyIndex = join(OUTPUT, "index");
  if (existsSync(emptyIndex)) {
    try {
      const s = statSync(emptyIndex);
      if (s.isFile() && s.size === 0) {
        unlinkSync(emptyIndex);
      }
    } catch {
      /* best-effort */
    }
  }

  console.log(`[build-pages] wrote index.html + 404.html + .nojekyll (js=${jsEntry}, css=${cssEntry ?? "none"})`);
}

main();
