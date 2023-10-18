/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'candlelight': {
          '50': '#fefce8',
          '100': '#fffac2',
          '200': '#fff089',
          '300': '#ffe042',
          '400': '#fdcd12',
          '500': '#ecb306',
          '600': '#cc8a02',
          '700': '#a36105',
          '800': '#864c0d',
          '900': '#723f11',
          '950': '#432005',
      }, 'ship-gray': {
        '50': '#f7f6f8',
        '100': '#eeeaef',
        '200': '#e0dae3',
        '300': '#cac0d0',
        '400': '#b1a2b8',
        '500': '#9f8ba6',
        '600': '#917a96',
        '700': '#846d88',
        '800': '#6f5c71',
        '900': '#5a4c5c',
        '950': '#413842',
    },
      },
    },
  },
  variants: {},
  plugins: [],
}
