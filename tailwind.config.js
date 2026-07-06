/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff8ff',
          100: '#daeeff',
          200: '#bde0ff',
          300: '#8ecbff',
          400: '#59abff',
          500: '#3385fc',
          600: '#1c66f3',
          700: '#1551e1',
          800: '#1843b6',
          900: '#1a3c8f',
          950: '#142657',
        },
        accent: {
          50: '#f0fdff',
          100: '#d6fbff',
          200: '#b0f5ff',
          300: '#76eaff',
          400: '#3dd6ff',
          500: '#19baf5',
          600: '#0a98d4',
          700: '#0b79ad',
          800: '#0e628c',
          900: '#115274',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
        },
        ink: {
          50: '#f6f9fc',
          100: '#eef3f9',
          200: '#e2eaf3',
          300: '#cbd9ea',
          400: '#a8bdd6',
          500: '#7e9bba',
          600: '#5d7ba0',
          700: '#4a6283',
          800: '#3e526b',
          900: '#364459',
          950: '#1f2a3d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '20px',
        '5xl': '2.5rem',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 92, 219, 0.08)',
        'glass-lg': '0 20px 60px -15px rgba(31, 92, 219, 0.18)',
        glow: '0 0 40px rgba(51, 133, 252, 0.35)',
        'soft': '0 4px 24px -8px rgba(31, 42, 61, 0.12)',
      },
      backgroundImage: {
        'grid-soft':
          'linear-gradient(to right, rgba(51,133,252,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(51,133,252,0.06) 1px, transparent 1px)',
        'radial-blue':
          'radial-gradient(circle at 30% 20%, rgba(51,133,252,0.12), transparent 45%), radial-gradient(circle at 80% 60%, rgba(61,214,255,0.10), transparent 40%)',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};
