/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        navResponsive: "885px",
      },
      animation: {
        spinSlow: "spin 10s linear infinite",
        spinMedium: "spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};
