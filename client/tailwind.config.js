const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {

  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      height: {
        '100px': '100px', 
        '50px': '50px',
        '50vh': '50vh',
        '300px': '300px',
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans]
      },
      inset: {
        '1/2': '50%',
        '1': '0.5rem'
      }, 
      zIndex: {
        '100': 100,
      },
      minWidth: {
        '40':"10rem"
      },
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    fontweight: ['hover', 'focus'],
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [],
}
