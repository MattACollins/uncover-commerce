/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './tamplates/*.liquid',
    './tamplates/*.json',
    './tamplates/customers/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
