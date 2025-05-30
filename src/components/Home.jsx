import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Home as HomeIcon,
  UtensilsCrossed,
  Menu,
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
      icon: Menu,
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05 + 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="accueil"
      className="min-h-screen w-full relative overflow-hidden"
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
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen w-full max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Titre amélioré */}
        <motion.div
          className="text-center mb-16"
          style={{ y: titleY }}
          variants={titleVariants}
          initial="hidden"
          animate={animationStarted ? "visible" : "hidden"}
        >
          <motion.h1
            className="font-cabin-sketch text-5xl md:text-7xl lg:text-8xl font-bold text-pale-gold mb-4 relative"
            style={{
              textShadow:
                "3px 3px 0 #6a645a, 6px 6px 0 rgba(106, 100, 90, 0.7), 9px 9px 20px rgba(0,0,0,0.8)",
            }}
          >
            {/* Particules flottantes */}
            <div className="absolute inset-0 -z-10">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-pale-gold/40 rounded-full"
                  style={{
                    left: `${15 + i * 10}%`,
                    top: `${20 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            {["M", "a", "n", "j", "o", "c", "a", "r", "n"].map(
              (letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block hover:text-rusty-orange transition-all duration-300 relative cursor-default"
                  whileHover={{
                    y: index % 2 === 0 ? -15 : 15,
                    rotate: index % 2 === 0 ? -12 : 12,
                    scale: 1.2,
                  }}
                  initial={{ opacity: 0, y: 50, rotate: -10 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    delay: index * 0.08 + 0.3,
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                  }}
                >
                  <motion.span
                    animate={{
                      y: [0, -4, 0],
                      rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.1,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    {letter}
                  </motion.span>

                  {/* Effet scintillement */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{
                      x: ["100%", "200%"],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.3 + 3,
                      repeatDelay: 6,
                    }}
                  />
                </motion.span>
              )
            )}
          </motion.h1>

          <motion.div
            className="font-amatic text-2xl md:text-4xl text-peach tracking-wider relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "2px 2px 4px rgba(0,0,0,0.7)",
                  "2px 2px 8px rgba(240, 190, 134, 0.3)",
                  "2px 2px 4px rgba(0,0,0,0.7)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Guinguette
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Navigation organisée avec styles améliorés */}
        <motion.nav
          className="w-full max-w-4xl space-y-8 mb-16"
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
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    rotateY: 5,
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={`
                    relative rounded-2xl p-8 h-40
                    bg-gradient-to-br ${item.color}
                    shadow-2xl hover:shadow-3xl transition-all duration-500
                    border-2 border-white/30 hover:border-white/50
                    backdrop-blur-sm overflow-hidden
                  `}
                  >
                    {/* Texture naturelle */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `
                          radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                          linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.05) 49%, rgba(255,255,255,0.05) 51%, transparent 52%)
                        `,
                      }}
                    />

                    {/* Effet de lumière qui bouge */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "300%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 1.5,
                        repeatDelay: 4,
                      }}
                      style={{ transform: "skewX(-20deg)" }}
                    />

                    {/* Coins arrondis décoratifs */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-white/50 rounded-tl-lg"></div>
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-white/50 rounded-br-lg"></div>

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-12 h-12 mb-4 drop-shadow-lg" />
                      </motion.div>
                      <span className="font-bold text-2xl text-center leading-tight mb-2 drop-shadow-md">
                        {item.title}
                      </span>
                      <span className="text-sm opacity-90 text-center drop-shadow-sm">
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
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    rotate: index % 2 === 0 ? 2 : -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`
                    relative rounded-xl p-6 h-28
                    bg-gradient-to-br ${item.color}
                    shadow-lg hover:shadow-xl transition-all duration-300
                    border border-white/20 hover:border-white/50
                    backdrop-blur-sm
                  `}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        repeatDelay: 3,
                      }}
                      style={{ transform: "skewX(-12deg)" }}
                    />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                      <motion.div
                        whileHover={{
                          scale: 1.3,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-7 h-7 mb-2 drop-shadow-md" />
                      </motion.div>
                      <span className="font-semibold text-sm text-center leading-tight drop-shadow-sm">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.nav>
      </div>

      {/* Indicateur de scroll repositionné tout en bas */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center text-white/80 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("manjocarn")}
        >
          <span className="text-sm mb-3 font-light tracking-wide drop-shadow-md">
            Découvrir
          </span>
          <motion.div
            className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center relative backdrop-blur-sm bg-white/10"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-2 h-4 bg-gradient-to-b from-white to-white/50 rounded-full mt-2 shadow-lg"
              animate={{
                y: [0, 16, 0],
                opacity: [1, 0.3, 1],
                scale: [1, 0.8, 1],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            className="flex flex-col items-center mt-3 space-y-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <ChevronDown className="w-6 h-6 drop-shadow-md" />
            <motion.div
              animate={{ y: [0, 3, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 drop-shadow-md" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
