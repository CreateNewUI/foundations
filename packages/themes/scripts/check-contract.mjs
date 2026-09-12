#!/usr/bin/env node
// Build-time completeness check for @new-ui/themes.
//
// Parses the canonical token list from src/_contract.scss and verifies that
// every compiled per-theme stylesheet in dist/themes/ declares all of them.
// Exits non-zero (failing the build) if any theme is missing a token, so an
// incomplete skin can never be published.

import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contractPath = join(root, 'src', '_contract.scss');
const themesDir = join(root, 'dist', 'themes');

function requiredTokens() {
  const src = readFileSync(contractPath, 'utf8');
  const tokens = new Set();
  for (const match of src.matchAll(/^\/\/\s+(--[a-z0-9-]+)\s*$/gm)) {
    tokens.add(match[1]);
  }
  if (tokens.size === 0) {
    throw new Error(`No tokens parsed from ${contractPath}`);
  }
  return [...tokens];
}

function definedTokens(css) {
  const tokens = new Set();
  for (const match of css.matchAll(/(--[a-z0-9-]+)\s*:/g)) {
    tokens.add(match[1]);
  }
  return tokens;
}

const required = requiredTokens();

let files;
try {
  files = readdirSync(themesDir).filter((f) => f.endsWith('.css') && !f.endsWith('.map'));
} catch {
  console.error(`✗ Missing build output: ${themesDir}. Run the theme build first.`);
  process.exit(1);
}

if (files.length === 0) {
  console.error(`✗ No compiled themes found in ${themesDir}.`);
  process.exit(1);
}

let failed = false;
for (const file of files.sort()) {
  const css = readFileSync(join(themesDir, file), 'utf8');
  const defined = definedTokens(css);
  const missing = required.filter((token) => !defined.has(token));
  if (missing.length > 0) {
    failed = true;
    console.error(`✗ ${file} is missing ${missing.length} token(s): ${missing.join(', ')}`);
  } else {
    console.log(`✓ ${file} defines all ${required.length} contract tokens`);
  }
}

if (failed) {
  console.error('\nContract check failed. Every theme must define the full token contract.');
  process.exit(1);
}

console.log(`\nAll ${files.length} theme(s) satisfy the ${required.length}-token contract.`);
