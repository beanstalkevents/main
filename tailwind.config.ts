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
        "dark-green": "#233c36",
        "mid-green": "#315c52",
        "deep-green": "#2b4a44",
        "light-green": "#cdf765",
        cream: "#fcf9ec",
        beige: "#dfd5bc",
        tan: "#ba9e6e",
        mint: "#c7dccd",
        "near-black": "#141414",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "'Iowan Old Style'", "Georgia", "serif"],
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Helvetica Neue'",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
