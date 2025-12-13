/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#F8FAFC', // Slate 50 - Background
          surface: '#FFFFFF', // White - Card Surface
          accent: '#0EA5E9', // Sky 500 - Primary Action
          highlight: '#0F172A', // Slate 900 - Primary Text
        },
        secondary: {
          base: '#64748B', // Slate 500 - Borders/Secondary Elements
          surface: '#E2E8F0', // Slate 200 - Light Borders/Divider
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

