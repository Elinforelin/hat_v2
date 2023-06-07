/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "main-color": "rgb(128, 128, 128)",
        "main-color-hover": "rgb(77,77,77)",
      },
      textColor: {
        "main-text-color": "#fff",
      },
      keyframes: {
        "title-transparent": {
          "100%": {
            fontSize: "95px",
            color: "transparent",
          },
        },
        "button-left": {
          "0%": {
            left: "0",
          },
          "100%": {
            left: " 1000px",
          },
        },
        "button-right": {
          "0%": {
            right: "0",
          },
          "100%": {
            right: " 1000px",
          },
        },
      },
      animation: {
        expand: "title-transparent 2s linear",
        "button-left": "button-left 2s linear",
        "button-right": "button-right 2s linear",
      },
    },
  },
  plugins: [],
};
