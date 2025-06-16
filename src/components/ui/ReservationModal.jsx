// src/components/ui/ReservationModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Users,
  Clock,
  Check,
  ChefHat,
  ShoppingBasket,
  AlertCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ReservationModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [reservationType, setReservationType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const watchedValues = watch();

  const reservationOptions = [
    {
      id: "acheter",
      icon: <ChefHat className="w-8 h-8" />,
      title: "Acheter un pique-nique",
      description:
        "Nous préparons un délicieux pique-nique pour vous et vos proches.",
      features: [
        "Menu spécialement préparé",
        "Produits frais du terroir",
        "Présentation soignée",
        "Couverts inclus",
      ],
      price: "À partir de 15€/pers",
      popular: true,
      color: "from-manjocarn-sage-green to-manjocarn-forest-green",
    },
    {
      id: "garder",
      icon: <ShoppingBasket className="w-8 h-8" />,
      title: "Faire garder mon pique-nique",
      description:
        "Apportez votre propre pique-nique, nous vous gardons une place au frais.",
      features: [
        "Emplacement réservé",
        "Conservation au frais",
        "Tables et bancs",
        "Accès plage privée",
      ],
      price: "5€/emplacement",
      popular: false,
      color: "from-manjocarn-sunset-orange to-manjocarn-golden-yellow",
    },
  ];

  const timeSlots = [
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Réservation:", { ...data, type: reservationType });

    setIsSubmitting(false);
    setIsSuccess(true);

    // Fermer après 3 secondes
    setTimeout(() => {
      onClose();
      reset();
      setStep(1);
      setReservationType("");
      setIsSuccess(false);
    }, 3000);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-manjocarn-sand-beige rounded-3xl max-w-2xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-manjocarn-sage-green/30"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header avec progression - meilleur contraste */}
          <div className="bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-forest-green text-manjocarn-sand-beige p-6 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />

            <div className="relative z-10 flex justify-between items-center">
              <div>
                <h2 className="font-playfair text-2xl font-bold mb-2 text-manjocarn-sand-beige">
                  Réservation Pique-nique
                </h2>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3].map((stepNum) => (
                    <div key={stepNum} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          step >= stepNum
                            ? "bg-manjocarn-golden-yellow text-manjocarn-forest-green"
                            : "bg-manjocarn-sand-beige/20 text-manjocarn-sand-beige/70"
                        }`}
                      >
                        {step > stepNum ? <Check size={16} /> : stepNum}
                      </div>
                      {stepNum < 3 && (
                        <div
                          className={`w-12 h-1 mx-2 rounded transition-all duration-300 ${
                            step > stepNum
                              ? "bg-manjocarn-golden-yellow"
                              : "bg-manjocarn-sand-beige/20"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onClose}
                className="hover:scale-110 transition-transform bg-manjocarn-sand-beige/20 hover:bg-manjocarn-sand-beige/30 rounded-full p-2 text-manjocarn-sand-beige"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Contenu avec meilleur contraste */}
          <div className="p-6 overflow-y-auto max-h-[calc(95vh-120px)]">
            <AnimatePresence mode="wait">
              {/* Étape 1: Choix du type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-playfair text-2xl text-manjocarn-forest-green mb-6 text-center">
                    Choisissez votre mode de pique-nique
                  </h3>

                  <div className="space-y-6">
                    {reservationOptions.map((option) => (
                      <motion.button
                        key={option.id}
                        className={`w-full p-6 rounded-2xl border-2 text-left transition-all duration-300 relative overflow-hidden ${
                          reservationType === option.id
                            ? "border-manjocarn-forest-green bg-manjocarn-sage-green/10 scale-[1.02]"
                            : "border-manjocarn-sage-green/30 hover:border-manjocarn-sage-green/60 hover:scale-[1.01] bg-white"
                        }`}
                        onClick={() => setReservationType(option.id)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Badge populaire */}
                        {option.popular && (
                          <div className="absolute top-4 right-4 bg-manjocarn-sunset-orange text-manjocarn-sand-beige text-xs px-3 py-1 rounded-full font-bold">
                            Populaire
                          </div>
                        )}

                        {/* Effet de brillance */}
                        {reservationType === option.id && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-manjocarn-golden-yellow/20 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        )}

                        <div className="relative z-10">
                          <div className="flex items-start mb-4">
                            <motion.div
                              className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center text-manjocarn-sand-beige mr-4 shadow-nature`}
                              whileHover={{ rotate: 5, scale: 1.05 }}
                            >
                              {option.icon}
                            </motion.div>

                            <div className="flex-1">
                              <h4 className="font-playfair text-xl text-manjocarn-forest-green mb-2 font-bold">
                                {option.title}
                              </h4>
                              <p className="text-manjocarn-dark-gray text-sm leading-relaxed mb-3">
                                {option.description}
                              </p>
                              <div className="text-lg font-bold text-manjocarn-sunset-orange">
                                {option.price}
                              </div>
                            </div>
                          </div>

                          {/* Caractéristiques */}
                          <div className="grid grid-cols-2 gap-2">
                            {option.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-sm text-manjocarn-dark-gray/80"
                              >
                                <span className="w-1.5 h-1.5 bg-manjocarn-sage-green rounded-full mr-2"></span>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    className="w-full mt-8 bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-forest-green text-manjocarn-sand-beige py-4 rounded-2xl font-semibold text-lg shadow-nature hover:shadow-nature-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    disabled={!reservationType}
                    onClick={nextStep}
                    whileHover={{ scale: reservationType ? 1.02 : 1 }}
                    whileTap={{ scale: reservationType ? 0.98 : 1 }}
                  >
                    Continuer
                    <motion.span
                      className="ml-2"
                      animate={{ x: reservationType ? [0, 5, 0] : 0 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              )}

              {/* Étape 2: Informations avec meilleur contraste */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-playfair text-2xl text-manjocarn-forest-green mb-6 text-center">
                    Informations de réservation
                  </h3>

                  <form className="space-y-6">
                    {/* Informations personnelles */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-manjocarn-dark-gray font-medium mb-2">
                          Prénom *
                        </label>
                        <input
                          {...register("prenom", {
                            required: "Le prénom est requis",
                            minLength: {
                              value: 2,
                              message: "Minimum 2 caractères",
                            },
                          })}
                          className="w-full p-3 border-2 border-manjocarn-sage-green/30 rounded-xl focus:border-manjocarn-forest-green outline-none transition-colors duration-300 bg-white text-manjocarn-dark-gray"
                          placeholder="Votre prénom"
                        />
                        {errors.prenom && (
                          <p className="text-red-600 text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.prenom.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-manjocarn-dark-gray font-medium mb-2">
                          Nom *
                        </label>
                        <input
                          {...register("nom", {
                            required: "Le nom est requis",
                            minLength: {
                              value: 2,
                              message: "Minimum 2 caractères",
                            },
                          })}
                          className="w-full p-3 border-2 border-manjocarn-sage-green/30 rounded-xl focus:border-manjocarn-forest-green outline-none transition-colors duration-300 bg-white text-manjocarn-dark-gray"
                          placeholder="Votre nom"
                        />
                        {errors.nom && (
                          <p className="text-red-600 text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.nom.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-manjocarn-dark-gray font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "L'email est requis",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email invalide",
                          },
                        })}
                        className="w-full p-3 border-2 border-manjocarn-sage-green/30 rounded-xl focus:border-manjocarn-forest-green outline-none transition-colors duration-300 bg-white text-manjocarn-dark-gray"
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-manjocarn-dark-gray font-medium mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        {...register("telephone", {
                          required: "Le téléphone est requis",
                          pattern: {
                            value: /^[0-9+\-\s()]+$/,
                            message: "Numéro invalide",
                          },
                        })}
                        className="w-full p-3 border-2 border-manjocarn-sage-green/30 rounded-xl focus:border-manjocarn-forest-green outline-none transition-colors duration-300 bg-white text-manjocarn-dark-gray"
                        placeholder="06 12 34 56 78"
                      />
                      {errors.telephone && (
                        <p className="text-red-600 text-sm mt-1 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.telephone.message}
                        </p>
                      )}
                    </div>

                    {/* Détails de la réservation */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-manjocarn-dark-gray font-medium mb-2 flex items-center">
                          <Calendar className="mr-2" size={16} />
                          Date *
                        </label>
                        <input
                          type="date"
                          {...register("date", {
                            required: "La date est requise",
                            validate: (value) => {
                              const selectedDate = new Date(value);
                              const tomorrow = new Date();
                              tomorrow.setDate(tomorrow.getDate() + 1);
                              return (
                                selectedDate >= tomorrow ||
                                "Réservation minimum 24h à l'avance"
                              );
                            },
                          })}
                          className="w-full p-3 border-2 border-manjocarn-sage-green/30 rounded-xl focus:border-manjocarn-forest-green outline-none transition-colors duration-300 bg-white text-manjocarn-dark-gray"
                          min={
                            new Date(Date.now() + 86400000)
                              .toISOString()
                              .split("T")[0]
                          }
                        />
                        {errors.date && (
                          <p className="text-red-600 text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.date.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-manjocarn-dark-gray font-medium mb-2 flex items-center">
                          <Users className="mr-2" size={16} />
                          Nombre de personnes *
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="20"
                          {...register("nbPersonnes", {
                            required: "Le nombre de personnes est requis",
                            min: { value: 1, message: "Minimum 1 personne" },
                            max: { value: 20, message: "Maximum 20 personnes" },
                          })}
                          className="w-full p-3 border-2 border-manjocarn-sage-green/30 rounded-xl focus:border-manjocarn-forest-green outline-none transition-colors duration-300 bg-white text-manjocarn-dark-gray"
                          placeholder="4"
                        />
                        {errors.nbPersonnes && (
                          <p className="text-red-600 text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.nbPersonnes.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Créneaux horaires avec meilleur contraste */}
                    <div>
                      <label className="block text-manjocarn-dark-gray font-medium mb-3 flex items-center">
                        <Clock className="mr-2" size={16} />
                        Heure souhaitée *
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <label key={time} className="cursor-pointer">
                            <input
                              type="radio"
                              value={time}
                              {...register("heure", {
                                required: "Veuillez choisir un créneau",
                              })}
                              className="sr-only"
                            />
                            <div
                              className={`p-3 text-center rounded-xl border-2 transition-all duration-300 ${
                                watchedValues.heure === time
                                  ? "border-manjocarn-forest-green bg-manjocarn-sage-green/20 text-manjocarn-forest-green font-bold"
                                  : "border-manjocarn-sage-green/30 hover:border-manjocarn-sage-green/60 text-manjocarn-dark-gray bg-white"
                              }`}
                            >
                              {time}
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.heure && (
                        <p className="text-red-600 text-sm mt-2 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.heure.message}
                        </p>
                      )}
                    </div>

                    {/* Message optionnel */}
                    <div>
                      <label className="block text-manjocarn-dark-gray font-medium mb-2">
                        Message (optionnel)
                      </label>
                      <textarea
                        {...register("message")}
                        rows="3"
                        className="w-full p-3 border-2 border-manjocarn-sage-green/30 rounded-xl focus:border-manjocarn-forest-green outline-none transition-colors duration-300 bg-white text-manjocarn-dark-gray resize-none"
                        placeholder="Demandes particulières, allergies, etc."
                      />
                    </div>
                  </form>

                  {/* Boutons de navigation */}
                  <div className="flex gap-4 mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border-2 border-manjocarn-sage-green text-manjocarn-forest-green py-3 rounded-xl font-medium hover:bg-manjocarn-sage-green/10 transition-all duration-300"
                    >
                      Retour
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-forest-green text-manjocarn-sand-beige py-3 rounded-xl font-medium hover:shadow-nature-lg transition-all duration-300"
                    >
                      Récapitulatif
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Étape 3: Récapitulatif avec meilleur contraste */}
              {step === 3 && !isSuccess && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-playfair text-2xl text-manjocarn-forest-green mb-6 text-center">
                    Récapitulatif de votre réservation
                  </h3>

                  <div className="bg-white rounded-2xl p-6 mb-6 border border-manjocarn-sage-green/30">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-manjocarn-forest-green mb-3">
                          Type de réservation
                        </h4>
                        <div className="bg-manjocarn-sage-green/10 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            {
                              reservationOptions.find(
                                (o) => o.id === reservationType
                              )?.icon
                            }
                            <span className="ml-3 font-semibold text-manjocarn-dark-gray">
                              {
                                reservationOptions.find(
                                  (o) => o.id === reservationType
                                )?.title
                              }
                            </span>
                          </div>
                          <p className="text-sm text-manjocarn-dark-gray">
                            {
                              reservationOptions.find(
                                (o) => o.id === reservationType
                              )?.price
                            }
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-manjocarn-forest-green mb-3">
                          Détails
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-manjocarn-dark-gray">
                              Date :
                            </span>
                            <span className="font-medium text-manjocarn-dark-gray">
                              {watchedValues.date &&
                                new Date(watchedValues.date).toLocaleDateString(
                                  "fr-FR"
                                )}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-manjocarn-dark-gray">
                              Heure :
                            </span>
                            <span className="font-medium text-manjocarn-dark-gray">
                              {watchedValues.heure}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-manjocarn-dark-gray">
                              Personnes :
                            </span>
                            <span className="font-medium text-manjocarn-dark-gray">
                              {watchedValues.nbPersonnes}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-manjocarn-dark-gray">
                              Contact :
                            </span>
                            <span className="font-medium text-manjocarn-dark-gray">
                              {watchedValues.prenom} {watchedValues.nom}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {watchedValues.message && (
                      <div className="mt-4 pt-4 border-t border-manjocarn-sage-green/20">
                        <h4 className="font-semibold text-manjocarn-forest-green mb-2">
                          Message
                        </h4>
                        <p className="text-sm text-manjocarn-dark-gray bg-manjocarn-sage-green/10 p-3 rounded-lg">
                          {watchedValues.message}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Note importante avec meilleur contraste */}
                  <div className="bg-manjocarn-golden-yellow/20 border border-manjocarn-golden-yellow/60 rounded-xl p-4 mb-6">
                    <div className="flex items-start">
                      <Phone
                        className="text-manjocarn-sunset-orange mr-3 mt-1"
                        size={20}
                      />
                      <div>
                        <h4 className="font-semibold text-manjocarn-forest-green mb-2">
                          Confirmation par téléphone
                        </h4>
                        <p className="text-sm text-manjocarn-dark-gray leading-relaxed">
                          Nous vous contacterons dans les 24h pour confirmer
                          votre réservation et finaliser les détails. Numéro :{" "}
                          <strong>+33 5 63 68 25 85</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Boutons finaux */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border-2 border-manjocarn-sage-green text-manjocarn-forest-green py-4 rounded-xl font-medium hover:bg-manjocarn-sage-green/10 transition-all duration-300"
                    >
                      Modifier
                    </button>
                    <motion.button
                      type="button"
                      onClick={handleSubmit(onSubmit)}
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-forest-green text-manjocarn-sand-beige py-4 rounded-xl font-semibold hover:shadow-nature-lg disabled:opacity-50 transition-all duration-300"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <motion.div
                            className="w-5 h-5 border-2 border-manjocarn-sand-beige border-t-transparent rounded-full mr-3"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          Envoi en cours...
                        </div>
                      ) : (
                        "Confirmer la réservation"
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Succès avec meilleur contraste */}
              {isSuccess && (
                <motion.div
                  key="success"
                  className="text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-manjocarn-mint-green rounded-full flex items-center justify-center mx-auto mb-6 text-manjocarn-sand-beige text-4xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    ✓
                  </motion.div>

                  <h3 className="font-playfair text-3xl text-manjocarn-forest-green mb-4 font-bold">
                    Réservation envoyée !
                  </h3>

                  <p className="text-manjocarn-dark-gray mb-6 leading-relaxed">
                    Merci <strong>{watchedValues.prenom}</strong> ! <br />
                    Nous vous contacterons rapidement pour confirmer votre
                    réservation.
                  </p>

                  <div className="bg-manjocarn-sage-green/10 rounded-xl p-4 inline-block border border-manjocarn-sage-green/30">
                    <p className="text-sm text-manjocarn-forest-green">
                      📞 <strong>+33 5 63 68 25 85</strong>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReservationModal;
