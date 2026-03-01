/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'pure-red': '#FF0000',
        'jvlcode-orange': "#E64A19"
      },
      fontWeight: {
        "jvlbold" : 700
      
      }
    },
    fontFamily: {
      bebas: ['Bebas Neue','sans-serif']
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.252rem',
    }
    ,
    screens: {
      'sm': '200px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
    }
  },
  plugins: [],
  darkMode:"selector"
}

