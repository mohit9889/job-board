/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: "#000",
        primary: "#2B2B2B",
        secondary: "#4E4E4E",
      },
      white: {
        DEFAULT: "#fff",
        primary: "#f8f8f8",
      },
      violet: "#5424FD",
      red: "#F5001E",
      yellow: "#FCC636",
    },
    extend: {},
  },
  plugins: [],
};
