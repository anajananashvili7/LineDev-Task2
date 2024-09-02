/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{js,jsx,ts,tsx}", // Matches all JS, JSX, TS, and TSX files in the root directory
    "./index.html",       // Matches the index.html file in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
