import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("accueil");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: "accueil", label: "Accueil", color: "#e3cd8b" },
    { id: "manjocarn", label: "Manjocarn", color: "#5d7052" },
    { id: "restaurant", label: "Restaurant", color: "#c18845" },
    { id: "carte", label: "La carte", color: "#f0be86" },
    { id: "payer", label: "Réserver", color: "#5d7052" },
    { id: "evenements", label: "Événements", color: "#c18845" },
    { id: "activites", label: "Activités", color: "#f0be86" },
    { id: "instagram", label: "Instagram", color: "#6a645a" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calcul progression scroll
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      let scrolled = 0;
      if (height > 0) {
        scrolled = (winScroll / height) * 100;
      }

      setScrollProgress(Math.round(Math.max(0, Math.min(100, scrolled))));

      // Détection section active
      const sectionIds = [
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

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementHeight = rect.height;
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          if (
            scrollPosition >= elementTop &&
            scrollPosition < elementTop + elementHeight
          ) {
            current = sectionId;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    // Appel initial
    handleScroll();

    // Écouter le scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Nettoyage
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentSection = sections.find((s) => s.id === activeSection);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Barre de progression principale */}
      <div className="relative h-2 bg-white/20 backdrop-blur-sm">
        <motion.div
          className="absolute top-0 left-0 h-full rounded-r-full shadow-lg transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: `linear-gradient(90deg, 
              #5d7052 0%, 
              #c18845 25%, 
              #f0be86 50%, 
              #e3cd8b 75%, 
              #6a645a 100%
            )`,
          }}
        />

        {/* Indicateur de section active */}
        <motion.div
          className="absolute top-0 h-full w-1 shadow-xl transition-all duration-300"
          style={{
            left: `${scrollProgress}%`,
            backgroundColor: currentSection?.color || "#e3cd8b",
            boxShadow: `0 0 10px ${currentSection?.color || "#e3cd8b"}`,
          }}
        />
      </div>

      {/* Étiquette de section flottante */}
      <motion.div
        className="absolute top-4 left-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg"
          key={activeSection}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: currentSection?.color || "#e3cd8b" }}
          >
            {currentSection?.label || "Accueil"}
          </span>
        </motion.div>
      </motion.div>

      {/* Petite progression circulaire en haut à droite */}
      <div className="absolute top-4 right-4">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
            />
            <motion.path
              d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
              fill="none"
              stroke={currentSection?.color || "#e3cd8b"}
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                strokeDasharray: "100, 100",
                strokeDashoffset: `${100 - scrollProgress}`,
                transition: "stroke-dashoffset 0.3s ease-out",
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-xs font-bold"
              style={{ color: currentSection?.color || "#e3cd8b" }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {scrollProgress}%
            </motion.span>
          </div>
        </div>
      </div>

      {/* Petites feuilles décoratives qui bougent */}
      <motion.div
        className="absolute top-6 left-1/2 transform -translate-x-1/2 text-green-300/60"
        animate={{
          y: [0, -5, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🌿
      </motion.div>

      <motion.div
        className="absolute top-8 left-1/3 text-yellow-300/50"
        animate={{
          y: [0, -3, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut",
        }}
      >
        🍃
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;
