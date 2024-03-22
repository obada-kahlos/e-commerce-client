import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        //// light colors
        light_main_color: "",
        light_heading_color: "#484848",
        light_paragraph_color: "",
        light_bg_color: "#ffffff",
        light_secondary_bg_color: "#EFF0F2",
        light_border_color: "#B6B6B6",
        light_boxes_color: "#D9D9D9",

        //// dark colors
        dark_main_color: "",
        dark_heading_color: "#fdfdfd",
        dark_paragraph_color: "",
        dark_bg_color: "#191d2f",
        dark_border_color: "#CCCCCC",
        dark_secondary_bg_color: "#1d2447",
        dark_boxes_color: "#333333",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
