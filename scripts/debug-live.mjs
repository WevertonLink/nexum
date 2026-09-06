#!/usr/bin/env node
/**
 * Headless smoke of the deployed site — captures console + errors + a
 * screenshot so we can see what a real browser sees without depending on
 * Chrome remote inspection. Not shipped in production.
 */
import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";

const URL = process.argv[2] ?? "https://wevertonlink.github.io/nexum/";
const OUT = "artifacts/debug-live";
mkdirSync(OUT, { recursive: true });

const messages = [];
const errors = [];
const failed = [];

const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();

page.on("console", (msg) => {
  messages.push(`[${msg.type()}] ${msg.text()}`);
});
page.on("pageerror", (err) => {
  errors.push(`${err.name}: ${err.message}\n${err.stack ?? ""}`);
});
page.on("requestfailed", (req) => {
  failed.push(`${req.method()} ${req.url()} — ${req.failure()?.errorText ?? "?"}`);
});

console.log(`[debug-live] loading ${URL}`);
await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 }).catch((e) => {
  errors.push(`navigation: ${e.message}`);
});

await page.waitForTimeout(2000);

const bodyHtml = await page.evaluate(() => document.body.innerHTML.slice(0, 4000));
const bodyLen = await page.evaluate(() => document.body.innerHTML.length);
const rootChildCount = await page.evaluate(() => document.body.childElementCount);
const title = await page.title();

await page.screenshot({ path: `${OUT}/screenshot.png`, fullPage: true });

writeFileSync(
  `${OUT}/report.txt`,
  [
    `URL: ${URL}`,
    `TITLE: ${title}`,
    `BODY LENGTH: ${bodyLen}`,
    `BODY CHILD COUNT: ${rootChildCount}`,
    ``,
    `=== CONSOLE (${messages.length}) ===`,
    ...messages,
    ``,
    `=== PAGE ERRORS (${errors.length}) ===`,
    ...errors,
    ``,
    `=== FAILED REQUESTS (${failed.length}) ===`,
    ...failed,
    ``,
    `=== BODY HTML (first 4000 chars) ===`,
    bodyHtml,
  ].join("\n"),
);

console.log(`[debug-live] title=${JSON.stringify(title)} bodyLen=${bodyLen} childCount=${rootChildCount}`);
console.log(`[debug-live] console:${messages.length} errors:${errors.length} failed:${failed.length}`);
console.log(`[debug-live] report → ${OUT}/report.txt`);
console.log(`[debug-live] screenshot → ${OUT}/screenshot.png`);

await browser.close();
