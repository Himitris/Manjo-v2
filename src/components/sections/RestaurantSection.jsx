// src/components/sections/RestaurantSection.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  X,
  Camera,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Image as ImageIcon,
} from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const RestaurantSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const photos = Array.from({ length: 14 }, (_, i) => ({
    src: `/assets/photo/${i + 1}.jpg`,
    alt: `Photo Manjocarn ${i + 1}`,
    id: i + 1,
  }));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const openModal = (photo, index) => {
    setSelectedImage(photo);
    setCurrentImageIndex(index);
    // Empêcher le scroll du body
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restaurer le scroll du body
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % photos.length
        : (currentImageIndex - 1 + photos.length) % photos.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(photos[newIndex]);
  };

  // Gérer les touches clavier
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

  const characteristics = [
    {
      icon: "🌳",
      title: "Ambiance Naturelle",
      description: "Sous l'ombre du châtaignier, dans un cadre authentique",
    },
    {
      icon: "🍽️",
      title: "Cuisine Simple",
      description: "Restauration efficace avec des produits frais du coin",
    },
    {
      icon: "🏖️",
      title: "Plage Privée",
      description: "Accès direct à notre plage et à la rivière",
    },
    {
      icon: "😊",
      title: "Pas de Chichi",
      description: "Détente garantie, on se prélasse en toute simplicité",
    },
  ];

  // Photos à afficher selon l'état (mobile vs desktop)
  const photosToShow = isMobile && !showAllPhotos ? photos.slice(0, 6) : photos;

  return (
    <Section
      id="restaurant"
      className="bg-gradient-to-br from-manjocarn-background via-manjocarn-sand-beige/20 to-manjocarn-mint-green/15 relative overflow-hidden py-8 md:py-16 lg:py-20"
      withDecorations
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* En-tête responsive */}
        <motion.div className="text-center mb-8 md:mb-16" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center mb-4 md:mb-6 card-nature px-4 md:px-8 py-3 md:py-4 rounded-full shadow-warm"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Camera
                className="mr-2 md:mr-3 text-manjocarn-forest-green"
                size={isMobile ? 24 : 32}
              />
            </motion.div>
            <span className="text-sm md:text-lg font-semibold text-manjocarn-dark-gray">
              Notre Lieu
            </span>
          </motion.div>

          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gradient-nature mb-4 md:mb-6">
            Le Restaurant Manjocarn
          </h2>

          <motion.div
            className="w-24 md:w-32 h-1 bg-gradient-to-r from-manjocarn-sage-green via-manjocarn-golden-yellow to-manjocarn-sunset-orange mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: isMobile ? 96 : 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Description principale responsive */}
        <motion.div
          className="text-center mb-8 md:mb-16 max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <div className="card-nature rounded-xl md:rounded-2xl p-4 md:p-8 mb-6 md:mb-8 bg-gradient-to-r from-manjocarn-background to-manjocarn-sand-beige/50 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-manjocarn-golden-yellow/10 to-transparent"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />

            <div className="relative z-10">
              <motion.p
                className="text-lg md:text-2xl text-manjocarn-dark-gray font-medium mb-3 md:mb-4 leading-relaxed"
                variants={fadeInUp}
              >
                <span className="text-gradient-warm font-bold">
                  Restauration simple et efficace
                </span>{" "}
                : vous êtes dans une guinguette !!
              </motion.p>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6 text-sm md:text-lg text-manjocarn-dark-gray">
                <p className="leading-relaxed">
                  Pas de chichi, ambiance détente, on se prélasse à l'ombre du
                  châtaignier.
                </p>
                <p className="leading-relaxed">
                  Nous travaillons selon les disponibilités du moment avec des
                  produits frais du coin.
                </p>
              </div>
            </div>
          </div>

          {/* Caractéristiques responsive */}
          <motion.div
            className="restaurant-characteristics grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
            variants={staggerContainer}
          >
            {characteristics.map((char, index) => (
              <motion.div
                key={index}
                className="characteristic-item card-nature rounded-lg md:rounded-xl p-3 md:p-6 text-center hover:shadow-nature-lg transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="characteristic-icon text-2xl md:text-4xl mb-2 md:mb-3"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  {char.icon}
                </motion.div>
                <h3 className="characteristic-title font-playfair text-sm md:text-xl text-manjocarn-forest-green mb-1 md:mb-2 font-bold">
                  {char.title}
                </h3>
                <p className="characteristic-description text-xs md:text-sm text-manjocarn-dark-gray leading-relaxed">
                  {char.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Titre de la galerie avec compteur */}
        <motion.div className="text-center mb-6 md:mb-12" variants={fadeInUp}>
          <h3 className="font-playfair text-xl md:text-4xl text-gradient-nature mb-3 md:mb-4">
            Notre Galerie Photo
          </h3>
          <div className="flex items-center justify-center gap-2 md:gap-4 text-manjocarn-dark-gray text-sm md:text-lg">
            <Grid3X3 size={isMobile ? 16 : 20} />
            <span>
              {photosToShow.length} photo{photosToShow.length > 1 ? "s" : ""}
              {isMobile && !showAllPhotos && photos.length > 6 && (
                <span className="text-manjocarn-sage-green">
                  {" "}
                  sur {photos.length}
                </span>
              )}
            </span>
          </div>
        </motion.div>

        {/* Galerie photos responsive */}
        <motion.div
          className="restaurant-gallery grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6"
          variants={staggerContainer}
        >
          {photosToShow.map((photo, index) => (
            <motion.div
              key={`photo-${photo.id}`}
              className="gallery-item aspect-square rounded-lg md:rounded-2xl overflow-hidden cursor-pointer group relative bg-manjocarn-sage-green/20"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              onClick={() => openModal(photo, index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Skeleton loading */}
              {!imageLoaded[photo.id] && (
                <div className="absolute inset-0 bg-manjocarn-sage-green/20 animate-pulse rounded-lg md:rounded-2xl flex items-center justify-center">
                  <ImageIcon
                    className="text-manjocarn-sage-green/50"
                    size={isMobile ? 24 : 32}
                  />
                </div>
              )}

              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
                onLoad={() => handleImageLoad(photo.id)}
                onError={(e) => {
                  console.log(`Erreur de chargement pour ${photo.src}`);
                  e.target.style.display = "none";
                }}
              />

              {/* Overlay avec zoom icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white" size={isMobile ? 20 : 24} />
              </div>

              {/* Numéro de photo */}
              <div className="absolute top-1 md:top-2 right-1 md:right-2 bg-black/50 text-white text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                {photo.id}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton "Voir plus" pour mobile */}
        {isMobile && !showAllPhotos && photos.length > 6 && (
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setShowAllPhotos(true)}
              className="btn-nature inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Grid3X3 size={16} />
              Voir les {photos.length - 6} photos restantes
            </motion.button>
          </motion.div>
        )}

        {/* Modal image amélioré pour mobile */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-2 md:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Bouton fermer - adapté mobile */}
              <motion.button
                className="absolute top-2 md:top-4 right-2 md:right-4 z-[110] bg-black/70 hover:bg-black/90 text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                aria-label="Fermer la galerie"
              >
                <X size={isMobile ? 20 : 24} />
              </motion.button>

              {/* Flèches de navigation - adaptées mobile */}
              {photos.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-[110] bg-black/70 hover:bg-black/90 text-white p-2 md:p-4 rounded-full transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("prev");
                    }}
                    aria-label="Image précédente"
                  >
                    <ChevronLeft size={isMobile ? 20 : 28} />
                  </motion.button>
                  <motion.button
                    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-[110] bg-black/70 hover:bg-black/90 text-white p-2 md:p-4 rounded-full transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("next");
                    }}
                    aria-label="Image suivante"
                  >
                    <ChevronRight size={isMobile ? 20 : 28} />
                  </motion.button>
                </>
              )}

              {/* Conteneur de l'image */}
              <div
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Compteur et informations - adaptés mobile */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-[110]">
                <div className="bg-black/80 text-white px-3 md:px-4 py-2 rounded-full text-sm md:text-base font-medium backdrop-blur-sm flex items-center gap-2 md:gap-3">
                  <span>
                    {currentImageIndex + 1} / {photos.length}
                  </span>
                  <div className="w-px h-4 bg-white/30"></div>
                  <span className="text-xs md:text-sm opacity-80">
                    Photo #{selectedImage.id}
                  </span>
                </div>
              </div>

              {/* Instructions de navigation pour mobile */}
              {isMobile && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <motion.div
                    className="bg-black/60 text-white px-4 py-2 rounded-lg text-sm text-center opacity-0"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    Balayez pour naviguer
                  </motion.div>
                </div>
              )}

              {/* Support swipe pour mobile */}
              {isMobile && (
                <div
                  className="absolute inset-0 touch-pan-x"
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    e.currentTarget.startX = touch.clientX;
                  }}
                  onTouchEnd={(e) => {
                    const touch = e.changedTouches[0];
                    const diffX = e.currentTarget.startX - touch.clientX;
                    const threshold = 50;

                    if (Math.abs(diffX) > threshold) {
                      if (diffX > 0) {
                        navigateImage("next");
                      } else {
                        navigateImage("prev");
                      }
                    }
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

export default RestaurantSection;
