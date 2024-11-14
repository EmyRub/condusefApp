import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Kanit', 'sans-serif']
    },
    extend: {
      animation: {
        'burbuja': 'burbuja 3s linear infinite'
      },
      keyframes: {
        burbuja: {
          '0%': { transform: 'translateY(0)', opacity: 0 },
          '50%': { opacity: .4 },
          '100%': { transform: 'translateY(-100vh)', opacity: 0 }
        }
      }
    }
  },
  plugins: [],
}

