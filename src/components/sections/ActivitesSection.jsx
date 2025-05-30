import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Globe, ExternalLink } from "lucide-react";
import ScrollToTop from "../ScrollToTop";

const ActivitesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const activities = [
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
      icon: "🛶",
      phone: "",
      website: "",
      address: "82140 Saint-Antonin-Noble-Val",
    },
    {
      name: "Randonnée",
      description:
        "Découvrez des sentiers de randonnée pittoresques autour de Saint-Antonin-Noble-Val",
      icon: "🥾",
      website:
        "https://www.alltrails.com/fr/france/tarn-et-garonne/saint-antonin-noble-val",
      address: "82140 Saint-Antonin-Noble-Val",
    },
    {
      name: "Accrobranche",
      description: "Aventurez-vous à 1 km pour l'accrobranche.",
      icon: "🌳",
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
      icon: "🎉",
      website: "https://www.mairie-penne-tarn.fr/association-f332-.html",
    },
    {
      name: "École de Penne",
      description: "Informez-vous sur l'école primaire de Penne.",
      icon: "🏫",
      phone: "05 53 41 22 52",
      address: "22 Rue Jean Moulin, 47140 Penne-d'Agenais",
    },
  ];

  return (
    <section
      id="activites"
      className="scroll-section bg-gradient-to-br from-peach/30 via-background-color to-forest-green/15 py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Titre principal */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-5xl font-playfair text-forest-green mb-6 relative">
              Activités Aux Alentours
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pale-gold rounded-full"></div>
            </h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Profitez de votre séjour pour découvrir les nombreuses activités
              de la région
            </p>
          </motion.div>

          {/* Grille des activités */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pale-gold/20 hover:shadow-xl transition-all duration-300"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  rotateY: 5,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Header de la carte */}
                <div className="text-center mb-4">
                  <motion.div
                    className="text-4xl mb-3"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {activity.icon}
                  </motion.div>
                  <h3 className="text-xl font-playfair text-forest-green font-semibold">
                    {activity.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-dark-gray text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>

                {/* Informations de contact */}
                <div className="space-y-2">
                  {activity.phone && (
                    <motion.div
                      className="flex items-center text-sm text-dark-gray hover:text-forest-green transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <Phone className="w-4 h-4 mr-2 text-forest-green flex-shrink-0" />
                      <a
                        href={`tel:${activity.phone}`}
                        className="hover:underline"
                      >
                        {activity.phone}
                      </a>
                    </motion.div>
                  )}

                  {activity.website && (
                    <motion.div
                      className="flex items-center text-sm text-dark-gray hover:text-rusty-orange transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <Globe className="w-4 h-4 mr-2 text-rusty-orange flex-shrink-0" />
                      <a
                        href={activity.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center"
                      >
                        Site web
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </motion.div>
                  )}

                  {activity.address && (
                    <motion.div
                      className="flex items-start text-sm text-dark-gray"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin className="w-4 h-4 mr-2 text-forest-green flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{activity.address}</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Information supplémentaire */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-forest-green/10 to-peach/20 rounded-2xl p-6 md:p-8 text-center shadow-lg border border-pale-gold/30"
          >
            <div className="space-y-4">
              <div className="flex justify-center space-x-2 text-3xl mb-4">
                <span>🏞️</span>
                <span>🚴</span>
                <span>🎯</span>
                <span>🛶</span>
              </div>
              <h4 className="text-xl md:text-2xl font-playfair text-forest-green mb-4">
                Un séjour riche en découvertes
              </h4>
              <p className="text-dark-gray leading-relaxed max-w-2xl mx-auto">
                La région de Saint-Antonin-Noble-Val regorge d'activités pour
                tous les goûts et tous les âges. Que vous soyez amateur de
                sensations fortes ou de balades tranquilles, vous trouverez
                votre bonheur !
              </p>
            </div>
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

export default ActivitesSection;
