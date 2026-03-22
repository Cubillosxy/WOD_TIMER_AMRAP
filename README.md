# WOD Timer

WOD Timer is a lightweight workout timer for CrossFit-style training sessions.

It supports:

- Clock
- Time Cap
- For Time
- AMRAP
- EMOM
- Tabata

The project includes a browser version and a macOS desktop app built with Tauri.

## Download

If you just want to use the app on macOS, download the latest `.dmg` from GitHub Releases.

## Features

- Clean full-screen timer UI
- Audio countdown and transition cues
- Animated 3D particle background
- Preset workout modes for common training formats
- macOS app packaging with Tauri

## Run In Browser

Open `wod_timer.html` in a browser.

## Run As macOS App

```bash
npm install
npm run app:build
```

The generated app and installer will be created under:

- `src-tauri/target/release/bundle/macos/`
- `src-tauri/target/release/bundle/dmg/`

## Development

```bash
npm install
npm run app:dev
```

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Tauri 2
- Rust

## Release Notes

Source code belongs in the repository.

Generated files do not:

- `node_modules`
- `dist`
- `src-tauri/target`
- built `.app` bundles
- built `.dmg` installers

For public distribution, upload the generated `.dmg` to GitHub Releases instead of committing it into the repository.

## License

[MIT](./LICENSE)
