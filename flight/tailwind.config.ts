import type { Config } from "tailwindcss";

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
        dark: "hsla(0, 0%, 13%, 1)"
      },
    },
  },
  plugins: [],
};
export default config;
