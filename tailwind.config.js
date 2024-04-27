/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1CB78D',
        secondary: '#243c5a',
      },
    },
  },
  plugins: [],
}
