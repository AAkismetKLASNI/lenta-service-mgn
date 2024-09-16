/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xl: '1490px',
      lg: '1024px',
      md: '768px',
      sm: '480px',
    },

    extend: {
      colors: {
        'black-almost': 'rgba(var(--black-almost))',
        'white-almost': 'rgba(var(--white-almost))',
        'gray-dark': 'rgba(var(--gray-dark))',
        'gray-light': 'rgba(var(--gray-light))',
        red: 'rgba(var(--red))',
      },
      fontSize: {
        'dec-h1': 'clamp(2rem, 1.135rem + 3.08vw, 4rem)',
        'dec-h2': 'clamp(1.5rem, 1.284rem + 0.77vw, 2rem)',
        'dec-24px': 'clamp(1.25rem, 1.142rem + 0.38vw, 1.5rem)',
      },
    },
  },
  plugins: [],
};
