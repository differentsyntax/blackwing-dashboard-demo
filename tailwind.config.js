/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-streak': {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '25% 75%' },
          '50%': { backgroundPosition: '50% 100%' },
          '75%': { backgroundPosition: '75% 25%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'border-streak': 'border-streak 3s linear infinite',
      },
    },
  },
  plugins: [],
}

