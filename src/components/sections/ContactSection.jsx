// src/components/sections/ContactSection.jsx
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const ContactSection = () => {
  return (
    <Section
      id="contact"
      className="bg-manjocarn-forest-green text-manjocarn-pale-gold"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-playfair text-4xl md:text-6xl text-center mb-12"
          variants={fadeInUp}
        >
          Nous Contacter
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Coordonnées */}
          <motion.div className="text-center" variants={fadeInUp}>
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-playfair text-xl mb-4">Téléphone</h3>
            <p className="text-lg">+33 5 63 68 25 85</p>
          </motion.div>

          <motion.div className="text-center" variants={fadeInUp}>
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-playfair text-xl mb-4">Adresse</h3>
            <p>Manjocarn</p>
            <p>Saint-Antonin-Noble-Val</p>
            <p>82140, France</p>
          </motion.div>

          <motion.div className="text-center" variants={fadeInUp}>
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-playfair text-xl mb-4">Horaires</h3>
            <p>Selon saison</p>
            <p>Nous contacter</p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-manjocarn-pale-gold/30"
          variants={fadeInUp}
        >
          <h3 className="font-cabin-sketch text-3xl mb-4">Manjocarn</h3>
          <p className="text-manjocarn-pale-gold/80">
            Guinguette en pleine nature • Plage privée • Accès rivière
          </p>
          <p className="text-manjocarn-pale-gold/60 mt-4">
            © 2024 Manjocarn - Tous droits réservés
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ContactSection;
