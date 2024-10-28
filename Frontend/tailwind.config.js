/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce1: "bounce 0.6s ease-in-out infinite",
        bounce2: "bounce 0.6s ease-in-out 0.2s infinite",
        bounce3: "bounce 0.6s ease-in-out 0.4s infinite",
      },
    },
  },
  plugins: [],
}