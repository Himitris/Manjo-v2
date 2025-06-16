// src/components/sections/PaymentSection.jsx
import { motion } from "framer-motion";
import { Phone, CreditCard, Euro, Calendar } from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";
import ReservationModal from "../ui/ReservationModal";
import { useState } from "react";

const PaymentSection = () => {
  const [showReservation, setShowReservation] = useState(false);

  return (
    <Section
      id="payment"
      className="bg-gradient-to-br from-manjocarn-peach/30 to-manjocarn-pale-gold/20"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-playfair text-4xl md:text-6xl text-center text-manjocarn-rusty-orange mb-12"
          variants={fadeInUp}
        >
          Réserver & Payer
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Réservation */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg"
            variants={fadeInUp}
          >
            <div className="text-center mb-6">
              <Calendar className="w-16 h-16 text-manjocarn-forest-green mx-auto mb-4" />
              <h3 className="font-playfair text-2xl text-manjocarn-forest-green mb-4">
                Réserver votre table
              </h3>
              <p className="text-manjocarn-dark-gray mb-6">
                Pour réserver votre table chez nous, veuillez nous appeler :
              </p>

              <div className="flex items-center justify-center bg-manjocarn-forest-green/10 rounded-lg p-4 mb-6">
                <Phone className="text-manjocarn-forest-green mr-3" />
                <span className="font-bold text-manjocarn-rusty-orange text-lg">
                  +33 5 63 68 25 85
                </span>
              </div>

              <motion.button
                className="bg-manjocarn-forest-green text-manjocarn-pale-gold px-8 py-3 rounded-full font-medium hover:bg-manjocarn-forest-green/90 transition-colors w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowReservation(true)}
              >
                Réserver un pique-nique
              </motion.button>
            </div>
          </motion.div>

          {/* Moyens de paiement */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg"
            variants={fadeInUp}
          >
            <div className="text-center mb-6">
              <CreditCard className="w-16 h-16 text-manjocarn-rusty-orange mx-auto mb-4" />
              <h3 className="font-playfair text-2xl text-manjocarn-rusty-orange mb-4">
                Moyens de paiement
              </h3>
              <p className="text-manjocarn-dark-gray mb-6">
                Nous acceptons les paiements suivants :
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center bg-manjocarn-pale-gold/20 rounded-lg p-4">
                <CreditCard className="text-manjocarn-forest-green mr-3" />
                <span className="text-manjocarn-dark-gray">
                  Chèque : À l'ordre de "Manjocarn"
                </span>
              </div>

              <div className="flex items-center bg-manjocarn-pale-gold/20 rounded-lg p-4">
                <Euro className="text-manjocarn-forest-green mr-3" />
                <span className="text-manjocarn-dark-gray">Espèces</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal de réservation */}
      {showReservation && (
        <ReservationModal onClose={() => setShowReservation(false)} />
      )}
    </Section>
  );
};

export default PaymentSection;
