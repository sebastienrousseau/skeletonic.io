#!/usr/bin/env node
/**
 * skeletonic.io — pre-deploy verifier.
 *
 * Runs the same gates the manual session checks do, in one shot,
 * against a locally-running build. Default URL: http://127.0.0.1:8080.
 * Override with VERIFY_BASE_URL.
 *
 * Gates:
 *   1. docs/ exists with the expected pages
 *   2. core asset paths return 200 (CSS, JS, search-data, manifest, sw)
 *   3. axe-core: 0 WCAG 2.2 AA violations on every key page in BOTH
 *      light and dark colour-scheme
 *   4. mobile Lighthouse: every category at 100/100/100/100 on every
 *      key page (gzip-compressed source — uses :8081 if reachable so
 *      the run mirrors Cloudflare-served production)
 *   5. service worker registration succeeds in headless Chrome
 *   6. no console errors on first paint
 *   7. <html lang> is correctly set per locale
 *
 * Exit codes:
 *   0 — every gate passed
 *   1 — at least one gate failed
 *   2 — runner itself crashed (servers not up, missing fixture, etc.)
 *
 * Usage:
 *   pnpm run verify
 *   node scripts/verify-site.mjs --quick   # axe + http only, skip Lighthouse
 */

import { existsSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");

const BASE = process.env.VERIFY_BASE_URL || "http://127.0.0.1:8080";
const GZIP_BASE = process.env.VERIFY_GZIP_URL || "http://127.0.0.1:8081";
const QUICK = process.argv.includes("--quick");

const PAGES = ["/", "/about/", "/components/", "/changelog/", "/tokens/", "/spacing/", "/security/", "/contribute/", "/getting-started/", "/animations/"];
const LOCALES = ["fr", "de", "ja", "ar", "he", "zh-hans"];

const c = (n) => (process.stdout.isTTY ? `\x1b[${n}m` : "");
const reset = c(0); const bold = c(1); const green = c(32); const red = c(31);
let failed = 0;

const ok = (label, detail = "") => console.log(`  ${green}✓${reset} ${label.padEnd(50)} ${detail}`);
const fail = (label, detail = "") => { console.log(`  ${red}✗${reset} ${label.padEnd(50)} ${detail}`); failed++; };

const playwright = await import("/Users/seb/Code/Public/CSS/skeletonic-stylus/node_modules/playwright/index.mjs").catch(() => null);
const AxeBuilder = await import("/Users/seb/Code/Public/CSS/skeletonic-stylus/node_modules/@axe-core/playwright/dist/index.js").catch(() => null);

if (!playwright || !AxeBuilder) {
  console.error("verify-site: playwright + @axe-core/playwright not available — install peer deps in /Users/seb/Code/Public/CSS/skeletonic-stylus first.");
  process.exit(2);
}

console.log(`\n${bold}verify-site${reset} — ${BASE}\n`);

// ── 1. docs/ exists with expected pages ────────────────────────────
{
  const docsRoot = resolve(repoRoot, "docs");
  if (!existsSync(docsRoot)) { fail("docs/ exists", "run scripts/build-i18n.sh first"); process.exit(2); }
  const missing = PAGES.filter((p) => !existsSync(resolve(docsRoot, p === "/" ? "index.html" : p.replace(/^\/|\/$/g, "") + "/index.html")));
  if (missing.length) fail("all key pages built", `missing: ${missing.join(", ")}`);
  else ok("all key pages built", `${PAGES.length} pages`);
}

// ── 2. core asset paths return 200 ─────────────────────────────────
{
  const assets = ["/css/skeletonic.min.css", "/css/chrome.css", "/js/main.js", "/js/animations.js", "/js/search-data.json", "/manifest.webmanifest", "/sw.js", "/llms.txt", "/sitemap.xml", "/robots.txt"];
  const fails = [];
  for (const a of assets) {
    const code = execSync(`curl -s -o /dev/null -w "%{http_code}" "${BASE}${a}"`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    if (code !== "200") fails.push(`${a} → ${code}`);
  }
  if (fails.length) fail("core assets reachable", fails.join("; "));
  else ok("core assets reachable", `${assets.length} URLs`);
}

// ── 3. axe-core both schemes ────────────────────────────────────────
{
  const browser = await playwright.chromium.launch();
  let totalViolations = 0;
  for (const scheme of ["light", "dark"]) {
    const ctx = await browser.newContext({ colorScheme: scheme });
    for (const path of PAGES) {
      const page = await ctx.newPage();
      try {
        await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
        const r = await new AxeBuilder.default({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
        totalViolations += r.violations.length;
      } catch (e) {
        totalViolations++;
      }
      await page.close();
    }
    await ctx.close();
  }
  await browser.close();
  if (totalViolations === 0) ok(`axe-core (light + dark)`, `0 violations × ${PAGES.length * 2} runs`);
  else fail("axe-core (light + dark)", `${totalViolations} violations`);
}

// ── 4. <html lang> correct per locale ──────────────────────────────
{
  const fails = [];
  for (const loc of LOCALES) {
    const html = execSync(`curl -s "${BASE}/${loc}/"`, { stdio: ["ignore", "pipe", "ignore"] }).toString();
    const m = html.match(/<html\s+lang="([^"]+)"/);
    if (!m || m[1] !== loc) fails.push(`/${loc}/ → lang="${m ? m[1] : "missing"}"`);
  }
  if (fails.length) fail("html lang per locale", fails.join("; "));
  else ok("html lang per locale", `${LOCALES.length} locales OK`);
}

// ── 5. service worker registers + no console errors ───────────────
{
  const browser = await playwright.chromium.launch();
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (m) => { if (m.type() === "error") errors.push(`console: ${m.text()}`); });
  try {
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    const reg = await page.evaluate(async () => {
      if (!navigator.serviceWorker) return null;
      const r = await navigator.serviceWorker.getRegistration();
      return r ? { scope: r.scope, active: !!r.active } : null;
    });
    if (!reg || !reg.active) fail("service worker registered", reg ? "no active worker" : "no registration");
    else ok("service worker registered", `scope=${reg.scope}`);
  } catch (e) {
    fail("service worker registered", e.message.slice(0, 80));
  }
  await browser.close();
  if (errors.length === 0) ok("no console errors on first paint");
  else fail("no console errors on first paint", errors.slice(0, 2).join(" | "));
}

// ── 6. mobile Lighthouse 100/100/100/100 (slow) ────────────────────
if (!QUICK) {
  const lhBase = process.env.VERIFY_GZIP_URL ? GZIP_BASE : (await fetch(`${GZIP_BASE}/`).then((r) => r.ok).catch(() => false)) ? GZIP_BASE : BASE;
  const fails = [];
  for (const path of PAGES) {
    const url = `${lhBase}${path}`;
    const out = `/tmp/lh-verify${path.replace(/\//g, "_") || "_root"}.json`;
    try {
      execSync(
        `npx -y --silent lighthouse "${url}" --form-factor=mobile --output=json --output-path="${out}" --only-categories=performance,accessibility,best-practices,seo --quiet --chrome-flags="--headless=new --no-sandbox" 2>/dev/null`,
        { stdio: ["ignore", "pipe", "ignore"] },
      );
      const r = JSON.parse(readFileSync(out, "utf8"));
      const scores = ["performance", "accessibility", "best-practices", "seo"].map((k) => Math.round(r.categories[k].score * 100));
      if (scores.some((s) => s < 100)) fails.push(`${path}: ${scores.join("/")}`);
    } catch (e) {
      fails.push(`${path}: error`);
    }
  }
  if (fails.length) fail("mobile Lighthouse 100×4", fails.join(" · "));
  else ok("mobile Lighthouse 100×4", `${PAGES.length} pages`);
}

console.log("");
if (failed > 0) {
  console.log(`  ${red}${failed} gate${failed === 1 ? "" : "s"} failed.${reset}\n`);
  process.exit(1);
}
console.log(`  ${green}${bold}All gates passed.${reset}\n`);
process.exit(0);
