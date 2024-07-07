/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4D148C"
      },
      backgroundImage: {
        'main-banner': "url(/images/Cover-Template.gif)"
      }
    },
  },
  plugins: [],
}