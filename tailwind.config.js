const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': '#3F583B',
        'dirt': '#241F1C',
        'lightbrown': '#B6A998',
      },
      fontFamily: {
        sans: ['var(--font-aleo)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}