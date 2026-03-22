<!-- SEO: WOD Timer - CrossFit 训练计时器, EMOM 计时器, AMRAP 计时器, Tabata 计时器, macOS 健身应用 -->

<div align="center">

# WOD Timer

**WOD Timer 是一个为 CrossFit 和日常体能训练准备的计时器，支持 EMOM、AMRAP、For Time、Time Cap、Tabata 等常见训练模式，可直接在浏览器中使用，也可以作为 macOS App 启动。**

![许可证: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![平台: Web and macOS](https://img.shields.io/badge/Platform-Web%20%7C%20macOS-0f766e.svg)
![依赖: Minimal](https://img.shields.io/badge/Dependencies-Minimal-111827.svg)
![桌面端: Tauri 2](https://img.shields.io/badge/Desktop-Tauri%202-2563eb.svg)

[English](./README.md) | 简体中文

</div>

---

## 为什么用 WOD Timer？

| 你可能会遇到的问题 | WOD Timer 怎么解决 |
| --- | --- |
| 普通秒表不适合真实训练节奏 | 内置 EMOM、AMRAP、For Time、Time Cap、Tabata 和时钟模式，打开就能用 |
| 训练中切换模式麻烦，容易打断节奏 | 顶部模式标签可以快速切换，不用来回找别的 App |
| 手机计时器太小，离远一点就看不清 | 大字号全屏显示，放在训练区另一头也能一眼看到 |
| 计时反馈太弱，最后几秒没有压迫感 | 倒计时提示音、开始音、休息音和完成音把节奏拉起来 |
| 网页工具能用，但不像真正 App 那样顺手 | 这个项目同时提供浏览器版和基于 Tauri 的 macOS 桌面版 |

> **一句话总结**：WOD Timer 就是一个专门为训练场景做的计时器。它够轻、够直观、够好启动，不需要账号，不需要联网同步，打开就能练。

## 核心功能

### 训练模式

- **Clock**：平时可当大号时钟使用。
- **Time Cap**：按设定时长倒计时，适合有限时训练。
- **For Time**：正向计时，适合“做完为止”的训练。
- **AMRAP**：在固定时间内尽可能多完成回合。
- **EMOM**：按固定间隔循环，并显示当前回合。
- **Tabata**：自动处理 work / rest 交替。

### 训练反馈

- **最后几秒倒计时提示音**，不用一直盯着屏幕。
- **开始、休息、完成三类音效**，训练阶段更清楚。
- **最后五秒视觉警示**，冲刺时更有节奏感。

### 桌面版支持

- **前端结构简单**，源码很直白，方便继续改。
- **可封装为 macOS App**，像普通应用一样双击启动。
- **支持 GitHub Release 自动发布**，打 tag 后可自动生成 `.dmg`。

## 数据与运行方式

WOD Timer 是本地运行的小工具，没有后端、没有账号系统，也不会把训练数据传到云端。

```text
用户输入
   |
   v
HTML / CSS / JavaScript 界面
   |
   +--> AudioManager（提示音和倒计时）
   |
   +--> ParticleBackground（Three.js 动态背景）
   |
   +--> Tauri 壳层（macOS 桌面版封装，可选）
```

## 快速开始

### 直接下载 Mac 版

从 [GitHub Releases](https://github.com/gaoryan86/wod-timer/releases) 下载最新的 macOS 安装包。

### 在浏览器里直接用

打开 `wod_timer.html` 即可。

### 本地构建 macOS App

```bash
npm install && npm run app:build
```

### 开发模式运行

```bash
npm install && npm run app:dev
```

## 界面示意

```text
Modes: CLOCK | TIME CAP | FOR TIME | AMRAP | EMOM | TABATA

Status: PREPARE
Timer : 00:00:00
Round : ROUND 1 / 10

[ RESET ]   [ START ]
```

## 环境要求

- 如果你只是使用桌面版，需要 macOS
- 如果你想自己构建，需要 Node.js 和 npm
- 如果你要打包 Tauri App，需要 Rust toolchain
- 当前前端会从远程 CDN 加载 Google Fonts 和 Three.js，因此如果要追求完整离线体验，后续还需要把这些资源本地化

## 配置说明

| 模式 | 可设置项 | 默认值 | 说明 |
| --- | --- | --- | --- |
| Clock | 无 | N/A | 显示当前时间 |
| Time Cap | `CAP (MIN)` | `5` | 固定时长倒计时 |
| For Time | 无 | N/A | 正向计时 |
| AMRAP | `TIME (MIN)` | `10` | 固定训练窗口倒计时 |
| EMOM | `EVERY (SEC)`、`ROUNDS` | `60`、`10` | 固定间隔循环并记录回合 |
| Tabata | 代码内置参数 | `20 / 10 / 8` | work / rest 自动切换 |

## 项目结构

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

- `wod_timer.html`：页面结构和主要界面
- `script.js`：计时逻辑、模式切换、状态管理
- `audio_manager.js`：提示音和倒计时音效
- `background_3d.js`：Three.js 粒子背景
- `src-tauri/`：把网页封装成 macOS App 的配置和入口

## 适合谁用

- 想找一个全屏 WOD 计时器的 CrossFit 训练者
- 需要带 EMOM、AMRAP、Tabata 课程的教练
- 不想开一堆复杂功能，只想“打开就练”的家庭健身用户
- 想研究“静态前端 + Tauri 桌面封装”这种做法的开发者
- 想在现有基础上继续定制自己训练工具的人

## FAQ

<details>
<summary>一定要安装 macOS App 才能用吗？</summary>

不用。直接打开 `wod_timer.html` 就能在浏览器中使用。

</details>

<details>
<summary>它会把训练数据上传到服务器吗？</summary>

不会。这个项目没有后端、没有云同步，也没有账号系统，核心逻辑都在本地运行。

</details>

<details>
<summary>为什么 <code>node_modules</code> 和 <code>src-tauri/target</code> 不放进仓库？</summary>

因为它们都是可以重新生成的依赖和构建产物，体积大，而且不属于源码本身。公开仓库保留源码，才是更标准的做法。

</details>

<details>
<summary>怎么发布新的可下载版本？</summary>

创建并推送一个版本标签，例如 `v0.1.1`。GitHub Actions 会自动构建 macOS App，并把生成的 `.dmg` 上传到 GitHub Releases。

</details>

<details>
<summary>它能完全离线运行吗？</summary>

核心功能是本地的，但当前版本仍依赖 Google Fonts 和 Three.js CDN。若要做到真正的完全离线，后续需要把这些资源改为随仓库本地分发。

</details>

## 贡献

欢迎提交 issue 和 pull request。如果你准备改训练模式逻辑，或者调整打包与发布流程，建议先开一个简短讨论，避免把已有行为改乱。

## 许可证

本项目基于 [MIT License](./LICENSE) 开源。

---

<div align="center">
<strong>WOD Timer</strong> —— 训练一开始，计时就该利落一点。
</div>
