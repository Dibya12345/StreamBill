/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",

        "background-light": "#f7f7f7",
        "background-dark": "#191919",

        "text-light-primary": "#0d191b",
        "text-light-secondary": "#4c8d9a",

        "text-dark-primary": "#f8fbfc",
        "text-dark-secondary": "#a2bdc2",

        "card-light": "#ffffff",
        "card-dark": "#1a2c2f",

        "border-light": "#e7f1f3",
        "border-dark": "#2a3f44",
      },

      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },

      boxShadow: {
        "neumorphic-light": "5px 5px 10px #d5d7d7, -5px -5px 10px #ffffff",
        "neumorphic-dark": "5px 5px 10px #0a1315, -5px -5px 10px #162b2f",
      },
    },
  },
  plugins: [],
};
