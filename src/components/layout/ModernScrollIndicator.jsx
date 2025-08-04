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

      // Fermer le menu mobile lors du scroll significatif
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
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-manjocarn-sage-green/20 z-40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-manjocarn-sage-green via-manjocarn-golden-yellow to-manjocarn-sunset-orange origin-left shadow-sm"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrollProgress }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {isMobile ? (
        /* VERSION MOBILE - Interface améliorée */
        <>
          {/* Barre de navigation mobile compacte */}
          <AnimatePresence>
            {!showMobileMenu && (
              <motion.div
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 max-w-[calc(100vw-2rem)]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mobile-scroll-nav">
                  <span className="mobile-scroll-icon">
                    {currentSection?.icon}
                  </span>
                  <span className="mobile-scroll-label">
                    {currentSection?.label}
                  </span>
                  <div className="w-px h-4 bg-manjocarn-sage-green/50 mx-1"></div>
                  <span className="mobile-scroll-progress">
                    {Math.round(scrollProgress * 100)}%
                  </span>
                  <button
                    onClick={() => setShowMobileMenu(true)}
                    className="mobile-scroll-menu-button"
                    aria-label="Ouvrir le menu de navigation"
                  >
                    <Menu size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bouton retour en haut */}
          <AnimatePresence>
            {!showMobileMenu && isScrollingUp && (
              <motion.button
                className="mobile-scroll-to-top"
                onClick={scrollToTop}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Retour en haut"
              >
                <ChevronUp size={20} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Menu mobile dropdown amélioré */}
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                className="mobile-scroll-dropdown"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="mobile-dropdown-header">
                  <span className="mobile-dropdown-title">
                    Navigation ({Math.round(scrollProgress * 100)}%)
                  </span>
                  <button
                    onClick={() => setShowMobileMenu(false)}
                    className="mobile-dropdown-close"
                    aria-label="Fermer le menu"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Barre de progression */}
                <div className="mobile-dropdown-progress-bar">
                  <div
                    className="mobile-dropdown-progress-fill"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>

                {/* Sections */}
                <div className="mobile-dropdown-sections">
                  {SECTIONS.map((section, index) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`mobile-dropdown-section ${
                        activeSection === section.id ? "active" : ""
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Aller à la section ${section.label}`}
                    >
                      <span className="mobile-dropdown-section-icon">
                        {section.icon}
                      </span>
                      <span className="mobile-dropdown-section-label">
                        {section.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Actions rapides */}
                <div className="mobile-dropdown-actions">
                  <button
                    onClick={scrollToTop}
                    className="mobile-dropdown-action"
                    aria-label="Aller en haut de page"
                  >
                    <ChevronUp size={14} />
                    Haut
                  </button>
                  <button
                    onClick={scrollToBottom}
                    className="mobile-dropdown-action"
                    aria-label="Aller en bas de page"
                  >
                    <ChevronDown size={14} />
                    Bas
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay pour fermer le menu */}
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                className="fixed inset-0 bg-black/20 z-25"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowMobileMenu(false)}
              />
            )}
          </AnimatePresence>
        </>
      ) : (
        /* VERSION DESKTOP - Indicateur latéral optimisé */
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
              aria-label="Retour en haut de page"
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
                      aria-label={`Naviguer vers ${section.label}`}
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
              aria-label="Aller en bas de page"
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
