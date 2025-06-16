// src/components/sections/ActivitiesSection.jsx
import { motion } from "framer-motion";
import {
  ExternalLink,
  Phone,
  MapPin,
  Clock,
  Users,
  Star,
  Target,
  Waves,
  Mountain,
  TreePine,
  Calendar,
  Compass,
} from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";
import { useState } from "react";

// Données des activités enrichies
const activitiesData = [
  {
    id: 1,
    name: "Paintball",
    description:
      "Participez à des jeux de paintball excitants dans un cadre naturel exceptionnel.",
    longDescription:
      "Vivez l'adrénaline du paintball avec Val Blaster Experience ! Terrains variés, équipements fournis, encadrement professionnel.",
    icon: "🎯",
    iconComponent: <Target className="w-8 h-8" />,
    phone: "06 63 01 4219",
    website: "https://www.valblasterexperience.fr/",
    address: "Lieu dit Biars, 82140 St Antonin Noble-Val",
    category: "Aventure",
    difficulty: "Facile",
    duration: "2-3h",
    minAge: "12 ans",
    maxParticipants: "20",
    rating: 4.8,
    distance: "5km",
    tags: ["Action", "Équipe", "Outdoor"],
    features: [
      "Équipement fourni",
      "Encadrement pro",
      "Plusieurs terrains",
      "Parking gratuit",
    ],
    color: "from-manjocarn-sunset-orange to-manjocarn-golden-yellow",
    image: "/assets/activities/paintball.jpg", // placeholder
  },
  {
    id: 2,
    name: "Canoë",
    description:
      "Pagayez en harmonie avec la nature lors d'une sortie en canoë sur la rivière.",
    longDescription:
      "Descendez l'Aveyron en canoë et découvrez les paysages magnifiques des gorges. Idéal pour tous niveaux.",
    icon: "🚣",
    iconComponent: <Waves className="w-8 h-8" />,
    address: "82140 Saint-Antonin-Noble-Val",
    category: "Nautique",
    difficulty: "Facile",
    duration: "1-4h",
    minAge: "6 ans",
    maxParticipants: "∞",
    rating: 4.6,
    distance: "Direct",
    tags: ["Nature", "Famille", "Détente"],
    features: [
      "Accès direct",
      "Plusieurs parcours",
      "Matériel disponible",
      "Vue imprenable",
    ],
    color: "from-manjocarn-sage-green to-manjocarn-mint-green",
  },
  {
    id: 3,
    name: "Randonnée",
    description:
      "Découvrez des sentiers de randonnée pittoresques autour de Saint-Antonin-Noble-Val.",
    longDescription:
      "Explorez les sentiers balisés avec des vues panoramiques sur la vallée. De la balade familiale à la randonnée sportive.",
    icon: "🥾",
    iconComponent: <Mountain className="w-8 h-8" />,
    website:
      "https://www.alltrails.com/fr/france/tarn-et-garonne/saint-antonin-noble-val",
    address: "82140 Saint-Antonin-Noble-Val",
    category: "Randonnée",
    difficulty: "Variable",
    duration: "1-6h",
    minAge: "Tout âge",
    maxParticipants: "∞",
    rating: 4.7,
    distance: "0-20km",
    tags: ["Nature", "Sport", "Panorama"],
    features: [
      "Sentiers balisés",
      "Plusieurs niveaux",
      "Vues panoramiques",
      "Gratuit",
    ],
    color: "from-manjocarn-forest-green to-manjocarn-sage-green",
  },
  {
    id: 4,
    name: "Accrobranche",
    description:
      "Aventurez-vous dans les arbres pour une expérience accrobranche inoubliable.",
    longDescription:
      "Parc aventure avec parcours dans les arbres, tyroliennes et défis pour tous les niveaux. Sensations garanties !",
    icon: "🌲",
    iconComponent: <TreePine className="w-8 h-8" />,
    phone: "+33 7 60 35 53 14",
    website: "https://www.parc-aventure-aveyron.com/",
    address: "Lieu-Dit Turlande, 82140 Saint-Antonin-Noble-Val",
    category: "Aventure",
    difficulty: "Moyen",
    duration: "2-4h",
    minAge: "4 ans",
    maxParticipants: "30",
    rating: 4.5,
    distance: "1km",
    tags: ["Hauteur", "Défi", "Famille"],
    features: [
      "Parcours variés",
      "Sécurité maximale",
      "Dès 4 ans",
      "Équipe sympa",
    ],
    color: "from-manjocarn-pine-green to-manjocarn-forest-green",
  },
  {
    id: 5,
    name: "Trail des 3 rocs",
    description:
      "Testez vos compétences sur le parcours Trail des 3 rocs, un défi sportif unique.",
    longDescription:
      "Course nature sur sentiers avec des vues exceptionnelles. Plusieurs distances disponibles pour tous niveaux.",
    icon: "🏃",
    iconComponent: <Compass className="w-8 h-8" />,
    website: "https://www.traildestroisrocs.fr/fr",
    category: "Sport",
    difficulty: "Difficile",
    duration: "1-4h",
    minAge: "16 ans",
    maxParticipants: "500",
    rating: 4.9,
    distance: "5-15km",
    tags: ["Course", "Défi", "Compétition"],
    features: [
      "Plusieurs distances",
      "Chronométrage",
      "Médaille",
      "Ravitaillement",
    ],
    color: "from-manjocarn-rusty-orange to-manjocarn-sunset-orange",
  },
  {
    id: 6,
    name: "Escapade Mystère",
    description:
      "Partez pour une aventure mystérieuse en Aveyron avec des activités surprenantes.",
    longDescription:
      "Activités outdoor originales et mystérieuses dans les plus beaux sites de l'Aveyron. Surprise garantie !",
    icon: "🗺️",
    iconComponent: <Calendar className="w-8 h-8" />,
    phone: "06 98 90 85 29",
    website: "https://www.aquobapla.fr/",
    category: "Mystère",
    difficulty: "Variable",
    duration: "3-8h",
    minAge: "10 ans",
    maxParticipants: "15",
    rating: 4.4,
    distance: "Variable",
    tags: ["Mystère", "Aventure", "Original"],
    features: [
      "Activité unique",
      "Surprise totale",
      "Guide expert",
      "Souvenirs",
    ],
    color: "from-manjocarn-earth-brown to-manjocarn-bark-brown",
  },
];

const categories = [
  { id: "all", label: "Toutes", icon: "🎪", count: activitiesData.length },
  {
    id: "Aventure",
    label: "Aventure",
    icon: "🧗",
    count: activitiesData.filter((a) => a.category === "Aventure").length,
  },
  {
    id: "Nautique",
    label: "Nautique",
    icon: "🌊",
    count: activitiesData.filter((a) => a.category === "Nautique").length,
  },
  {
    id: "Randonnée",
    label: "Randonnée",
    icon: "🥾",
    count: activitiesData.filter((a) => a.category === "Randonnée").length,
  },
  {
    id: "Sport",
    label: "Sport",
    icon: "🏃",
    count: activitiesData.filter((a) => a.category === "Sport").length,
  },
  {
    id: "Mystère",
    label: "Mystère",
    icon: "🗺️",
    count: activitiesData.filter((a) => a.category === "Mystère").length,
  },
];

const ActivitiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showDetails, setShowDetails] = useState(null);

  const filteredActivities =
    selectedCategory === "all"
      ? activitiesData
      : activitiesData.filter(
          (activity) => activity.category === selectedCategory
        );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Facile":
        return "text-manjocarn-mint-green";
      case "Moyen":
        return "text-manjocarn-golden-yellow";
      case "Difficile":
        return "text-manjocarn-sunset-orange";
      case "Variable":
        return "text-manjocarn-sage-green";
      default:
        return "text-manjocarn-dark-gray";
    }
  };

  return (
    <Section
      id="activities"
      className="bg-gradient-to-br from-manjocarn-background via-manjocarn-sand-beige/20 to-manjocarn-mint-green/15 relative overflow-hidden"
      withDecorations
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-16 text-manjocarn-sage-green/15 text-8xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          🎯
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 text-manjocarn-golden-yellow/20 text-6xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          🚣
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
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
              <Target className="mr-3 text-manjocarn-forest-green" size={32} />
            </motion.div>
            <span className="text-lg font-semibold text-manjocarn-dark-gray">
              Aventures
            </span>
          </motion.div>

          <h2 className="font-playfair text-4xl md:text-6xl text-gradient-nature mb-6">
            Activités aux Alentours
          </h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-manjocarn-sage-green via-manjocarn-golden-yellow to-manjocarn-sunset-orange mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <p className="mt-6 text-lg text-manjocarn-dark-gray max-w-3xl mx-auto leading-relaxed">
            Découvrez un territoire riche en activités outdoor, parfait pour
            combiner détente au Manjocarn et aventures nature.
          </p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 md:px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-forest-green text-manjocarn-sand-beige shadow-nature-lg scale-105"
                  : "card-nature text-manjocarn-dark-gray hover:shadow-nature"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg md:text-xl mr-2">{category.icon}</span>
              <span className="text-sm md:text-base">{category.label}</span>
              <span className="ml-2 text-xs bg-manjocarn-golden-yellow/30 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grille des activités */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          key={selectedCategory}
        >
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="card-nature rounded-2xl overflow-hidden hover:shadow-nature-lg transition-all duration-300 group relative"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              onMouseEnter={() => setShowDetails(activity.id)}
              onMouseLeave={() => setShowDetails(null)}
            >
              {/* Badge catégorie */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`bg-gradient-to-r ${activity.color} text-white text-xs px-3 py-1 rounded-full font-bold shadow-warm`}
                >
                  {activity.category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 z-10 flex items-center bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                <Star
                  size={12}
                  className="mr-1 fill-yellow-400 text-yellow-400"
                />
                {activity.rating}
              </div>

              {/* Image placeholder */}
              <div
                className={`h-48 bg-gradient-to-r ${activity.color} relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showDetails === activity.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center text-sm">
                    <MapPin size={14} className="mr-1" />
                    {activity.distance}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-white text-6xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {activity.icon}
                </motion.div>
              </div>

              <div className="p-6">
                {/* En-tête de l'activité */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-bold text-manjocarn-dark-gray mb-1 group-hover:text-gradient-nature transition-all duration-300">
                      {activity.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-manjocarn-dark-gray/70">
                      <span
                        className={`font-medium ${getDifficultyColor(
                          activity.difficulty
                        )}`}
                      >
                        {activity.difficulty}
                      </span>
                      <span className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {activity.duration}
                      </span>
                      <span className="flex items-center">
                        <Users size={12} className="mr-1" />
                        {activity.minAge}+
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-manjocarn-dark-gray/80 text-sm leading-relaxed mb-4 min-h-[3rem]">
                  {activity.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {activity.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-manjocarn-mint-green/30 text-manjocarn-forest-green text-xs px-3 py-1 rounded-full font-medium border border-manjocarn-sage-green/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Informations de contact */}
                <div className="space-y-2 mb-4">
                  {activity.phone && (
                    <div className="flex items-center text-sm text-manjocarn-dark-gray">
                      <Phone
                        size={14}
                        className="mr-2 text-manjocarn-forest-green"
                      />
                      <a
                        href={`tel:${activity.phone}`}
                        className="hover:underline"
                      >
                        {activity.phone}
                      </a>
                    </div>
                  )}

                  {activity.address && (
                    <div className="flex items-center text-sm text-manjocarn-dark-gray">
                      <MapPin
                        size={14}
                        className="mr-2 text-manjocarn-forest-green"
                      />
                      <span className="truncate">{activity.address}</span>
                    </div>
                  )}
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-2">
                  {activity.website && (
                    <motion.a
                      href={activity.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-gradient-to-r ${activity.color} text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:shadow-warm transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={14} className="inline mr-1" />
                      Site web
                    </motion.a>
                  )}

                  <motion.button
                    onClick={() => setSelectedActivity(activity)}
                    className="flex-1 border-2 border-manjocarn-sage-green text-manjocarn-forest-green text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-manjocarn-sage-green hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Détails
                  </motion.button>
                </div>

                {/* Caractéristiques détaillées (visible au survol) */}
                <motion.div
                  className="mt-4 pt-4 border-t border-manjocarn-sage-green/20"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: showDetails === activity.id ? 1 : 0,
                    height: showDetails === activity.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-semibold text-manjocarn-forest-green mb-2 text-sm">
                    Points forts :
                  </h4>
                  <div className="space-y-1">
                    {activity.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-manjocarn-dark-gray"
                      >
                        <span className="w-1.5 h-1.5 bg-manjocarn-sage-green rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal détails d'activité */}
        {selectedActivity && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedActivity(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header du modal */}
              <div
                className={`bg-gradient-to-r ${selectedActivity.color} text-white p-6 flex justify-between items-center`}
              >
                <div>
                  <h2 className="font-playfair text-2xl font-bold mb-2">
                    {selectedActivity.name}
                  </h2>
                  <div className="flex items-center gap-4 text-sm">
                    <span>{selectedActivity.category}</span>
                    <span className="flex items-center">
                      <Star size={14} className="mr-1 fill-current" />
                      {selectedActivity.rating}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="text-white hover:scale-110 transition-transform"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Contenu du modal */}
              <div className="p-6">
                <p className="text-manjocarn-dark-gray leading-relaxed mb-6">
                  {selectedActivity.longDescription}
                </p>

                {/* Informations détaillées */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-manjocarn-forest-green mb-3">
                      Informations pratiques
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Difficulté :</span>
                        <span
                          className={getDifficultyColor(
                            selectedActivity.difficulty
                          )}
                        >
                          {selectedActivity.difficulty}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Durée :</span>
                        <span>{selectedActivity.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Âge minimum :</span>
                        <span>{selectedActivity.minAge}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Participants max :</span>
                        <span>{selectedActivity.maxParticipants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Distance :</span>
                        <span>{selectedActivity.distance}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-manjocarn-forest-green mb-3">
                      Points forts
                    </h3>
                    <div className="space-y-2">
                      {selectedActivity.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-manjocarn-sage-green rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact et actions */}
                <div className="border-t pt-6">
                  <div className="flex flex-wrap gap-4">
                    {selectedActivity.phone && (
                      <a
                        href={`tel:${selectedActivity.phone}`}
                        className="btn-nature flex items-center"
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
                        className="btn-warm flex items-center"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Site web
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

export default ActivitiesSection;
