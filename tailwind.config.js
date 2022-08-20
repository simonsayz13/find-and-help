/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        mdlayout: ['hero hero', 'sidebar content'],
        smlayout: ['hero', 'sidebar', 'content'],
      },
      gridTemplateColumns: {
        mdlayout: '300px 1fr',
      },
      gridTemplateRows: {
        mdlayout: '400px 1fr',
      },
    },
  },
  plugins: [require('daisyui'), require('@savvywombat/tailwindcss-grid-areas')],
};
