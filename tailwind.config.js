/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#facc15",
        secondary: "#BF0215",
        tertiary: "#191919",
        bgBlack: "#0A142F",
        light: "#eff6fb",
        accent: "#e6e7f0",
      },
    },
  },
  plugins: [require("daisyui"),require("@tailwindcss/line-clamp")],
}

