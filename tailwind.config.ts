import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "grid-cols-auto-fit": (value) => ({
            gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
          }),
        },
        { values: theme("spacing") }
      );
    }),
  ],
};
export default config;
