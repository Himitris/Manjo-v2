// src/components/layout/ModernScrollIndicator.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, Menu, X } from "lucide-react";

// Sections définies en dehors du composant pour éviter les re-renders
const SECTIONS = [
  { id: "hero", label: "Accueil", icon: "🏞️" },
  { id: "about", label: "Manjocarn", icon: "🌿" },
  { id: "menu", label: "Carte", icon: "🍽️" },
  { id: "restaurant", label: "Restaurant", icon: "🏡" },
  { id: "activities", label: "Activités", icon: "🚣" },
  { id: "events", label: "Événements", icon: "🎉" },
  { id: "instagram", label: "Instagram", icon: "📸" },
  { id: "payment", label: "Réserver", icon: "💳" },
  { id: "contact", label: "Contact", icon: "📞" },
];

const ModernScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const currentScrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(currentScrollY / maxScroll, 1);

      setScrollProgress(progress);
      setIsVisible(currentScrollY > 100);
      setIsScrollingUp(currentScrollY < lastScrollY && currentScrollY > 200);
      setLastScrollY(currentScrollY);

      // Fermer le menu mobile lors du scroll
      if (showMobileMenu && Math.abs(currentScrollY - lastScrollY) > 50) {
        setShowMobileMenu(false);
      }

      // Déterminer la section active
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, showMobileMenu]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setShowMobileMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMobileMenu(false);
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    setShowMobileMenu(false);
  };

  const currentSection = SECTIONS.find((s) => s.id === activeSection);

  // Ne pas afficher si pas visible
  if (!isVisible) return null;

  return (
    <>
      {/* Barre de progression en haut */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-manjocarn-sage-green/20 z-40">
        <motion.div
          className="h-full bg-gradient-to-r from-manjocarn-sage-green via-manjocarn-golden-yellow to-manjocarn-sunset-orange origin-left shadow-sm"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrollProgress }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {isMobile ? (
        /* VERSION MOBILE - Barre compacte en haut */
        <>
          {/* Barre de navigation mobile en haut */}
          <AnimatePresence>
            {!showMobileMenu && (
              <motion.div
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 bg-manjocarn-forest-green/95 backdrop-blur-sm text-manjocarn-sand-beige rounded-full px-4 py-2 shadow-nature-lg border border-manjocarn-sage-green/30 flex items-center gap-3"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-lg">{currentSection?.icon}</span>
                <span className="text-sm font-medium">
                  {currentSection?.label}
                </span>
                <div className="w-px h-4 bg-manjocarn-sage-green/50 mx-1"></div>
                <span className="text-xs">
                  {Math.round(scrollProgress * 100)}%
                </span>
                <button
                  onClick={() => setShowMobileMenu(true)}
                  className="ml-2 p-1 hover:bg-manjocarn-sage-green/30 rounded-full transition-colors"
                >
                  <Menu size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bouton retour en haut simple */}
          <AnimatePresence>
            {!showMobileMenu && isScrollingUp && (
              <motion.button
                className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-manjocarn-forest-green text-manjocarn-sand-beige rounded-full shadow-nature-lg border border-manjocarn-sage-green/30 flex items-center justify-center transition-all duration-300"
                onClick={scrollToTop}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronUp size={20} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Menu mobile compact - dropdown */}
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                className="fixed top-16 left-1/2 transform -translate-x-1/2 z-40 bg-manjocarn-deep-forest/95 backdrop-blur-md rounded-2xl shadow-nature-lg border border-manjocarn-sage-green/30 p-4 max-w-xs w-full mx-4"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header compact */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-manjocarn-sand-beige font-medium text-sm">
                    Navigation ({Math.round(scrollProgress * 100)}%)
                  </span>
                  <button
                    onClick={() => setShowMobileMenu(false)}
                    className="w-6 h-6 bg-manjocarn-sage-green/20 hover:bg-manjocarn-sage-green/30 text-manjocarn-sand-beige rounded-full flex items-center justify-center transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Barre de progression compacte */}
                <div className="mb-4">
                  <div className="w-full bg-manjocarn-sage-green/20 rounded-full h-1">
                    <div
                      className="h-1 bg-gradient-to-r from-manjocarn-golden-yellow to-manjocarn-sunset-orange rounded-full transition-all duration-300"
                      style={{ width: `${scrollProgress * 100}%` }}
                    />
                  </div>
                </div>

                {/* Liste des sections compacte */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {SECTIONS.map((section, index) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-manjocarn-sage-green/30 text-manjocarn-golden-yellow"
                          : "bg-manjocarn-sand-beige/10 hover:bg-manjocarn-sand-beige/20 text-manjocarn-sand-beige/80"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-lg mb-1">{section.icon}</span>
                      <span className="text-xs font-medium text-center leading-tight">
                        {section.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Actions rapides */}
                <div className="flex gap-2">
                  <button
                    onClick={scrollToTop}
                    className="flex-1 bg-manjocarn-sage-green/20 hover:bg-manjocarn-sage-green/30 text-manjocarn-sand-beige py-2 rounded-lg flex items-center justify-center transition-colors text-sm"
                  >
                    <ChevronUp size={14} className="mr-1" />
                    Haut
                  </button>
                  <button
                    onClick={scrollToBottom}
                    className="flex-1 bg-manjocarn-sage-green/20 hover:bg-manjocarn-sage-green/30 text-manjocarn-sand-beige py-2 rounded-lg flex items-center justify-center transition-colors text-sm"
                  >
                    <ChevronDown size={14} className="mr-1" />
                    Bas
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        /* VERSION DESKTOP - Indicateur latéral */
        <>
          {/* Indicateur de sections à droite */}
          <motion.div
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col items-center space-y-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Bouton scroll vers le haut */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-manjocarn-sage-green/90 backdrop-blur-sm hover:bg-manjocarn-forest-green text-manjocarn-sand-beige rounded-full flex items-center justify-center transition-all duration-300 shadow-nature mb-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Retour en haut"
            >
              <ChevronUp size={16} />
            </motion.button>

            {/* Indicateurs de sections */}
            <div className="bg-manjocarn-sand-beige/95 backdrop-blur-sm rounded-2xl p-3 shadow-nature-lg border border-manjocarn-sage-green/30">
              <div className="flex flex-col space-y-2">
                {SECTIONS.map((section, index) => {
                  const isActive = activeSection === section.id;

                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`relative group flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-manjocarn-forest-green text-manjocarn-sand-beige shadow-md scale-110"
                          : "bg-transparent text-manjocarn-forest-green hover:bg-manjocarn-sage-green/30"
                      }`}
                      whileHover={{ scale: isActive ? 1.1 : 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title={section.label}
                    >
                      <span className="text-sm">{section.icon}</span>

                      {/* Tooltip au survol */}
                      <motion.div
                        className="absolute right-12 bg-manjocarn-deep-forest text-manjocarn-sand-beige px-3 py-1 rounded-lg text-sm whitespace-nowrap shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ zIndex: 60 }}
                      >
                        {section.label}
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-manjocarn-deep-forest"></div>
                      </motion.div>

                      {/* Indicateur de progression pour la section active */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 border-2 border-manjocarn-golden-yellow rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Bouton scroll vers le bas */}
            <motion.button
              onClick={scrollToBottom}
              className="w-10 h-10 bg-manjocarn-sage-green/90 backdrop-blur-sm hover:bg-manjocarn-forest-green text-manjocarn-sand-beige rounded-full flex items-center justify-center transition-all duration-300 shadow-nature mt-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Aller en bas"
            >
              <ChevronDown size={16} />
            </motion.button>
          </motion.div>
        </>
      )}
    </>
  );
};

export default ModernScrollIndicator;
