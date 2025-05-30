import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ScrollToTop from "../ScrollToTop";

const CarteSection = () => {
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

  const menuItems = [
    // Entrées
    {
      name: "Frites",
      price: "5",
      description: "Frites maison croustillantes",
      type: "Entrée",
    },
    {
      name: "Soupe",
      price: "6",
      description: "Soupe à l'oignon et au fromage",
      type: "Entrée",
    },
    {
      name: "Paté",
      price: "7",
      description: "Paté de pintade 90g",
      type: "Entrée",
    },
    {
      name: "Rillette",
      price: "12",
      description: "Rillette d'oie",
      type: "Entrée",
    },
    {
      name: "Trio de paté",
      price: "14",
      description:
        "Trio de paté de porc noir, piment d'espelette, rillette porc canard",
      type: "Entrée",
    },
    // Plats
    {
      name: "Saucisse",
      price: "12",
      description: "Saucisse grillée servie avec frite maison et salade",
      type: "Plat",
    },
    {
      name: "Cassoulet",
      price: "17.5",
      description: "Plat traditionnel du Sud-Ouest avec haricots et saucisse",
      type: "Plat",
    },
    {
      name: "1/2 Magret",
      price: "18",
      description: "Demi-magret de canard, servi avec des frites maison",
      type: "Plat",
    },
    {
      name: "Saucisse Piment",
      price: "18",
      description: "Saucisse porc noir au piment d'espelette",
      type: "Plat",
    },
    {
      name: "Confit",
      price: "20",
      description: "Cuisse de canard confit, accompagné de frites maison",
      type: "Plat",
    },
    {
      name: "Tartare",
      price: "20",
      description: "Tartare de bœuf assaisonné, servi avec des frites maison",
      type: "Plat",
    },
    {
      name: "Maxi saucisse",
      price: "20",
      description: "Salade composée, frite et saucisse en grosse portion",
      type: "Plat",
    },
    {
      name: "Magret",
      price: "25",
      description: "Magret de canard, servi avec des frites maison",
      type: "Plat",
    },
    {
      name: "Maxi Confit",
      price: "30",
      description: "Salade composée, frite et confit en grosse portion",
      type: "Plat",
    },
    {
      name: "Maxi Carne",
      price: "35",
      description:
        "Salade composée, frite, saucisse puis magret ou confit au choix",
      type: "Plat",
    },
    // Salades
    {
      name: "Salade chèvre",
      price: "16",
      description: "Salade fraîche avec fromage de chèvre et vinaigrette",
      type: "Salade",
    },
    {
      name: "Salade Végé",
      price: "16",
      description: "Salade végétarienne colorée avec des légumes frais",
      type: "Salade",
    },
    // Menu enfant
    {
      name: "Menu enfant",
      price: "8.5",
      description: "Saucisse de Toulouse, frite maison, salade, glace",
      type: "Enfant",
    },
    {
      name: "Menu enfant complet",
      price: "9.5",
      description: "Saucisse de Toulouse, frite maison, salade, sirop, glace",
      type: "Enfant",
    },
    // Desserts
    {
      name: "Dessert du moment",
      price: "6",
      description: "Dessert du moment",
      type: "Dessert",
    },
    {
      name: "Dessert spécial",
      price: "7",
      description: "Dessert du moment",
      type: "Dessert",
    },
    {
      name: "Glaces",
      price: "5",
      description: "Glaces artisanales",
      type: "Dessert",
    },
  ];

  const menuTypes = [...new Set(menuItems.map((item) => item.type))];

  const filteredMenu = (type) => {
    return menuItems.filter((item) => item.type === type);
  };

  const getTypeColor = (type) => {
    const colors = {
      Entrée: "bg-pale-gold/20 border-pale-gold/30",
      Plat: "bg-forest-green/10 border-forest-green/20",
      Salade: "bg-peach/20 border-peach/30",
      Enfant: "bg-rusty-orange/10 border-rusty-orange/20",
      Dessert: "bg-dark-gray/10 border-dark-gray/20",
    };
    return colors[type] || "bg-gray-100 border-gray-200";
  };

  const getTypeIcon = (type) => {
    const icons = {
      Entrée: "🥗",
      Plat: "🍖",
      Salade: "🥬",
      Enfant: "👶",
      Dessert: "🍰",
    };
    return icons[type] || "🍽️";
  };

  return (
    <section
      id="carte"
      className="scroll-section bg-gradient-to-br from-pale-gold/20 via-background-color to-peach/10 py-16 md:py-24"
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
            <h2 className="text-3xl md:text-5xl font-playfair text-rusty-orange mb-6 relative">
              Carte de Manjocarn
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pale-gold rounded-full"></div>
            </h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Découvrez notre carte simple et savoureuse, préparée avec des
              produits frais du terroir
            </p>
          </motion.div>

          {/* Menu par catégories */}
          <motion.div
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {menuTypes.map((type) => (
              <motion.div
                key={type}
                variants={itemVariants}
                className={`${getTypeColor(
                  type
                )} rounded-2xl p-6 shadow-lg border backdrop-blur-sm`}
              >
                <h3 className="text-xl md:text-2xl font-playfair text-forest-green mb-6 flex items-center">
                  <span className="text-2xl mr-3">{getTypeIcon(type)}</span>
                  {type}
                </h3>

                <div className="space-y-4">
                  {filteredMenu(type).map((item, index) => (
                    <motion.div
                      key={`${type}-${index}`}
                      className="border-b border-current/20 pb-3 last:border-b-0 last:pb-0 hover:bg-white/30 hover:rounded-lg hover:p-2 hover:-m-2 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-dark-gray text-base md:text-lg">
                          {item.name}
                        </h4>
                        <span className="bg-forest-green text-pale-gold px-3 py-1 rounded-full text-sm font-bold shadow-md ml-2 flex-shrink-0">
                          {item.price}€
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-dark-gray/80 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note sur les produits */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-pale-gold/30"
          >
            <p className="text-dark-gray italic">
              <span className="text-xl mr-2">🌱</span>
              Tous nos plats sont préparés avec des produits frais selon les
              disponibilités du moment
            </p>
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

export default CarteSection;
