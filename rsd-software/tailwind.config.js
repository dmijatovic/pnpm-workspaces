/** @type {import('tailwindcss').Config} */

// const config = require("@rsd/core/config/defaultSettings.json")

// console.log('config...', config)
// load colors and typography
// const colors = config.theme.light.colors
// const typography = config.theme.typography

// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }

// import complete config from
module.exports = require("@rsd/core/tailwind.config.cjs")