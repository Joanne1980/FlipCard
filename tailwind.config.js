/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        machinaBold: ["machina-bold", "sans-serif"],
        machina: ["machina", "sans-serif"],
        slalom: ["slalom", "sans-serif"],
        slalomBold: ["slalom-bold", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        primary: {
          50: "#fcfdff",
          100: "#fafcff",
          200: "#f2f6fe",
          300: "#eaf1fe",
          400: "#dae7fd",
          500: "#cadcfc",
          600: "#b6c6e3",
          700: "#98a5bd",
          800: "#798497",
          900: "#636c7b",
        },
        alt: {
          50: "#f9fbff",
          100: "#f3f8fe",
          200: "#e2edfe",
          300: "#d0e2fd",
          400: "#adccfb",
          500: "#8ab6f9",
          600: "#7ca4e0",
          700: "#6889bb",
          800: "#536d95",
          900: "#44597a",
        },
        secondary: {
          50: "#fff7f6",
          100: "#ffefed",
          200: "#ffd6d3",
          300: "#ffbeb8",
          400: "#ff8d82",
          500: "#ff5c4d",
          600: "#e65345",
          700: "#bf453a",
          800: "#99372e",
          900: "#7d2d26",
        },
      },
    },
  },
  plugins: [],
};
