/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./static/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3498db',
          dark: '#4facfe',
        },
        background: {
          light: '#f5f6fa',
          dark: '#1a1a2e',
        },
        surface: {
          light: '#ffffff',
          dark: '#16213e',
        },
        text: {
          light: '#2c3e50',
          dark: '#e9ecef',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'dark': '0 4px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
