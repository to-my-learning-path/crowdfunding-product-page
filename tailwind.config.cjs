/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      moderateCyan: "hsl(176, 50%, 47%)",
      darkCyan: "hsl(176, 72%, 28%)",
      black: "hsl(0, 0%, 0%)",
      darkGray: "hsl(0, 0%, 48%)",
    },
    fontFamily: {
      commissioner: ["Commissioner", "sans-serif"],
    },
    fontWeight: {
      400: "400",
      500: "500",
      700: "700",
    },
    extend: {},
  },
  plugins: [],
};
