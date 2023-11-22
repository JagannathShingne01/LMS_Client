/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#961816",
        secondary: "#e2e2e2",
        textline: "#020617"
      },
    },
  },
  plugins: [require("daisyui"),require("@tailwindcss/line-clamp")],
}

