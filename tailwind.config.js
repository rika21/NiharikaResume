/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "resume-header-beige":"#fffaa0"
      },
      screens: {
        "lg-large":"1440px"
      },
    },
  },
  plugins: [],
}

