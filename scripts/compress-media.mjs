import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, renameSync, rmSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const rootDir = resolve(import.meta.dirname, "..");
const mediaDir = resolve(rootDir, "assets/media");

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(fullPath));
    } else if (entry.isFile() && !entry.name.startsWith(".")) {
      results.push(fullPath);
    }
  }
  return results;
}

function formatMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

const files = walk(mediaDir);
let totalBefore = 0;
let totalAfter = 0;

for (const filePath of files) {
  const ext = extname(filePath).toLowerCase();
  const beforeSize = statSync(filePath).size;
  totalBefore += beforeSize;

  if (ext === ".mp3") {
    const outPath = filePath.replace(/\.mp3$/i, ".m4a");
    console.log(`[Audio] Compressing ${filePath} (${formatMB(beforeSize)})...`);
    execFileSync("/usr/bin/afconvert", [
      "-f",
      "m4af",
      "-d",
      "aach",
      "-b",
      "64000",
      filePath,
      outPath,
    ]);
    const afterSize = statSync(outPath).size;
    rmSync(filePath);
    totalAfter += afterSize;
    console.log(`  -> ${outPath} (${formatMB(afterSize)})`);
  } else if (ext === ".mp4") {
    const tmpOut = filePath.replace(/\.mp4$/i, ".tmp.m4v");
    console.log(`[Video] Compressing ${filePath} (${formatMB(beforeSize)})...`);
    if (existsSync(tmpOut)) rmSync(tmpOut);
    execFileSync("/usr/bin/avconvert", [
      "-s",
      filePath,
      "-p",
      "PresetAppleM4VCellular",
      "-o",
      tmpOut,
      "--replace",
    ]);
    const afterSize = statSync(tmpOut).size;
    if (afterSize < beforeSize) {
      rmSync(filePath);
      renameSync(tmpOut, filePath);
      totalAfter += afterSize;
      console.log(`  -> ${filePath} (${formatMB(afterSize)})`);
    } else {
      rmSync(tmpOut);
      totalAfter += beforeSize;
      console.log(`  -> Kept original (${formatMB(beforeSize)})`);
    }
  } else {
    totalAfter += beforeSize;
  }
}

console.log(
  `\nDone! Total media size: ${formatMB(totalBefore)} -> ${formatMB(totalAfter)} (${(
    (1 - totalAfter / totalBefore) *
    100
  ).toFixed(1)}% reduction)`
);
