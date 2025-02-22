/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deniz': {
          50: '#EAF5FE', 
          100: '#D4EBFD',
          500: '#1D8DE7',
          600: '#1673B9',
          700: '#1976D2',
        }
      }
    },
  },
  plugins: [],
}