import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./node_modules/preline/preline.js'],
  safelist: [
    'text-secondary'
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary-500) / <alpha-value>)',
          50: 'rgb(var(--color-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--color-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--color-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--color-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--color-secondary-900) / <alpha-value>)'
        },
        tertiary: {
          DEFAULT: 'rgb(var(--color-tertiary-500) / <alpha-value>)',
          50: 'rgb(var(--color-tertiary-50) / <alpha-value>)',
          100: 'rgb(var(--color-tertiary-100) / <alpha-value>)',
          200: 'rgb(var(--color-tertiary-200) / <alpha-value>)',
          300: 'rgb(var(--color-tertiary-300) / <alpha-value>)',
          400: 'rgb(var(--color-tertiary-400) / <alpha-value>)',
          500: 'rgb(var(--color-tertiary-500) / <alpha-value>)',
          600: 'rgb(var(--color-tertiary-600) / <alpha-value>)',
          700: 'rgb(var(--color-tertiary-700) / <alpha-value>)',
          800: 'rgb(var(--color-tertiary-800) / <alpha-value>)',
          900: 'rgb(var(--color-tertiary-900) / <alpha-value>)'
        },
        quaternary: {
          DEFAULT: 'rgb(var(--color-quaternary-500) / <alpha-value>)',
          50: 'rgb(var(--color-quaternary-50) / <alpha-value>)',
          100: 'rgb(var(--color-quaternary-100) / <alpha-value>)',
          200: 'rgb(var(--color-quaternary-200) / <alpha-value>)',
          300: 'rgb(var(--color-quaternary-300) / <alpha-value>)',
          400: 'rgb(var(--color-quaternary-400) / <alpha-value>)',
          500: 'rgb(var(--color-quaternary-500) / <alpha-value>)',
          600: 'rgb(var(--color-quaternary-600) / <alpha-value>)',
          700: 'rgb(var(--color-quaternary-700) / <alpha-value>)',
          800: 'rgb(var(--color-quaternary-800) / <alpha-value>)',
          900: 'rgb(var(--color-quaternary-900) / <alpha-value>)'
        }
      },
      animation: {
        gradient: 'gradient 30s linear infinite'
      },
      keyframes: {
        gradient: {
          to: { 'background-position': '200% center' }
        }
      }
    }
  },
  plugins: [
    require('@xpd/tailwind-3dtransforms'),
    require('preline/plugin')
  ]
}
