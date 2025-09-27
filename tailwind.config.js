/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  'ndm-dark': '#20014B',
  'ndm-primary': '#FFA400',
  'ndm-secondary': '#F84B76',
  'ndm-accent': '#FFFFFF',
  'ndm-text': '#FFFFFF',
  'ndm-muted': '#D9CCE8',
      },
      fontFamily: {
        'dubtronic': ['Dubtronic-Solid', 'Courier New', 'monospace'],
        'dubtronic-inline': ['Dubtronic-Inline', 'Courier New', 'monospace'],
        '1533': ['1533', 'Courier New', 'monospace'],
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
  // Minimal direction: no custom animations retained
      },
      keyframes: {
  // Removed animations for less-is-more
      },
      backgroundImage: {
  // Noise removed for cleaner aesthetic
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
