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
        "custom-green":"#48FFB0",
        "#29174b":"#29174b",
        "#e3dfdf":"#e3dfdf",
        "input-color":'rgba(225 ,225 ,225, 225, 1)',
        "custom-white":"rgba(255,255,255,0.2)",
        "#00d285-green":"#00d285",
        "#cbcbcb-light":"#cbcbcb",
        "#758698-light":"#758698",
        'trans-black':"rgba(0, 0, 0, 0.6);",
        "#322d2d-black":"#322d2d",
        "ligh-black":"#495463",
        "#000-black":"#000",
        "black-opacity":'rgba(0, 0, 0, .2)',
        "custom-blue":" #5b3b92" ,
        "#1F0B41":"#1F0B41" ,      
        "#A681E9":"#A681E9"       
      },
      minHeight: {
        '240': '240px',
        '396':'396px'
      },
      minWidth: {
        '33%': '33.33%',
      },
      width:{
      '22px':'20px',
      '32px':'32px',
      '40px':'40px',
      "400px":"250px",
      '180px':"180px",
      '70px':"70px"
      },
      height:{
      
      '40px':'40px'
      },

      boxShadow: {
        'custom-shadow': '0 0 15px 0 rgba(0, 0, 0, 0.2)', // Custom box shadow
      },
      fontSize: {
        '68': '68px',
      '30':'30px',
      '14':'14px',
      '15px':'15px',
      '12':'12px',
      '24':'24px',
      '18':'20px',
      '40':'40px',
      "21":"21px",
      '19':'17px',
      '25px':"25px"
    

      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #FFF 0%, #F4F1F9 100%)",
        "radial-gradient":"radial-gradient(77.77% 65.72% at 52.78% 15.56%, #9E6FF4 0%, #0F0326 100%)",
        "background-of-firstsection":"radial-gradient(82.5% 90.11% at 80.64% 44.61%, #9E6FF4 0%, #0F0326 87%)",
        "bckgrd-benefitcrd":"linear-gradient(180deg, #FFF 31.06%, #F4F1F9 100%)",
        
        
        
      },
      borderWidth: {
        '1': '1px', // 1px border width
      },
      borderColor: {
        'custom-green': '#48FFB0', // Border color
        'custom-blue': '#1C0B3D',
      },
      borderRadius: {
        '41': '41px', // 41px border radius
      },
      transitionDuration: {
        '600': '0.6s', // 0.6s transition duration
      },
      lineHeight: {
        'lh-text': '150%',
        'lh-para':"22px",
        'lh-heading':"100%"
     
      },
      letterSpacing: {
        '-136': '-1.36px', // Adding custom letter spacing
      },
      wordSpacing: {
        '100px': '100px',
      },
      padding: {
        'pt-85': '85px 0 0 0',
        "32":"32px",
        "p-20":"20px 20px 0 20px",
        "px-80px":"0 10px 0 80px",
        "p-10-45px": "10px 45px 10px 15px",
        "px-15px":"0 -15px",
        "p-8-30": "8px 30px;",
        "p-td":" 45px 0 15px"
      
      },
      margin: {
        'mt-30':'30px 0 0 0', 
        'mt-60':'60px 0 0 0',
        'mt-100':'150px 0 0 0',
        'mt-00':'0 0 0 0',
        'm-minus':"-10px -7px",
        "m-plus":'10px 7px'
        
      },
      variants: {
        extend: {
          scale: ['hover'], // Enable scale variant for hover
          transitionProperty: ['hover'], // Enable transitionProperty variant for hover
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      },
    },
  },
  plugins: [],
};
