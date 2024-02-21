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
        "#e3dfdf":"#e3dfdf"
      },
      boxShadow: {
        'custom-shadow': '0 0 15px 0 rgba(0, 0, 0, 0.2)', // Custom box shadow
      },
      fontSize: {
        '68': '68px',
      '30':'30px',
      '14':'14px',
      '24':'24px',
      '18':'20px',
      '40':'40px'

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
      padding: {
        'pt-85': '85px 0 0 0', // 85px padding top
      },
      margin: {
        'mt-30':'30px 0 0 0', 
        'mt-60':'60px 0 0 0',
        'mt-100':'150px 0 0 0',
        'mt-00':'0 0 0 0',
        
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
