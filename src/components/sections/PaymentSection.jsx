// src/components/sections/PaymentSection.jsx
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  CreditCard,
  Euro,
  Calendar,
  MapPin,
  Clock,
  Users,
  Utensils,
  ShoppingBasket,
} from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";
import ReservationModal from "../ui/ReservationModal";
import { useState } from "react";

const PaymentSection = () => {
  const [showReservation, setShowReservation] = useState(false);
  const [activeTab, setActiveTab] = useState("reservation");

  const paymentMethods = [
    {
      icon: <Euro className="w-8 h-8" />,
      title: "Espèces",
      description: "Paiement en liquide accepté sur place",
      badge: "Traditionnel",
      color: "from-manjocarn-golden-yellow to-manjocarn-sunset-orange",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Chèque",
      description: 'À l\'ordre de "Manjocarn"',
      badge: "Sécurisé",
      color: "from-manjocarn-sage-green to-manjocarn-forest-green",
    },
  ];

  const reservationOptions = [
    {
      icon: <Utensils className="w-12 h-12 text-manjocarn-forest-green" />,
      title: "Réserver une table",
      description:
        "",
      action: "Appeler",
      color: "from-manjocarn-sage-green to-manjocarn-forest-green",
      features: [
        "Terrasse ombragée",
        "Vue sur rivière",
        "Ambiance conviviale",
        "Service à table",
      ],
      note: "Réservation uniquement par téléphone ou sur place",
      phone: "+33 5 63 68 25 85",
    },
    // {
    //   icon: (
    //     <ShoppingBasket className="w-12 h-12 text-manjocarn-sunset-orange" />
    //   ),
    //   title: "Pique-nique",
    //   description:
    //     "Commander un pique-nique préparé ou réserver un emplacement",
    //   action: "Réserver",
    //   color: "from-manjocarn-sunset-orange to-manjocarn-golden-yellow",
    //   features: [
    //     "Plage privée",
    //     "Tables disponibles",
    //     "Conservation au frais",
    //     "Pique-nique préparé ou apporté",
    //   ],
    //   note: "Réservation en ligne disponible",
    //   isModal: true,
    // },
  ];

  return (
    <Section
      id="payment"
      className="bg-gradient-to-br from-manjocarn-background via-manjocarn-sand-beige/30 to-manjocarn-mint-green/20 relative overflow-hidden"
    >
      {/* Fond sans émojis - juste des formes géométriques */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-16 w-24 h-24 bg-manjocarn-golden-yellow/10 rounded-full blur-xl animate-pulse-soft"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-manjocarn-sage-green/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-manjocarn-mint-green/15 rounded-full blur-lg"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* En-tête */}
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center mb-6 card-nature px-8 py-4 rounded-full shadow-warm"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="mr-3 text-manjocarn-forest-green" size={32} />
            <span className="text-lg font-semibold text-manjocarn-dark-gray">
              Réservation
            </span>
          </motion.div>

          <h2 className="font-playfair text-4xl md:text-6xl text-gradient-nature mb-6">
            Réserver & Payer
          </h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-manjocarn-sage-green via-manjocarn-golden-yellow to-manjocarn-sunset-orange mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <p className="mt-6 text-lg text-manjocarn-dark-gray max-w-2xl mx-auto leading-relaxed">
            Réservez votre moment de détente au Manjocarn. Choisissez entre une
            table au restaurant ou un emplacement pique-nique.
          </p>
        </motion.div>

        {/* Navigation par onglets améliorée - côte à côte */}
        <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
          <div className="flex bg-manjocarn-sand-beige/80 backdrop-blur-sm border-2 border-manjocarn-sage-green/40 rounded-2xl p-2 shadow-nature-lg">
            {[
              {
                id: "reservation",
                label: "Réservation",
                icon: <Calendar size={20} />,
              },
              {
                id: "payment",
                label: "Paiement",
                icon: <CreditCard size={20} />,
              },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 min-w-[180px] justify-center ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-manjocarn-forest-green to-manjocarn-deep-forest text-manjocarn-sand-beige shadow-nature-lg border-2 border-manjocarn-golden-yellow/50"
                    : "text-manjocarn-forest-green hover:bg-white/60 hover:shadow-md border-2 border-transparent"
                }`}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Contenu des onglets avec transition fluide */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "reservation" && (
              <motion.div
                key="reservation-tab"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                {reservationOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    className="card-nature rounded-3xl p-12 hover:shadow-nature-lg transition-all duration-300 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.01 }}
                  >
                    {/* Effet de brillance */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />

                    <div className="relative z-10">
                      {/* Header avec icône et titre - layout horizontal */}
                      <div className="flex flex-col md:flex-row md:items-center mb-8">
                        <motion.div
                          className={`w-24 h-24 bg-gradient-to-r ${option.color} rounded-3xl flex items-center justify-center text-white shadow-nature mb-6 md:mb-0 md:mr-8 mx-auto md:mx-0`}
                          whileHover={{
                            rotate: 10,
                            scale: 1.1,
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {option.icon}
                        </motion.div>

                        <div className="text-center md:text-left flex-1">
                          <h3 className="font-playfair text-3xl md:text-4xl text-manjocarn-forest-green mb-4 font-bold">
                            {option.title}
                          </h3>
                        </div>
                      </div>

                      {/* Note importante - plus visible */}
                      <div className="mb-8 p-6 bg-manjocarn-golden-yellow/20 border-2 border-manjocarn-golden-yellow/40 rounded-2xl">
                        <div className="flex items-center justify-center">
                          <div className="w-8 h-8 bg-manjocarn-golden-yellow rounded-full flex items-center justify-center mr-4">
                            <span className="text-white font-bold">!</span>
                          </div>
                          <p className="text-base text-manjocarn-forest-green font-semibold">
                            {option.note}
                          </p>
                        </div>
                      </div>

                      {/* Caractéristiques en grille 2x2 */}
                      <div className="mb-10">
                        <h4 className="font-playfair text-2xl text-manjocarn-forest-green mb-6 text-center">
                          Ce qui vous attend ici
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[
                            {
                              text: "Terrasse sous le châtaignier",
                              icon: "🌳",
                            },
                            { text: "Les pieds dans l'eau", icon: "🌊" },
                            { text: "Service souriant", icon: "😊" },
                            { text: "Produits du coin", icon: "🥘" },
                          ].map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center p-4 bg-manjocarn-sage-green/10 rounded-xl border border-manjocarn-sage-green/20"
                              whileHover={{ x: 5, scale: 1.02 }}
                            >
                              <div className="text-2xl mr-4 flex-shrink-0">
                                {feature.icon}
                              </div>
                              <span className="text-base text-manjocarn-forest-green font-medium">
                                {feature.text}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Section contact et action - layout horizontal sur desktop */}
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Informations de contact */}
                        <div className="bg-gradient-to-r from-manjocarn-sage-green/10 to-manjocarn-mint-green/10 rounded-2xl p-8 border border-manjocarn-sage-green/30">
                          <h5 className="font-playfair text-xl text-manjocarn-forest-green mb-4 font-bold">
                            On vous répond tout de suite
                          </h5>
                          <div className="space-y-3">
                            <div className="flex items-center text-manjocarn-forest-green">
                              <Phone className="mr-3" size={24} />
                              <span className="font-bold text-xl">
                                +33 5 63 68 25 85
                              </span>
                            </div>
                            <div className="flex items-center text-manjocarn-dark-gray">
                              <Clock className="mr-3" size={20} />
                              <span className="text-base">
                                On est là selon la saison
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Bouton d'action plus grand */}
                        <div className="text-center">
                          <motion.button
                            className={`bg-gradient-to-r ${option.color} text-white py-6 px-12 rounded-2xl font-bold text-xl shadow-warm hover:shadow-warm-lg transition-all duration-300 w-full md:w-auto min-w-[250px]`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              if (option.isModal) {
                                setShowReservation(true);
                              } else {
                                window.location.href = "tel:+33563682585";
                              }
                            }}
                          >
                            <Phone className="inline mr-4" size={24} />
                            Un coup de fil ?
                          </motion.button>
                        </div>
                      </div>

                      {/* Informations supplémentaires */}
                      
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "payment" && (
              <motion.div
                key="payment-tab"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <motion.div
                  className="grid md:grid-cols-2 gap-8 mb-12"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {paymentMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      className="card-nature rounded-2xl p-8 hover:shadow-nature-lg transition-all duration-300 relative overflow-hidden group"
                      variants={fadeInUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`bg-gradient-to-r ${method.color} text-white text-xs px-3 py-1 rounded-full font-bold shadow-warm`}
                        >
                          {method.badge}
                        </span>
                      </div>

                      <div className="text-center">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-nature`}
                          whileHover={{
                            rotate: 10,
                            scale: 1.1,
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {method.icon}
                        </motion.div>

                        <h3 className="font-playfair text-2xl text-manjocarn-forest-green mb-4 font-bold">
                          {method.title}
                        </h3>

                        <p className="text-manjocarn-dark-gray leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Informations supplémentaires */}
                <motion.div
                  className="card-nature rounded-2xl p-8 text-center bg-gradient-to-r from-manjocarn-background to-manjocarn-sand-beige/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="font-playfair text-xl text-manjocarn-forest-green mb-4">
                    Bon à savoir
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm text-manjocarn-dark-gray">
                    <div className="flex items-center justify-center">
                      <MapPin
                        size={16}
                        className="mr-2 text-manjocarn-sage-green"
                      />
                      <span>Paiement sur place uniquement</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Clock
                        size={16}
                        className="mr-2 text-manjocarn-sage-green"
                      />
                      <span>Aucun frais supplémentaire</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Section contact d'urgence */}
        <motion.div
          className="mt-16 text-center card-nature rounded-2xl p-8 max-w-2xl mx-auto bg-gradient-to-r from-manjocarn-sage-green/5 to-manjocarn-mint-green/10"
          variants={fadeInUp}
        >
          <div className="text-3xl mb-4">📞</div>
          <h3 className="font-playfair text-xl text-manjocarn-forest-green mb-4">
            Une question ? Contactez-nous !
          </h3>
          <p className="text-manjocarn-dark-gray mb-6">
            Notre équipe est là pour vous renseigner et vous accompagner dans
            votre réservation.
          </p>
          <motion.a
            href="tel:+33563682585"
            className="btn-nature inline-flex items-center text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="mr-3" size={20} />
            +33 5 63 68 25 85
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Modal de réservation - uniquement pour les pique-niques */}
      {showReservation && (
        <ReservationModal onClose={() => setShowReservation(false)} />
      )}
    </Section>
  );
};

export default PaymentSection;
