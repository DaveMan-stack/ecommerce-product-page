/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './dist/*.js'],
  theme: {
    extend: {
      colors: {
        /* Primary */
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',

        /* Neutral */
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)' /*with 75% opacity for lightbox background */

      },
    },

    fontSize: {
      rg: '16px',
      md: '18px',
      lg: '25px',
      xl: '35px',
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
    
  },
  plugins: [],
}
