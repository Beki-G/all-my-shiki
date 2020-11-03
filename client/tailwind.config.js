const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
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
        '1/2': '50%'
      }, 
      zIndex: {
        '100': 100,
      }
    },
  },
  variants: {},
  plugins: [],
}
