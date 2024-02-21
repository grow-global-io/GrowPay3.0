/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#F4F1F9",
        "primary": "#29174b",
        "secondary":"#DFD0FB",
        "custom-gray":"#434356",
        "white":"#fff",
        "custom-blue":"#14072D",
        "custom-green":"#48FFB0"
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #FFF 0%, #F4F1F9 100%)",
        "radial-gradient":"radial-gradient(77.77% 65.72% at 52.78% 15.56%, #9E6FF4 0%, #0F0326 100%)"
        
      },
      lineHeight: {
        'lh-text': '150%',
     
      },
      variants: {
        extend: {
          scale: ['hover'], // Enable scale variant for hover
          transitionProperty: ['hover'], // Enable transitionProperty variant for hover
        },
      },
    },
  },
  plugins: [],
};
