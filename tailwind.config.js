/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5EF',
        stone: '#F5F1EA',
        charcoal: '#2B2B2B',
        navy: '#1B2A41',
        gold: '#B08D57',
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
