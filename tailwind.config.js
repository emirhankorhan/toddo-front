/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'xxx': '25%'
    },
    extend: {
      backgroundImage: {
        'undraw_empty': "url('/undraw_empty.svg')",
      }
    },
  },
  plugins: [],
}

