import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, CreditCard, Banknote, MapPin, Clock } from "lucide-react";
import ScrollToTop from "../ScrollToTop";

const PayerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const phoneNumber = "+33 5 63 68 25 85";

  return (
    <section
      id="payer"
      className="scroll-section bg-gradient-to-br from-forest-green/10 via-background-color to-pale-gold/15 py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Titre principal */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-5xl font-playfair text-forest-green mb-6 relative">
              Réserver et payer
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pale-gold rounded-full"></div>
            </h2>
          </motion.div>

          {/* Section Réservation */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-peach/30"
          >
            <h3 className="text-2xl md:text-3xl font-playfair text-rusty-orange mb-6 flex items-center">
              <Phone className="mr-3 w-7 h-7" />
              Réserver votre table
            </h3>

            <div className="space-y-4">
              <p className="text-lg text-dark-gray leading-relaxed">
                Pour réserver votre table chez nous, veuillez nous appeler :
              </p>

              <motion.div
                className="flex items-center justify-center bg-forest-green/10 rounded-xl p-6 border border-forest-green/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="text-forest-green mr-4 w-8 h-8" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-2xl md:text-3xl font-bold text-rusty-orange hover:text-forest-green transition-colors duration-300"
                >
                  {phoneNumber}
                </a>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-pale-gold/20 rounded-lg p-4 text-center border border-pale-gold/30">
                  <Clock className="w-6 h-6 text-forest-green mx-auto mb-2" />
                  <h4 className="font-semibold text-dark-gray mb-1">
                    Horaires
                  </h4>
                  <p className="text-sm text-dark-gray/80">Selon saison</p>
                </div>

                <div className="bg-peach/20 rounded-lg p-4 text-center border border-peach/30">
                  <MapPin className="w-6 h-6 text-forest-green mx-auto mb-2" />
                  <h4 className="font-semibold text-dark-gray mb-1">
                    Localisation
                  </h4>
                  <p className="text-sm text-dark-gray/80">
                    Au bord de l'Aveyron
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section Moyens de paiement */}
          <motion.div
            variants={itemVariants}
            className="bg-pale-gold/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-pale-gold/30"
          >
            <h3 className="text-2xl md:text-3xl font-playfair text-forest-green mb-6 flex items-center">
              <CreditCard className="mr-3 w-7 h-7" />
              Moyens de paiement acceptés
            </h3>

            <p className="text-lg text-dark-gray mb-6 leading-relaxed">
              Nous acceptons les paiements par chèque et en espèces directement
              à notre établissement.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="bg-white/60 rounded-xl p-6 border border-forest-green/20 flex items-center space-x-4"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="bg-forest-green/10 p-3 rounded-full">
                  <CreditCard className="w-8 h-8 text-forest-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray text-lg">
                    Chèque
                  </h4>
                  <p className="text-dark-gray/80">À l'ordre de "Manjocarn"</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/60 rounded-xl p-6 border border-rusty-orange/20 flex items-center space-x-4"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="bg-rusty-orange/10 p-3 rounded-full">
                  <Banknote className="w-8 h-8 text-rusty-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray text-lg">
                    Espèces
                  </h4>
                  <p className="text-dark-gray/80">Paiement sur place</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Note importante */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-forest-green/10 to-rusty-orange/10 rounded-2xl p-6 text-center shadow-lg border border-pale-gold/30"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-2">ℹ️</span>
              <h4 className="text-xl font-playfair text-dark-gray">
                Information importante
              </h4>
            </div>
            <p className="text-dark-gray leading-relaxed">
              Les réservations sont fortement recommandées, surtout en période
              estivale. N'hésitez pas à nous contacter pour toute question !
            </p>
          </motion.div>

          {/* Contact rapide */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center bg-forest-green text-pale-gold px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-forest-green/90 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2 w-5 h-5" />
              Appeler maintenant
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bouton retour en haut */}
        <div className="mt-12 flex justify-center">
          <ScrollToTop />
        </div>
      </div>
    </section>
  );
};

export default PayerSection;
