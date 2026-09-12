#!/usr/bin/env node
// Convert every hex color in src/themes/*.scss to OKLCH, matching the format
// used by the default @new-ui/colors themes, e.g. `oklch(96.72% 0 0)` and
// `oklch(66.85% 0.2188 27.86deg)` (percent lightness, 4-dp chroma, 2-dp hue in
// degrees; achromatic colors collapse to `0 0`).

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const themesDir = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'src',
  'themes'
);

const HEX = /#([0-9a-fA-F]{3,8})\b/g;

function parseHex(hex) {
  let h = hex;
  if (h.length === 3 || h.length === 4) {
    h = h
      .split('')
      .map((c) => c + c)
      .join('');
  }
  if (h.length !== 6 && h.length !== 8) return null;
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
  return [r, g, b, a];
}

const toLinear = (c) =>
  c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;

function rgbToOklch(r, g, b) {
  const lr = toLinear(r);
  const lg = toLinear(g);
  const lb = toLinear(b);

  const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const A = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const B = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

  const C = Math.sqrt(A * A + B * B);
  let H = (Math.atan2(B, A) * 180) / Math.PI;
  if (H < 0) H += 360;
  return [L, C, H];
}

function format([r, g, b, a]) {
  const [L, C, H] = rgbToOklch(r, g, b);
  const lightness = `${(L * 100).toFixed(2)}%`;
  const chromaRounded = C.toFixed(4);
  const achromatic = Number.parseFloat(chromaRounded) === 0;
  // `deg` on the hue keeps stylelint's hue-degree-notation happy, even for greys.
  const chroma = achromatic ? '0' : chromaRounded;
  const hue = achromatic ? '0deg' : `${H.toFixed(2)}deg`;
  const color = `oklch(${lightness} ${chroma} ${hue}`;
  return a < 1 ? `${color} / ${Number.parseFloat(a.toFixed(4))})` : `${color})`;
}

let totalFiles = 0;
let totalColors = 0;

const files = (await readdir(themesDir)).filter((f) => f.endsWith('.scss'));
for (const file of files) {
  const path = join(themesDir, file);
  const source = await readFile(path, 'utf8');
  let count = 0;
  const next = source.replace(HEX, (match, hex) => {
    const rgba = parseHex(hex);
    if (!rgba) return match;
    count += 1;
    return format(rgba);
  });
  if (count > 0) {
    await writeFile(path, next);
    totalFiles += 1;
    totalColors += count;
    console.log(`${file}: ${count} colors`);
  }
}

console.log(
  `\nConverted ${totalColors} hex values across ${totalFiles} files.`
);
