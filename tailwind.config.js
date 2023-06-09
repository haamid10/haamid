/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Rubbik" :['Rubik', 'sans-serif']
      },
      colors:{
        'greeen':'#02FF95',
        'nav': 'rgba(0, 0, 0, 0.3);'
        // 'lightGreen':'#029991',

      },
    },
  },
  plugins: [],
}