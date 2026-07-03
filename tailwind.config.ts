import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'] },
      boxShadow: { glow: '0 0 45px rgba(124,58,237,.24)' },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } }
      },
      animation: { float: 'float 3s ease-in-out infinite', shimmer: 'shimmer 2.4s linear infinite' }
    }
  },
  plugins: []
};
export default config;
