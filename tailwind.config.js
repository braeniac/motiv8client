/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  // content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
   content: [
    './src/app/**/*.{js,jsx,ts,tsx}', 
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [
    require("nativewind/preset")
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        sans: ['"Google Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}




// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         drawer: '#000000',
//         card: '#1C1C1E',
//         primaryText: '#FFFFFF',
//         secondaryText: '#A1A1AA',
//         iconGray: '#6B7280',
//         alert: '#EF4444',
//       },
//     },
//   },
// };