// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
        setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      };

      updateScreenSize();
      window.addEventListener("resize", updateScreenSize);
      return () => window.removeEventListener("resize", updateScreenSize);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-manjocarn-background"
    >
      {/* Fond dégradé naturel simplifié */}
      <div className="absolute inset-0 bg-gradient-to-br from-manjocarn-sage-green/20 via-manjocarn-mint-green/10 to-manjocarn-forest-green/20"></div>

      {/* Texture subtile */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(156, 174, 133, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(93, 112, 82, 0.1) 0%, transparent 50%)`,
            backgroundSize: "400px 400px",
          }}
        ></div>
      </div>

      {/* Éléments décoratifs naturels simples */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 text-manjocarn-mint-green text-4xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          🍃
        </motion.div>

        <motion.div
          className="absolute top-32 right-16 text-manjocarn-sage-green text-3xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🌿
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-32 text-manjocarn-forest-green text-5xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          🌱
        </motion.div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-manjocarn-forest-green px-4">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-6 md:mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-cabin-sketch text-3xl sm:text-5xl md:text-8xl lg:text-9xl text-manjocarn-forest-green mb-3 md:mb-4 drop-shadow-lg leading-none">
            {"Manjocarn".split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block hover:text-manjocarn-sage-green transition-colors duration-300 cursor-pointer"
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
            className="font-amatic text-lg sm:text-xl md:text-3xl text-manjocarn-sage-green tracking-wider drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Guinguette en pleine nature
          </motion.p>

          <motion.p
            className="font-poppins text-sm sm:text-sm md:text-lg text-manjocarn-dark-gray mt-2 md:mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Plage privée • Accès rivière • Produits du terroir
          </motion.p>
        </motion.div>

        {/* Navigation responsive améliorée */}
        {isMobile ? (
          // Version mobile - grille compacte avec labels visibles
          <motion.div
            className="grid grid-cols-2 gap-3 w-full max-w-xs px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            {navigationButtons.map((button, index) => (
              <motion.button
                key={button.id}
                className="group relative flex flex-col items-center p-3 bg-white/90 backdrop-blur-sm border-2 border-manjocarn-sage-green/50 rounded-xl transition-all duration-300 hover:bg-manjocarn-sage-green hover:border-manjocarn-forest-green shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 2 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(button.id)}
              >
                <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                  {button.icon}
                </span>
                <span className="text-xs font-semibold text-manjocarn-forest-green group-hover:text-manjocarn-sand-beige text-center leading-tight">
                  {button.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        ) : isTablet ? (
          // Version tablette - grille 3x3 avec labels visibles
          <motion.div
            className="grid grid-cols-3 gap-6 w-full max-w-2xl px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            {navigationButtons.map((button, index) => (
              <motion.button
                key={button.id}
                className="group relative flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm border-2 border-manjocarn-sage-green/50 rounded-2xl transition-all duration-300 hover:bg-manjocarn-sage-green hover:border-manjocarn-forest-green shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 2 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(button.id)}
                onMouseEnter={() => setHoveredButton(button.id)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {button.icon}
                </span>
                <span className="text-base font-semibold text-manjocarn-forest-green group-hover:text-manjocarn-sand-beige text-center">
                  {button.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          // Version desktop avec labels toujours visibles - effet de survol limité au cercle
          <div className="absolute inset-0 pointer-events-none">
            {navigationButtons.map((button, index) => (
              <motion.div
                key={button.id}
                className="absolute pointer-events-auto group flex flex-col items-center"
                style={button.position}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 1.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                onClick={() => scrollToSection(button.id)}
                onMouseEnter={() => setHoveredButton(button.id)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                {/* Bouton principal - effet de survol isolé */}
                <motion.div
                  className="relative w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm border-2 border-manjocarn-sage-green/50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-manjocarn-sage-green group-hover:border-manjocarn-forest-green shadow-lg mb-3 cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                    {button.icon}
                  </span>

                  {/* Effet de pulsation uniquement sur le cercle */}
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
                </motion.div>

                {/* Label toujours visible - séparé du cercle */}
                <div className="bg-manjocarn-forest-green text-manjocarn-sand-beige px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-manjocarn-sage-green/30 whitespace-nowrap group-hover:bg-manjocarn-deep-forest group-hover:text-manjocarn-golden-yellow transition-all duration-300">
                  {button.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Indicateur de scroll avec meilleur contraste */}
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
            className="text-manjocarn-forest-green hover:text-manjocarn-sage-green transition-colors flex flex-col items-center"
          >
            <span className="text-sm mb-2 font-medium bg-manjocarn-sand-beige/80 px-3 py-1 rounded-full shadow-sm">
              Découvrir
            </span>
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
