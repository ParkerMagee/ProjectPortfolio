/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        redOrange: "hsl(22, 100%, 42%)",
        veryDarkGray: "hsl(22, 10%, 3%)",
        darkGray: "hsl(30, 3%, 8%)",
        mediumGray: "hsl(24, 5%, 15%)",
        lightBeige: "hsl(22, 50%, 75%)",
        yellowOrange: "hsl(39, 75%, 50%)",
        grayBeige: "hsl(22, 10%, 70%)",
      },
      fontFamily: {
        audio: ["Audiowide", "cursive"],
        russo: ["Russo One", "sans-serif"],
        changa: ["Changa", "sans-serif"],
      },
      listStyleType: {
        point: "'✑'",
      },
    },
  },
  plugins: [],
};
