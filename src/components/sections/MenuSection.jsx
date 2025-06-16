// src/components/sections/MenuSection.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { ChefHat, Star, Utensils } from "lucide-react";
import Section from "../ui/Section";

// Données du menu simplifiées
const menuData = {
  entrees: [
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
  plats: [
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
      name: "Magret",
      price: "25",
      description: "Magret de canard avec frites",
      icon: "🍖",
      tags: ["Premium", "Canard", "Chef"],
      popular: true,
    },
    {
      name: "Confit",
      price: "20",
      description: "Cuisse de canard confit avec frites",
      icon: "🦆",
      tags: ["Confit", "Tradition", "Généreux"],
      popular: true,
    },
  ],
  desserts: [
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
      price: "7",
      description: "Dessert du moment",
      icon: "🎂",
      tags: ["Premium", "Chef", "Surprise"],
      popular: false,
    },
  ],
};

const categories = [
  { id: "entrees", label: "Entrées", icon: "🥗" },
  { id: "plats", label: "Plats", icon: "🍽️" },
  { id: "desserts", label: "Desserts", icon: "🍰" },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("plats");

  return (
    <Section id="menu" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center mb-6 bg-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-md">
            <ChefHat className="mr-3 text-manjocarn-forest-green" size={28} />
            <span className="text-base md:text-lg font-semibold text-manjocarn-dark-gray">
              Notre Cuisine
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl text-gradient-nature mb-6">
            La Carte du Manjocarn
          </h2>

          <p className="mt-6 text-base md:text-lg text-manjocarn-dark-gray max-w-2xl mx-auto leading-relaxed">
            Découvrez nos spécialités du terroir, préparées avec passion et des
            produits frais du coin.
          </p>
        </motion.div>

        {/* Navigation catégories */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            const itemCount = menuData[category.id]?.length || 0;

            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 text-sm md:text-base ${
                  isActive
                    ? "bg-manjocarn-forest-green text-black shadow-nature-lg scale-105"
                    : "bg-white text-manjocarn-dark-gray hover:bg-manjocarn-sage-green/20 border border-manjocarn-sage-green/30"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg md:text-xl mr-2">{category.icon}</span>
                {category.label}
                <span className="ml-2 text-xs bg-manjocarn-golden-yellow/40 px-2 py-1 rounded-full">
                  {itemCount}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grille des plats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {menuData[activeCategory]?.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-nature-lg transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              {/* Badge populaire */}
              {item.popular && (
                <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-manjocarn-sunset-orange text-white text-xs px-2 md:px-3 py-1 rounded-full font-bold flex items-center">
                  <Star size={10} className="mr-1" fill="currentColor" />
                  Popular
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center flex-1">
                  <span className="text-2xl md:text-4xl mr-3 md:mr-4">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-manjocarn-dark-gray mb-1">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="bg-manjocarn-forest-green text-white px-3 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl font-bold text-base md:text-lg ml-2">
                  {item.price}€
                </div>
              </div>

              {/* Description */}
              <p className="text-manjocarn-dark-gray/80 text-sm md:text-base leading-relaxed mb-4 min-h-[2.5rem] md:min-h-[3rem]">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-manjocarn-mint-green/30 text-manjocarn-forest-green text-xs px-2 md:px-3 py-1 rounded-full font-medium border border-manjocarn-sage-green/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Recommandation chef */}
              {item.popular && (
                <div className="mt-4 flex items-center text-manjocarn-sunset-orange text-xs md:text-sm font-medium">
                  <Utensils size={14} className="mr-2" />
                  Recommandé par le chef
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Note informative */}
        <motion.div
          className="mt-12 md:mt-16 text-center bg-white rounded-xl md:rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-3xl md:text-4xl mb-4">👨‍🍳</div>
          <h3 className="text-xl md:text-2xl text-manjocarn-forest-green mb-4 font-bold">
            Cuisine du Terroir
          </h3>
          <p className="text-manjocarn-dark-gray leading-relaxed text-sm md:text-base">
            Tous nos plats sont préparés avec des{" "}
            <span className="font-semibold text-manjocarn-forest-green">
              produits frais du coin
            </span>
            . Nous travaillons selon les disponibilités du moment pour vous
            offrir une cuisine authentique et savoureuse dans l'esprit
            guinguette.
          </p>

          <div className="mt-6 inline-flex items-center text-manjocarn-forest-green font-medium text-sm md:text-base">
            <span className="mr-2">🌿</span>
            Produits locaux • Cuisine maison • Selon saison
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default MenuSection;
