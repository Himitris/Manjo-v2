// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { memo, useCallback } from "react";
import {
  ChevronDown,
  MapPin,
  UtensilsCrossed,
  Home,
  Waves,
  Calendar,
  Camera,
  CreditCard
} from "lucide-react";

const navigationButtons = [
  { id: "about", label: "Manjocarn", Icon: MapPin },
  { id: "menu", label: "La Carte", Icon: UtensilsCrossed },
  { id: "restaurant", label: "Restaurant", Icon: Home },
  { id: "activities", label: "Activités", Icon: Waves },
  { id: "events", label: "Événements", Icon: Calendar },
  { id: "instagram", label: "Instagram", Icon: Camera },
  { id: "payment", label: "Réserver", Icon: CreditCard },
];

// Composant mémorisé pour les boutons de navigation avec nouvelle identité
const NavButton = memo(({ button, onClick, index }) => {
  // Alterner les styles pour plus de variété visuelle
  const isAlternate = index % 3 === 0;

  return (
    <motion.button
      className={`group relative flex flex-col items-center p-4 md:p-6 backdrop-blur-sm border-3 rounded-2xl transition-all duration-300 shadow-lg min-h-[100px] md:min-h-[120px] overflow-hidden ${
        isAlternate
          ? "bg-gradient-to-br from-white/95 to-[#f5e6c8]/90 border-[#c65d3b]/60 hover:border-[#e55934] hover:bg-gradient-to-br hover:from-[#c65d3b]/10 hover:to-[#d47350]/10"
          : "bg-gradient-to-br from-white/95 to-[#e8dcc0]/90 border-[#4a7c8c]/50 hover:border-[#2f5a68] hover:bg-gradient-to-br hover:from-[#4a7c8c]/10 hover:to-[#7fb3c4]/10"
      }`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 0.5 + index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Effet de brillance au survol */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />

      <button.Icon
        className={`mb-2 md:mb-3 group-hover:scale-110 transition-transform relative z-10 ${
          isAlternate
            ? "text-[#c65d3b] group-hover:text-[#e55934]"
            : "text-[#4a7c8c] group-hover:text-[#2f5a68]"
        }`}
        size={28}
      />
      <span className={`text-xs md:text-sm font-bold text-center leading-tight relative z-10 ${
        isAlternate
          ? "text-[#6b4e3d] group-hover:text-[#c65d3b]"
          : "text-[#2f5a68] group-hover:text-[#4a7c8c]"
      }`}>
        {button.label}
      </span>
    </motion.button>
  );
});

NavButton.displayName = 'NavButton';

const HeroSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-manjocarn-background leaf-pattern"
    >
      {/* Fond dégradé avec nouvelles couleurs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7fb3c4]/15 via-[#f5e6c8]/20 to-[#d47350]/10" />

      {/* Texture terre enrichie */}
      <div className="absolute inset-0 earth-texture opacity-30" />

      {/* Accents de couleur flottants */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#c65d3b]/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-[#4a7c8c]/10 rounded-full blur-3xl animate-float" />

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Titre principal avec identité forte */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="title-sketch text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-3 md:mb-4 leading-tight" style={{ color: '#c65d3b' }}>
            Manjocarn
          </h1>

          {/* Ligne décorative ondulée */}
          <div className="organic-divider mx-auto mb-4" />

          <motion.p
            className="subtitle-handwritten text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-sm"
            style={{ color: '#4a7c8c' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Guinguette en pleine nature
          </motion.p>

          <motion.p
            className="font-poppins text-sm sm:text-base md:text-lg font-semibold mt-4 md:mt-6 max-w-2xl mx-auto px-4"
            style={{ color: '#6b4e3d' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="inline-block mx-2">• Plage privée</span>
            <span className="inline-block mx-2">• Accès rivière</span>
            <span className="inline-block mx-2">• Produits du terroir</span>
          </motion.p>
        </motion.div>

        {/* Navigation en grille responsive */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {navigationButtons.map((button, index) => (
            <NavButton
              key={button.id}
              button={button}
              index={index}
              onClick={() => scrollToSection(button.id)}
            />
          ))}
        </motion.div>

        {/* Indicateur de scroll avec nouveau style */}
        <motion.div
          className="text-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="subtitle-handwritten text-base md:text-lg mb-2 px-6 py-2 rounded-full shadow-md border-2" style={{
              color: '#c65d3b',
              backgroundColor: 'rgba(245, 230, 200, 0.9)',
              borderColor: '#c65d3b'
            }}>
              Découvrir
            </span>
            <ChevronDown size={28} className="md:w-8 md:h-8" style={{ color: '#c65d3b' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
