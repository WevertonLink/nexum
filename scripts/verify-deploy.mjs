#!/usr/bin/env node
/**
 * Deploy smoke: verifies the built artifact ships the PWA essentials.
 *
 *   - manifest.webmanifest (or .json) present and has ≥4 icons
 *   - required icons on disk (192, 512, 512-maskable, 180-apple)
 *   - sw.js present
 *   - favicon.svg present
 *
 * Runs against `public/` (source-of-truth) since the Nitro build copies
 * static assets 1:1. Exit non-zero on any missing piece.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);
const PUBLIC = join(ROOT, "public");

const errors = [];

function must(rel) {
  const p = join(PUBLIC, rel);
  if (!existsSync(p)) errors.push(`missing: ${rel}`);
  return p;
}

must("sw.js");
must("favicon.svg");
must("icon-180.png");
must("icon-192.png");
must("icon-512.png");
must("icon-512-maskable.png");

const manifestPath = must("manifest.webmanifest");
if (existsSync(manifestPath)) {
  const raw = readFileSync(manifestPath, "utf8");
  let mf;
  try {
    mf = JSON.parse(raw);
  } catch (err) {
    errors.push(`manifest.webmanifest is not valid JSON: ${err.message}`);
  }
  if (mf) {
    if (!Array.isArray(mf.icons) || mf.icons.length < 4) {
      errors.push(`manifest.icons must have ≥4 entries; got ${mf.icons?.length ?? 0}`);
    }
    if (!mf.start_url) errors.push("manifest.start_url missing");
    if (mf.display !== "standalone" && mf.display !== "fullscreen") {
      errors.push(`manifest.display should be 'standalone' (got '${mf.display}')`);
    }
    const hasMaskable = mf.icons?.some((i) => (i.purpose || "").includes("maskable"));
    if (!hasMaskable) errors.push("no maskable icon in manifest");
  }
}

if (errors.length) {
  console.error("[verify-deploy] FAIL");
  for (const e of errors) console.error("  -", e);
  process.exit(1);
}
console.log("[verify-deploy] OK — PWA essentials present in public/");
