// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#7696A8",
        darker: "#2c2c2c",
        dark: "#333333",
        light: "#E8E8E8",
        accent: "#49C7C9",
        white: "#ffffff",
      },
      dropShadow: {
        primary: "0 35px 35px rgba(118, 149, 167, 0.45)",
      },
    },
    fontFamily: {
      "league-spartan": "'League Spartan'",
      "libre-baskerville-italic": "LibreBaskerville-Italic",
      "libre-baskerville-regular": "LibreBaskerville-Regular",
    },
  },
  plugins: [],
};
