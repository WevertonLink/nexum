#!/usr/bin/env node
/**
 * Read NeuroLab v2 sources and emit Nexum-typed TS data files.
 *
 * Stage 1 pivot: Nexum's existing Stage 1 (module_01–08) is a fine-grained
 * expansion of NL's single `neuronio` topic. Overwriting it would destroy
 * authored editorial work, so this script does NOT touch modules — it only
 * migrates the pieces that are strictly additive: counterfactuals, domain
 * cases, glossary, and concept metadata. Nexum module content is handled by
 * Fase 4 (which authors 14 new modules for Stages 2/3/4 using NL topics as
 * source material).
 *
 * The script is invoked manually (`npm run migrate:nl`) and writes to
 * `src/content/generated/`. Never edit those files by hand — the header on
 * each generated file says so.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);
const NL_ROOT = join(ROOT, "..", "neurolab-v2");
const OUT = join(ROOT, "src", "content", "generated");

/** NL module id → Nexum module id. Stages 2-4 authors will consume these. */
const NL_TO_NEXUM = {
  neuronio: "module_02",
  plasticidade: "module_19",
  recompensa: "module_14",
  decisao: "module_20",
  atencao: "module_17",
  emocao: "module_10",
  autonomo: "module_13",
  sono: "module_15",
  neuroanatomia: "module_09",
  sensorial: "module_28",
  motor: "module_29",
  desenvolvimento: "module_30",
  linguagem: "module_31",
  clinica: "module_32",
  farmacologia: "module_27",
  metodos: "module_26",
  memoria: "module_18",
  ritmos: "module_23",
  esforco: "module_21",
  ilusoes: "module_22",
  saber: "module_24",
  palpite: "module_25",
};

function readNL(rel) {
  return readFileSync(join(NL_ROOT, "src", rel), "utf8");
}

/**
 * Extract a `const NAME = [ ... ];` or `const NAME = { ... };` literal from
 * an NL source file. Uses a bracket-matched scan (not a raw regex) so nested
 * `{}` / `[]` inside strings can't fool it — NL objects nest 3+ levels deep.
 */
function extractLiteral(source, name) {
  const start = source.indexOf(`const ${name} = `);
  if (start === -1) throw new Error(`literal ${name} not found`);
  let i = source.indexOf(/[[{]/.test(source[start + `const ${name} = `.length]) ? "[" : "{", start);
  // Try both opener types to find whichever the literal starts with.
  const openIdx = source
    .slice(start)
    .search(/[[{]/);
  if (openIdx === -1) throw new Error(`opener not found for ${name}`);
  i = start + openIdx;
  const opener = source[i];
  const closer = opener === "[" ? "]" : "}";
  let depth = 0;
  let inStr = null;
  for (let j = i; j < source.length; j++) {
    const ch = source[j];
    if (inStr) {
      if (ch === "\\") {
        j++;
        continue;
      }
      if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = ch;
      continue;
    }
    if (ch === opener) depth++;
    else if (ch === closer) {
      depth--;
      if (depth === 0) return source.slice(i, j + 1);
    }
  }
  throw new Error(`unbalanced brackets for ${name}`);
}

/**
 * Evaluate an NL literal as JavaScript. Safe because we control the input
 * (NL source shipped by the same repo) — we're not eval'ing user data.
 */
function evalLiteral(text) {
  return new Function(`return (${text});`)();
}

function mapNexumId(nlId) {
  return NL_TO_NEXUM[nlId] ?? `unknown_${nlId}`;
}

function generateHeader(source) {
  return `/* AUTO-GENERATED from ${source}. Do not edit by hand. Regenerate: npm run migrate:nl */\n`;
}

// ---------------------------------------------------------------------------
// Counterfactuals
// ---------------------------------------------------------------------------
function emitCounterfactuals() {
  const src = readNL("04b-domain-mode.js");
  const raw = evalLiteral(extractLiteral(src, "DOMAIN_COUNTERFACTUALS"));
  const items = raw.map((c) => ({
    id: c.id,
    moduleId: mapNexumId(c.module),
    lessonHint: c.lesson != null ? String(c.lesson) : undefined,
    title: c.title,
    prompt: c.prompt,
    options: c.options,
    correct: c.correct,
    optionFeedback: c.optionFeedback,
    explanation: c.explanation,
    chain: c.chain,
    extend: c.extend,
  }));
  const body =
    generateHeader("neurolab-v2/src/04b-domain-mode.js DOMAIN_COUNTERFACTUALS") +
    `import type { Counterfactual } from "../counterfactual.ts";\n\n` +
    `export const NL_COUNTERFACTUALS: Counterfactual[] = ${JSON.stringify(items, null, 2)};\n`;
  writeFileSync(join(OUT, "neurolab-counterfactuals.ts"), body);
  return items.length;
}

// ---------------------------------------------------------------------------
// Domain cases
// ---------------------------------------------------------------------------
function emitDomainCases() {
  const src = readNL("04b-domain-mode.js");
  const raw = evalLiteral(extractLiteral(src, "DOMAIN_CASES"));
  const items = raw.map((c) => ({
    id: c.id,
    title: c.title,
    modules: (c.modules || []).map(mapNexumId),
    scenario: c.scenario,
    question: c.question,
    options: c.options,
    correct: c.correct,
    optionFeedback: c.optionFeedback,
    explanation: c.explanation,
    chain: c.chain,
    extend: c.extend,
  }));
  const body =
    generateHeader("neurolab-v2/src/04b-domain-mode.js DOMAIN_CASES") +
    `import type { DomainCase } from "../domain-case.ts";\n\n` +
    `export const NL_DOMAIN_CASES: DomainCase[] = ${JSON.stringify(items, null, 2)};\n`;
  writeFileSync(join(OUT, "neurolab-domain-cases.ts"), body);
  return items.length;
}

// ---------------------------------------------------------------------------
// Glossary
// ---------------------------------------------------------------------------
function emitGlossary() {
  const src = readNL("05-app.js");
  const raw = evalLiteral(extractLiteral(src, "GLOSSARY"));
  // NL glossary is { term: definition } or { term: { def, refs } }
  const items = Object.entries(raw).map(([term, val]) => ({
    id: `nl_${term.toLowerCase().replace(/\s+/g, "_")}`,
    term,
    definition: typeof val === "string" ? val : (val && val.def) || "",
  }));
  const body =
    generateHeader("neurolab-v2/src/05-app.js GLOSSARY") +
    `import type { GlossaryEntry } from "../types.ts";\n\n` +
    `export const NL_GLOSSARY: GlossaryEntry[] = ${JSON.stringify(items, null, 2)};\n`;
  writeFileSync(join(OUT, "neurolab-glossary.ts"), body);
  return items.length;
}

// ---------------------------------------------------------------------------
// README (regeneration instructions)
// ---------------------------------------------------------------------------
function emitReadme(counts) {
  const body = `# generated/

Auto-generated files consumed by \`src/content/*.ts\`. Do NOT edit by hand.
Regenerate with:

\`\`\`
npm run migrate:nl
\`\`\`

## Current outputs

- \`neurolab-counterfactuals.ts\` — ${counts.counterfactuals} items from \`DOMAIN_COUNTERFACTUALS\`
- \`neurolab-domain-cases.ts\` — ${counts.cases} items from \`DOMAIN_CASES\`
- \`neurolab-glossary.ts\` — ${counts.glossary} entries from \`GLOSSARY\`

## Mapping table

NL module id → Nexum module id lives in \`scripts/migrate-neurolab.mjs\`
(\`NL_TO_NEXUM\`). Nexum's Stage 1 (\`module_01\`–\`module_08\`) is a
fine-grained expansion of NL's \`neuronio\` topic and is authored, not
generated — the mapping starts at \`module_09\`.
`;
  writeFileSync(join(OUT, "README.md"), body);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  mkdirSync(OUT, { recursive: true });
  const counts = {
    counterfactuals: emitCounterfactuals(),
    cases: emitDomainCases(),
    glossary: emitGlossary(),
  };
  emitReadme(counts);
  console.log(`[migrate-nl] wrote ${counts.counterfactuals} counterfactuals, ${counts.cases} cases, ${counts.glossary} glossary entries`);
}

main();
