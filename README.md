# TypeScript 3D Game Starter

TypeScript 3D Game Starter is a starter project for building 3D games with TypeScript. It is designed to let you ship the same codebase both to the Web and as a native desktop application.

## 🚀 Technologies

- **TypeScript** for application code and type safety
- **Biome** for formatting and linting
- **Vite** for fast local development and optimized Web builds
- **Tauri** for packaging the project as a native desktop application
- **Three.js** for 3D rendering, cameras, lights, meshes, and scene management

## 📋 Prerequisites

Before running the project, make sure you have:

- **Node.js** 20.19.0 or higher
- **npm** 10.8.2 or higher
- **Rust** 1.77.2 or higher

## ✨ Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/luckasnix/typescript-3d-game-starter.git
cd typescript-3d-game-starter
npm install
```

## 🌐 Run on the Web

Start the Vite development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:1420
```

To create a production Web build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 💻 Run as a Desktop App

To start the project in Tauri development mode:

```bash
npm run tauri dev
```

This will run the Vite frontend together with the native Tauri shell.

To create a compiled desktop build:

```bash
npm run tauri build
```

The generated desktop bundles will be created by Tauri for your current platform.
