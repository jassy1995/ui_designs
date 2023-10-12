/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",

      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxxs: "200px",
      xxs: "337px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      xmd: "800px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}




