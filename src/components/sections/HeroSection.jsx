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
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateScreenSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setScreenSize({ width, height });
        setIsMobile(width < 768);
        setIsTablet(width >= 768 && width < 1200);
      };

      updateScreenSize();
      window.addEventListener("resize", updateScreenSize);
      return () => window.removeEventListener("resize", updateScreenSize);
    }
  }, []);

  // Fonction pour vérifier les collisions et ajuster les positions
  const getAdjustedPositions = () => {
    if (isMobile || isTablet) return [];

    const minDistance = 120; // Distance minimum entre les éléments
    const adjustedButtons = [...navigationButtons];

    // Convertir les pourcentages en pixels pour les calculs
    const convertToPixels = (pos) => ({
      x: pos.left
        ? (parseFloat(pos.left) / 100) * screenSize.width
        : (1 - parseFloat(pos.right) / 100) * screenSize.width,
      y: (parseFloat(pos.top) / 100) * screenSize.height,
    });

    // Vérifier et ajuster les positions pour éviter les superpositions
    for (let i = 0; i < adjustedButtons.length; i++) {
      const currentPos = convertToPixels(adjustedButtons[i].position);

      for (let j = i + 1; j < adjustedButtons.length; j++) {
        const otherPos = convertToPixels(adjustedButtons[j].position);
        const distance = Math.sqrt(
          Math.pow(currentPos.x - otherPos.x, 2) +
            Math.pow(currentPos.y - otherPos.y, 2)
        );

        if (distance < minDistance) {
          // Ajuster la position du deuxième élément
          const angle = Math.atan2(
            otherPos.y - currentPos.y,
            otherPos.x - currentPos.x
          );
          const newX = currentPos.x + Math.cos(angle) * minDistance;
          const newY = currentPos.y + Math.sin(angle) * minDistance;

          // Convertir back en pourcentages et s'assurer que c'est dans les limites
          const newLeftPercent = Math.max(
            5,
            Math.min(85, (newX / screenSize.width) * 100)
          );
          const newTopPercent = Math.max(
            15,
            Math.min(80, (newY / screenSize.height) * 100)
          );

          adjustedButtons[j] = {
            ...adjustedButtons[j],
            position: {
              top: `${newTopPercent}%`,
              left: `${newLeftPercent}%`,
            },
          };
        }
      }
    }

    return adjustedButtons;
  };

  const adjustedButtons = getAdjustedPositions();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-manjocarn-background"
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

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-manjocarn-forest-green px-4">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-6 md:mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-cabin-sketch text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-manjocarn-forest-green mb-3 md:mb-4 drop-shadow-lg leading-none">
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
            className="font-amatic text-lg sm:text-xl md:text-2xl lg:text-3xl text-manjocarn-sage-green tracking-wider drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Guinguette en pleine nature
          </motion.p>

          <motion.p
            className="font-poppins text-sm sm:text-base md:text-lg text-manjocarn-dark-gray mt-2 md:mt-4 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Plage privée • Accès rivière • Produits du terroir
          </motion.p>
        </motion.div>

        {/* Navigation responsive améliorée */}
        {isMobile ? (
          // Version mobile - grille compacte 2x4 pour éviter les superpositions
          <motion.div
            className="grid grid-cols-2 gap-3 w-full max-w-sm px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            {navigationButtons.map((button, index) => (
              <motion.button
                key={button.id}
                className="group relative flex flex-col items-center p-3 bg-white/90 backdrop-blur-sm border-2 border-manjocarn-sage-green/50 rounded-xl transition-all duration-300 hover:bg-manjocarn-sage-green hover:border-manjocarn-forest-green shadow-lg min-h-[80px]"
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
          // Version tablette - grille 3 colonnes avec meilleur espacement
          <motion.div
            className="grid grid-cols-3 gap-6 w-full max-w-3xl px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            {navigationButtons.slice(0, 6).map((button, index) => (
              <motion.button
                key={button.id}
                className="group relative flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm border-2 border-manjocarn-sage-green/50 rounded-2xl transition-all duration-300 hover:bg-manjocarn-sage-green hover:border-manjocarn-forest-green shadow-lg min-h-[120px]"
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
            {/* Bouton supplémentaire pour les tablettes */}
            {navigationButtons.slice(6).map((button, index) => (
              <motion.button
                key={button.id}
                className="group relative flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm border-2 border-manjocarn-sage-green/50 rounded-2xl transition-all duration-300 hover:bg-manjocarn-sage-green hover:border-manjocarn-forest-green shadow-lg min-h-[100px] col-start-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 2.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(button.id)}
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {button.icon}
                </span>
                <span className="text-sm font-semibold text-manjocarn-forest-green group-hover:text-manjocarn-sand-beige text-center">
                  {button.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          // Version desktop avec positions ajustées pour éviter les superpositions
          <div className="absolute inset-0 pointer-events-none">
            {(adjustedButtons.length > 0
              ? adjustedButtons
              : navigationButtons
            ).map((button, index) => (
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
                {/* Bouton principal avec zone de sécurité */}
                <motion.div
                  className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/90 backdrop-blur-sm border-2 border-manjocarn-sage-green/50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-manjocarn-sage-green group-hover:border-manjocarn-forest-green shadow-lg mb-3 cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                    {button.icon}
                  </span>

                  {/* Effet de pulsation */}
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

                {/* Label avec meilleur contraste et positionnement */}
                <div
                  className="bg-manjocarn-forest-green text-manjocarn-sand-beige px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-manjocarn-sage-green/30 whitespace-nowrap group-hover:bg-manjocarn-deep-forest group-hover:text-manjocarn-golden-yellow transition-all duration-300 min-w-max"
                  style={{
                    // S'assurer que le label ne dépasse pas des bords
                    transform: button.position.right
                      ? "translateX(-50%)"
                      : "translateX(-50%)",
                  }}
                >
                  {button.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Indicateur de scroll */}
        <motion.div
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
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
            <span className="text-xs md:text-sm mb-2 font-medium bg-manjocarn-sand-beige/80 px-3 py-1 rounded-full shadow-sm">
              Découvrir
            </span>
            <ChevronDown size={28} className="md:w-8 md:h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
