import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      colors: {
        primary: "#D9D9D9",
        darkGray: "hsla(0, 0%, 20%, 1)",
        lightGray: "hsla(0, 0%, 40%, 1)",
        dark: "hsla(0, 0%, 13%, 1)",
        green: "hsla(170, 82%, 48%, 1)",
        paleGreen: "hsla(170, 78%, 23%, 0.3)",
        lightGreen: "hsla(170, 100%, 87%, 1)",
        light: "hsla(172, 57%, 90%, 1)",
        yellow: "hsla(45, 97%, 50%, 1)",
        lightPurple: "hsla(0, 24%, 94%, 1)",
        darkPurple: "#BC47FF",
      },
      backgroundImage: {
        gradient1:
          "linear-gradient(to bottom, hsla(172, 57%, 90%, 1) 80%, hsla(170, 82%, 48%, 1) 20%);",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
