#!/usr/bin/env node

// Simple wrapper to create a zip archive using system `zip`.
// Usage:
//   node buat-zip.js output.zip [path1 path2 ...]
//   ./buat-zip.js output.zip src dist

const { spawnSync } = require('child_process');
const path = require('path');

const argv = process.argv.slice(2);
if (argv.length === 0) {
  console.error('Usage: buat-zip.js <output.zip> [paths...]');
  process.exit(2);
}

const out = argv[0];
const inputs = argv.length > 1 ? argv.slice(1) : ['.'];

function runZip(outFile, inputs) {
  const args = ['-r', outFile, ...inputs];
  const res = spawnSync('zip', args, { stdio: 'inherit' });
  return res.status;
}

function ensureZipAvailable() {
  const which = spawnSync(process.platform === 'win32' ? 'where' : 'which', ['zip']);
  return which.status === 0;
}

if (ensureZipAvailable()) {
  const code = runZip(out, inputs);
  process.exit(code === null ? 1 : code);
} else {
  console.error('`zip` command not found on PATH. Please install `zip` or use Node + a zip library.');
  process.exit(127);
}
