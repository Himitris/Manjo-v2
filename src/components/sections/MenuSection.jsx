// src/components/sections/MenuSection.jsx
import { motion } from "framer-motion";
import { useState, memo } from "react";
import { ChefHat, Star, Utensils, Salad, Beef, IceCream } from "lucide-react";
import Section from "../ui/Section";

// Données du menu simplifiées
const menuData = {
  entrees: [
    {
      name: "Frites",
      price: "5",
      description: "Frites maison croustillantes",
      tags: ["Fait maison", "Croustillant"],
      popular: false,
    },
    {
      name: "Soupe",
      price: "6",
      description: "Soupe à l'oignon et au fromage",
      tags: ["Réconfortant", "Fromage"],
      popular: false,
    },
    {
      name: "Paté",
      price: "7",
      description: "Paté de pintade 90g",
      tags: ["Terroir", "Artisanal"],
      popular: false,
    },
    {
      name: "Rillette",
      price: "12",
      description: "Rillette d'oie",
      tags: ["Spécialité", "Sud-Ouest"],
      popular: true,
    },
    {
      name: "Trio de paté",
      price: "14",
      description:
        "Trio de paté de porc noir, piment d'espelette, rillette porc canard",
      tags: ["Dégustation", "Piment", "Généreux"],
      popular: true,
    },
  ],
  plats: [
    {
      name: "Menu enfant",
      price: "8.5",
      description: "Saucisse, frites, salade, glace",
      tags: ["Enfant", "Complet"],
      popular: false,
    },
    {
      name: "Saucisse",
      price: "12",
      description: "Saucisse grillée avec frites et salade",
      tags: ["Grillée", "Classique"],
      popular: false,
    },
    {
      name: "Cassoulet",
      price: "17.5",
      description: "Plat traditionnel du Sud-Ouest",
      tags: ["Traditionnel", "Sud-Ouest", "Mijoté"],
      popular: true,
    },
    {
      name: "Magret",
      price: "25",
      description: "Magret de canard avec frites",
      tags: ["Premium", "Canard", "Chef"],
      popular: true,
    },
    {
      name: "Confit",
      price: "20",
      description: "Cuisse de canard confit avec frites",
      tags: ["Confit", "Tradition", "Généreux"],
      popular: true,
    },
  ],
  desserts: [
    {
      name: "Glaces",
      price: "5",
      description: "Glaces artisanales",
      tags: ["Artisanal", "Rafraîchissant"],
      popular: true,
    },
    {
      name: "Dessert",
      price: "7",
      description: "Dessert du moment",
      tags: ["Premium", "Chef", "Surprise"],
      popular: false,
    },
  ],
};

const categories = [
  { id: "entrees", label: "Entrées", Icon: Salad },
  { id: "plats", label: "Plats", Icon: Beef },
  { id: "desserts", label: "Desserts", Icon: IceCream },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("plats");

  return (
    <Section id="menu" className="py-8 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header responsive */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center mb-4 md:mb-6 bg-white px-4 md:px-8 py-3 md:py-4 rounded-full shadow-md">
            <ChefHat
              className="mr-2 md:mr-3 text-manjocarn-forest-green"
              size={24}
            />
            <span className="text-sm md:text-lg font-semibold text-manjocarn-dark-gray">
              Notre Cuisine
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gradient-nature mb-4 md:mb-6 px-4">
            La Carte du Manjocarn
          </h2>

          <p className="mt-4 md:mt-6 text-sm md:text-lg text-manjocarn-dark-gray max-w-2xl mx-auto leading-relaxed px-4">
            Découvrez nos spécialités du terroir, préparées avec passion et des
            produits frais du coin.
          </p>
        </motion.div>

        {/* Navigation catégories responsive */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
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
                className={`flex items-center px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 border-2 ${
                  isActive
                    ? "bg-manjocarn-forest-green text-manjocarn-sand-beige border-manjocarn-forest-green shadow-nature-lg scale-105"
                    : "bg-white text-manjocarn-dark-gray hover:bg-manjocarn-sage-green/20 border-manjocarn-sage-green/30 hover:border-manjocarn-sage-green/50"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Voir la catégorie ${category.label}`}
              >
                <category.Icon className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.slice(0, 4)}</span>
                <span className="ml-1 md:ml-2 text-xs bg-manjocarn-golden-yellow/40 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full font-medium">
                  {itemCount}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grille des plats responsive */}
        <motion.div
          className="responsive-grid-menu"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {menuData[activeCategory]?.map((item, index) => (
            <motion.div
              key={index}
              className="menu-item bg-white rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-nature-lg transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              {/* Badge populaire */}
              {item.popular && (
                <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-manjocarn-sunset-orange text-white text-xs px-2 md:px-3 py-1 rounded-full font-bold flex items-center">
                  <Star size={8} className="mr-1" fill="currentColor" />
                  <span className="hidden sm:inline">Popular</span>
                  <span className="sm:hidden">★</span>
                </div>
              )}

              {/* Header responsive */}
              <div className="menu-item-header flex flex-col sm:flex-row sm:items-start justify-between mb-3 md:mb-4">
                <div className="flex-1 mb-2 sm:mb-0">
                  <h3 className="text-base md:text-xl font-bold text-manjocarn-dark-gray mb-1">
                    {item.name}
                  </h3>
                </div>

                <div className="menu-item-price bg-manjocarn-forest-green text-manjocarn-sand-beige px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl font-bold text-sm md:text-lg whitespace-nowrap">
                  {item.price}€
                </div>
              </div>

              {/* Description */}
              <p className="text-manjocarn-dark-gray/80 text-xs md:text-base leading-relaxed mb-3 md:mb-4 min-h-[2rem] md:min-h-[3rem]">
                {item.description}
              </p>

              {/* Tags responsive */}
              <div className="flex flex-wrap gap-2 mb-2">
                {item.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center bg-manjocarn-mint-green/30 text-manjocarn-forest-green text-xs px-3 py-1.5 rounded-full font-medium border border-manjocarn-sage-green/40 hover:bg-manjocarn-mint-green/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="inline-flex items-center bg-manjocarn-sage-green/20 text-manjocarn-forest-green text-xs px-3 py-1.5 rounded-full font-medium border border-manjocarn-sage-green/40">
                    +{item.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Recommandation chef */}
              {item.popular && (
                <div className="mt-3 md:mt-4 flex items-center text-manjocarn-sunset-orange text-xs md:text-sm font-medium">
                  <Utensils size={12} className="mr-1 md:mr-2 flex-shrink-0" />
                  <span className="hidden sm:inline">
                    Recommandé par le chef
                  </span>
                  <span className="sm:hidden">Recommandé</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Note informative responsive */}
        <motion.div
          className="mt-8 md:mt-16 text-center bg-white rounded-xl md:rounded-2xl p-4 md:p-8 max-w-4xl mx-auto shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <ChefHat className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto text-manjocarn-forest-green" />
          <h3 className="text-lg md:text-2xl text-manjocarn-forest-green mb-3 md:mb-4 font-bold">
            Cuisine du Terroir
          </h3>
          <p className="text-manjocarn-dark-gray leading-relaxed text-sm md:text-base px-2">
            Tous nos plats sont préparés avec des{" "}
            <span className="font-semibold text-manjocarn-forest-green">
              produits frais du coin
            </span>
            . Nous travaillons selon les disponibilités du moment pour vous
            offrir une cuisine authentique et savoureuse dans l'esprit
            guinguette.
          </p>

          <div className="mt-4 md:mt-6 inline-flex items-center text-manjocarn-forest-green font-medium text-xs md:text-base flex-wrap justify-center gap-2">
            <span>Produits locaux</span>
            <span className="hidden sm:inline">•</span>
            <span>Cuisine maison</span>
            <span className="hidden sm:inline">•</span>
            <span>Selon saison</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default memo(MenuSection);
