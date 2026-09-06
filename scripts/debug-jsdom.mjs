#!/usr/bin/env node
/**
 * jsdom substitute for Playwright (Playwright doesn't run on Android/Termux).
 * Loads the live URL, runs its scripts, captures console + errors + DOM.
 */
import { JSDOM, VirtualConsole } from "jsdom";

const URL = process.argv[2] ?? "https://wevertonlink.github.io/nexum/";

const messages = [];
const errors = [];

const vc = new VirtualConsole();
vc.on("log", (...a) => messages.push(`[log] ${a.map(String).join(" ")}`));
vc.on("warn", (...a) => messages.push(`[warn] ${a.map(String).join(" ")}`));
vc.on("error", (...a) => messages.push(`[error] ${a.map(String).join(" ")}`));
vc.on("jsdomError", (err) => {
  errors.push(`jsdomError: ${err.message}\n${err.stack ?? ""}`);
});

console.log(`[debug-jsdom] fetching ${URL}`);
const dom = await JSDOM.fromURL(URL, {
  runScripts: "dangerously",
  resources: "usable",
  pretendToBeVisual: true,
  virtualConsole: vc,
});

await new Promise((r) => setTimeout(r, 4000));

const bodyLen = dom.window.document.body.innerHTML.length;
const childCount = dom.window.document.body.childElementCount;

console.log(`=== SUMMARY ===`);
console.log(`bodyLen=${bodyLen} childCount=${childCount}`);
console.log(`console:${messages.length} errors:${errors.length}`);
console.log(``);
console.log(`=== CONSOLE ===`);
messages.forEach((m) => console.log(m));
console.log(``);
console.log(`=== ERRORS ===`);
errors.forEach((e) => console.log(e));

dom.window.close();
