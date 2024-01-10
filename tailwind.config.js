/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     './src/**/*.jsx'
  ],
  theme: {
    screens: {
      'max1200': {max: '1200px'},
      'max1070': {max: '1070px'},
      'max800': {max: '800px'},
      'max770': {max: '770px'},
      'max715': {max: '715px'},
      'max700': {max: '700px'},
      'max640': {max: '640px'},
      'max500': {max: '500px'},
      'max400': {max: '400px'},
    },
    extend: {
      fontFamily: {
        jost: 'Jost',
        jostItalic: 'JostItalic'
      },
      colors: {
        orange: '#E7816B',
        customblack: '#333136'
      }
    },
  },
  plugins: [],
}

