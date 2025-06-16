// src/components/sections/RestaurantSection.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  X,
  Camera,
  Heart,
  Share2,
  Download,
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
  const [filter, setFilter] = useState("all");

  const photos = Array.from({ length: 14 }, (_, i) => ({
    src: `/assets/photo/${i + 1}.jpg`,
    alt: `Photo Manjocarn ${i + 1}`,
    category:
      i < 4 ? "exterieur" : i < 8 ? "interieur" : i < 12 ? "plats" : "ambiance",
    liked: Math.random() > 0.6,
    likes: Math.floor(Math.random() * 25) + 5,
  }));

  const categories = [
    { id: "all", label: "Tout voir", icon: "📸", count: photos.length },
    {
      id: "exterieur",
      label: "Extérieur",
      icon: "🏞️",
      count: photos.filter((p) => p.category === "exterieur").length,
    },
    {
      id: "interieur",
      label: "Intérieur",
      icon: "🏠",
      count: photos.filter((p) => p.category === "interieur").length,
    },
    {
      id: "plats",
      label: "Nos plats",
      icon: "🍽️",
      count: photos.filter((p) => p.category === "plats").length,
    },
    {
      id: "ambiance",
      label: "Ambiance",
      icon: "✨",
      count: photos.filter((p) => p.category === "ambiance").length,
    },
  ];

  const filteredPhotos =
    filter === "all"
      ? photos
      : photos.filter((photo) => photo.category === filter);

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
        ? (currentImageIndex + 1) % filteredPhotos.length
        : (currentImageIndex - 1 + filteredPhotos.length) %
          filteredPhotos.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredPhotos[newIndex]);
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
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-16 right-20 text-manjocarn-sage-green/15 text-8xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          📷
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 text-manjocarn-golden-yellow/20 text-6xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          🏡
        </motion.div>
      </div>

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

        {/* Filtres de catégories */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center px-4 md:px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-forest-green text-manjocarn-sand-beige shadow-nature-lg scale-105"
                  : "card-nature text-manjocarn-dark-gray hover:shadow-nature"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg md:text-xl mr-2">{category.icon}</span>
              <span className="text-sm md:text-base">{category.label}</span>
              <span className="ml-2 text-xs bg-manjocarn-golden-yellow/30 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Galerie photos améliorée */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
          variants={staggerContainer}
          key={filter}
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={`${filter}-${index}`}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative bg-manjocarn-sage-green/20"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 1 }}
              onClick={() => openModal(photo, index)}
            >
              {/* Skeleton loading */}
              {!imageLoaded[`${filter}-${index}`] && (
                <div className="absolute inset-0 bg-manjocarn-sage-green/20 animate-pulse rounded-2xl flex items-center justify-center">
                  <Camera className="text-manjocarn-sage-green/50" size={32} />
                </div>
              )}

              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
                onLoad={() => handleImageLoad(`${filter}-${index}`)}
              />

              {/* Overlay avec informations */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <div className="text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Heart
                        size={16}
                        className={`mr-1 ${
                          photo.liked ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                      <span className="text-sm">{photo.likes}</span>
                    </div>
                    <ZoomIn size={16} />
                  </div>
                  <div className="text-xs opacity-80">
                    {categories.find((c) => c.id === photo.category)?.label}
                  </div>
                </div>
              </div>

              {/* Badge catégorie mobile */}
              <div className="absolute top-2 left-2 md:hidden">
                <span className="text-lg">
                  {categories.find((c) => c.id === photo.category)?.icon}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Modal image amélioré */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-full w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image principale */}
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                {/* Contrôles de navigation */}
                {filteredPhotos.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                      onClick={() => navigateImage("prev")}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                      onClick={() => navigateImage("next")}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Barre d'outils */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <motion.button
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Informations sur l'image */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">{selectedImage.alt}</h3>
                    <p className="text-sm opacity-80">
                      {
                        categories.find((c) => c.id === selectedImage.category)
                          ?.label
                      }
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Heart
                        size={16}
                        className={`mr-1 ${
                          selectedImage.liked ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                      <span>{selectedImage.likes}</span>
                    </div>
                    <span className="text-sm opacity-80">
                      {currentImageIndex + 1} / {filteredPhotos.length}
                    </span>
                  </div>
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
