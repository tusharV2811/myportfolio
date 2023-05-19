/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '120': '1.2',
      '125': '1.25',
      '150': '1.5',
      '200': '2',
    },
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"]
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

