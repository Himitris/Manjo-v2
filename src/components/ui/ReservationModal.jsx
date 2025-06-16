// src/components/ui/ReservationModal.jsx
import { motion } from "framer-motion";
import { X, Calendar, Users, Clock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ReservationModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [reservationType, setReservationType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Réservation:", data);
    // Ici, intégrer avec Firebase
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-manjocarn-forest-green text-manjocarn-pale-gold p-6 flex justify-between items-center">
          <h2 className="font-playfair text-2xl">Réservation de Pique-nique</h2>
          <button
            onClick={onClose}
            className="hover:scale-110 transition-transform"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <h3 className="font-playfair text-xl text-manjocarn-rusty-orange mb-6">
                Choisissez votre mode de pique-nique
              </h3>

              <div className="space-y-4">
                <motion.button
                  className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                    reservationType === "acheter"
                      ? "border-manjocarn-forest-green bg-manjocarn-forest-green/10"
                      : "border-gray-200 hover:border-manjocarn-forest-green/50"
                  }`}
                  onClick={() => setReservationType("acheter")}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-3">🍽️</div>
                    <h4 className="font-bold text-manjocarn-dark-gray">
                      Acheter un pique-nique
                    </h4>
                  </div>
                  <p className="text-manjocarn-dark-gray text-sm">
                    Nous préparons un délicieux pique-nique pour vous et vos
                    proches.
                  </p>
                </motion.button>

                <motion.button
                  className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                    reservationType === "garder"
                      ? "border-manjocarn-forest-green bg-manjocarn-forest-green/10"
                      : "border-gray-200 hover:border-manjocarn-forest-green/50"
                  }`}
                  onClick={() => setReservationType("garder")}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-3">🧺</div>
                    <h4 className="font-bold text-manjocarn-dark-gray">
                      Faire garder mon pique-nique
                    </h4>
                  </div>
                  <p className="text-manjocarn-dark-gray text-sm">
                    Apportez votre propre pique-nique, nous vous gardons une
                    place au frais.
                  </p>
                </motion.button>
              </div>

              <button
                className="w-full mt-6 bg-manjocarn-forest-green text-manjocarn-pale-gold py-3 rounded-lg font-medium disabled:opacity-50"
                disabled={!reservationType}
                onClick={() => setStep(2)}
              >
                Continuer
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <h3 className="font-playfair text-xl text-manjocarn-rusty-orange mb-6">
                Informations de réservation
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-manjocarn-dark-gray font-medium mb-2">
                    Prénom *
                  </label>
                  <input
                    {...register("prenom", { required: true })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-manjocarn-forest-green outline-none"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label className="block text-manjocarn-dark-gray font-medium mb-2">
                    Nom *
                  </label>
                  <input
                    {...register("nom", { required: true })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-manjocarn-forest-green outline-none"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-manjocarn-dark-gray font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-manjocarn-forest-green outline-none"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-manjocarn-dark-gray font-medium mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  {...register("telephone", { required: true })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-manjocarn-forest-green outline-none"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-manjocarn-dark-gray font-medium mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    {...register("date", { required: true })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-manjocarn-forest-green outline-none"
                    min={
                      new Date(Date.now() + 86400000)
                        .toISOString()
                        .split("T")[0]
                    }
                  />
                </div>

                <div>
                  <label className="block text-manjocarn-dark-gray font-medium mb-2">
                    Nombre de personnes *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    {...register("nbPersonnes", {
                      required: true,
                      min: 1,
                      max: 20,
                    })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-manjocarn-forest-green outline-none"
                    placeholder="4"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-manjocarn-forest-green text-manjocarn-forest-green py-3 rounded-lg font-medium hover:bg-manjocarn-forest-green/10"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-manjocarn-forest-green text-manjocarn-pale-gold py-3 rounded-lg font-medium hover:bg-manjocarn-forest-green/90"
                >
                  Confirmer
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReservationModal;
