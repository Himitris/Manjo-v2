import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import ScrollToTop from "../ScrollToTop";

const RestaurantSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const openFullscreen = (imageNumber) => {
    setSelectedImage(imageNumber);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  // Générer les numéros d'images (1 à 14 selon votre structure originale)
  const imageNumbers = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <section
      id="restaurant"
      className="scroll-section bg-gradient-to-br from-peach/20 via-background-color to-forest-green/10 py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Titre principal */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-5xl font-playfair text-forest-green mb-6 relative">
              Le Restaurant
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pale-gold rounded-full"></div>
            </h2>
          </motion.div>

          {/* Section Ambiance */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-forest-green/20"
          >
            <h3 className="text-2xl md:text-3xl font-playfair text-rusty-orange mb-6 flex items-center">
              <span className="text-2xl mr-3">🌳</span>
              Ambiance de la Guinguette
            </h3>

            <div className="space-y-4 text-dark-gray leading-relaxed">
              <p className="text-lg md:text-xl font-medium">
                Restauration simple et efficace: vous êtes dans une guinguette
                !!
              </p>
              <p className="text-base md:text-lg">
                Pas de chichi, ambiance détente, on se prélasse à l'ombre du
                châtaignier.
              </p>
              <p className="text-base md:text-lg">
                Nous travaillons selon les disponibilités du moment avec des
                produits frais du coin.
              </p>
            </div>
          </motion.div>

          {/* Section Photos */}
          <motion.div
            variants={itemVariants}
            className="bg-pale-gold/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-pale-gold/30"
          >
            <h3 className="text-2xl md:text-3xl font-playfair text-forest-green mb-8 flex items-center">
              <span className="text-2xl mr-3">📸</span>
              Photos de Manjocarn
            </h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-96 overflow-y-auto p-2"
              variants={containerVariants}
            >
              {imageNumbers.map((imageNumber) => (
                <motion.div
                  key={imageNumber}
                  variants={photoVariants}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openFullscreen(imageNumber)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={`/assets/photo/${imageNumber}.jpg`}
                    alt={`Photo de Manjocarn ${imageNumber}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Informations pratiques */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-forest-green/10 rounded-xl p-6 text-center border border-forest-green/20">
              <div className="text-3xl mb-3">🍽️</div>
              <h4 className="font-semibold text-dark-gray mb-2 font-playfair text-lg">
                Cuisine Simple
              </h4>
              <p className="text-sm text-dark-gray/80">
                Produits frais du terroir selon les disponibilités
              </p>
            </div>

            <div className="bg-rusty-orange/10 rounded-xl p-6 text-center border border-rusty-orange/20">
              <div className="text-3xl mb-3">☀️</div>
              <h4 className="font-semibold text-dark-gray mb-2 font-playfair text-lg">
                Terrasse Ombragée
              </h4>
              <p className="text-sm text-dark-gray/80">
                Sous les châtaigniers, au bord de l'eau
              </p>
            </div>

            <div className="bg-pale-gold/20 rounded-xl p-6 text-center border border-pale-gold/30">
              <div className="text-3xl mb-3">🎵</div>
              <h4 className="font-semibold text-dark-gray mb-2 font-playfair text-lg">
                Ambiance Détente
              </h4>
              <p className="text-sm text-dark-gray/80">
                On se tutoie, on prend son temps
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bouton retour en haut */}
        <div className="mt-12 flex justify-center">
          <ScrollToTop />
        </div>
      </div>

      {/* Modal Fullscreen pour les images */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeFullscreen}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/assets/photo/${selectedImage}.jpg`}
              alt={`Photo de Manjocarn ${selectedImage}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default RestaurantSection;
