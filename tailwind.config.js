/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        charcoal: '#161412',
        ivory: '#f6f1e9',
        cream: '#efe7da',
        gold: '#c9a24b',
        champagne: '#e3cfa4',
        nude: '#d8c3ad',
        bronze: '#9c7a4d',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      letterSpacing: { luxe: '0.28em' },
      transitionTimingFunction: { lux: 'cubic-bezier(0.16,1,0.3,1)' },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: { shimmer: 'shimmer 2.4s linear infinite' },
    },
  },
  plugins: [],
};
