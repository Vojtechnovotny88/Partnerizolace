/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f97316', // Orange-500
          dark: '#0f172a',   // Slate-900
          light: '#f8fafc',  // Slate-50
        }
      }
    },
  },
  plugins: [],
}