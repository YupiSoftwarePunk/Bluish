/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#020617',
          dark: '#0f172a',
          muted: '#1e293b',
          accent: '#38bdf8',
          glow: '#0ea5e9',
        }
      },
    },
  },
  plugins: [],
}