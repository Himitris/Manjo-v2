// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // Ajout de useEffect dans l'import
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
  // Correction pour éviter les erreurs SSR
  const [isMobile, setIsMobile] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Correction : useEffect au lieu de React.useEffect
  useEffect(() => {
    // Vérifier que window existe
    if (typeof window !== "undefined") {
      // Initialiser isMobile
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-manjocarn-sage-green via-manjocarn-forest-green to-manjocarn-deep-forest">
      {/* Texture de fond naturelle */}
      <div className="absolute inset-0 bg-texture-paper opacity-30"></div>

      {/* Overlay pour adoucir */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Motifs décoratifs naturels améliorés */}
      <div className="absolute inset-0 opacity-20">
        {/* Feuilles flottantes */}
        <motion.div
          className="absolute top-20 left-20 w-8 h-8 text-manjocarn-mint-green text-4xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🍃
        </motion.div>

        <motion.div
          className="absolute top-32 right-16 w-6 h-6 text-manjocarn-leaf-green text-3xl"
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🌿
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-32 w-10 h-10 text-manjocarn-sage-green text-5xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🌱
        </motion.div>

        {/* Bulles de lumière */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-manjocarn-golden-yellow rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-manjocarn-sunset-orange rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-manjocarn-mint-green rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        {/* Titre principal animé */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-cabin-sketch text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-manjocarn-golden-yellow mb-4 drop-shadow-2xl leading-none">
            {"Manjocarn".split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block hover:text-manjocarn-sunset-orange transition-colors duration-300 cursor-pointer"
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
            className="font-amatic text-xl sm:text-2xl md:text-3xl text-manjocarn-sand-beige tracking-wider drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Guinguette en pleine nature
          </motion.p>

          {/* Sous-titre ajouté */}
          <motion.p
            className="font-poppins text-sm sm:text-base md:text-lg text-manjocarn-light-sage mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Plage privée • Accès rivière • Produits du terroir
          </motion.p>
        </motion.div>

        {/* Navigation responsive */}
        {isMobile ? (
          // Version mobile : grille organisée
          <motion.div
            className="grid grid-cols-3 gap-4 w-full max-w-sm px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            {navigationButtons.map((button, index) => (
              <motion.button
                key={button.id}
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 2 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(button.id)}
              >
                <div className="w-16 h-16 bg-manjocarn-light-sage/95 backdrop-blur-sm border-2 border-manjocarn-golden-yellow/50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-manjocarn-golden-yellow group-hover:border-manjocarn-sunset-orange shadow-warm-lg">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {button.icon}
                  </span>
                </div>
                <div className="mt-2 text-xs text-manjocarn-sand-beige font-medium text-center">
                  {button.label}
                </div>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          // Version desktop : boutons dispersés
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
                  {/* Cercle principal avec texture améliorée */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-manjocarn-light-sage/95 backdrop-blur-sm border-2 border-manjocarn-golden-yellow/50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-manjocarn-golden-yellow group-hover:border-manjocarn-sunset-orange group-hover:scale-110 shadow-warm-lg">
                    <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                      {button.icon}
                    </span>
                  </div>

                  {/* Label animé amélioré */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredButton === button.id ? 1 : 0,
                      y: hoveredButton === button.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-manjocarn-deep-forest text-manjocarn-golden-yellow px-4 py-2 rounded-full text-sm font-medium shadow-nature-lg border border-manjocarn-golden-yellow/30">
                      {button.label}
                    </span>
                  </motion.div>

                  {/* Effet de pulsation naturel */}
                  <motion.div
                    className="absolute inset-0 border-2 border-manjocarn-mint-green/70 rounded-full"
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
        )}

        {/* Indicateur de scroll amélioré */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-manjocarn-light-sage hover:text-manjocarn-golden-yellow transition-colors flex flex-col items-center"
          >
            <span className="text-sm mb-2 font-medium">Découvrir</span>
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
