import { motion } from "framer-motion";
import { ExternalLink, Phone, MapPin } from "lucide-react";
import Section from "../ui/Section";
import { useState } from "react";

const activitiesData = [
  {
    id: 1,
    name: "Paintball",
    description:
      "Participez à des jeux de paintball excitants dans un cadre naturel exceptionnel.",
    icon: "🎯",
    phone: "06 63 01 4219",
    website: "https://www.valblasterexperience.fr/",
    address: "Lieu dit Biars, 82140 St Antonin Noble-Val",
    category: "Aventure",
    tags: ["Action", "Équipe", "Outdoor"],
  },
  {
    id: 2,
    name: "Canoë",
    description:
      "Pagayez en harmonie avec la nature lors d'une sortie en canoë sur la rivière.",
    icon: "🚣",
    address: "82140 Saint-Antonin-Noble-Val",
    category: "Nautique",
    tags: ["Nature", "Famille", "Détente"],
  },
  {
    id: 3,
    name: "Randonnée",
    description:
      "Découvrez des sentiers de randonnée pittoresques autour de Saint-Antonin-Noble-Val.",
    icon: "🥾",
    website:
      "https://www.alltrails.com/fr/france/tarn-et-garonne/saint-antonin-noble-val",
    address: "82140 Saint-Antonin-Noble-Val",
    category: "Randonnée",
    tags: ["Nature", "Sport", "Panorama"],
  },
  {
    id: 4,
    name: "Accrobranche",
    description:
      "Aventurez-vous dans les arbres pour une expérience accrobranche inoubliable.",
    icon: "🌲",
    phone: "+33 7 60 35 53 14",
    website: "https://www.parc-aventure-aveyron.com/",
    address: "Lieu-Dit Turlande, 82140 Saint-Antonin-Noble-Val",
    category: "Aventure",
    tags: ["Hauteur", "Défi", "Famille"],
  },
  {
    id: 5,
    name: "Trail des 3 rocs",
    description:
      "Testez vos compétences sur le parcours Trail des 3 rocs, un défi sportif unique.",
    icon: "🏃",
    website: "https://www.traildestroisrocs.fr/fr",
    category: "Sport",
    tags: ["Course", "Défi", "Compétition"],
  },
  {
    id: 6,
    name: "Escapade Mystère",
    description:
      "Partez pour une aventure mystérieuse en Aveyron avec des activités surprenantes.",
    icon: "🗺️",
    phone: "06 98 90 85 29",
    website: "https://www.aquobapla.fr/",
    category: "Mystère",
    tags: ["Mystère", "Aventure", "Original"],
  },
];

const categories = [
  { id: "all", label: "Toutes" },
  { id: "Aventure", label: "Aventure" },
  { id: "Nautique", label: "Nautique" },
  { id: "Randonnée", label: "Randonnée" },
  { id: "Sport", label: "Sport" },
  { id: "Mystère", label: "Mystère" },
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
    <Section id="activities">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl mb-6">Activités aux Alentours</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Découvrez un territoire riche en activités outdoor, parfait pour
            combiner détente et aventures nature.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === category.id ? "bg-gray-300" : "bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <motion.div
              key={activity.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md p-6"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{activity.name}</h3>
                </div>
                <div className="text-2xl">{activity.icon}</div>
              </div>

              <p className="text-sm leading-relaxed mb-4">
                {activity.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {activity.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {activity.website && (
                  <a
                    href={activity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-300 text-center py-2 px-4 rounded-lg text-sm font-medium"
                  >
                    <ExternalLink size={14} className="inline mr-1" />
                    Site web
                  </a>
                )}
                <button
                  onClick={() => setSelectedActivity(activity)}
                  className="flex-1 border-2 border-gray-300 text-center py-2 px-4 rounded-lg text-sm font-medium"
                >
                  Détails
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedActivity && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedActivity(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-2">
                {selectedActivity.name}
              </h2>
              <p className="leading-relaxed mb-6">
                {selectedActivity.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-3">Contact</h3>
                  <div className="space-y-2">
                    {selectedActivity.phone && (
                      <div className="flex items-center text-sm">
                        <Phone size={14} className="mr-2" />
                        <a
                          href={`tel:${selectedActivity.phone}`}
                          className="hover:underline"
                        >
                          {selectedActivity.phone}
                        </a>
                      </div>
                    )}
                    {selectedActivity.address && (
                      <div className="flex items-center text-sm">
                        <MapPin size={14} className="mr-2" />
                        <span>{selectedActivity.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="border-t pt-6">
                <div className="flex flex-wrap gap-4">
                  {selectedActivity.phone && (
                    <a
                      href={`tel:${selectedActivity.phone}`}
                      className="flex items-center px-4 py-2 bg-gray-200 rounded-lg"
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
                      className="flex items-center px-4 py-2 bg-gray-300 rounded-lg"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Site web
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default ActivitiesSection;
