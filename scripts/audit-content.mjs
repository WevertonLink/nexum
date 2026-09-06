#!/usr/bin/env node
/**
 * Content integrity gate. Runs against the compiled TS content by way of
 * Node's --experimental-strip-types, so we don't need a build step to catch:
 *
 *   - dangling concept refs (Question.conceptIds → CONCEPTS)
 *   - dangling module refs (Module.prerequisites/relatedModules → MODULES)
 *   - dangling concept refs inside ContentBlock.conceptIds
 *   - duplicate module ids / concept ids
 *   - modules with < 5 questions (the minimum for the mastery matrix)
 *
 * Called by `npm run audit:content`. Exits non-zero on any error; warnings
 * are logged but do not fail the run.
 */
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);
const ENTRY = join(ROOT, "scripts", "_audit-content.entry.mts");

const child = spawn(
  process.execPath,
  ["--experimental-strip-types", "--no-warnings", ENTRY],
  { stdio: "inherit", env: process.env, cwd: ROOT },
);
child.on("exit", (code) => process.exit(code ?? 1));
