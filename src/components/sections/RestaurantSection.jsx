// src/components/sections/RestaurantSection.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const RestaurantSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const photos = Array.from(
    { length: 14 },
    (_, i) => `/assets/photo/${i + 1}.jpg`
  );

  return (
    <Section
      id="restaurant"
      className="bg-gradient-to-br from-manjocarn-background to-manjocarn-forest-green/10"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-playfair text-4xl md:text-6xl text-center text-manjocarn-rusty-orange mb-8"
          variants={fadeInUp}
        >
          Le Restaurant
        </motion.h2>

        <motion.div className="text-center mb-12 space-y-4" variants={fadeInUp}>
          <p className="text-xl text-manjocarn-dark-gray font-medium">
            Restauration simple et efficace : vous êtes dans une guinguette !!
          </p>
          <p className="text-lg text-manjocarn-dark-gray">
            Pas de chichi, ambiance détente, on se prélasse à l'ombre du
            châtaignier.
          </p>
          <p className="text-lg text-manjocarn-dark-gray">
            Nous travaillons selon les disponibilités du moment avec des
            produits frais du coin.
          </p>
        </motion.div>

        {/* Galerie photos */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={staggerContainer}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo}
                alt={`Photo Manjocarn ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal image */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Photo agrandie"
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-manjocarn-pale-gold"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

export default RestaurantSection;
