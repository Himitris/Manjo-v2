import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Home,
  UtensilsCrossed,
  MenuIcon,
  CreditCard,
  Calendar,
  MapPin,
  Instagram,
} from "lucide-react";

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("accueil");
  const { scrollYProgress } = useScroll();

  // Transform pour l'indicateur de position
  const indicatorY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const sections = [
    { id: "accueil", label: "Accueil", icon: Home },
    { id: "manjocarn", label: "Manjocarn", icon: Home },
    { id: "restaurant", label: "Restaurant", icon: UtensilsCrossed },
    { id: "carte", label: "La carte", icon: MenuIcon },
    { id: "payer", label: "Réserver", icon: CreditCard },
    { id: "evenements", label: "Événements", icon: Calendar },
    { id: "activites", label: "Activités", icon: MapPin },
    { id: "instagram", label: "Instagram", icon: Instagram },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "accueil",
        "manjocarn",
        "restaurant",
        "carte",
        "payer",
        "evenements",
        "activites",
        "instagram",
      ];

      let current = "accueil";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section est considérée active si elle occupe au moins 30% de la vue
          if (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.5
          ) {
            current = sectionId;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-center space-y-1">
      {/* Barre de progression globale */}
      <div className="relative w-1 h-32 bg-white/20 rounded-full backdrop-blur-sm mb-4">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-pale-gold to-rusty-orange rounded-full"
          style={{
            scaleY: scrollYProgress,
            transformOrigin: "top",
          }}
        />

        {/* Indicateur de position */}
        <motion.div
          className="absolute w-3 h-3 bg-white rounded-full border-2 border-pale-gold shadow-lg -left-1"
          style={{ y: indicatorY }}
        />
      </div>

      {/* Navigation par sections */}
      <div className="flex flex-col space-y-2">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          const isActive = activeSection === section.id;

          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                group relative flex items-center justify-center
                w-10 h-10 rounded-full transition-all duration-300
                ${
                  isActive
                    ? "bg-pale-gold text-dark-gray shadow-lg scale-110"
                    : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                }
                backdrop-blur-sm border border-white/30
              `}
              whileHover={{ scale: isActive ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <IconComponent className="w-4 h-4" />

              {/* Tooltip au hover */}
              <motion.div
                className="absolute right-12 bg-dark-gray text-pale-gold px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  textShadow: "none",
                  backgroundColor: "var(--color-dark-gray)",
                  color: "var(--color-pale-gold)",
                }}
                initial={{ x: 10 }}
                whileHover={{ x: 0 }}
              >
                {section.label}

                {/* Flèche du tooltip */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-dark-gray border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
              </motion.div>
            </motion.button>
          );
        })}
      </div>

      {/* Indicateur de scroll en bas */}
      <motion.div
        className="mt-4 text-white/60 text-xs font-light tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-6 bg-gradient-to-b from-white/40 to-transparent mb-1"></div>
          <span className="transform rotate-90 origin-center text-[10px]">
            SCROLL
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;
