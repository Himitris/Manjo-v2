// src/components/sections/MenuSection.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { ChefHat, Star, Utensils } from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

// Données du menu avec icônes et tags
const menuData = {
  Entrées: [
    {
      name: "Frites",
      price: "5",
      description: "Frites maison croustillantes",
      icon: "🍟",
      tags: ["Fait maison", "Croustillant"],
      popular: false,
    },
    {
      name: "Soupe",
      price: "6",
      description: "Soupe à l'oignon et au fromage",
      icon: "🍲",
      tags: ["Réconfortant", "Fromage"],
      popular: false,
    },
    {
      name: "Paté",
      price: "7",
      description: "Paté de pintade 90g",
      icon: "🥓",
      tags: ["Terroir", "Artisanal"],
      popular: false,
    },
    {
      name: "Rillette",
      price: "12",
      description: "Rillette d'oie",
      icon: "🦆",
      tags: ["Spécialité", "Sud-Ouest"],
      popular: true,
    },
    {
      name: "Trio de paté",
      price: "14",
      description:
        "Trio de paté de porc noir, piment d'espelette, rillette porc canard",
      icon: "🍽️",
      tags: ["Dégustation", "Piment", "Généreux"],
      popular: true,
    },
  ],
  Plats: [
    {
      name: "Menu enfant",
      price: "8.5",
      description: "Saucisse, frites, salade, glace",
      icon: "🧒",
      tags: ["Enfant", "Complet"],
      popular: false,
    },
    {
      name: "Saucisse",
      price: "12",
      description: "Saucisse grillée avec frites et salade",
      icon: "🌭",
      tags: ["Grillée", "Classique"],
      popular: false,
    },
    {
      name: "Cassoulet",
      price: "17.5",
      description: "Plat traditionnel du Sud-Ouest",
      icon: "🫘",
      tags: ["Traditionnel", "Sud-Ouest", "Mijoté"],
      popular: true,
    },
    {
      name: "1/2 Magret",
      price: "18",
      description: "Demi-magret avec frites maison",
      icon: "🦆",
      tags: ["Canard", "Fait maison"],
      popular: false,
    },
    {
      name: "Saucisse Piment",
      price: "18",
      description: "Saucisse porc noir au piment d'espelette",
      icon: "🌶️",
      tags: ["Épicé", "Porc noir", "Espelette"],
      popular: true,
    },
    {
      name: "Salade chèvre",
      price: "16",
      description: "Salade fraîche avec fromage de chèvre",
      icon: "🥗",
      tags: ["Fraîche", "Chèvre", "Léger"],
      popular: false,
    },
    {
      name: "Salade Végé",
      price: "16",
      description: "Salade végétarienne avec légumes frais",
      icon: "🌱",
      tags: ["Végétarien", "Légumes", "Santé"],
      popular: false,
    },
    {
      name: "Tartare",
      price: "20",
      description: "Tartare de bœuf avec frites",
      icon: "🥩",
      tags: ["Bœuf", "Cru", "Classique"],
      popular: false,
    },
    {
      name: "Confit",
      price: "20",
      description: "Cuisse de canard confit avec frites",
      icon: "🦆",
      tags: ["Confit", "Tradition", "Généreux"],
      popular: true,
    },
    {
      name: "Magret",
      price: "25",
      description: "Magret de canard avec frites",
      icon: "🍖",
      tags: ["Premium", "Canard", "Chef"],
      popular: true,
    },
    {
      name: "Maxi saucisse",
      price: "20",
      description: "Salade composée, frites et saucisse en grosse portion",
      icon: "🍽️",
      tags: ["XXL", "Généreux", "Complet"],
      popular: false,
    },
    {
      name: "Maxi Confit",
      price: "30",
      description: "Salade composée, frites et confit en grosse portion",
      icon: "🍖",
      tags: ["XXL", "Premium", "Festin"],
      popular: true,
    },
    {
      name: "Maxi Carne",
      price: "35",
      description:
        "Salade composée, frites, saucisse puis magret ou confit au choix",
      icon: "👑",
      tags: ["XXXL", "Roi", "Au choix"],
      popular: true,
    },
  ],
  Desserts: [
    {
      name: "Glaces",
      price: "5",
      description: "Glaces artisanales",
      icon: "🍦",
      tags: ["Artisanal", "Rafraîchissant"],
      popular: true,
    },
    {
      name: "Dessert",
      price: "6",
      description: "Dessert du moment",
      icon: "🍰",
      tags: ["Surprise", "Fait maison"],
      popular: false,
    },
    {
      name: "Dessert premium",
      price: "7",
      description: "Dessert du moment",
      icon: "🎂",
      tags: ["Premium", "Chef", "Surprise"],
      popular: false,
    },
  ],
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Plats");
  const [hoveredItem, setHoveredItem] = useState(null);
  const categories = Object.keys(menuData);

  return (
    <Section
      id="menu"
      className="bg-gradient-to-br from-manjocarn-background via-manjocarn-sand-beige/20 to-manjocarn-mint-green/10 relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 text-manjocarn-sage-green/15 text-9xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          🍽️
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20 text-manjocarn-golden-yellow/20 text-7xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          👨‍🍳
        </motion.div>

        {/* Bulles décoratives */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-manjocarn-golden-yellow/10 rounded-full blur-xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-manjocarn-sage-green/10 rounded-full blur-2xl animate-float"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* En-tête avec style amélioré */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center mb-6 card-nature px-8 py-4 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <ChefHat className="mr-3 text-manjocarn-forest-green" size={32} />
            <span className="text-lg font-semibold text-manjocarn-dark-gray">
              Notre Cuisine
            </span>
          </motion.div>

          <h2 className="font-playfair text-4xl md:text-6xl text-gradient-nature mb-6">
            La Carte du Manjocarn
          </h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-manjocarn-sage-green via-manjocarn-golden-yellow to-manjocarn-sunset-orange mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <p className="mt-6 text-lg text-manjocarn-dark-gray max-w-2xl mx-auto leading-relaxed">
            Découvrez nos spécialités du terroir, préparées avec passion et des
            produits frais du coin.
          </p>
        </motion.div>

        {/* Navigation des catégories améliorée */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={fadeInUp}
        >
          {categories.map((category, index) => {
            const isActive = activeCategory === category;
            const icons = { Entrées: "🥗", Plats: "🍽️", Desserts: "🍰" };

            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-forest-green text-manjocarn-sand-beige shadow-nature-lg scale-105"
                    : "card-nature text-manjocarn-dark-gray hover:shadow-nature-lg"
                }`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Effet de brillance */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                )}

                <span className="relative z-10 flex items-center">
                  <span className="mr-2 text-xl">{icons[category]}</span>
                  {category}
                  <span className="ml-2 text-xs bg-manjocarn-golden-yellow/30 px-2 py-1 rounded-full">
                    {menuData[category].length}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grille des plats améliorée */}
        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={staggerContainer}
          key={activeCategory}
        >
          {menuData[activeCategory]?.map((item, index) => (
            <motion.div
              key={index}
              className="card-nature rounded-2xl p-6 hover:shadow-nature-lg transition-all duration-300 relative overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Badge populaire */}
              {item.popular && (
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-manjocarn-sunset-orange to-manjocarn-golden-yellow text-white text-xs px-3 py-1 rounded-full font-bold flex items-center shadow-warm"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <Star size={12} className="mr-1" fill="currentColor" />
                  Popular
                </motion.div>
              )}

              {/* Effet de brillance au survol */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-manjocarn-golden-yellow/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: hoveredItem === index ? "100%" : "-100%" }}
                transition={{ duration: 0.8 }}
              />

              <div className="relative z-10">
                {/* En-tête du plat */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <motion.span
                      className="text-4xl mr-4"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.span>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-manjocarn-dark-gray group-hover:text-gradient-nature transition-all duration-300">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    className="bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-forest-green text-manjocarn-sand-beige px-4 py-2 rounded-xl font-bold text-lg shadow-nature"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.price}€
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-manjocarn-dark-gray/80 text-sm leading-relaxed mb-4 min-h-[3rem]">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="bg-manjocarn-mint-green/30 text-manjocarn-forest-green text-xs px-3 py-1 rounded-full font-medium border border-manjocarn-sage-green/30"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.1 + 0.3 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(184, 212, 168, 0.5)",
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Indicateur de recommandation */}
                {item.popular && (
                  <motion.div
                    className="mt-4 flex items-center text-manjocarn-sunset-orange text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    <Utensils size={14} className="mr-2" />
                    Recommandé par le chef
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note informative */}
        <motion.div
          className="mt-16 text-center card-nature p-8 rounded-2xl max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <motion.div
            className="text-4xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            👨‍🍳
          </motion.div>
          <h3 className="font-playfair text-2xl text-gradient-nature mb-4">
            Cuisine du Terroir
          </h3>
          <p className="text-manjocarn-dark-gray leading-relaxed">
            Tous nos plats sont préparés avec des{" "}
            <span className="font-semibold text-manjocarn-forest-green">
              produits frais du coin
            </span>
            . Nous travaillons selon les disponibilités du moment pour vous
            offrir une cuisine authentique et savoureuse dans l'esprit
            guinguette.
          </p>

          <motion.div
            className="mt-6 inline-flex items-center text-manjocarn-forest-green font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <span className="mr-2">🌿</span>
            Produits locaux • Cuisine maison • Selon saison
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default MenuSection;
