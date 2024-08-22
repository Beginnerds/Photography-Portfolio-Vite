/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        // dominant:"#1f2022",
        dominant:"#000000",
        // accent:"#00adb5",
        accent:"#6930c3",
        muted:"#eeeeee"
      },
    },

    fontFamily:{
      poppins:['Poppins','sans-serif'],
      montserrat:['Montserrat','sans-serif'],
      josefin_sans:['Josefin Sans','sans-serif']
    }
  },
  plugins: [],
}

