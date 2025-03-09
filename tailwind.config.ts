import type { Config } from 'tailwindcss'
import scrollbarHidePlugin from 'tailwind-scrollbar-hide'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  plugins: [scrollbarHidePlugin],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        hazard: {
          1: '#6AC828',
          2: '#F4E04D',
          3: '#F88F2C',
          4: '#EB450B',
          5: '#1B1A1E',
        },
        primary: '#FF6F00',
      },
    },
  },
} satisfies Config
