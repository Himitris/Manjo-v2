import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    setAnimationStarted(true);

    // Tester si l'image de fond existe
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = "/assets/bg.jpg";
  }, []);

  const navItems = [
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

  const navItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
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

      {/* Overlay amélioré avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full w-full max-w-7xl px-4 md:px-8">
        {/* Title amélioré */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={animationStarted ? "visible" : "hidden"}
        >
          <h1 className="font-cabin-sketch text-5xl md:text-7xl lg:text-8xl font-bold text-pale-gold mb-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="drop-shadow-2xl"
              style={{
                textShadow:
                  "3px 3px 0 #6a645a, 6px 6px 0 rgba(106, 100, 90, 0.7), 9px 9px 20px rgba(0,0,0,0.5)",
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
                      color: index % 2 === 0 ? "#c18845" : "#5d7052",
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {letter}
                  </motion.span>
                )
              )}
            </motion.div>
          </h1>

          <motion.div
            className="font-amatic text-2xl md:text-4xl text-peach tracking-wider mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Guinguette
          </motion.div>

          <motion.p
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
          >
            Lieu atypique en pleine nature avec plage privée et accès rivière
          </motion.p>
        </motion.div>

        {/* Navigation Grid améliorée */}
        <motion.nav
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.button
                key={item.id}
                className="group relative"
                onClick={() => scrollToSection(item.id)}
                variants={navItemVariants}
                initial="hidden"
                animate={animationStarted ? "visible" : "hidden"}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`
                  relative overflow-hidden rounded-2xl p-4 md:p-6 h-28 md:h-32
                  bg-gradient-to-br ${item.color}
                  shadow-lg hover:shadow-2xl transition-all duration-300
                  border border-white/20
                  backdrop-blur-sm
                `}
                >
                  {/* Effet de brillance au hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                                  transition-transform duration-700"
                  ></div>

                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold text-sm md:text-base text-center leading-tight">
                      {item.title}
                    </span>
                    <span className="text-xs opacity-80 text-center mt-1 hidden md:block">
                      {item.description}
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.nav>

        {/* Scroll Indicator amélioré */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center text-white/80"
            animate={{ y: [0, 10, 0] }}
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
            <ChevronDown className="w-5 h-5 mt-2 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
