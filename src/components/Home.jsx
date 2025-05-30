import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Home as HomeIcon,
  UtensilsCrossed,
  MenuIcon,
  CreditCard,
  Calendar,
  MapPin,
  Instagram,
  ChevronDown,
} from "lucide-react";
import PlaceholderBackground from "./ui/PlaceholderBackground";

const Home = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects
  const titleY = useTransform(scrollY, [0, 300], [0, -50]);
  const buttonsY = useTransform(scrollY, [0, 300], [0, -20]);

  useEffect(() => {
    setAnimationStarted(true);

    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = "/assets/bg.jpg";
  }, []);

  const mainNavItems = [
    {
      id: "manjocarn",
      title: "Manjocarn",
      icon: HomeIcon,
      color: "from-forest-green to-forest-green/80",
      description: "Découvrez notre guinguette",
    },
    {
      id: "restaurant",
      title: "Restaurant",
      icon: UtensilsCrossed,
      color: "from-rusty-orange to-rusty-orange/80",
      description: "Photos et ambiance",
    },
  ];

  const secondaryNavItems = [
    {
      id: "carte",
      title: "La carte",
      icon: MenuIcon,
      color: "from-pale-gold to-peach",
      description: "Notre menu",
    },
    {
      id: "payer",
      title: "Réserver",
      icon: CreditCard,
      color: "from-peach to-rusty-orange/70",
      description: "Réservation & paiement",
    },
    {
      id: "evenements",
      title: "Événements",
      icon: Calendar,
      color: "from-forest-green/80 to-pale-gold",
      description: "Nos événements",
    },
    {
      id: "activites",
      title: "Activités",
      icon: MapPin,
      color: "from-rusty-orange/80 to-peach",
      description: "Aux alentours",
    },
    {
      id: "instagram",
      title: "Instagram",
      icon: Instagram,
      color: "from-purple-500 to-pink-500",
      description: "Notre galerie",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.1 + 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="accueil"
      className="min-h-screen w-full relative overflow-hidden flex flex-col justify-center items-center"
      style={
        imageLoaded && !imageError
          ? {
              backgroundImage: "url('/assets/bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundAttachment: "fixed",
            }
          : {}
      }
    >
      {/* Fond de remplacement si pas d'image */}
      {!imageLoaded || imageError ? <PlaceholderBackground /> : null}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60 z-10"></div>

      {/* Content principal */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full w-full max-w-6xl px-4 md:px-8">
        {/* Titre */}
        <motion.div
          className="text-center mb-16"
          style={{ y: titleY }}
          variants={titleVariants}
          initial="hidden"
          animate={animationStarted ? "visible" : "hidden"}
        >
          <motion.h1
            className="font-cabin-sketch text-5xl md:text-7xl lg:text-8xl font-bold text-pale-gold mb-4"
            style={{
              textShadow:
                "3px 3px 0 #6a645a, 6px 6px 0 rgba(106, 100, 90, 0.7), 9px 9px 20px rgba(0,0,0,0.8)",
            }}
          >
            {["M", "a", "n", "j", "o", "c", "a", "r", "n"].map(
              (letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block hover:text-rusty-orange transition-all duration-300"
                  whileHover={{
                    y: index % 2 === 0 ? -8 : 8,
                    rotate: index % 2 === 0 ? -8 : 8,
                    scale: 1.1,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {letter}
                </motion.span>
              )
            )}
          </motion.h1>

          <motion.div
            className="font-amatic text-2xl md:text-4xl text-peach tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Guinguette
          </motion.div>
        </motion.div>

        {/* Navigation organisée */}
        <motion.nav
          className="w-full max-w-4xl space-y-8"
          style={{ y: buttonsY }}
        >
          {/* Boutons principaux - Grande taille */}
          <div className="grid md:grid-cols-2 gap-6">
            {mainNavItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  className="group relative overflow-hidden"
                  onClick={() => scrollToSection(item.id)}
                  variants={cardVariants}
                  initial="hidden"
                  animate={animationStarted ? "visible" : "hidden"}
                  custom={index}
                  whileHover={{ scale: 1.03, y: -8 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div
                    className={`
                    relative rounded-2xl p-8 h-40
                    bg-gradient-to-br ${item.color}
                    shadow-2xl hover:shadow-3xl transition-all duration-500
                    border border-white/30
                    backdrop-blur-sm
                  `}
                  >
                    {/* Effet de brillance */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                    transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                                    transition-transform duration-1000"
                    ></div>

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                      <IconComponent className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-bold text-2xl text-center leading-tight mb-2">
                        {item.title}
                      </span>
                      <span className="text-sm opacity-90 text-center">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Boutons secondaires - Taille moyenne */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {secondaryNavItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  className="group relative overflow-hidden"
                  onClick={() => scrollToSection(item.id)}
                  variants={cardVariants}
                  initial="hidden"
                  animate={animationStarted ? "visible" : "hidden"}
                  custom={index + 2}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`
                    relative rounded-xl p-6 h-28
                    bg-gradient-to-br ${item.color}
                    shadow-lg hover:shadow-xl transition-all duration-300
                    border border-white/20
                    backdrop-blur-sm
                  `}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
                                    transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                                    transition-transform duration-700"
                    ></div>

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                      <IconComponent className="w-7 h-7 mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold text-sm text-center leading-tight">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.nav>

        {/* Indicateur de scroll */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center text-white/80"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2 font-light tracking-wide">
              Découvrir
            </span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative">
              <motion.div
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <ChevronDown className="w-5 h-5 mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
