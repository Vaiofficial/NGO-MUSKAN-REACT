/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DonateGreen: '#3fea2c',
        NavColor: '#FFC0D9',
        AboutColor :'#EEEDEB',
        CampaignColor:'#ffc1ca'
      },
    },
  },
  plugins: [],
}