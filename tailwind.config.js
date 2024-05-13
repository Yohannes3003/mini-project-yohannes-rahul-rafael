/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Murecho, sans-serif',
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        'color-primary': '#25A18E',
        'color-dark': '#152C5B',
        'color-accent': '#4D7DF7',
        'color-danger': '#EF6D6D',
        'color-light': '#B0B0B0',
      },
    },
  },
  plugins: [],
};
