/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F38181", // Vibrant Orange-Red
        secondary: "#EAFFD0", // Rich cashew
        accent: "#95E1D3", // Fresh Green
        background: "#f0f8ff", // Light blue
        text: "#2C3E50", // Dark Slate
        highlight: "#F1C40F", // Bright Yellow
        white: "#fff",
        black: "#000",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "-0.015em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "-0.005em" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.005em" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0.005em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "0.005em" }],
        "3xl": [
          "1.875rem",
          { lineHeight: "2.25rem", letterSpacing: "0.005em" },
        ],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "0.005em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
      },

      fontFamily: {
        sans: ["Open Sans", "serif"], // Default sans font
        anton: ["Anton", "serif"],
      },
    },
  },
  plugins: [],
};
