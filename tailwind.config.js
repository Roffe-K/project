/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        green: {
          400: '#58CC02',
          500: '#45B000',
          600: '#36A100',
        },
        purple: {
          400: '#8549BA',
          500: '#7136AB',
          600: '#5D2B8C',
          900: '#2E1453',
        },
        gray: {
          700: '#27272A',
          800: '#1C1C21',
          900: '#121212',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
};