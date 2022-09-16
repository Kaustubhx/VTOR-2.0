/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary_text: '#273f5b',
        secondary_text: '#4b5d73'
      }
    },
  },
  plugins: [],
}