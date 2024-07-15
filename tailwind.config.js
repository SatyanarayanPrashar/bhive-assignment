/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        p_logo1: '#000000',
        p_logo2: '#FFBB00',
        p_bttn_main_light_yellow: '#FFCF45',
        p_bttn_stroke_dark_yellow: '#FFC422',
        s_bttn_main_light_grey: '#F9F9F9',
        s_bttn_stroke_dark_grey: '#CEC6C6',
        p_text: '#263238',
        s_text: '#65624C',
      },
      fontFamily: {
        sans: ['Inter']
      },
    },
  },
  plugins: [],
};