<!-- SEO: WOD Timer - CrossFit 训练计时器, EMOM 计时器, AMRAP 计时器, Tabata 计时器, macOS 健身应用 -->

<div align="center">

# WOD Timer

**WOD Timer 是一个适用于 EMOM、AMRAP、For Time、Time Cap、Tabata 和时钟模式的 CrossFit 训练计时器，可在浏览器中运行，也可作为 macOS 桌面 App 使用。**

![许可证: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![平台: Web and macOS](https://img.shields.io/badge/Platform-Web%20%7C%20macOS-0f766e.svg)
![依赖: Minimal](https://img.shields.io/badge/Dependencies-Minimal-111827.svg)
![桌面端: Tauri 2](https://img.shields.io/badge/Desktop-Tauri%202-2563eb.svg)

[English](./README.md) | 简体中文

</div>

---

## 为什么是 WOD Timer？

| 常见问题 | WOD Timer 的解决方式 |
| --- | --- |
| 通用秒表不贴合真实 WOD 训练格式 | 内置 EMOM、AMRAP、For Time、Time Cap、Tabata 和时钟模式 |
| 训练中切换计时模式很麻烦 | 顶部模式标签可快速切换，无需换 App |
| 普通手机计时器字体太小，远处看不清 | 全屏大字号显示，适合训练时抬头就看 |
| 普通计时器反馈太弱，训练节奏不明显 | 音效提示和 3D 动态背景提供更强的阶段感 |
| 网页工具不像真正 App 那样方便启动 | 项目同时提供基于 Tauri 的 macOS 桌面版 |

> **TL;DR** — WOD Timer 是一个专门为 CrossFit 风格训练设计的计时器。它轻量、本地运行、界面清晰，同时支持网页版和 Mac App。

## 核心功能

### 训练模式

- **Clock 模式** 在非训练状态下显示大号时钟。
- **Time Cap 模式** 按设定分钟数倒计时。
- **For Time 模式** 像秒表一样正计时。
- **AMRAP 模式** 按固定训练时长倒计时。
- **EMOM 模式** 支持固定间隔和回合数。
- **Tabata 模式** 支持 work / rest 轮换。

### 训练反馈

- **倒计时音效** 会提示最后几秒。
- **开始、休息、结束音效** 让阶段切换更明确。
- **最后五秒视觉警示** 让你更容易感知收尾阶段。

### 桌面封装

- **浏览器优先的前端结构** 简单、直接、易改。
- **macOS 桌面 App** 通过 Tauri 打包，可像普通应用一样启动。
- **GitHub Release 自动发布** 支持通过版本标签自动构建并上传 `.dmg`。

## 数据安全 / 工作方式

WOD Timer 完全本地运行，没有后端、没有账号系统，也没有训练数据同步。

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
   +--> Tauri 壳层（可选的 macOS 桌面封装）
```

## 快速开始

### 直接使用 Mac App

从 [GitHub Releases](https://github.com/gaoryan86/wod-timer/releases) 下载最新版 macOS 安装包。

### 在浏览器中运行

直接打开 `wod_timer.html`。

### 构建 macOS App

```bash
npm install && npm run app:build
```

### 开发模式运行

```bash
npm install && npm run app:dev
```

## 示例界面

```text
Modes: CLOCK | TIME CAP | FOR TIME | AMRAP | EMOM | TABATA

Status: PREPARE
Timer : 00:00:00
Round : ROUND 1 / 10

[ RESET ]   [ START ]
```

## 环境要求

- 如果要使用桌面版，需要 macOS
- 如果要本地构建，需要 Node.js 和 npm
- 如果要自己构建 Tauri App，需要 Rust toolchain
- 目前前端会从远程 CDN 加载 Google Fonts 和 Three.js，所以当前版本想完整运行仍建议有网络

## 配置说明

| 模式 | 输入项 | 默认值 | 行为 |
| --- | --- | --- | --- |
| Clock | 无 | N/A | 显示当前时间 |
| Time Cap | `CAP (MIN)` | `5` | 固定上限倒计时 |
| For Time | 无 | N/A | 正向计时 |
| AMRAP | `TIME (MIN)` | `10` | 固定训练窗口倒计时 |
| EMOM | `EVERY (SEC)`、`ROUNDS` | `60`、`10` | 固定间隔循环并记录回合 |
| Tabata | 代码内置参数 | `20 / 10 / 8` | work / rest 交替 |

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

- `wod_timer.html` 负责界面结构。
- `script.js` 负责训练模式逻辑、计时、状态切换和 UI 更新。
- `audio_manager.js` 用 Web Audio 生成本地提示音。
- `background_3d.js` 用 Three.js 渲染动态粒子背景。
- `src-tauri/` 负责把前端打包成 macOS 桌面 App。

## 适用场景

- 想要一个全屏 WOD 计时器的 CrossFit 训练者
- 在馆里带 EMOM、AMRAP、Tabata 课程的教练
- 不想登录服务、只想直接训练的家庭健身用户
- 想参考“静态前端 + Tauri 封装”的开发者
- 想基于现有计时器继续定制自己训练工具的人

## FAQ

<details>
<summary>一定要安装 macOS App 才能用吗？</summary>

不用。直接在浏览器里打开 `wod_timer.html` 就能使用。

</details>

<details>
<summary>这个项目会把训练数据传到服务器吗？</summary>

不会。它是本地运行项目，没有后端、没有云同步，也没有账号系统。

</details>

<details>
<summary>为什么 <code>node_modules</code> 和 <code>src-tauri/target</code> 不提交到仓库？</summary>

因为它们都是可再生成的依赖和构建产物，体积大、没必要进源码仓库，公开仓库保留源码本身就够了。

</details>

<details>
<summary>怎么发布新的可下载版本？</summary>

创建并推送一个版本标签，例如 `v0.1.1`。GitHub Actions 会自动构建 macOS App，并把 `.dmg` 上传到 GitHub Releases。

</details>

<details>
<summary>WOD Timer 能完全离线运行吗？</summary>

核心逻辑是本地的，但当前前端依赖 Google Fonts 和 Three.js CDN。若要完全离线，需要把这些资源改成本地随仓库分发。

</details>

## 贡献

欢迎提交 issue 和 pull request。如果你打算改训练模式逻辑或发布流程，建议先开一个简短讨论，避免把计时行为改乱。

## 许可证

项目采用 [MIT License](./LICENSE) 开源。

---

<div align="center">
<strong>WOD Timer</strong> —— 为高强度训练准备的利落计时器。
</div>
