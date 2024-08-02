/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        gold: {
          light: '#FFD700',
          DEFAULT: '#FFC107',
          dark: '#FFA000'
        },
        silver: {
          light: '#C0C0C0',
          DEFAULT: '#B0B0B0',
          dark: '#A0A0A0'
        }
      }
    },
  },
  plugins: [],
}
