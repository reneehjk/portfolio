/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#fafaf8',
          hover: '#f0ede7',
        },
        border: {
          default: '#d4d0c8',
        },
        text: {
          primary: '#111111',
          secondary: '#444444',
          muted: '#767268',
          faint: '#bbbbbb',
        },
        accent: {
          subtle: '#e8f1f8',
          default: '#5a9ab5',
          dark: '#2e6480',
        },
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.05', fontWeight: '400' }],
        'heading': ['28px', { lineHeight: '1.2', fontWeight: '400' }],
        'project-title': ['20px', { lineHeight: '1.2', fontWeight: '400' }],
        'body': ['15px', { lineHeight: '1.8', fontWeight: '300' }],
        'body-sm': ['13px', { lineHeight: '1.7', fontWeight: '300' }],
        'nav': ['13px', { lineHeight: '1.4', fontWeight: '300', letterSpacing: '0.26px' }],
        'label': ['12px', { lineHeight: '1.4', fontWeight: '300', letterSpacing: '0.13em' }],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(110%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        slideUp: 'slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        fadeIn: 'fadeIn 0.6s ease forwards',
        fadeUp: 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      borderWidth: {
        'half': '0.5px',
      },
      letterSpacing: {
        'eyebrow': '0.13em',
      },
    },
  },
  plugins: [],
}
