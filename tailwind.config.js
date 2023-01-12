/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm:'480px',
      md:'768px',
      //lg:'1020px',
      //xl:'1440px',
      lg:'1024px',
      xl:'1280px',
      xxl:'1536',
    },
    extend: {
      colors:{
        //darkGreen: 'hsl(134,61%,41%)', 
        darkGreen: '#00733e',
        softGreen: '#00730e',
        softPink: '#f3f6f9',
      },
      fontFamily: {
        sans:['Poppins','sans-serif'],
      },
    },
  },
  plugins: [],
}
