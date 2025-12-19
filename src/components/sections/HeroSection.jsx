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

// Composant mémorisé pour les boutons de navigation
const NavButton = memo(({ button, onClick, index }) => (
  <motion.button
    className="group relative flex flex-col items-center p-4 md:p-6 bg-white/90 backdrop-blur-sm border-2 border-manjocarn-sage-green/50 rounded-2xl transition-all duration-300 hover:bg-manjocarn-sage-green hover:border-manjocarn-forest-green shadow-lg min-h-[100px] md:min-h-[120px]"
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
    <button.Icon
      className="mb-2 md:mb-3 group-hover:scale-110 transition-transform text-manjocarn-forest-green group-hover:text-manjocarn-sand-beige"
      size={28}
    />
    <span className="text-xs md:text-sm font-semibold text-manjocarn-forest-green group-hover:text-manjocarn-sand-beige text-center leading-tight">
      {button.label}
    </span>
  </motion.button>
));

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-manjocarn-background"
    >
      {/* Fond dégradé naturel simplifié */}
      <div className="absolute inset-0 bg-gradient-to-br from-manjocarn-sage-green/20 via-manjocarn-mint-green/10 to-manjocarn-forest-green/20" />

      {/* Texture subtile optimisée */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(156, 174, 133, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(93, 112, 82, 0.1) 0%, transparent 50%)`,
          backgroundSize: "400px 400px",
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-cabin-sketch text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-manjocarn-forest-green mb-3 md:mb-4 drop-shadow-lg leading-tight">
            Manjocarn
          </h1>

          <motion.p
            className="font-amatic text-xl sm:text-2xl md:text-3xl text-manjocarn-sage-green tracking-wider drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Guinguette en pleine nature
          </motion.p>

          <motion.p
            className="font-poppins text-sm sm:text-base md:text-lg text-manjocarn-dark-gray mt-3 md:mt-4 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Plage privée • Accès rivière • Produits du terroir
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

        {/* Indicateur de scroll */}
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
            className="text-manjocarn-forest-green hover:text-manjocarn-sage-green transition-colors flex flex-col items-center"
          >
            <span className="text-xs md:text-sm mb-2 font-medium bg-manjocarn-sand-beige/80 px-4 py-2 rounded-full shadow-sm">
              Découvrir
            </span>
            <ChevronDown size={28} className="md:w-8 md:h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
