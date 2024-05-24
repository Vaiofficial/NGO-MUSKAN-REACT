/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DonateGreen: '#3fea2c',
        NavColor: '#F11A7B',
        AboutColor :'#EEEDEB',
        CampaignColor:'#ffc1ca',
        PeopleColor :'#d7d2c9',
        blue: '#2979FF',
        headingPink:'#DB005B',
        subHeadingBlue:'#1B3C73',
        containerPink:'#FC819E',
        gradientStart:'#008000',
        gradientEnd:'#00ff00',
      },
      fontFamily: {
        // Define your custom fonts here
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}