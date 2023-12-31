/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        montserrat: ['var(--font-montserrat)'],
        openSans: ['var(--font-open-sans)'],
        oldStandardTT: ['var(--font-old-standard-tt)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        navbar: '#1f1f39',
        bgManifesto: '#19192e',
        saveButton: '#838bc8',
        form: '#f5f5f5',
        bgForm: '#9393aa',
        bgWeb: '#19192e',
      },
      backgroundImage: {
        manifestoMobile: "url('/VectorMobile.svg')",
        manifestoMobile2: "url('/background.svg')",
        manifestoWeb: "url('/Vector.svg')",
      },
    },
  },
  plugins: [],
};
