// src/components/layout/ModernScrollIndicator.jsx
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, Menu, X } from "lucide-react";

const ModernScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const sections = [
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY > 100);
      setIsScrollingUp(currentScrollY < lastScrollY && currentScrollY > 200);
      setLastScrollY(currentScrollY);

      // Fermer le menu mobile lors du scroll
      if (showMobileMenu && Math.abs(currentScrollY - lastScrollY) > 50) {
        setShowMobileMenu(false);
      }

      // Déterminer la section active
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
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

  const currentSection = sections.find((s) => s.id === activeSection);

  if (!isVisible) return null;

  return (
    <>
      {/* Barre de progression en haut */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-manjocarn-sage-green via-manjocarn-golden-yellow to-manjocarn-sunset-orange origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />

      {isMobile ? (
        /* VERSION MOBILE - Bouton flottant minimaliste */
        <>
          {/* Bouton flottant principal */}
          <AnimatePresence>
            {!showMobileMenu && (
              <motion.button
                className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-manjocarn-forest-green/95 backdrop-blur-sm text-manjocarn-sand-beige rounded-full shadow-nature-lg border border-manjocarn-sage-green/30 flex items-center justify-center transition-all duration-300 ${
                  isScrollingUp
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-60"
                }`}
                onClick={() => setShowMobileMenu(true)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <span className="text-lg">{currentSection?.icon}</span>
                  {/* Indicateur de progression circulaire */}
                  <svg className="absolute -inset-2 w-18 h-18">
                    <circle
                      cx="36"
                      cy="36"
                      r="32"
                      stroke="rgba(156, 174, 133, 0.3)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <motion.circle
                      cx="36"
                      cy="36"
                      r="32"
                      stroke="var(--manjocarn-golden-yellow)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        pathLength: scrollYProgress,
                        rotate: -90,
                        transformOrigin: "36px 36px",
                      }}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: scrollYProgress }}
                    />
                  </svg>
                </div>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Menu mobile plein écran */}
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                className="fixed inset-0 bg-manjocarn-deep-forest/95 backdrop-blur-md z-50 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header du menu */}
                <div className="flex justify-between items-center p-6 border-b border-manjocarn-sage-green/30">
                  <div className="text-manjocarn-sand-beige">
                    <h3 className="text-xl font-playfair font-bold">
                      Navigation
                    </h3>
                    <p className="text-sm text-manjocarn-sand-beige/70">
                      Progression: {Math.round(scrollYProgress.get() * 100)}%
                    </p>
                  </div>
                  <button
                    onClick={() => setShowMobileMenu(false)}
                    className="w-10 h-10 bg-manjocarn-sage-green/20 hover:bg-manjocarn-sage-green/30 text-manjocarn-sand-beige rounded-full flex items-center justify-center transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Barre de progression visuelle */}
                <div className="px-6 py-4 border-b border-manjocarn-sage-green/20">
                  <div className="w-full bg-manjocarn-sage-green/20 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-manjocarn-golden-yellow to-manjocarn-sunset-orange rounded-full"
                      style={{ scaleX: scrollYProgress }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: scrollYProgress }}
                    />
                  </div>
                </div>

                {/* Liste des sections */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-3">
                    {sections.map((section, index) => (
                      <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 ${
                          activeSection === section.id
                            ? "bg-manjocarn-sage-green/30 border-2 border-manjocarn-golden-yellow text-manjocarn-sand-beige"
                            : "bg-manjocarn-sand-beige/10 hover:bg-manjocarn-sand-beige/20 text-manjocarn-sand-beige/80 hover:text-manjocarn-sand-beige"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-2xl mr-4">{section.icon}</span>
                        <div className="flex-1 text-left">
                          <h4 className="font-semibold">{section.label}</h4>
                          {activeSection === section.id && (
                            <p className="text-xs text-manjocarn-golden-yellow font-medium">
                              Section actuelle
                            </p>
                          )}
                        </div>
                        {activeSection === section.id && (
                          <div className="w-2 h-2 bg-manjocarn-golden-yellow rounded-full" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Actions rapides */}
                <div className="p-6 border-t border-manjocarn-sage-green/30">
                  <div className="flex gap-3">
                    <button
                      onClick={scrollToTop}
                      className="flex-1 bg-manjocarn-sage-green/20 hover:bg-manjocarn-sage-green/30 text-manjocarn-sand-beige py-3 rounded-xl flex items-center justify-center transition-colors"
                    >
                      <ChevronUp size={16} className="mr-2" />
                      Haut
                    </button>
                    <button
                      onClick={scrollToBottom}
                      className="flex-1 bg-manjocarn-sage-green/20 hover:bg-manjocarn-sage-green/30 text-manjocarn-sand-beige py-3 rounded-xl flex items-center justify-center transition-colors"
                    >
                      <ChevronDown size={16} className="mr-2" />
                      Bas
                    </button>
                  </div>
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
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-center space-y-2"
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
                {sections.map((section, index) => {
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

          {/* Indicateur de pourcentage */}
          <motion.div
            className="fixed bottom-6 right-6 z-40 hidden lg:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-manjocarn-deep-forest/90 backdrop-blur-sm text-manjocarn-sand-beige rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold shadow-nature-lg border border-manjocarn-sage-green/30">
              <motion.span>
                {Math.round(scrollYProgress.get() * 100)}%
              </motion.span>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default ModernScrollIndicator;
