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
        'fluid-xs': 'clamp(0.75rem, 0.7vw + 0.6rem, 0.875rem)',   // 12px -> 14px
        'fluid-sm': 'clamp(0.875rem, 0.8vw + 0.7rem, 1rem)',      // 14px -> 16px
        'fluid-base': 'clamp(1rem, 0.9vw + 0.8rem, 1.125rem)',    // 16px -> 18px
        'fluid-lg': 'clamp(1.125rem, 1vw + 0.9rem, 1.25rem)',     // 18px -> 20px
        'fluid-xl': 'clamp(1.25rem, 1.1vw + 1rem, 1.5rem)',       // 20px -> 24px
        'fluid-2xl': 'clamp(1.5rem, 1.2vw + 1.1rem, 2rem)',       // 24px -> 32px
        'clamp-base': 'clamp(0.875rem, 0.75rem + 1vw, 1.125rem)',
        'clamp-sm': 'clamp(0.75rem, 0.5rem + 1vw, 1rem)',
      },
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 0.5vw + 0.3rem, 0.75rem)',     // 8px -> 12px
        'fluid-sm': 'clamp(0.75rem, 0.7vw + 0.5rem, 1rem)',       // 12px -> 16px
        'fluid-base': 'clamp(1rem, 1vw + 0.75rem, 1.5rem)',       // 16px -> 24px
        'fluid-lg': 'clamp(1.5rem, 1.5vw + 1rem, 2rem)',          // 24px -> 32px
        'fluid-xl': 'clamp(2rem, 2vw + 1.5rem, 3rem)',            // 32px -> 48px
        'fluid-2xl': 'clamp(3rem, 3vw + 2rem, 4rem)',             // 48px -> 64px
        'clamp-mt': 'clamp(1.25rem, 5vw, 2.5rem)',
        'clamp-mt-lg': 'clamp(1.25rem, 7vw, 2.5rem)',
        'clamp-pl': 'clamp(1.25rem, 5vw, 2rem)',
        'fluid-padding': 'clamp(1rem, 1vw + 0.5rem, 1.5rem)',
        'fluid-padding-sm': 'clamp(0.5rem, 0.5vw + 0.25rem, 1rem)',
      },
      screens: {
        'xs': '375px',
        'sm': '500px',
        'md': '768px',
      },
      gridAutoFlow: {
        'col': 'column',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

export default config;