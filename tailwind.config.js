/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#F4F1F9",
        "primary": "#29174b",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #FFF 31.06%, #F4F1F9 100%)",
      },
    },
  },
  plugins: [],
};
