#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');

function getGitShort() {
  try {
    return execSync('git rev-parse --short HEAD', { cwd: ROOT, encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

function generateVersion() {
  const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const git = getGitShort();
  const hm = new Date().toISOString().slice(11, 16).replace(':', ''); // HHMM UTC
  // If git exists, use date + git + time to ensure uniqueness per build
  if (git) {
    return `${date}-${git}-${hm}`;
  }
  const ts = Date.now().toString(36);
  return `${date}-${ts}`;
}

const VERSION = process.env.APP_VERSION || generateVersion();

console.log(`[generate-version] APP_VERSION=${VERSION}`);

// 1. Write version.json
const versionPath = path.join(ROOT, 'version.json');
fs.writeFileSync(versionPath, JSON.stringify({ version: VERSION }, null, 2) + '\n', 'utf8');
console.log(`  → ${path.relative(ROOT, versionPath)}`);

// 2. Update index.html versioned assets
const indexPath = path.join(ROOT, 'index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  // Replace versioned assets: handle both with and without existing ?v=
  const assets = [
    { file: 'styles.css', pattern: /href="styles\.css(\?v=[^"]*)?"/g, repl: `href="styles.css?v=${VERSION}"` },
    { file: 'proyectolike/proyectolike.css', pattern: /href="proyectolike\/proyectolike\.css(\?v=[^"]*)?"/g, repl: `href="proyectolike/proyectolike.css?v=${VERSION}"` },
    { file: 'app.js', pattern: /src="app\.js(\?v=[^"]*)?"/g, repl: `src="app.js?v=${VERSION}"` },
    { file: 'proyectolike/proyectolike.js', pattern: /src="proyectolike\/proyectolike\.js(\?v=[^"]*)?"/g, repl: `src="proyectolike/proyectolike.js?v=${VERSION}"` },
  ];
  let changed = false;
  for (const a of assets) {
    if (a.pattern.test(html)) {
      html = html.replace(a.pattern, a.repl);
      changed = true;
    }
  }
  // Also ensure version meta tag exists or update it
  if (html.includes('name="app-version"')) {
    html = html.replace(/<meta name="app-version" content="[^"]*">/, `<meta name="app-version" content="${VERSION}">`);
    changed = true;
  } else {
    // Inject after theme-color meta
    html = html.replace(
      /(<meta name="theme-color"[^>]*>)/,
      `$1\n  <meta name="app-version" content="${VERSION}">`
    );
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log(`  → ${path.relative(ROOT, indexPath)} (versioned)`);
  }
}

// 3. Update app.js APP_VERSION placeholder
const appPath = path.join(ROOT, 'app.js');
if (fs.existsSync(appPath)) {
  let app = fs.readFileSync(appPath, 'utf8');
  // If APP_VERSION already declared, replace its value
  if (/const APP_VERSION\s*=/.test(app)) {
    app = app.replace(/const APP_VERSION\s*=\s*["'][^"']*["'];/, `const APP_VERSION = "${VERSION}";`);
  } else {
    // Inject after EVENT_DATE line
    app = app.replace(
      /const EVENT_DATE =.*/,
      `$&\nconst APP_VERSION = "${VERSION}";`
    );
  }
  fs.writeFileSync(appPath, app, 'utf8');
  console.log(`  → ${path.relative(ROOT, appPath)} (APP_VERSION)`);
}

// 4. Ensure _headers exists for Cloudflare Pages cache rules
const headersPath = path.join(ROOT, '_headers');
let headersContent = '';
if (fs.existsSync(headersPath)) {
  headersContent = fs.readFileSync(headersPath, 'utf8');
}
const requiredHeaders = `/version.json
  Cache-Control: no-store, no-cache, must-revalidate, max-age=0
  Pragma: no-cache
  Expires: 0
/api/*
  Cache-Control: no-store, no-cache, must-revalidate, max-age=0
`;
if (!headersContent.includes('/version.json')) {
  headersContent = headersContent.trim() ? headersContent.trim() + '\n\n' + requiredHeaders : requiredHeaders;
  fs.writeFileSync(headersPath, headersContent, 'utf8');
  console.log(`  → ${path.relative(ROOT, headersPath)}`);
}

console.log('[generate-version] done.');
