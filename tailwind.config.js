/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--app-primary)',
        'primary-light': 'var(--app-primary-light)',
        'primary-dark': 'var(--app-primary-dark)',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}