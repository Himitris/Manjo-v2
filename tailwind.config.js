/* tailwind.config.js */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        manjocarn: {
          // Couleurs existantes
          "dark-gray": "#6a645a",
          "pale-gold": "#e3cd8b",
          "forest-green": "#5d7052",
          "rusty-orange": "#c18845",
          peach: "#f0be86",
          background: "#f8f5f0",

          // Nouvelles nuances de vert naturel
          "sage-green": "#9cae85",
          "moss-green": "#7a8471",
          "leaf-green": "#8ba16f",
          "pine-green": "#4a5d42",
          "mint-green": "#b8d4a8",

          // Tons terreux enrichis
          "earth-brown": "#8b7355",
          "bark-brown": "#7d6b4f",
          "sand-beige": "#e8dcc0",
          "clay-orange": "#d49c6a",

          // Nuances existantes améliorées
          "light-beige": "#faf8f3",
          "soft-green": "#7a8a6f",
          "warm-orange": "#d4985e",
          cream: "#f5f2ea",

          // Nouveaux tons pour la profondeur
          "deep-forest": "#3d4a36",
          "light-sage": "#b5c4a7",
          "golden-yellow": "#f2d478",
          "sunset-orange": "#e89c5a",
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
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "leaf-sway": "leafSway 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(1deg)" },
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
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        leafSway: {
          "0%, 100%": { transform: "rotate(-2deg) translateX(0px)" },
          "25%": { transform: "rotate(1deg) translateX(2px)" },
          "50%": { transform: "rotate(2deg) translateX(0px)" },
          "75%": { transform: "rotate(-1deg) translateX(-2px)" },
        },
      },
      backgroundImage: {
        "gradient-manjocarn":
          "linear-gradient(135deg, #f8f5f0 0%, #f0be86 25%, #e3cd8b 50%, #f8f5f0 100%)",
        "gradient-nature":
          "linear-gradient(135deg, #f8f5f0 0%, #9cae85 30%, #7a8471 70%, #f8f5f0 100%)",
        "gradient-forest":
          "linear-gradient(135deg, #5d7052 0%, #7a8471 50%, #9cae85 100%)",
        "gradient-warm":
          "linear-gradient(135deg, #f2d478 0%, #e89c5a 50%, #d4985e 100%)",
        "texture-paper":
          'url(\'data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23f8f5f0" fill-opacity="0.4"><circle cx="7" cy="7" r="1"/><circle cx="53" cy="53" r="1"/><circle cx="20" cy="30" r="1"/><circle cx="40" cy="10" r="1"/></g></svg>\')',
        "shimmer-gradient":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
      },
      boxShadow: {
        nature:
          "0 4px 6px -1px rgba(93, 112, 82, 0.1), 0 2px 4px -1px rgba(93, 112, 82, 0.06)",
        "nature-lg":
          "0 10px 15px -3px rgba(93, 112, 82, 0.1), 0 4px 6px -2px rgba(93, 112, 82, 0.05)",
        warm: "0 4px 6px -1px rgba(212, 152, 94, 0.1), 0 2px 4px -1px rgba(212, 152, 94, 0.06)",
        "warm-lg":
          "0 10px 15px -3px rgba(212, 152, 94, 0.1), 0 4px 6px -2px rgba(212, 152, 94, 0.05)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
