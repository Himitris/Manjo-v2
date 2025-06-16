/* tailwind.config.js */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        manjocarn: {
          "dark-gray": "#6a645a",
          "pale-gold": "#e3cd8b",
          "forest-green": "#5d7052",
          "rusty-orange": "#c18845",
          peach: "#f0be86",
          background: "#f8f5f0",
          // Ajout de nuances pour plus de variété
          "light-beige": "#faf8f3",
          "soft-green": "#7a8a6f",
          "warm-orange": "#d4985e",
          cream: "#f5f2ea",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        "cabin-sketch": ["Cabin Sketch", "cursive"],
        amatic: ["Amatic SC", "cursive"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      backgroundImage: {
        "gradient-manjocarn":
          "linear-gradient(135deg, #f8f5f0 0%, #f0be86 25%, #e3cd8b 50%, #f8f5f0 100%)",
        "gradient-nature":
          "linear-gradient(135deg, #f8f5f0 0%, #7a8a6f 50%, #f8f5f0 100%)",
      },
    },
  },
  plugins: [],
};
