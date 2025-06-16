// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navigationButtons = [
  {
    id: "about",
    label: "Manjocarn",
    icon: "🏞️",
    position: { top: "20%", left: "15%" },
  },
  {
    id: "menu",
    label: "La Carte",
    icon: "🍽️",
    position: { top: "30%", right: "20%" },
  },
  {
    id: "restaurant",
    label: "Restaurant",
    icon: "🏡",
    position: { top: "50%", left: "10%" },
  },
  {
    id: "activities",
    label: "Activités",
    icon: "🚣",
    position: { top: "60%", right: "15%" },
  },
  {
    id: "events",
    label: "Événements",
    icon: "🎉",
    position: { top: "75%", left: "25%" },
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: "📸",
    position: { top: "35%", left: "70%" },
  },
  {
    id: "payment",
    label: "Réserver",
    icon: "💳",
    position: { top: "70%", right: "30%" },
  },
];

const HeroSection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-manjocarn-soft-green via-manjocarn-dark-gray to-manjocarn-forest-green">
      {/* Overlay pour adoucir */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Motifs décoratifs subtils */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-manjocarn-pale-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-manjocarn-peach rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-manjocarn-rusty-orange rounded-full blur-3xl"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
        {/* Titre principal animé */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-cabin-sketch text-6xl md:text-8xl lg:text-9xl text-manjocarn-pale-gold mb-4 drop-shadow-2xl">
            {"Manjocarn".split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block hover:text-manjocarn-peach transition-colors duration-300"
                whileHover={{
                  y: -10,
                  rotate: index % 2 === 0 ? -5 : 5,
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="font-amatic text-2xl md:text-3xl text-manjocarn-cream tracking-wider drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Guinguette en pleine nature
          </motion.p>
        </motion.div>

        {/* Boutons de navigation dispersés */}
        <div className="absolute inset-0 pointer-events-none">
          {navigationButtons.map((button, index) => (
            <motion.button
              key={button.id}
              className="absolute pointer-events-auto group"
              style={button.position}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1.5 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(button.id)}
              onMouseEnter={() => setHoveredButton(button.id)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="relative">
                {/* Cercle principal */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-manjocarn-cream/95 backdrop-blur-sm border-2 border-manjocarn-pale-gold/50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-manjocarn-pale-gold group-hover:border-manjocarn-rusty-orange group-hover:scale-110 shadow-xl">
                  <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                    {button.icon}
                  </span>
                </div>

                {/* Label animé */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredButton === button.id ? 1 : 0,
                    y: hoveredButton === button.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bg-manjocarn-forest-green text-manjocarn-pale-gold px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-manjocarn-pale-gold/30">
                    {button.label}
                  </span>
                </motion.div>

                {/* Effet de pulsation */}
                <motion.div
                  className="absolute inset-0 border-2 border-manjocarn-rusty-orange/70 rounded-full"
                  animate={{
                    scale: hoveredButton === button.id ? [1, 1.3, 1] : 1,
                    opacity: hoveredButton === button.id ? [0.8, 0, 0.8] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredButton === button.id ? Infinity : 0,
                  }}
                />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Indicateur de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-manjocarn-cream cursor-pointer hover:text-manjocarn-pale-gold transition-colors"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
