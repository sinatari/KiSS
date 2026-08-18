/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F4DFD7',
        stone: '#F5E8D6',
        charcoal: '#5E4A42',
        navy: '#F0D0CA',
        gold: '#D7A7AA',
        sage: '#6B7A5E'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'Lato', 'sans-serif']
      },
      fontSize: {
        h1: ['3.5rem', { lineHeight: '1.15' }],
        h2: ['2rem', { lineHeight: '1.25' }],
        h3: ['1.375rem', { lineHeight: '1.35' }]
      }
    }
  },
  plugins: []
};
