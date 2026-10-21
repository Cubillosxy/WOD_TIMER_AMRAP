import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const distDir = resolve(rootDir, "dist");

const filesToCopy = [
  "assets",
  "audio_manager.js",
  "back.html",
  "background_3d.js",
  "index.html",
  "offline_tools.js",
  "script.js",
  "style.css",
  "wod_timer.html",
];

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

for (const relativePath of filesToCopy) {
  const sourcePath = resolve(rootDir, relativePath);

  if (!existsSync(sourcePath)) {
    throw new Error(`Missing required app asset: ${relativePath}`);
  }

  cpSync(sourcePath, resolve(distDir, relativePath), { recursive: true });
}
