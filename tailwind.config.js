const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, './layout/**/*.{html,js,ts,jsx,tsx,mdx}'),
    join(__dirname, './components/**/*.{html,js,ts,jsx,tsx,mdx}'),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0082F1',
        accent: '#FF7757',
        dark: '#17191A',
        'dark-gray': '#1b1b1b',
        gray: '#f7f7f7',
        light: '#F9FBFC',
      },
    },
  },
  plugins: [],
};
