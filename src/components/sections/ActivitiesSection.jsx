// src/components/sections/ActivitiesSection.jsx
import { motion } from "framer-motion";
import { ExternalLink, Phone, MapPin } from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

// Données des activités intégrées directement
const activitiesData = [
  {
    name: "Paintball",
    description: "Participez à des jeux de paintball excitants.",
    icon: "🎯",
    phone: "06 63 01 4219",
    website: "https://www.valblasterexperience.fr/",
    address: "Lieu dit Biars, 82140 St Antonin Noble-Val",
  },
  {
    name: "Canoë",
    description:
      "Pagayez en harmonie avec la nature lors d'une sortie en canoë.",
    icon: "🚣",
    address: "82140 Saint-Antonin-Noble-Val",
  },
  {
    name: "Randonnée",
    description:
      "Découvrez des sentiers de randonnée pittoresques autour de Saint-Antonin-Noble-Val.",
    icon: "🥾",
    website:
      "https://www.alltrails.com/fr/france/tarn-et-garonne/saint-antonin-noble-val",
    address: "82140 Saint-Antonin-Noble-Val",
  },
  {
    name: "Accrobranche",
    description: "Aventurez-vous à 1 km pour l'accrobranche.",
    icon: "🌲",
    phone: "+33 7 60 35 53 14",
    website: "https://www.parc-aventure-aveyron.com/",
    address: "Lieu-Dit Turlande, 82140 Saint-Antonin-Noble-Val",
  },
  {
    name: "Trail des 3 rocs",
    description: "Testez vos compétences sur le parcours Trail des 3 rocs.",
    icon: "🏃",
    website: "https://www.traildestroisrocs.fr/fr",
  },
  {
    name: "Escapade Mystère",
    description: "Partez pour une aventure mystérieuse en Aveyron.",
    icon: "🗺️",
    phone: "06 98 90 85 29",
    website: "https://www.aquobapla.fr/",
  },
  {
    name: "Comité des fêtes de Varen",
    description: "Participez aux événements festifs organisés à Varen.",
    icon: "🎪",
    website: "https://www.intramuros.org/varen/associations/146319",
  },
  {
    name: "Comité des fêtes de Penne",
    description: "Découvrez les festivités locales de Penne.",
    icon: "🎊",
    website: "https://www.mairie-penne-tarn.fr/association-f332-.html",
  },
  {
    name: "École de Penne",
    description: "Informations sur l'école primaire de Penne.",
    icon: "🏫",
    phone: "05 53 41 22 52",
    address: "22 Rue Jean Moulin, 47140 Penne-d'Agenais",
  },
];

const ActivitiesSection = () => {
  return (
    <Section
      id="activities"
      className="bg-gradient-to-br from-manjocarn-background to-manjocarn-peach/20"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-playfair text-4xl md:text-6xl text-center text-manjocarn-rusty-orange mb-12"
          variants={fadeInUp}
        >
          Activités aux Alentours
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {activitiesData.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-manjocarn-pale-gold/30"
              variants={fadeInUp}
              whileHover={{ y: -5, rotate: Math.random() > 0.5 ? 1 : -1 }}
            >
              <div className="text-center mb-4">
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {activity.icon}
                </motion.div>
                <h3 className="font-playfair text-xl text-manjocarn-forest-green mb-2">
                  {activity.name}
                </h3>
                <p className="text-manjocarn-dark-gray text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>

              <div className="space-y-2">
                {activity.phone && (
                  <div className="flex items-center text-sm text-manjocarn-dark-gray">
                    <Phone
                      size={16}
                      className="mr-2 text-manjocarn-forest-green"
                    />
                    {activity.phone}
                  </div>
                )}

                {activity.address && (
                  <div className="flex items-center text-sm text-manjocarn-dark-gray">
                    <MapPin
                      size={16}
                      className="mr-2 text-manjocarn-forest-green"
                    />
                    <span className="truncate">{activity.address}</span>
                  </div>
                )}

                {activity.website && (
                  <a
                    href={activity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-manjocarn-rusty-orange hover:underline transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Site web
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ActivitiesSection;
