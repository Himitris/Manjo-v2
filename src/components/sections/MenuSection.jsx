// src/components/sections/MenuSection.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

// Données du menu intégrées directement
const menuData = {
  Entrées: [
    { name: "Frites", price: "5", description: "Frites maison croustillantes" },
    {
      name: "Soupe",
      price: "6",
      description: "Soupe à l'oignon et au fromage",
    },
    { name: "Paté", price: "7", description: "Paté de pintade 90g" },
    { name: "Rillette", price: "12", description: "Rillette d'oie" },
    {
      name: "Trio de paté",
      price: "14",
      description:
        "Trio de paté de porc noir, piment d'espelette, rillette porc canard",
    },
  ],
  Plats: [
    {
      name: "Menu enfant",
      price: "8.5",
      description: "Saucisse, frites, salade, glace",
    },
    {
      name: "Saucisse",
      price: "12",
      description: "Saucisse grillée avec frites et salade",
    },
    {
      name: "Cassoulet",
      price: "17.5",
      description: "Plat traditionnel du Sud-Ouest",
    },
    {
      name: "1/2 Magret",
      price: "18",
      description: "Demi-magret avec frites maison",
    },
    {
      name: "Saucisse Piment",
      price: "18",
      description: "Saucisse porc noir au piment d'espelette",
    },
    {
      name: "Salade chèvre",
      price: "16",
      description: "Salade fraîche avec fromage de chèvre",
    },
    {
      name: "Salade Végé",
      price: "16",
      description: "Salade végétarienne avec légumes frais",
    },
    {
      name: "Tartare",
      price: "20",
      description: "Tartare de bœuf avec frites",
    },
    {
      name: "Confit",
      price: "20",
      description: "Cuisse de canard confit avec frites",
    },
    {
      name: "Magret",
      price: "25",
      description: "Magret de canard avec frites",
    },
    {
      name: "Maxi saucisse",
      price: "20",
      description: "Salade composée, frites et saucisse en grosse portion",
    },
    {
      name: "Maxi Confit",
      price: "30",
      description: "Salade composée, frites et confit en grosse portion",
    },
    {
      name: "Maxi Carne",
      price: "35",
      description:
        "Salade composée, frites, saucisse puis magret ou confit au choix",
    },
  ],
  Desserts: [
    { name: "Glaces", price: "5", description: "Glaces artisanales" },
    { name: "Dessert", price: "6", description: "Dessert du moment" },
    { name: "Dessert premium", price: "7", description: "Dessert du moment" },
  ],
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Plats");
  const categories = Object.keys(menuData);

  return (
    <Section id="menu" className="bg-white">
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
          Notre Carte
        </motion.h2>

        {/* Navigation des catégories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-manjocarn-forest-green text-manjocarn-cream shadow-lg scale-105"
                  : "bg-manjocarn-cream text-manjocarn-dark-gray hover:bg-manjocarn-pale-gold/50 hover:text-manjocarn-forest-green border border-manjocarn-pale-gold/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grille des plats */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          key={activeCategory} // Force re-render pour animation
        >
          {menuData[activeCategory]?.map((item, index) => (
            <motion.div
              key={index}
              className="bg-manjocarn-cream rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-manjocarn-pale-gold/50 hover:border-manjocarn-forest-green/50"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-manjocarn-dark-gray text-lg">
                  {item.name}
                </h3>
                <span className="bg-manjocarn-pale-gold text-manjocarn-forest-green px-3 py-1 rounded-full font-bold min-w-fit">
                  {item.price}€
                </span>
              </div>
              <p className="text-manjocarn-dark-gray/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default MenuSection;
