const colors = require('./core/config/tailwind/colors')
const screens = require('./core/config/tailwind/screens')
const extend = require('./core/config/tailwind/extend')
module.exports = {
  mode: 'jit', // New in 2.1+
  // See tailwindCSS darkmode docs: https://tailwindcss.com/docs/dark-mode
  // Use with other variants: https://tailwindcss.com/docs/dark-mode#stacking-with-other-variants
  darkMode: 'class', // or false or 'media'
  important: true,
  theme: {
    extend: {
      screens,
      colors,
    },
  },
  variants: {
    extend,
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./app.html', './**/*.{vue,js,ts,jsx,tsx,css,scss}'],
    options: {
      // safeList: [/^el-/] // For element UI CSS classes
    },
  },
}
