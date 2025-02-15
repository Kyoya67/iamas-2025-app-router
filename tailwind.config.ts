import type { Config } from "tailwindcss";
import type { NextConfig } from "next";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '390px',
      'sm': '500px',
      'md': '768px',
      'mmd': '875px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 700px)' },
        'taller': { 'raw': '(min-height: 800px)' },
      },
      fontSize: {
        'xxs': '0.67rem',
        'fluid-xs': 'clamp(0.6rem, 2.7vw, 0.8rem)',
        'fluid-sm': 'clamp(0.7rem, 0.6vw + 0.6rem, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9vw + 0.8rem, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1vw + 0.9rem, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1vw + 1rem, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.2vw + 1.1rem, 2rem)',
        'clamp-base': 'clamp(0.875rem, 0.75rem + 1vw, 1.125rem)',
        'clamp-sm': 'clamp(0.75rem, 0.5rem + 1vw, 1rem)',
      },
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 0.5vw + 0.3rem, 0.75rem)',
        'fluid-sm': 'clamp(0.75rem, 0.7vw + 0.5rem, 0.875rem)',
        'fluid-base': 'clamp(1rem, 1vw + 0.75rem, 1.5rem)',
        'fluid-lg': 'clamp(1.5rem, 1.5vw + 1rem, 2rem)',
        'fluid-xl': 'clamp(2rem, 2vw + 1.5rem, 3rem)',
        'clamp-mt': 'clamp(1.25rem, 5vw, 2.5rem)',
        'clamp-mt-lg': 'clamp(1.25rem, 7vw, 2.5rem)',
        'clamp-pl': 'clamp(1.25rem, 5vw, 2rem)',
        'fluid-padding': 'clamp(1rem, 1vw + 0.5rem, 1.5rem)',
        'fluid-padding-xs': 'clamp(0.25rem, 0.25vw + 0.125rem, 0.5rem)',
        'fluid-padding-sm': 'clamp(0.5rem, 0.5vw + 0.25rem, 1rem)',
        'fluid-padding-base': 'clamp(0.75rem, 0.75vw + 0.375rem, 1.5rem)',
        'fluid-padding-lg': 'clamp(1rem, 1vw + 0.5rem, 2rem)',
        'scroll-padding': 'clamp(0.5rem, 0.5vw + 0.25rem, 1rem)',
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