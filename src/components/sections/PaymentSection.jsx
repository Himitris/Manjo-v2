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
        "Pour déguster nos spécialités dans notre restaurant guinguette",
      action: "Appeler",
      color: "from-manjocarn-sage-green to-manjocarn-forest-green",
      features: [
        "Terrasse ombragée",
        "Vue sur rivière",
        "Ambiance conviviale",
        "Service à table",
      ],
      note: "Réservation uniquement par téléphone",
      phone: "+33 5 63 68 25 85",
    },
    {
      icon: (
        <ShoppingBasket className="w-12 h-12 text-manjocarn-sunset-orange" />
      ),
      title: "Pique-nique",
      description:
        "Commander un pique-nique préparé ou réserver un emplacement",
      action: "Réserver",
      color: "from-manjocarn-sunset-orange to-manjocarn-golden-yellow",
      features: [
        "Plage privée",
        "Tables disponibles",
        "Conservation au frais",
        "Pique-nique préparé ou apporté",
      ],
      note: "Réservation en ligne disponible",
      isModal: true,
    },
  ];

  return (
    <Section
      id="payment"
      className="bg-gradient-to-br from-manjocarn-background via-manjocarn-sand-beige/30 to-manjocarn-mint-green/20 relative overflow-hidden"
      withDecorations
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-16 text-8xl"
          animate={{
            rotate: [0, 10, -5, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "rgba(255, 215, 0, 0.2)" }}
        >
          💳
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 text-6xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ color: "rgba(106, 142, 107, 0.15)" }}
        >
          📞
        </motion.div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
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
              <Calendar
                className="mr-3 text-manjocarn-forest-green"
                size={32}
              />
            </motion.div>
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

        {/* Navigation par onglets */}
        <motion.div className="flex justify-center mb-12" variants={fadeInUp}>
          <div className="bg-manjocarn-light-sage/30 rounded-2xl p-2 backdrop-blur-sm border border-manjocarn-sage-green/20">
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
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-forest-green text-white shadow-nature"
                    : "text-manjocarn-dark-gray hover:bg-manjocarn-sage-green/20"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Contenu des onglets avec AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === "reservation" && (
            <motion.div
              key="reservation-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 min-h-[600px]"
            >
              {reservationOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className="card-nature rounded-2xl p-8 hover:shadow-nature-lg transition-all duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="relative z-10">
                    {/* Icône et titre */}
                    <div className="text-center mb-6">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-nature`}
                        whileHover={{
                          rotate: 10,
                          scale: 1.1,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {option.icon}
                      </motion.div>

                      <h3 className="font-playfair text-2xl text-manjocarn-forest-green mb-3 font-bold">
                        {option.title}
                      </h3>

                      <p className="text-manjocarn-dark-gray leading-relaxed">
                        {option.description}
                      </p>
                    </div>

                    {/* Note importante */}
                    <div className="mb-6 p-4 bg-manjocarn-golden-yellow/20 border border-manjocarn-golden-yellow/40 rounded-xl">
                      <p className="text-sm text-manjocarn-forest-green font-medium text-center">
                        💡 {option.note}
                      </p>
                    </div>

                    {/* Caractéristiques */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-manjocarn-forest-green mb-3 flex items-center">
                        <span className="mr-2">✨</span>
                        Inclus
                      </h4>
                      <div className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center text-sm text-manjocarn-dark-gray"
                            whileHover={{ x: 5 }}
                          >
                            <span className="w-2 h-2 bg-manjocarn-sage-green rounded-full mr-3"></span>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Informations de contact */}
                    <div className="bg-manjocarn-sage-green/10 rounded-xl p-6 mb-6 border border-manjocarn-sage-green/20">
                      <div className="flex items-center text-manjocarn-forest-green mb-3">
                        <Phone className="mr-3" size={20} />
                        <span className="font-bold text-lg">
                          +33 5 63 68 25 85
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-manjocarn-dark-gray/80">
                        <Clock className="mr-2" size={16} />
                        <span>Horaires selon saison - Nous contacter</span>
                      </div>
                    </div>

                    {/* Bouton d'action */}
                    <motion.button
                      className={`w-full bg-gradient-to-r ${option.color} text-white py-4 rounded-xl font-semibold text-lg shadow-warm hover:shadow-warm-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        if (option.isModal) {
                          setShowReservation(true);
                        } else {
                          window.location.href = "tel:+33563682585";
                        }
                      }}
                    >
                      {option.isModal ? (
                        <>
                          <Calendar className="inline mr-3" size={20} />
                          Réserver en ligne
                        </>
                      ) : (
                        <>
                          <Phone className="inline mr-3" size={20} />
                          Appeler maintenant
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "payment" && (
            <motion.div
              key="payment-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto min-h-[600px]"
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
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  💡
                </motion.div>
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

        {/* Section contact d'urgence */}
        <motion.div
          className="mt-16 text-center card-nature rounded-2xl p-8 max-w-2xl mx-auto bg-gradient-to-r from-manjocarn-sage-green/5 to-manjocarn-mint-green/10"
          variants={fadeInUp}
        >
          <motion.div
            className="text-3xl mb-4"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            📞
          </motion.div>
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
