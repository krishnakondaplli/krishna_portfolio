/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "move-left": "move-left 90s linear infinite",
      },
      screens: {
        xs: "344px", // Custom small screen (344px)
        "xs-lg": "499px", // Custom breakpoint (499px)
      },
      spacing: {
        "-25rem": "-25rem", // Custom negative margin
      },
    },
  },
  plugins: [],
};
