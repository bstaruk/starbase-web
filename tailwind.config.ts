import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: '"Lato", sans-serif',
      serif: '"Merriweather", serif',
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
