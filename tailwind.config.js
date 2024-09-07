import daisyui from 'daisyui';

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
        // primary: "#4D148C"
        primary: "#802081",
        dropShadow: {
          '3xl': '0 35px 35px #802081',
          '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
          ]
        }
      },
      backgroundImage: {
        'main-banner': "url(/images/Cover-Template.gif)"
      }
    },
  },
  plugins: [
    daisyui
  ],
}