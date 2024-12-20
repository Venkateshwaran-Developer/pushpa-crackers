import withMT from "@material-tailwind/react/utils/withMT";
import daisyui from "daisyui";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx }",],
  theme: {
    screens: {
      'sm': '356px',
      // => @media (min-width: 576px) { ... }

      'md': '760px',
      // => @media (min-width: 960px) { ... }

      'lg': '1140px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily:{
        "Agu": ["Agu Display", "serif"],
        "Anton": ["Anton", "serif"],
        "SpicyRice": ["Spicy Rice", "serif"],
        "Sixtyfour": ["Sixtyfour Convergence", "serif"],
      },
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
        
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
    colors: {
      meroon: '#881337',
      burgendi:'#BEA18E',
    },
  },
  plugins: [
  daisyui,
  
  ],
  
});