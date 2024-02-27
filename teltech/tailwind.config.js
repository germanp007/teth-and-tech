/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 10s linear infinite",
        spinMedium: "spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};
