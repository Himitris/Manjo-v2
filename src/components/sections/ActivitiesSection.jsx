// src/components/sections/ActivitiesSection.jsx
import { motion } from "framer-motion";
import { ExternalLink, Phone, MapPin, Target, Waves, Footprints, TreePine, PersonStanding, Map } from "lucide-react";
import Section from "../ui/Section";
import { useState } from "react";

const activitiesData = [
  {
    id: 1,
    name: "Paintball",
    description:
      "Participez à des jeux de paintball excitants dans un cadre naturel exceptionnel.",
    Icon: Target,
    phone: "06 63 01 4219",
    website: "https://www.valblasterexperience.fr/",
    address: "Lieu dit Biars, 82140 St Antonin Noble-Val",
    category: "aventure",
    tags: ["Action", "Équipe", "Outdoor"],
  },
  {
    id: 2,
    name: "Canoë",
    description:
      "Pagayez en harmonie avec la nature lors d'une sortie en canoë sur la rivière.",
    Icon: Waves,
    address: "82140 Saint-Antonin-Noble-Val",
    category: "nautique",
    tags: ["Nature", "Famille", "Détente"],
  },
  {
    id: 3,
    name: "Randonnée",
    description:
      "Découvrez des sentiers de randonnée pittoresques autour de Saint-Antonin-Noble-Val.",
    Icon: Footprints,
    website:
      "https://www.alltrails.com/fr/france/tarn-et-garonne/saint-antonin-noble-val",
    address: "82140 Saint-Antonin-Noble-Val",
    category: "randonnee",
    tags: ["Nature", "Sport", "Panorama"],
  },
  {
    id: 4,
    name: "Accrobranche",
    description:
      "Aventurez-vous dans les arbres pour une expérience accrobranche inoubliable.",
    Icon: TreePine,
    phone: "+33 7 60 35 53 14",
    website: "https://www.parc-aventure-aveyron.com/",
    address: "Lieu-Dit Turlande, 82140 Saint-Antonin-Noble-Val",
    category: "aventure",
    tags: ["Hauteur", "Défi", "Famille"],
  },
  {
    id: 5,
    name: "Trail des 3 rocs",
    description:
      "Testez vos compétences sur le parcours Trail des 3 rocs, un défi sportif unique.",
    Icon: PersonStanding,
    website: "https://www.traildestroisrocs.fr/fr",
    category: "sport",
    tags: ["Course", "Défi", "Compétition"],
  },
  {
    id: 6,
    name: "Escapade Mystère",
    description:
      "Partez pour une aventure mystérieuse en Aveyron avec des activités surprenantes.",
    Icon: Map,
    phone: "06 98 90 85 29",
    website: "https://www.aquobapla.fr/",
    category: "mystere",
    tags: ["Mystère", "Aventure", "Original"],
  },
];

const categories = [
  { id: "all", label: "Toutes", Icon: MapPin },
  { id: "aventure", label: "Aventure", Icon: Target },
  { id: "nautique", label: "Nautique", Icon: Waves },
  { id: "randonnee", label: "Randonnée", Icon: Footprints },
  { id: "sport", label: "Sport", Icon: PersonStanding },
  { id: "mystere", label: "Mystère", Icon: Map },
];

const ActivitiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filteredActivities =
    selectedCategory === "all"
      ? activitiesData
      : activitiesData.filter(
          (activity) => activity.category === selectedCategory
        );

  return (
    <Section id="activities" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-gradient-nature">
            Activités aux Alentours
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-manjocarn-dark-gray">
            Découvrez un territoire riche en activités outdoor, parfait pour
            combiner détente et aventures nature.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 text-sm md:text-base ${
                selectedCategory === category.id
                  ? "shadow-nature-lg scale-105 transform border-2"
                  : "bg-white text-manjocarn-dark-gray hover:bg-manjocarn-sage-green/20 border border-manjocarn-sage-green/30"
              }`}
              style={
                selectedCategory === category.id
                  ? {
                      backgroundColor: "var(--manjocarn-forest-green)",
                      color: "var(--manjocarn-sand-beige)",
                      borderColor: "var(--manjocarn-forest-green)",
                    }
                  : {}
              }
            >
              <category.Icon className="w-5 h-5 mr-2" />
              {category.label}
              <span className="ml-2 text-xs bg-manjocarn-golden-yellow/30 px-2 py-1 rounded-full">
                {category.id === "all"
                  ? activitiesData.length
                  : activitiesData.filter((a) => a.category === category.id)
                      .length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grille d'activités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md p-4 md:p-6 hover:shadow-nature-lg transition-all duration-300"
              whileHover={{ scale: 1.02, y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-manjocarn-forest-green">
                    {activity.name}
                  </h3>
                </div>
                <activity.Icon className="w-8 h-8 md:w-10 md:h-10 text-manjocarn-sage-green" />
              </div>

              <p className="text-sm md:text-base leading-relaxed mb-4 text-manjocarn-dark-gray">
                {activity.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {activity.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-manjocarn-sage-green/20 text-manjocarn-forest-green text-xs px-2 md:px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                {activity.website && (
                  <a
                    href={activity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-manjocarn-sage-green text-white text-center py-2 px-3 md:px-4 rounded-lg text-sm font-medium hover:bg-manjocarn-forest-green transition-colors"
                  >
                    <ExternalLink size={14} className="inline mr-1" />
                    Site web
                  </a>
                )}
                <button
                  onClick={() => setSelectedActivity(activity)}
                  className="flex-1 border-2 border-manjocarn-sage-green text-manjocarn-forest-green text-center py-2 px-3 md:px-4 rounded-lg text-sm font-medium hover:bg-manjocarn-sage-green/10 transition-colors"
                >
                  Détails
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal détails */}
        {selectedActivity && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedActivity(null)}
          >
            <motion.div
              className="bg-white rounded-xl md:rounded-2xl max-w-lg md:max-w-2xl w-full max-h-[90vh] overflow-y-auto p-4 md:p-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-manjocarn-forest-green">
                  {selectedActivity.name}
                </h2>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="text-2xl text-manjocarn-dark-gray hover:text-manjocarn-forest-green"
                >
                  ×
                </button>
              </div>

              <p className="leading-relaxed mb-6 text-manjocarn-dark-gray">
                {selectedActivity.description}
              </p>

              <div className="space-y-4 mb-6">
                {selectedActivity.phone && (
                  <div className="flex items-center text-sm md:text-base">
                    <Phone
                      size={16}
                      className="mr-3 text-manjocarn-sage-green"
                    />
                    <a
                      href={`tel:${selectedActivity.phone}`}
                      className="hover:underline text-manjocarn-forest-green"
                    >
                      {selectedActivity.phone}
                    </a>
                  </div>
                )}
                {selectedActivity.address && (
                  <div className="flex items-start text-sm md:text-base">
                    <MapPin
                      size={16}
                      className="mr-3 mt-1 text-manjocarn-sage-green flex-shrink-0"
                    />
                    <span className="text-manjocarn-dark-gray">
                      {selectedActivity.address}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {selectedActivity.phone && (
                  <a
                    href={`tel:${selectedActivity.phone}`}
                    className="flex items-center justify-center px-4 py-2 bg-manjocarn-sage-green text-white rounded-lg hover:bg-manjocarn-forest-green transition-colors"
                  >
                    <Phone size={16} className="mr-2" />
                    Appeler
                  </a>
                )}
                {selectedActivity.website && (
                  <a
                    href={selectedActivity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-manjocarn-golden-yellow text-manjocarn-forest-green rounded-lg hover:bg-manjocarn-sunset-orange transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Site web
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default ActivitiesSection;
