<!-- SEO: WOD Timer - CrossFit workout timer, EMOM timer, AMRAP timer, Tabata timer, macOS workout app -->

<div align="center">

# WOD Timer

**WOD Timer is a CrossFit workout timer for EMOM, AMRAP, For Time, Time Cap, Tabata, and clock mode in the browser or as a macOS desktop app.**

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Platform: Web and macOS](https://img.shields.io/badge/Platform-Web%20%7C%20macOS-0f766e.svg)
![Dependencies: Minimal](https://img.shields.io/badge/Dependencies-Minimal-111827.svg)
![Built with Tauri](https://img.shields.io/badge/Desktop-Tauri%202-2563eb.svg)

English | [简体中文](./README.zh-CN.md)

</div>

---

## Why WOD Timer?

| Common problem | How WOD Timer solves it |
| --- | --- |
| Generic stopwatch apps do not match actual WOD formats | Built-in modes cover EMOM, AMRAP, For Time, Time Cap, Tabata, and a plain clock |
| Switching between workout formats is slow | Mode tabs let you jump between formats without changing apps |
| Small mobile timers are hard to read during training | Large full-screen display keeps time visible across the room |
| Standard timers feel flat and easy to ignore | Audio cues and a 3D animated background create stronger workout rhythm |
| Browser-only tools are awkward to launch like real apps | The project also ships as a macOS desktop app via Tauri |

> **TL;DR** — WOD Timer is a focused workout timer for common CrossFit-style sessions. It is small, local, readable, and easy to ship as both a web page and a Mac app.

## Key Features

### Workout Modes

- **Clock mode** keeps a large wall-clock style display visible when you are not running a workout.
- **Time Cap mode** counts down from a fixed cap in minutes.
- **For Time mode** acts like a workout stopwatch.
- **AMRAP mode** counts down a fixed working window.
- **EMOM mode** handles repeating intervals plus round count.
- **Tabata mode** supports alternating work and rest rounds.

### Training Feedback

- **Audio countdown cues** call out the final seconds of a round.
- **Start, rest, and completion tones** give clearer phase transitions.
- **Visual warning state** highlights the last five seconds.

### Desktop Packaging

- **Browser-first frontend** keeps the app simple to understand and easy to tweak.
- **macOS desktop app** is packaged with Tauri for normal app-style launching.
- **GitHub Release workflow** can build and publish a `.dmg` from a version tag.

## Data Safety / How It Works

WOD Timer runs locally. There is no backend, no account system, and no workout data sync.

```text
User input
   |
   v
HTML / CSS / JavaScript UI
   |
   +--> AudioManager (tones and countdown cues)
   |
   +--> ParticleBackground (Three.js visual layer)
   |
   +--> Tauri shell on macOS (optional desktop wrapper)
```

## Quick Start

### Use The Mac App

Download the latest macOS installer from [GitHub Releases](https://github.com/gaoryan86/wod-timer/releases).

### Run In The Browser

Open `wod_timer.html` directly in a browser.

### Build The macOS App

```bash
npm install && npm run app:build
```

### Run The App In Development

```bash
npm install && npm run app:dev
```

## Example Output

```text
Modes: CLOCK | TIME CAP | FOR TIME | AMRAP | EMOM | TABATA

Status: PREPARE
Timer : 00:00:00
Round : ROUND 1 / 10

[ RESET ]   [ START ]
```

## Requirements

- macOS if you want the packaged desktop app
- Node.js and npm if you want to build locally
- Rust toolchain if you want to build the Tauri app yourself
- Internet access for the current frontend asset setup, because the UI loads Google Fonts and Three.js from remote CDNs

## Configuration

| Mode | Inputs | Defaults | Behavior |
| --- | --- | --- | --- |
| Clock | None | N/A | Shows the current time |
| Time Cap | `CAP (MIN)` | `5` | Counts down from a fixed cap |
| For Time | None | N/A | Counts up like a stopwatch |
| AMRAP | `TIME (MIN)` | `10` | Counts down a work window |
| EMOM | `EVERY (SEC)`, `ROUNDS` | `60`, `10` | Repeats intervals and tracks rounds |
| Tabata | Internal settings in code | `20 / 10 / 8` | Alternates work and rest |

## Architecture

```text
.
├── wod_timer.html
├── style.css
├── script.js
├── audio_manager.js
├── background_3d.js
├── package.json
├── scripts/
│   └── prepare-app.mjs
└── src-tauri/
    ├── src/main.rs
    ├── tauri.conf.json
    └── icons/
```

- `wod_timer.html` defines the timer UI.
- `script.js` holds workout mode logic, timers, transitions, and UI state.
- `audio_manager.js` generates local audio cues with Web Audio.
- `background_3d.js` renders the animated particle background with Three.js.
- `src-tauri/` packages the frontend as a macOS desktop app.

## Use Cases

- CrossFit athletes who want a simple fullscreen WOD timer
- Coaches running EMOM, AMRAP, or Tabata sessions in a gym
- Home gym users who want a timer without logging into a service
- Developers who want a small Tauri example wrapping a static frontend
- Makers who want to fork and customize a timer for their own training style

## FAQ

<details>
<summary>Do I need the macOS app to use WOD Timer?</summary>

No. You can open `wod_timer.html` directly in a browser and use the timer without building the desktop app.

</details>

<details>
<summary>Does this project send workout data to a server?</summary>

No. The project is local-only. It does not include a backend, cloud sync, or user accounts.

</details>

<details>
<summary>Why are <code>node_modules</code> and <code>src-tauri/target</code> not committed?</summary>

Those folders are generated build artifacts and dependency caches. They are large, reproducible, and should stay out of the repository.

</details>

<details>
<summary>How do I publish a new downloadable version?</summary>

Create and push a version tag such as `v0.1.1`. The GitHub Actions workflow will build the macOS app and upload a `.dmg` to GitHub Releases.

</details>

<details>
<summary>Will WOD Timer work offline?</summary>

The local app logic is local, but the current frontend references Google Fonts and a Three.js CDN. If you want fully offline behavior, those assets should be vendored into the repo.

</details>

## Contributing

Issues and pull requests are welcome. If you plan to change workout logic or packaging behavior, open a short discussion first so the timer modes and release flow stay consistent.

## License

Released under the [MIT License](./LICENSE).

---

<div align="center">
<strong>WOD Timer</strong> — sharp timing for hard training.
</div>
