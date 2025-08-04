// src/components/sections/RestaurantSection.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  X,
  Camera,
  Heart,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const RestaurantSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  const photos = Array.from({ length: 14 }, (_, i) => ({
    src: `/assets/photo/${i + 1}.jpg`,
    alt: `Photo Manjocarn ${i + 1}`,
  }));

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const openModal = (photo, index) => {
    setSelectedImage(photo);
    setCurrentImageIndex(index);
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % photos.length
        : (currentImageIndex - 1 + photos.length) % photos.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(photos[newIndex]);
  };

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

  return (
    <Section
      id="restaurant"
      className="bg-gradient-to-br from-manjocarn-background via-manjocarn-sand-beige/20 to-manjocarn-mint-green/15 relative overflow-hidden"
      withDecorations
    >
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* En-tête */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center mb-6 card-nature px-8 py-4 rounded-full shadow-warm"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Camera className="mr-3 text-manjocarn-forest-green" size={32} />
            </motion.div>
            <span className="text-lg font-semibold text-manjocarn-dark-gray">
              Notre Lieu
            </span>
          </motion.div>

          <h2 className="font-playfair text-4xl md:text-6xl text-gradient-nature mb-6">
            Le Restaurant Manjocarn
          </h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-manjocarn-sage-green via-manjocarn-golden-yellow to-manjocarn-sunset-orange mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Description principale */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <div className="card-nature rounded-2xl p-8 mb-8 bg-gradient-to-r from-manjocarn-background to-manjocarn-sand-beige/50 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-manjocarn-golden-yellow/10 to-transparent"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />

            <div className="relative z-10">
              <motion.p
                className="text-xl md:text-2xl text-manjocarn-dark-gray font-medium mb-4 leading-relaxed"
                variants={fadeInUp}
              >
                <span className="text-gradient-warm font-bold">
                  Restauration simple et efficace
                </span>{" "}
                : vous êtes dans une guinguette !!
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6 text-lg text-manjocarn-dark-gray">
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

          {/* Caractéristiques */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={staggerContainer}
          >
            {characteristics.map((char, index) => (
              <motion.div
                key={index}
                className="card-nature rounded-xl p-4 md:p-6 text-center hover:shadow-nature-lg transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl mb-3"
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
                <h3 className="font-playfair text-lg md:text-xl text-manjocarn-forest-green mb-2 font-bold">
                  {char.title}
                </h3>
                <p className="text-sm text-manjocarn-dark-gray leading-relaxed">
                  {char.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Titre de la galerie */}
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h3 className="font-playfair text-3xl md:text-4xl text-gradient-nature mb-4">
            Notre Galerie Photo
          </h3>
          <p className="text-manjocarn-dark-gray text-lg max-w-2xl mx-auto">
            Découvrez l'atmosphère unique du Manjocarn à travers ces{" "}
            {photos.length} photos
          </p>
        </motion.div>

        {/* Galerie photos complète */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
          variants={staggerContainer}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={`photo-${index}`}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative bg-manjocarn-sage-green/20"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 1 }}
              onClick={() => openModal(photo, index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Skeleton loading */}
              {!imageLoaded[index] && (
                <div className="absolute inset-0 bg-manjocarn-sage-green/20 animate-pulse rounded-2xl flex items-center justify-center">
                  <Camera className="text-manjocarn-sage-green/50" size={32} />
                </div>
              )}

              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                onError={(e) => {
                  console.log(`Erreur de chargement pour ${photo.src}`);
                  e.target.style.display = "none";
                }}
              />

              {/* Overlay avec informations */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <div className="text-white">
                  <div className="flex items-center justify-between mb-2">
                    <ZoomIn size={16} />
                  </div>
                </div>
              </div>

              {/* Numéro de photo */}
              <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal image amélioré */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Bouton fermer - fixe en haut à droite */}
              <motion.button
                className="absolute top-4 right-4 z-[110] bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </motion.button>

              {/* Flèches de navigation - à l'extérieur de l'image */}
              {photos.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-[110] bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigateImage("prev")}
                  >
                    <ChevronLeft size={28} />
                  </motion.button>
                  <motion.button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-[110] bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigateImage("next")}
                  >
                    <ChevronRight size={28} />
                  </motion.button>
                </>
              )}

              {/* Conteneur de l'image centrée */}
              <div
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Compteur simple en bas au centre */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-[110]">
                <div className="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  {currentImageIndex + 1} / {photos.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

export default RestaurantSection;
