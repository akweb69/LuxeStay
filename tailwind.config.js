/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Libre Franklin", "serif"],
        font2_nato: ["Noto Sans PhagsPa", "serif"],
      },
      backgroundImage: {
        slider1: "url('/src/assets/Images/s1.jpg')",
        slider2: "url('/src/assets/Images/s2.jpg')",
        slider3: "url('/src/assets/Images/s3.jpg')",
        slider4: "url('/src/assets/Images/s4.jpg')",
        slider5: "url('/src/assets/Images/s5.jpg')",
        bbb: "url('/src/assets/Backgrounds/bb.jpg')",
      },
    },
  },
  plugins: [daisyui],
};
