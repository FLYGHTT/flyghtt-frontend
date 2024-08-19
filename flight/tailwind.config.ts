import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D9D9D9",
        darkGray: "hsla(0, 0%, 20%, 1)",
        lightGray: "hsla(0, 0%, 40%, 1)",
        dark: "hsla(0, 0%, 13%, 1)",
        green: "hsla(170, 82%, 48%, 1)",
        paleGreen: "hsla(170, 78%, 23%, 0.3)",
        lightGreen: "hsla(170, 100%, 87%, 1)",
        light:"hsla(172, 57%, 90%, 1)",
        yellow: "hsla(45, 97%, 50%, 1)",
        lightPurple: "hsla(0, 24%, 94%, 1)"
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
