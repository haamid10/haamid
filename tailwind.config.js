/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Rubbik" :['Rubik', sans-serif]
      },
      colors:{
        'green':'#02FF95',
        // 'lightGreen':'#029991',

      },
    },
  },
  plugins: [],
}