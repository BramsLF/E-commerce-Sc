/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        novecento: ["Novecento", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      height: {
        "screen-80px": "calc(100vh - 80px)",
      },
      plugins: [],
    },
  },
};
