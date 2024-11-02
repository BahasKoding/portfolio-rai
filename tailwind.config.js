/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
      },
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        secondary : '#64748b',
      },
    },
  },
  plugins: [],
}

