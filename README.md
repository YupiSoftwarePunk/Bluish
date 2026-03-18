# Father of Peace — Bluish

A minimalist, high-performance web experience developed for the "Father of Peace" project. This application features a synchronized lyrics and a glassmorphism-inspired UI.

## Tech Stack

* **HTML5**
* **JavaScript (ES6+)**
* **Tailwind CSS 3**
* **Vite**

## Architecture: Component-Based Vanilla JS

This project follows a **Component-Based Architecture** without the overhead of heavy frameworks. 
* **Modular Design**: Every UI element (Header, Player, Lyrics, About block) is isolated into its own JavaScript module.
* **Dynamic Rendering**: Components are created as DOM elements and injected into a single `#app` entry point.
* **State Management**: Real-time synchronization between the audio engine and the UI components.

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/YupiSoftwarePunk/Bluish.git
cd Bluish
```

### 2. Install Dependencies
The project uses **npm** to manage Tailwind CSS and build tools.
```bash
npm install
```

### 3. Tailwind CSS 3 Setup
If you are setting it up from scratch, ensure Tailwind is initialized:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 4. Running the Project
To start the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

## Project Structure

* `index.html` — The main entry point.
* `src/main.js` — Orchestrates the rendering of components.
* `src/components/` — Contains individual JS modules (Header.js, Player.js, etc.).
* `src/styles/` — Global CSS and Tailwind directives.
* `src/assets/` — Media files (Videos, Audio, Images).

## Features

* **Synchronized Lyrics**: Real-time lyric display mapped to audio timestamps.
* **Glassmorphism UI**: Minimalist panels with backdrop-blur and neon accents.