import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid': 'clamp(1rem, 1.2vw + 0.8rem, 1.5rem)', // 16px -> 24px
        'fluid-lg': 'clamp(0.8rem, 1vw + 1rem, 1.75rem)', // 18px -> 28px
        'fluid-xl': 'clamp(1rem, 1.2vw + 0.8rem, 1.5rem)', // 16px -> 24px
      },
    },
  },
  plugins: [],
};

export default config;