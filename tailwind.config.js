/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFD08A',
          DEFAULT: '#C79A3B',
          dark: '#5D3F12',
        },
        secondary: {
          light: '#A3A3A3',
          DEFAULT: '#2E2E2E',
          dark: '#101010',
        },
        neutral: {
          light: '#F27A66',
          DEFAULT: '#A4412F',
          dark: '#4A1F16',
        },

        dark: '#000000',
        light: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
