/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'handwriten': ['Just Another Hand', 'curive'],
        'title': ['Zain', 'sans-serif']
      },
      colors: {
        'logo-blue': '#5CA7FF',
        'logo-pink': '#E964AC',
        'footer-gray': '#1F1F1F',
        'primary': {
          500: "#6397D3",
          600: "#81AEE3",
        }
      },
    }
  },
  plugins: [],
}

