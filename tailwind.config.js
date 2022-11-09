/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      dark: "#171717",
      primary: "#a16207",
      primaryLight: "#ca8a04",
      primaryDark: "#854d0e",
    },
    extend: {},
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
