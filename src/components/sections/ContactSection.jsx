// src/components/sections/ContactSection.jsx
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Navigation,
  Car,
  Train,
  Plane,
} from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Téléphone",
      main: "+33 5 63 68 25 85",
      subtitle: "Appelez-nous directement",
      action: () => (window.location.href = "tel:+33563682585"),
      color: "from-manjocarn-sage-green to-manjocarn-forest-green",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Adresse",
      main: "Manjocarn",
      subtitle: "Saint-Antonin-Noble-Val, 82140",
      action: () =>
        window.open(
          "https://maps.google.com/?q=Manjocarn+Saint-Antonin-Noble-Val",
          "_blank"
        ),
      color: "from-manjocarn-sunset-orange to-manjocarn-golden-yellow",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Horaires",
      main: "Selon saison",
      subtitle: "Contactez-nous pour plus d'infos",
      action: () => (window.location.href = "tel:+33563682585"),
      color: "from-manjocarn-mint-green to-manjocarn-sage-green",
    },
  ];

  const practicalInfo = [
    {
      icon: "🅿️",
      title: "Parking gratuit",
      description: "Places disponibles sur place",
    },
    {
      icon: "🚻",
      title: "Sanitaires",
      description: "Toilettes accessibles",
    },
    {
      icon: "🦽",
      title: "Accessibilité",
      description: "Accès facilité terrasse",
    },
    {
      icon: "🐕",
      title: "Animaux",
      description: "Chiens acceptés en laisse",
    },
  ];

  return (
    <Section
      variant="dark"
      id="contact"
      className="bg-gradient-to-br from-manjocarn-deep-forest via-manjocarn-forest-green to-manjocarn-pine-green text-manjocarn-sand-beige relative overflow-hidden"
    >
      {/* Éléments décoratifs nocturnes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-16 text-manjocarn-golden-yellow/30 text-6xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          🌟
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-20 text-manjocarn-mint-green/25 text-5xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          📍
        </motion.div>

        {/* Particules lumineuses */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-manjocarn-golden-yellow/20 rounded-full blur-xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 left-1/5 w-32 h-32 bg-manjocarn-mint-green/15 rounded-full blur-2xl animate-float"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* En-tête avec meilleur contraste */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center mb-6 bg-manjocarn-sand-beige/90 backdrop-blur-sm px-8 py-4 rounded-full border border-manjocarn-golden-yellow/50 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin className="mr-3 text-manjocarn-forest-green" size={32} />
            </motion.div>
            <span className="text-lg font-semibold text-manjocarn-deep-forest">
              Contact
            </span>
          </motion.div>

          <h2 className="font-playfair text-4xl md:text-6xl mb-6 text-manjocarn-golden-yellow">
            Nous Trouver
          </h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-manjocarn-golden-yellow via-manjocarn-mint-green to-manjocarn-sage-green mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <p className="mt-6 text-lg text-manjocarn-sand-beige/90 max-w-2xl mx-auto leading-relaxed">
            Venez découvrir notre petit coin de paradis en pleine nature,
            accessible et accueillant.
          </p>
        </motion.div>

        {/* Méthodes de contact principales avec meilleur contraste */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-manjocarn-sand-beige/10 backdrop-blur-sm rounded-2xl p-8 border border-manjocarn-golden-yellow/30 hover:border-manjocarn-golden-yellow/60 transition-all duration-300 cursor-pointer group"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={method.action}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-manjocarn-sand-beige shadow-nature group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 10 }}
              >
                {method.icon}
              </motion.div>

              <h3 className="font-playfair text-xl text-manjocarn-golden-yellow mb-2 text-center font-bold">
                {method.title}
              </h3>

              <p className="text-manjocarn-sand-beige text-lg font-semibold text-center mb-2">
                {method.main}
              </p>

              <p className="text-manjocarn-sand-beige/80 text-sm text-center">
                {method.subtitle}
              </p>

              {/* Effet de brillance au survol */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-manjocarn-golden-yellow/10 to-transparent rounded-2xl"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Informations pratiques avec meilleur contraste */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h3 className="font-playfair text-3xl text-manjocarn-golden-yellow text-center mb-12 font-bold">
            Informations pratiques
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center bg-manjocarn-sand-beige/10 backdrop-blur-sm rounded-xl p-6 border border-manjocarn-sage-green/30"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl mb-3"
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
                  {info.icon}
                </motion.div>
                <h4 className="font-semibold text-manjocarn-sand-beige mb-2">
                  {info.title}
                </h4>
                <p className="text-sm text-manjocarn-sand-beige/80 leading-relaxed">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Carte intégrée avec meilleur contraste */}
        <motion.div
          className="mb-16 bg-manjocarn-sand-beige/10 backdrop-blur-sm rounded-2xl p-8 border border-manjocarn-golden-yellow/30"
          variants={fadeInUp}
        >
          <h3 className="font-playfair text-2xl text-manjocarn-golden-yellow text-center mb-6 font-bold">
            Notre localisation
          </h3>

          <div
            className="aspect-video bg-manjocarn-forest-green/30 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer hover:bg-manjocarn-forest-green/40 transition-colors duration-300 border-2 border-manjocarn-golden-yellow/30"
            onClick={() =>
              window.open(
                "https://maps.google.com/?q=Manjocarn+Saint-Antonin-Noble-Val",
                "_blank"
              )
            }
          >
            <motion.div
              className="text-center text-manjocarn-sand-beige"
              whileHover={{ scale: 1.1 }}
            >
              <MapPin
                size={48}
                className="mx-auto mb-4 text-manjocarn-golden-yellow"
              />
              <h4 className="text-xl font-semibold mb-2">Manjocarn</h4>
              <p className="text-manjocarn-sand-beige/90">
                Saint-Antonin-Noble-Val, 82140
              </p>
              <p className="text-sm text-manjocarn-sand-beige/70 mt-2">
                Cliquez pour ouvrir dans Maps
              </p>
            </motion.div>

            {/* Effet de ripple au survol */}
            <motion.div
              className="absolute inset-0 bg-manjocarn-golden-yellow/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000"
              style={{ transformOrigin: "center" }}
            />
          </div>
        </motion.div>

        {/* Footer avec informations de contact - meilleur contraste */}
        <motion.div
          className="text-center bg-manjocarn-deep-forest/70 backdrop-blur-sm rounded-2xl p-8 border border-manjocarn-golden-yellow/30"
          variants={fadeInUp}
        >
          <motion.h3
            className="font-cabin-sketch text-4xl mb-4 text-manjocarn-golden-yellow"
            animate={{
              textShadow: [
                "0 0 10px rgba(242, 212, 120, 0.5)",
                "0 0 20px rgba(242, 212, 120, 0.8)",
                "0 0 10px rgba(242, 212, 120, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Manjocarn
          </motion.h3>

          <p className="text-manjocarn-sand-beige/90 text-lg mb-6">
            Guinguette en pleine nature • Plage privée • Accès rivière
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-manjocarn-sand-beige/80 mb-6">
            <span>📍 Saint-Antonin-Noble-Val</span>
            <span>📞 +33 5 63 68 25 85</span>
            <span>⏰ Selon saison</span>
          </div>

          <motion.div
            className="text-manjocarn-sand-beige/70 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            © 2024 Manjocarn - Tous droits réservés • Un lieu authentique où la
            nature rencontre la convivialité
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ContactSection;
