/** @type {import('tailwindcss').Config} */

import { colors } from './src/lib/theme'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        text: 'text 4s ease infinite'
      },
      boxShadow: {
        button: `4px 4px 6px ${colors.primary}`
      },
      colors: {
        ...colors
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      maxWidth: {
        portfolio: '50rem'
      }
    }
  },
  plugins: []
}
