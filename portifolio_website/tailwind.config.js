/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'dark-blue': '#0F172A',
          'brand-blue': '#2563EB',
        },
      },
    },
    plugins: [],
  }
  